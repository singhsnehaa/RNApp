import React from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import {Container, Header, Left, Title, Icon, Body, Right, Label, Content, Form, Item, Input, H2, Button, Toast} from 'native-base';
import { setLogin, getLogin } from '../config/Auth';
import AsyncStorage from '@react-native-community/async-storage';
const {width:SCREEN_WIDTH, height:SCREEN_HEIGHT} = Dimensions.get('window');

class GithubUserInput extends React.Component {
  state = {
    username: '',
  }


  getUser = () => {
  //  console.log(this.state.username);
    let {username} = this.state;
    if(username == '' || username.length <= 2){
      Toast.show({
        text:'User name should not be blank',
        duration: 3000
      });
    } else {
        this.props.navigation.navigate('GithubDetail', {username: username});
    }
  }

  render() {
    return (
      <Container>
        <Header noLeft>
          <Body>
            <Title>Github Form</Title>
          </Body>
        </Header>
        <Content padder contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
          <View style={styles.container}>
            <View>
              <Text style={{fontSize: 16, color: '#444', fontWeight: 'bold'}}>Get Github Details</Text>
              <TextInput
                style={styles.inputStyle}
                placeholder="username"
                onChangeText={u => this.setState({username:u})}
              />
              <Button full onPress= {() => this.getUser()}>
                <Text style={{color: '#fff'}}>Get Details</Text>
              </Button>
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
    height: 350,
    padding: 15,
    justifyContent: 'center',
    elevation: 2,
  },
  inputStyle: {
    marginTop: 5,
    marginBottom: 15,
    height: 45,
    borderColor: 'lightgray',
    backgroundColor: '#fff',
    borderWidth: 1,
    paddingLeft: 10
  }
});

export default GithubUserInput;