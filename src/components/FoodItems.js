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
import {Container, Header, H1, Title, Left, Body, Right, Content, Icon, Button, Footer, FooterTab} from 'native-base';
  

export default class FoodItems extends  React.Component{
    render(){
        return(
            <>
                <View style={{flexDirection: 'row',}}>
                    <View style={{flex:0.4,marginVertical: 10, marginHorizontal:10,alignItems: 'center'}}>
                        <AutoHeightImage width={135}
                        style={{borderRadius:6}}
                        // source={{uri: 'http://placehold.it/300x200'}}
                        // source={{uri: '../assets/cake.jpg'}}
                        source={require('../assets/cake.jpg')}
                        />
                    </View>
                <View style={{flex:0.6,marginVertical:25,}}> 
                        
                        <View style={{justifyContent:'flex-start',flexDirection:'row',}}>
                            <Text style={{fontWeight:'bold'}}>Price: </Text>
                            <Text>900  </Text>
                            <Text style={{color: 'gray', textDecorationLine: 'line-through'}}>  1000</Text>  
                        </View>

                        <View style={{justifyContent:'flex-start',flexDirection:'row',flexWrap:'wrap'}}>
                            <Text style={{fontWeight:'bold'}}>Discount: </Text>
                            <Text>10 %</Text>
                        </View>

                        <View style={{justifyContent:'flex-start',flexDirection:'row',flexWrap:'wrap'}}>
                            <Text style={{fontWeight:'bold'}}>Type of payment:  </Text>
                            <Text>COD</Text>
                        </View>

                    </View>
                    
                </View>
              
                <View style={{marginHorizontal:16,marginVertical:5,justifyContent:'flex-start',flexDirection:'row',flexWrap:'wrap'}}>
                    <Text style={{fontWeight:'bold'}}>Delivery Address:</Text>
                     <Text> 123 City State,Country-000000</Text>
                </View>

                {/* <View style={{marginHorizontal:16,marginVertical:5,justifyContent:'space-around',flexDirection:'row',flexWrap:'wrap'}}>
                    <Button rounded danger style={{height:35}}>
                        <Text style={{color:'#fff', padding:20}}>RE ORDER</Text>
                    </Button>

                    <Button rounded light style={{height:35}}>
                        <Text style={{color:'#000', padding:15}}>DOWNLOAD RECEIPT</Text>
                    </Button>
                </View> */}
                
        </>    
            
        )
    }
}