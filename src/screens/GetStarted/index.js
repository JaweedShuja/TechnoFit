import React, { Component } from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
 } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
const Percentage = 66;

 
class App extends Component {
    static navigationOptions = {
        headerShown : null
    }
   render() {
       return (
        <View style={styles.container}> 
           
            <View style={{
                height:130,
                width:130,
                backgroundColor:'white',
                alignSelf:'center',
                borderRadius:33,
                marginTop:'15%'
            }}>

                

            </View>
         
            <Text
                style={{
                    fontSize:35,
                    fontWeight:'bold',
                    alignSelf:'center',
                    color:'#ff6d3f',
                    marginTop:'10%'
                }}
            >
                Make Yourselft
            </Text>
            <Text
                style={{
                    fontSize:35,
                    fontWeight:'bold',
                    alignSelf:'center',
                    color:'#6c4d83'
                }}
            >
                Better
            </Text>

                    
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('EnterName')}
                style={{
                    height:50,
                    width:'85%',
                    backgroundColor:'#ff6d43',
                    alignSelf:'center',
                    alignItems:'center',
                    justifyContent:'center', 
                    marginTop:'15%',
                    borderRadius:5
                }}
            >
                    <Text
                        style={{
                            fontSize:18, 
                            color:'white',
                            fontWeight:'bold',
                        }}
                    >
                        SIGN UP NOW
                    </Text>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}
                style={{
                    height:50,
                    width:'85%',
                    backgroundColor:'#fcc643',
                    alignSelf:'center',
                    marginTop:15,
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:5

                }}
            >

                    <Text
                        style={{
                            fontSize:18, 
                            color:'white',
                            fontWeight:'bold',
                        }}
                    >
                        LOGIN
                    </Text>

            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    height:50,
                    width:'85%',
                    backgroundColor:'white',
                    alignSelf:'center',
                    marginTop:15, 
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection:'row',
                    borderRadius:5

                }}
            >
                <Text
                        style={{
                            fontSize:18, 
                            fontWeight:'bold',
                        }}
                    >
                        LOGIN WITH
                    </Text>

                    <Image
                        style={{height:30, width:30, marginLeft:10}}
                        source={require('../../images/facebookIcon.png')}

                    />
            </TouchableOpacity>

            <View style={{
                width:80,
                height:20,
                position:'absolute',
                alignSelf:'center',
                bottom:10,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-around'
            }}>
                <View style={{
                    height:5, 
                    width:20,
                    backgroundColor:'#ff6d43',
                }}>

                </View>
                <View style={{
                    height:5, 
                    width:20,
                    backgroundColor:'gray',
                }}>

                </View>
                <View style={{
                    height:5, 
                    width:20,
                    backgroundColor:'gray',
                }}>

                </View>

            </View>

            
           
        </View>
       );
    }
}

export default App

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f1f0f3'
    }
})