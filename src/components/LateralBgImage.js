import React from 'react'
import {View, Text,StyleSheet,Dimensions,ImageBackground} from 'react-native'
import {Icon,H2,} from 'native-base'
import AutoHeightImage from 'react-native-auto-height-image'
import {Theme} from '../theme/AppTheme'
const win = Dimensions.get('window');


export default class LateralBgImage extends React.Component{
    render(){
        const {imageUri, alignContent, bgWhite} = this.props;
        return(
        <ImageBackground source= {imageUri}  style={{...styles.imageWrapper, justifyContent: alignContent}}>
            <View style={styles.contentWrapper}>
                <H2 style={{color: bgWhite ? 'green' : '#fff'}}>Lorem Ipsum</H2>
                <Text style={{marginTop: 15, color: bgWhite ? 'green' : "#fff"}}>The main text of books and magazines that are different from pictures, </Text>
            </View>
        </ImageBackground>
        )
    }
}



const styles = StyleSheet.create({
    imageWrapper:{
        flex:1,
        flexDirection:'row',
        width: '100%',
        height: 150,
    },
    contentWrapper:{
        // borderColor:'black',
        // borderWidth:2,
        marginVertical:10,
        alignSelf:'center',
        width:'65%',
        marginHorizontal:10,

    },
    hedTitle:{
        color:'#fff', 
    },
    paraDescrip:{
        marginTop:15,
        color:'#fff',
    }

});