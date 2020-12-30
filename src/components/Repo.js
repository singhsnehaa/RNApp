import React from 'react'
import {View, Text,StyleSheet,Dimensions,ImageBackground} from 'react-native'
import {Icon,H3,} from 'native-base'
import AutoHeightImage from 'react-native-auto-height-image'
import {Theme} from '../theme/AppTheme'


export default class Repo extends React.Component {
    render(){
        return(
          <View style={styles.repo}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>{this.props.name}</Text>
            <Text>{this.props.description ? this.props.description : 'Description not Available'}</Text>
            <View style={{marginTop: 5}}>
              <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Text style={{color: '#555'}}>Created :{' '}</Text>
                <Text>{this.props.created_at}</Text>
              </View>
              <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Text style={{color: '#555'}}>Language :{' '}</Text>
                <Text>{this.props.language}</Text>
              </View>
              <View style={{flexDirection:'row', alignItems: 'center'}}>
                <Text style={{color: '#555'}}>Fork :{' '}</Text>
                <Text>{this.props.forks}</Text>
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