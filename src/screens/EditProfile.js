import React, { Component } from 'react';
import {View, Text, TouchableOpacity, RefreshControl,} from 'react-native';
import {Container, Content, Header, Left, Body, Right, Title, Button, Icon, Form, Item, Label,
     Input, Toast,Picker} from 'native-base';
import {Theme} from '../theme/AppTheme';
import {AppConfig} from '../config/AppConfig';
import { setLogin, getLogin } from '../config/Auth';


export default class EditProfile extends Component {
    state = {
        id: null,
        name: '-',
        mobile: '-',
        email: '-',
        btnText: 'UPDATE',
        refreshing: false
    };

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

    doRefresh = () => {
        this.setState({ refreshing: true });
        const { id } = this.state;
        let url = AppConfig.API + '/?m=userinfo&user_id=' + id;
        fetch(url).then(ab => ab.json()).then(resp => { 
            // console.log(resp);
            this.setState({ refreshing: false });
        });
    }
    
    updateProfile = async() => {
        this.setState({
            btnText: 'SAVING...'
        })
        const { goBack } = this.props.navigation;
        const { name, mobile, email, gender, id } = this.state;
        let url = AppConfig.API + '/?m=update&name=' + name + 
        '&mobile=' + mobile + '&email=' + email + '&id=' + id;
        fetch(url).then(ab => ab.json()).then(resp => {
            setLogin(resp.data);
            Toast.show({
                text: resp.message,
                duration: 3000
            });
            this.setState({
                btnText: 'UPDATE'
            })
            goBack();
        });
    }



    render() {
        const {navigate, goBack} = this.props.navigation;
        const {name, mobile, email, btnText, refreshing } = this.state;
        
        return(
            <Container>
                <Header>
                        <Left>
                            <Button onPress={() => goBack()} transparent>
                                <Icon name="arrow-back"></Icon>
                            </Button>
                        </Left>
                        <Body style={{ flex: 2 }}>
                            <Title>Edit Profile</Title>
                        </Body>
                </Header>
                <Content refreshControl={ <RefreshControl onRefresh={ this.doRefresh } refreshing={ refreshing}></RefreshControl>}>
                <Form>
                    <Item>                                
                        <Icon name="account" type="MaterialCommunityIcons"></Icon>
                        <Input onChangeText={ name => this.setState({ name })} value={ name }></Input>
                    </Item>
                    <Item>
                        <Icon name="phone" type="MaterialCommunityIcons"></Icon>
                        <Input onChangeText={ mobile => this.setState({ mobile })} value={ mobile } keyboardType="number-pad"></Input>
                    </Item>                            
                    <Item>
                        <Icon name="email" type="MaterialCommunityIcons"></Icon>
                        <Input keyboardType="email-address" onChangeText={ email => this.setState({ email })} value={ email }></Input>
                    </Item>   

                
                </Form>
                </Content>
                <View>
                    <Button onPress={ this.updateProfile } full style={{ backgroundColor: Theme.DANGER_LIGHT, justifyContent: "center" }}>
                    <Text style={{color:'#FFF'}}>{ btnText }</Text>
                    </Button>
                </View>
                {/* <AppFooter tab={1} {...this.props}></AppFooter> */}
            </Container>
        );
    }
}