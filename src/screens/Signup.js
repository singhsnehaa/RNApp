import React, { Component } from 'react';
import {StyleSheet, Alert, Linking, TouchableOpacity, StatusBar,Dimensions, ImageBackground,TextInput,
  ActivityIndicator, ScrollView,Modal,} from 'react-native';
import {Container, Content, Header,Footer, FooterTab, Button,Icon, Text,Input, View, Form, Item, Toast, H2, H3,Body,Left,Right,} from 'native-base';
import AutoHeightImage from 'react-native-auto-height-image';
import {AppConfig} from '../config/AppConfig';
import {AppTheme} from '../theme/AppTheme';
import { setLogin, getLogin } from '../config/Auth';

const {width, height} = Dimensions.get('window');

class Signup extends Component {
  state = {
    name: '',
    mobile: '',
    email: '',
    password: '',
    error: null,
    loading: false,  
  };

  registerHandler = () => {
    let {name, mobile, email, password, loading,} = this.state;
    name = name.trim();
    mobile = mobile.trim();
    email = email.trim();
    password = password.trim(),

    this.setState({loading: true});

    const error = this.signUpValidator(name, mobile, email,password);

    if (Object.keys(error).length > 0) {
      this.setState({error});
    } else {
      let url = `${AppConfig.API}/?m=register&name=${name}&mobile=${mobile}&email=${email}&password=${password}`;
   
      try {
        fetch(url).then((res) => res.json())
          .then((resp) => {
            console.log("resp =>", resp);
            if (resp.status) {
              this.setState({loading: false});
              Toast.show({
                text: resp.message || 'Registered Succesfully',
                duration: 3000,
              });
              setLogin(resp.data);
              this.props.navigation.navigate('Profile');
             
            } else {
              Toast.show({
                text: resp.message || 'Something went wrong',
                duration: 3000,
              });
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  signUpValidator(name, mobile, email, password) {
    // email validator pattern
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const error = {};

    if (!name) {
      error.name = 'Full name required';
    }

    if (!mobile) {
      error.mobile = 'Mobile number required';
    } else if (mobile.length > 10 || mobile.length < 10) {
      error.mobile = 'Invalid mobile number';
    }

    if (!email) {
      error.email = 'Email is required';
    } else if (!pattern.test(String(email).toLowerCase())) {
      error.email = 'Invalid Email Id';
    }

    if (!password) {
        error.password = 'Password is required';
      } else if (password.length < 6) {
        error.password = 'The Password should be more than 6 characters';
      }

    return error;
  }


  render() {
    const {navigate, goBack} = this.props.navigation;
    const {error,loading , mobile } = this.state;
    return (
      <Container style={{backgroundColor:'green',}}>
        <StatusBar translucent={false} backgroundColor="#276749"></StatusBar>
        {/* <StatusBar translucent={false}></StatusBar> */}
        {/* <StatusBar hidden></StatusBar> */}
        <Content contentContainerStyle={styles.container}>              
          <AutoHeightImage source={{uri : 'https://placeimg.com/640/480/people'}}  width={width}/>
          <View style={{paddingHorizontal: 30, backgroundColor:'lightgreen',}}>
              
              <H2 style={styles.h2}>Create Account</H2>

              <View style={{...styles.inputItem, marginTop: 30, marginBottom:30}}>
                  <Text style={styles.label}>Enter Name</Text>
                  <TextInput style={styles.input}
                      onChangeText={(name) => this.setState({name})}
                  />
                    {error && error.name ? (
                        <Text style={styles.errText}>{error.name}</Text>
                    ) : null}
              </View>

              <View style={styles.inputItem}>
                  <Text style={styles.label}>Enter mobile number</Text>
                  <TextInput style={styles.input} keyboardType="number-pad"
                      onChangeText={(mobile) => this.setState({mobile: mobile})}
                  />

                  {error && error.mobile ? (
                      <Text style={styles.errText}>{error.mobile}</Text>
                  ) : null}
              </View>

              <View style={{...styles.inputItem, marginTop: 30}}>
                  <Text style={styles.label}>Enter Password</Text>
                  <TextInput style={styles.input} placeholder ="Atleast 6 character" secureTextEntry={true}
                      onChangeText={(password) => this.setState({password})}
                  />
                  {error && error.password ? (
                      <Text style={styles.errText}>{error.password}</Text>
                  ) : null}
              </View>

              <View style={{...styles.inputItem, marginTop: 30}}>
                  <Text style={styles.label}>Enter Email Id</Text>
                  <TextInput style={styles.input} keyboardType="email-address"
                      onChangeText={(email) => this.setState({email})}
                  />
                  {error && error.email ? (
                      <Text style={styles.errText}>{error.email}</Text>
                  ) : null}
              </View>

                <Button small rounded style={styles.lgBtn} onPress={this.registerHandler}>
                    <Text>{loading ? 'Submitting..' : 'Register'}</Text> 
                </Button>

              <TouchableOpacity onPress = {() => navigate('Login')} style={styles.forgetBox}>
                  <Text style={styles.forgetText}>Already have Account ?</Text>
                  <Text style={{...styles.forgetText, fontWeight: 'bold'}}>{' '}Sign In</Text>
              </TouchableOpacity>

                  
          </View>
            

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddeec8',
  },
  inputItem: {
      position: "relative",
  },
  h2:{
      textAlign: 'center', marginVertical:35, color: 'green',
  },
  termsMsg: {
      fontSize: 14,
      color: '#FFF'
  },
  label:{
      position: 'absolute', top: -10, zIndex: 9, left: 25,
      color: 'green', backgroundColor: "#ddeec8", paddingHorizontal: 6,
  },
  input:{
      height: 40, borderRadius: 6,  color: 'green', paddingHorizontal: 10,
      borderColor: 'green', backgroundColor: 'transparent', borderWidth: 1,
  },
  lgBtn: { 
      backgroundColor: 'green', justifyContent:'center',
      alignSelf:'center', marginTop: 30, width:200, 
  },
  forgetBox: {
      flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10,marginBottom:10,
  },
  forgetText: {
      color: 'green', fontSize: 14,
  },

  errText: {
      fontSize: 12,  color: 'red', alignSelf:'flex-end',
  },


});

export default Signup;
