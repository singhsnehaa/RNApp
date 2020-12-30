import React, { Fragment } from 'react'
import {Dimensions, StyleSheet, View,Text,} from 'react-native'
import {List,ListItem,Left,Right,Body, Container,H2, H1,Icon,Separator} from 'native-base'
import AutoHeightImage from 'react-native-auto-height-image'
import {Theme} from '../theme/AppTheme'
const win = Dimensions.get('window');

export default class LateralItems extends React.Component {
    render(){
        return(
          <Fragment>
            <List>

            <ListItem>
                <Left>
                    <View style={{flex:1,flexDirection:'column'}}>
                        <H2>Nutrition Fact</H2>
                        <Text note style={{fontWeight:'bold', marginTop:10}}>Serving Size</Text>
                        {/* <Text style={{borderWidth:1, borderColor:'#000',width:'100%', marginVertical:10}}></Text> */}
                    </View>
                </Left>
             
                <Right>
                    <Text note>100 gm</Text>
                </Right>    
               
            </ListItem>
          

            <ListItem>
                <Left>
                    <View style={{flex:1,flexDirection:'column',}}>
                        <Text note style={{fontWeight:'bold'}}>Amount per Serving</Text>
                        <H2 style={{ marginTop:10}}>Calories</H2>
                    </View>
                </Left>
             
                <Right>
                    <Text note>89 g</Text>
                </Right>    
            </ListItem>

           
            <ListItem itemDivider>
              <Left>
              <Text style={{fontWeight:'bold'}}>Total Fat 0.3 g</Text>
              </Left>
              <Right>
                <Text>0%</Text>
              </Right>
            </ListItem>   

            <ListItem>
              <Left>
                <Text>Saturated Fat 0.1g</Text>
              </Left>

              <Right>
                <Text>0%</Text>
              </Right>
              
            </ListItem>

            <ListItem itemDivider>
              <Left>
                <Text style={{fontWeight:'bold'}}>Sodium 1g</Text>
              </Left>

              <Right>
                <Text>0%</Text>
              </Right>
            </ListItem>      

          <ListItem></ListItem>

            <ListItem itemDivider>
              <Left>
              <Text style={{fontWeight:'bold'}}>Total Carbohydrate 23g</Text>
              </Left>

              <Right>
                <Text>8%</Text>
              </Right>

            </ListItem>   

            <ListItem>
              <Left>
                <Text>Dietary Fiber 2.6g</Text>
              </Left>
              <Right>
                <Text>9%</Text>
              </Right>
            </ListItem>   

            <ListItem>
              <Left>
                <Text>Sugar 12g</Text>
              </Left>
              <Right>
                <Text>0%</Text>
              </Right>
            </ListItem>  


            <ListItem itemDivider>
              <Left>
              <Text style={{fontWeight:'bold'}}>Protein 1.1g</Text>
              </Left>
              <Right>
                <Text>2%</Text>
              </Right>
            </ListItem>  

            <ListItem>
              <Left>
                <Text>Vitamin D 0.00mcg</Text>
              </Left>

              <Right>
                <Text>0%</Text>
              </Right>
            </ListItem>   


             <ListItem>
              <Left>
                <Text>Calcium  5.00mg</Text>
              </Left>

              <Right>
                <Text>0%</Text>
              </Right>
            </ListItem> 


             <ListItem>
              <Left>
                <Text>Iron 0.26 mg</Text>
              </Left>

              <Right>
                <Text>1%</Text>
              </Right>
            </ListItem>      

            <ListItem>
              <Left>
                <Text>Potassium 358 mg</Text>
              </Left>

              <Right>
                <Text>8%</Text>
              </Right>
            </ListItem>  
           

            
          </List>
          
          <View style={{fontWeight:'bold', marginVertical:10,marginHorizontal:13,}}>
            <H2 style={{fontWeight:'bold',}}>Delivering with love and care for you to relise</H2>
            <Text style={{fontSize:20,marginTop:5, marginBottom:10}}>About Demo Group</Text>
            <Text note>The main text of books and magazines that are different from pictures, the text of text materials that are different from pictures in books and magazines .
            
            </Text>
          </View>

          </Fragment>
          

          
        )
    }
}
