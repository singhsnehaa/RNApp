import React from 'react'
import {View, Text,StyleSheet, Dimensions,FlatList} from 'react-native'
import {Container, Header,Title, H1,Left,Body,Right,Content,Icon,button,Footer, Button,} from 'native-base'
import {Theme} from  '../theme/AppTheme'
import LateralBgImage from '../components/LateralBgImage'
import LateralItems from '../components/LateralItems';
import { setLogin, getLogin, clearLogin } from '../config/Auth';
const win = Dimensions.get('window');

export default class Lateral extends React.Component {
    state ={
        Loading: true,
    }

    componentDidMount() {
        // clearLogin();
    }
    render() {
        return(
            <Container>
                <Header transparent androidStatusBarColor='lightgreen'>
                    <Left>
                        <Button transparent>
                            <Icon name='chevron-left' type='FontAwesome5' style={{color:Theme.green, fontSize:20}}></Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color:Theme.green}}>Lateral</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <Content>
                    <View>
                        <LateralBgImage imageUri={require('../assets/bg-img-1.png')} alignContent='flex-start' bgWhite={false} />
                        <LateralBgImage imageUri={require('../assets/bg-img-2.png')} alignContent='flex-end' bgWhite={true} />
                        <LateralBgImage imageUri={require('../assets/bg-img-3.png')} alignContent='flex-start' bgWhite={false} />
                    </View>

                    <View>
                        <LateralItems />
                    </View>
                </Content>
            </Container>
            
        )
    }
}