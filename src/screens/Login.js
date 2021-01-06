import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import {Container, Label, Content, Form, Item, Input, Icon, H2, Button, Toast} from 'native-base';
import { setLogin, getLogin } from '../config/Auth';
const {width:SCREEN_WIDTH, height:SCREEN_HEIGHT} = Dimensions.get('window');

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    loading: false,
    refreshing: true,
    error: null
  }
  submitHandler = () => {
    let { email, password, loading } = this.state;
    this.setState({loading: true});

    // trim usernaem & pass
    email = email.trim();
    password = password.trim();

    const err = this.signInValidator(email, password);
    if (Object.keys(err).length > 0) {
      this.setState({ error: err, loading: false });
    } else {
      const user = {email, password}
      if (email == 'test@test.com' && password == 'password') {
        setLogin(user)
          .then(() => {
            // this.props.navigation.nevigate('Signup');
            this.setState({loading: false});
          })
          .catch(er => er && console.log(er))
      } else {
        Toast.show({
          text: 'Invalid Email or Password',
          duration: 3000
        });
        this.setState({loading: false});
      }
    }
  }

  componentDidMount = () => {
    getLogin()
      .then(user => {
        if (user !== null) {
          // this.props.navigation.nevigate('Signup');
        } else {
          this.setState({refreshing: false});
        }
      })
      .catch(err => err && console.log(err));
  }

  // validation for email & password
  signInValidator(email, password) {
      // email validator pattern
      const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const error = {};

      if (!email || email === '') {
        error.email = 'Please Provide Email Id';
      } else if (!pattern.test(String(email).toLowerCase())) {
        error.email = 'Invalid Email Id';
      }

      if (!password || password === '') {
        error.password = 'Please Provide Password';
      }
      return error;
  }

  render() {
    const {email, password, error, loading, refreshing} = this.state;
    return (
      <Container>
        {refreshing && (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="orange" />
            <Text>Loading..</Text>
          </View>
        )}
        {!refreshing && (
          <Content padder contentContainerStyle={{justifyContent: 'center', height: SCREEN_HEIGHT}}>
            <View style={{paddingVertical: 70, borderWidth: 1, borderColor: 'lightgray', paddingHorizontal: 10}}>
              <H2 style={{textAlign: 'center'}}>Sign In</H2>
              <View style={{marginTop: 35}}>
                <Form>
                  <Item fixedLabel>
                    <Label>Email</Label>
                    <Input
                      value={email}
                      onChangeText={(email) => this.setState({email})}
                    />
                  </Item>
                  {error && error.email && <Text style={styles.error }>{error.email}</Text>}
                  <Item fixedLabel>
                    <Label>Password</Label>
                    <Input
                      value={password}
                      secureTextEntry={true}
                      onChangeText={(password) => this.setState({password})}
                    />
                  </Item>
                  {error && error.password && <Text style={styles.error }>{error.password}</Text>}
                  <Button block warning style={{marginTop: 25}} onPress={this.submitHandler}>
                    <Text>{loading ? 'Signing in..' : 'Sign In'}</Text>
                  </Button>
                </Form>
              </View>
              <View style={{marginTop: 25, flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text>NEED AN ACCOUNT ? </Text>
                <Text style={{fontWeight: 'bold'}}>SIGN UP</Text>
              </View>
            </View>
          </Content>
        )}
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  error: {
    marginLeft: 15,
    fontSize: 12,
    color: 'red'
  }
});

export default Login;