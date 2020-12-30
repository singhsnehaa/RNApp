import React from 'react'
import {View, Text,StyleSheet,Dimensions,ImageBackground} from 'react-native'
import {Icon,H3,} from 'native-base'
import AutoHeightImage from 'react-native-auto-height-image'
import {Theme} from '../theme/AppTheme'


export default class Repo extends React.Component {
    render(){
        return(
          <View style={styles.repo}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>Repo Name</Text>
            <Text>Some descripotion about this repo goes here.</Text>
            <View style={{marginTop: 5}}>
              <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Text style={{color: '#555'}}>Created :{' '}</Text>
                <Text>12/12/2020</Text>
              </View>
              <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Text style={{color: '#555'}}>Language :{' '}</Text>
                <Text>HTML</Text>
              </View>
              <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Text style={{color: '#555'}}>Fork :{' '}</Text>
                <Text>8</Text>
              </View>
            </View>
          </View>
        )
    }
}



const styles = StyleSheet.create({
  repo: {
    width: 200,
    borderWidth: 2,
    borderColor: 'lightgray',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
    marginRight: 10
  }
});