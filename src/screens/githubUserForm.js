import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import {Container, Label, Content, Form, Item, Input, Icon, H2, Button, Toast,} from 'native-base';
import { setLogin, getLogin } from '../config/Auth';
const {width:SCREEN_WIDTH, height:SCREEN_HEIGHT} = Dimensions.get('window');

class githubUserForm extends React.Component {
  state = {
    email: '',
    loading: false,
    refreshing: true,
    error: null
  }


  render() {
    const {email, error, loading, refreshing} = this.state;
    return (
      <Container>
      
          <Content padder contentContainerStyle={{justifyContent: 'center', height: SCREEN_HEIGHT}}>
            <View style={{paddingVertical: 70, borderWidth: 1, borderColor: 'lightgray', paddingHorizontal: 10}}>
              <H2 style={{textAlign: 'center'}}>Git User</H2>
         
                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                    <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                    <Input />
                    </Item>
                </Form>

            </View>
          </Content>
       
      </Container>
    )
  }
}

const styles = StyleSheet.create({
 
});

export default githubUserForm;