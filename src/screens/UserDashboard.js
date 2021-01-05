import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
  FlatList,
  ActivityIndicator
} from 'react-native';
import {Container, Content, List, Header,Title,ListItem, Left, Body, Right, Thumbnail, Icon, H2, Button, Toast} from 'native-base';
import { setLogin, getLogin } from '../config/Auth';


import {connect} from 'react-redux';

import {userList } from '../action/UserList'

const {width:SCREEN_WIDTH, height:SCREEN_HEIGHT} = Dimensions.get('window');

class UserDashboard extends React.Component {
  
  componentDidMount() {
    this.props.userList();
  }


  render() {
    const {users, refreshing} = this.props;
    return (
      <Container>
        <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                  <Icon name='chevron-left' type='FontAwesome5' style={{color:'#fff', fontSize:20}}></Icon>
              </Button>
          </Left>
          <Body>
            <Title>User List</Title>
          </Body>
          <Right></Right>
        </Header>

        {refreshing && (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="orange" />
            <Text>Loading..</Text>
          </View>
        )}
        {!refreshing && (
          <Content padder>
             <FlatList
                data={users}
                renderItem={({ item }) => {
                    return(
                        <List>
                            <ListItem avatar>
                            <Left>
                                <Thumbnail source={require('../assets/avatar.png')} />
                            </Left>
                            <Body>
                                <Text style={{fontWeight:'bold', fontSize:16}}>{item.name}</Text>
                                <Text note style={{color:'gray'}}><Icon name='email' type='Entypo' style={{fontSize:14}}></Icon> {item.email}</Text>
                                <Text note style={{color:'gray'}}><Icon name='smartphone' type='Feather' style={{fontSize:14}}></Icon>{item.phoneNo}</Text>
                            </Body>
                            <Right>
                                <Text note>Age: {item.age}</Text>
                            </Right>
                            </ListItem>
                        </List>
                    )
                  }}
                  keyExtractor={item => item.id.toString()}
              />
         
          </Content>
        )}
      </Container>
    )
  }
}

const styles = StyleSheet.create({

});



const mapStateToProps = state => ({
    users: state.userList.users,
    refreshing: state.userList.refreshing
  })
  
  export default connect(mapStateToProps, {userList})(UserDashboard);