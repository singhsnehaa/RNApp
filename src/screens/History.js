import React from 'react'
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity,
    FlatList
  } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Theme} from '../theme/AppTheme';
import {Container, Header, H1, Title, Left, Body, Right, Content, Icon, Button, Footer, FooterTab, Toast} from 'native-base';
const {width:SCREEN_WIDTH, height:SCREEN_HEIGHT} = Dimensions.get('window');  
import FoodItems from '../components/FoodItems';

export default class History extends  React.Component{

    // showToast() {
    //     console.log('click');
    //     Toast.show({
    //         text:'Show Toast Message',
    //         duration: 3000,
    //         position:'center'
    //     });
    // }

    render(){
        return(
            <Container>
                <Header androidStatusBarColor='lightgray'>
                    <Left>
                        <Button transparent>
                            <Icon name="chevron-left" type="FontAwesome5" style={{color: '#fff', fontSize: 20}} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color: '#fff'}}>Orders History</Title>
                    </Body>
                    <Right/>
                </Header>

                <Header>
                    <View style={{backgroundColor:'#eee',width:SCREEN_WIDTH, flexDirection:'row'}}>
                        <TouchableOpacity 
                            style={{
                                flex:1,
                                height:'100%',
                                backgroundColor:'#d4d4d4',
                                borderRightColor:'#b8b6b6',
                                borderRightWidth:1,
                                justifyContent:'center',
                                alignItems:'center',
                            }}
                            onPress={() => this.props.navigation.navigate('NewScreen')}
                        >
                            <Text style={{color:'#222',fontWidth:'bold'}}>New</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={{
                                flex:1,
                                height:'100%',
                                backgroundColor:'#d4d4d4',
                                borderLeftColor:'#b8b6b6',
                                borderLeftWidth:1,
                                justifyContent:'center',
                                alignItems:'center',
                            }}
                            onPress={() => this.props.navigation.navigate('History')}
                        >
                            <Text style={{color:'red',fontWidth:'bold'}}>History</Text>
                        </TouchableOpacity>
                    </View>
                </Header>

                <Content style={{marginVertical:10,}}>
                    <View style={{backgroundColor:'#facad4',paddingVertical:5,}}>
                            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginLeft:15}}>
                                <Text style={{fontWeight:'bold', color:'#222'}}>Delivery for:</Text>
                                <Text style={{color:'#555',marginLeft:5}}>21-10-20202, 11 AM</Text>
                            </View>
                    </View>

                    <View style={{backgroundColor:'#facad4',paddingVertical:5,}}>
                            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginLeft:15}}>
                                <Text style={{fontWeight:'bold', color:'#222'}}>Product:</Text>
                                <Text style={{color:'#555',marginLeft:5}}>Red Valvet cake</Text>
                            </View>
                    </View>

                    <View style={{backgroundColor:'#facad4',paddingVertical:5,}}>
                            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginLeft:15}}>
                                <Text style={{fontWeight:'bold', color:'#222'}}>Seller:</Text>
                                <Text style={{color:'#555',marginLeft:5}}>Cake World</Text>
                            </View>
                    </View>
                    

                    <FoodItems />
                    <View style={{alignItems:'center',marginHorizontal:16,marginVertical:5,justifyContent:'space-between',flexDirection:'row',}}>
                        <View style={{justifyContent:'flex-start',flexDirection:'row',}}>
                            <Text style={{color:'#000',fontWidth:'bold'}}>Status: </Text>
                            <Text style={{color:'orange',}}> Approved and Not Paid</Text>
                        </View>

                        <Button rounded primary style={{height:35}} onPress={()=> this.showToast()}>
                            <Text style={{color:'#fff', padding:15}}>Cancel</Text>
                        </Button>
                    </View>

                    <View style={{marginVertical:10,}}>
                        <View style={{paddingVertical:5,}}>
                                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginLeft:15}}>
                                    <Text style={{fontWeight:'bold', color:'#222'}}>Delivery for:</Text>
                                    <Text style={{color:'#555',marginLeft:5}}>21-10-20202, 11 AM</Text>
                                </View>
                        </View>

                        <View style={{paddingVertical:5,}}>
                            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginLeft:15}}>
                                <Text style={{fontWeight:'bold', color:'#222'}}>Product:</Text>
                                <Text style={{color:'#555',marginLeft:5}}>Red Valvet cake</Text>
                            </View>
                        </View>

                        <View style={{paddingVertical:5,}}>
                            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginLeft:15}}>
                                <Text style={{fontWeight:'bold', color:'#222'}}>Seller:</Text>
                                <Text style={{color:'#555',marginLeft:5}}>Cake World</Text>
                            </View>
                        </View>
                    </View>

                    <FoodItems />
                    <View style={{alignItems:'center',marginHorizontal:16,marginVertical:5,justifyContent:'space-between',flexDirection:'row',}}>
                        <View style={{justifyContent:'flex-start',flexDirection:'row',}}>
                            <Text style={{color:'#000',fontWeight:'bold'}}>Status: </Text>
                            <Text style={{color:'orange',}}> Approved and Not Paid</Text>
                        </View>

                        <Button rounded primary style={{height:35}}>
                            <Text style={{color:'#fff', padding:15}}>Cancel</Text>
                        </Button>
                    </View>

                </Content>
            </Container>
               
                
               
            
        )
    }
}