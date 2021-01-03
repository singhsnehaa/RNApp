import React from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  ScrollView,
  FlatList,
  ActivityIndicator
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Container, Header, Left, Title, Icon, Body, Right, Label, Content, Form, Item, Input, H3, Button, Toast} from 'native-base';
import { setLogin, getLogin } from '../config/Auth';
import Moment from 'react-moment';
import moment from 'moment';
import {connect} from 'react-redux';
import {userInfo, getUserRepo} from '../action/githubDetail';
import Repo from '../components/Repo';
const {width:SCREEN_WIDTH, height:SCREEN_HEIGHT} = Dimensions.get('window');

class GithubDetail extends React.Component {
  state = {
    isLoadingUserDetail: true,
    isLoadingRepo: true,
    isLoaingCommits: true,
    user: {},
    repos:[],
    commits: []

  }

  componentDidMount = () => {
    const {username} = this.props.route.params;
    this.loaduserDetails(username);
    this.loadUserRepos(username);
    this.props.userInfo(username);
    this.props.getUserRepo(username);
  }

  loaduserDetails = (username) => {
    try {
      const url = `https://api.github.com/users/${username}`;
      //console.log('url====', url);
      fetch(url).then((res) => res.json())
          .then(async (resp) => {
            // console.log('resp data====', resp);
            if(resp){
              this.setState({user: resp, isLoadingUserDetail: false});
          } else {
              Toast.show({
                text: 'User Details not available',
                duration:3000
              })
          }
          });
    } catch (error) {
      console.log(error);
    }
  }

  loadUserRepos = (username) => {
    try {
      const url = `https://api.github.com/users/${username}/repos`;
      //console.log('Repos url====', url);
      fetch(url).then((res) => res.json())
          .then(async (resp) => {
            //console.log('repo data====', resp);
            if(resp){
              this.setState({repos: resp, isLoadingRepo: false});
              this.getCommits(resp);
          } else {
              Toast.show({
                text: 'User Details not available',
                duration:3000
              })
          }
          });
    } catch (error) {
      console.log(error);
    }
  }

  getCommits = async repos => {
    let tempCommits = [];
    const repo = repos[0];
    const {username} = this.props.route.params;
    //console.log("repo:---", `https://api.github.com/repos/${username}/${repo.name}/commits`);


    const jsonResp = await fetch(`https://api.github.com/repos/${username}/${repo.name}/commits`);
    const data = await jsonResp.json();
    if (Array.isArray(data)) {
      // console.group("data =>", data);
      data && data.map(item => {
        tempCommits.push({
          message: item.commit.message,
          sha: item.sha
        })
        // console.log("item:- ", item.commit.message);
      });
      this.setState({commits: tempCommits, isLoaingCommits: false});
    }
    
  }


  render() {
    const {github} = this.props;

    console.log("github data [render] =>", github);
    const {user, repos, commits,isLoadingUserDetail, isLoadingRepo,isLoaingCommits} = this.state;
    const joined = moment(user.created_at).format('DD/MM/YYYY');
    return (
      <Container>
        <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                  <Icon name='chevron-left' type='FontAwesome5' style={{color:'#fff', fontSize:20}}></Icon>
              </Button>
          </Left>
          <Body>
            <Title>Github Detail</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content>
          <View style={styles.container}>
            {isLoadingUserDetail && (
              <ActivityIndicator color='blue' />
            )}
            {!isLoadingUserDetail && user && (
              <View style={styles.userDetail}>
                <AutoHeightImage
                  width={150}
                  height={200}
                  resizeMode="cover"
                  source={{uri: user.avatar_url}}
                  fallbackSource={{uri:'https://placeimg.com/640/480/people'}}
                />
                <View style={styles.userInfo}>
                  <H3>{user.name}</H3>
                  <Text style={{fontSize: 14, color: '#555'}}>{user.bio ? user.bio: '-'}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                    <View style={styles.follow}>
                      <Text style={{fontSize: 14}}>Following{' '}</Text>
                      <Text style={{fontSize: 14, fontWeight: 'bold'}}>{user.following}</Text>
                    </View>
                    <View style={{...styles.follow, marginLeft: 5}}>
                      <Text style={{fontSize: 14}}>Followers </Text>
                      <Text style={{fontSize: 14, fontWeight: 'bold'}}>{user.followers}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <Text style={{color: '#555'}}>Location :{' '}</Text>
                    <Text>{user.location ? user.location: '-'}</Text>
                  </View>
                  <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <Text style={{color: '#555'}}>Company :{' '}</Text>
                    <Text>{user.company ? user.company: '-'}</Text>
                  </View>
                  <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <Text style={{color: '#555'}}>Joined :{' '}</Text>
                     <Text>{joined}</Text>
                  </View>
                  <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <Text style={{color: '#555'}}>Public Repo :{' '}</Text>
                    <Text>{user.public_repos}</Text>
                  </View>
                </View>
              </View>
            )}
            
          </View>
          
          <View style={styles.repoWrapper}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#444', marginBottom: 15}}>Public Repositories</Text>
            {isLoadingRepo && (
              <ActivityIndicator color='blue' />
            )}

            {!isLoadingRepo && repos && (
               <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={repos}
                renderItem={({ item }) => <Repo {...item} />}
                keyExtractor={item => item.name}
              />
            )}
          </View>

          <View style={styles.commitWrapper}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#444', marginBottom: 15}}>Commit History</Text>
            {isLoaingCommits &&(
              <ActivityIndicator color='blue' />
            )}

            {!isLoaingCommits && commits.length == 0 && (
              <View>
                <Text>No commits available yet</Text>
              </View>
            )}

            {!isLoaingCommits && commits.length > 0 && (
              <FlatList
                data={commits}
                renderItem={({ item }) => {
                  // console.log(obj) // {item: {}, index: 1}
                  return(
                    <View style={styles.commit}>
                      <Text>{item.message}</Text>
                    </View>
                  )
                }}
                keyExtractor={item => item.sha}
              />
            )}   

           
            
            
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: '#faf8f9',
    height: 200,
    justifyContent: 'center',
    marginVertical: 10
  },
  userDetail: {
    flexDirection: 'row',
  },
  userInfo: {
    padding: 14
  },
  follow: {
    flexDirection: 'row',
    alignItems:'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRadius: 3
  },
  repoWrapper: {
    backgroundColor: '#faf8f9',
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  commitWrapper: {
    marginVertical: 10,
    borderColor:'lightgray',
    borderWidth: 1,
    backgroundColor: '#faf8f9',
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  commit: {
    borderColor: 'lightgray',
    borderWidth: 1,
    backgroundColor: '#fff',
    padding: 8,
    marginBottom: 10
  }
});


const mapStateToProps = state => ({
  github: state.github
})

export default connect(mapStateToProps, {userInfo, getUserRepo})(GithubDetail);