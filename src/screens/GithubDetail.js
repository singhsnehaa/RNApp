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
import Repo from '../components/Repo';
const {width:SCREEN_WIDTH, height:SCREEN_HEIGHT} = Dimensions.get('window');

class GithubDetail extends React.Component {
  state = {
    repos: [
      {
        id: 1,
        name: 'Carmatec',
        description: 'Some description about this project goes here.',
        language: 'CSS',
        forks_count: 4,
        created_at: '12/12/2020'
      },
      {
        id: 2,
        name: 'Somethign else',
        description: 'Some description about this project goes here.',
        language: 'HTML',
        forks_count: 4,
        created_at: '12/12/2020'
      },
      {
        id: 3,
        name: 'Project 3',
        description: 'Some description about this project goes here.',
        language: 'HTML',
        forks_count: 4,
        created_at: '12/12/2020'
      }
    ]
  }
  render() {
    return (
      <Container>
        <Header noLeft>
          <Body>
            <Title>Github Detail</Title>
          </Body>
        </Header>
        <Content>
          <View style={styles.container}>
            <View style={styles.userDetail}>
              <AutoHeightImage
                width={150}
                height={200}
                resizeMode="cover"
                source={{uri: 'https://avatars3.githubusercontent.com/u/20426698'}}
                fallbackSource={require('../assets/dummy.png')}
              />
              <View style={styles.userInfo}>
                <H3>Arup Gorai</H3>
                <Text style={{fontSize: 14, color: '#555'}}>Frontend Developer</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                  <View style={styles.follow}>
                    <Text style={{fontSize: 14}}>Following{' '}</Text>
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>12</Text>
                  </View>
                  <View style={{...styles.follow, marginLeft: 5}}>
                    <Text style={{fontSize: 14}}>Followers</Text>
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>13</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                  <Text style={{color: '#555'}}>Location :{' '}</Text>
                  <Text>Ranchi</Text>
                </View>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                  <Text style={{color: '#555'}}>Company :{' '}</Text>
                  <Text>Origin IT</Text>
                </View>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                  <Text style={{color: '#555'}}>Joined :{' '}</Text>
                  <Text>12/12/2020</Text>
                </View>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                  <Text style={{color: '#555'}}>Public Repos :{' '}</Text>
                  <Text>14</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.repoWrapper}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#444', marginBottom: 15}}>Public Repositories</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={this.state.repos}
              renderItem={({ item }) => <Repo {...item} />}
              keyExtractor={item => item.name}
            />
          </View>
          <View style={styles.commitWrapper}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#444', marginBottom: 15}}>Commit History</Text>
            <View style={styles.commit}>
              <Text>Merge pull request #1 from lateral Lateral created project</Text>
            </View>
            <View style={styles.commit}>
              <Text>Commit msg Merge pull request #1 from lateral</Text>
            </View>
            <View style={styles.commit}>
              <Text>Merge pull request #1 from lateral</Text>
            </View>
            <View style={styles.commit}>
              <Text>Commit msg</Text>
            </View>
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

export default GithubDetail;