import React from 'react'
import {Dimensions, View,Text} from 'react-native'
import {Container, Header, H1, Title, Left, Body, Right, Content, Icon, Button, Footer, FooterTab} from 'native-base';
import FoodItems from '../components/FoodItems';
import NewScreen from '../screens/NewScreen';

export default class GetOrders extends  React.Component{
    render(){
        return(
            <>
             <NewScreen/>
            </>
        )
    }
}