import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
 Modal, TouchableWithoutFeedback
} from 'react-native';

import {Container, Header,Left,Right, Icon,Button,Content,} from 'native-base';
import avatar from '../assets/avatar.png';
import {Theme} from '../theme/AppTheme';

import {AppConfig} from '../config/AppConfig';
import { setLogin, getLogin,clearLogin } from '../config/Auth';

let win = Dimensions.get('window');

let size = win.width / 3;


export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //loading: true,
      userdata: null,
      loading: false,

      id: null,
      name: '-',
      mobile: '-',
      email: '-',
    };

  }


  componentDidMount() {
    getLogin().then(us => {
        this.setState({ 
            name: us.name,
            mobile: us.mobile,
            email: us.email,
            id: us.id,
        });
    });
}

 logout = () => {
  clearLogin();
  this.props.navigation.navigate('Login');
 }

  render() {
    const {loading, name, mobile, email,} = this.state;
    console.log('name',name);
   
    return (
      <Container style={{backgroundColor: Theme.DANGER_LIGHT}}>
        <Header androidStatusBarColor={Theme.DANGER} transparent>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon name="arrow-back"></Icon>
            </Button>
          </Left>
          <Right>
          <Button transparent onPress = {() => this.logout()}>
            <Text style={{color:'#fff'}}>Logout</Text>
            </Button>
          </Right>
        </Header>
        
        <Content>
          {loading ? (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <ActivityIndicator />
            </View>
          ) : (
            <>
              <View style={{padding: 20, flexDirection: 'row',}}>
                <View>
                  <Image source={require('../assets/avatar.png')} style={{width: 100, height: 100, borderRadius: 80}}></Image>
                </View>

                <View style={{paddingLeft: 15, flex: 1, }}>
                  <Text style={styles.Name}> {name || '-'} </Text>
                  <Text style={styles.Username}>{mobile || '-'}</Text>
                  <Text style={styles.Username}>{email || '-'}</Text>
                </View>
              </View>
            </>
          )}

            <View style={styles.ProfileColumn}>
                <Button
                  style={{
                    marginTop:-20,
                    borderWidth: 1,
                    borderColor: '#888',
                    paddingHorizontal: 20,
                    borderRadius: 3,
                  }}
                  transparent onPress={() => this.props.navigation.navigate('EditProfile')}>
                  <Text style={{color:'#FFF'}}>Edit profile</Text>
                </Button>
            </View>

          

          
        </Content>
       {/*  <AppFooter tab={5} {...this.props}></AppFooter> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Name: {
    fontSize: 20,
    color: '#FFF',
  },
  Username: {
    fontSize: 16,
    color: '#888',
  },
  Label_1: {
    fontSize: 18,
    color: '#EEE',
  },
  Label_2: {
    fontSize: 14,
    color: '#999',
  },
  Thumb: {
    width: size,
    height: size,
    borderWidth: 1,
    borderColor: '#000',
  },
  ProfileColumn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
  }


});
