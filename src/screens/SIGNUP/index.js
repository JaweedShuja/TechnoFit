import React, { Component } from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView
 } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
const Percentage = 66;

 
class App extends Component {
    static navigationOptions = {
        headerShown : null
    }
    constructor(props){
        super(props)

        this.state = {
            bottomBarShown:true
        }


    }
   render() {
       return (
        <View style={styles.container}> 
        <ScrollView>
           
            <View style={{
                height:130,
                width:130,
                backgroundColor:'white',
                alignSelf:'center',
                borderRadius:33,
                marginTop:'10%'
            }}>

                

            </View>
         
            <Text
                style={{
                    fontSize:35,
                    fontWeight:'bold',
                    alignSelf:'center',
                    color:'#ff6d3f',
                    marginTop:'5%'
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

                    
            <View
                style={{
                    height:50,
                    width:'85%',
                    backgroundColor:'white',
                    alignSelf:'center',
                    alignItems:'center',
                    justifyContent:'center', 
                    marginTop:'10%',
                    borderRadius:5
                }}
            >
                <TextInput
                    onFocus={() => this.setState({
                        bottomBarShown:false
                    })}
                    onBlur={() => this.setState({
                        bottomBarShown:true
                    })}
                    placeholder={"Email Address"}
                    style={{fontSize:18}}
                    
                    
                />
                    

            </View>
            <View
                style={{
                    height:50,
                    width:'85%',
                    backgroundColor:'white',
                    alignSelf:'center',
                    marginTop:15,
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:5

                }}
            >

                <TextInput
                    onFocus={() => this.setState({
                        bottomBarShown:false
                    })}
                    onBlur={() => this.setState({
                        bottomBarShown:true
                    })}
                    placeholder={"Password"}
                    style={{fontSize:18}}
                    
                    
                />
                
            </View>

            <View
                style={{
                    height:50,
                    width:'85%',
                    backgroundColor:'white',
                    alignSelf:'center',
                    marginTop:15,
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:5

                }}
            >

                <TextInput
                    onFocus={() => this.setState({
                        bottomBarShown:false
                    })}
                    onBlur={() => this.setState({
                        bottomBarShown:true
                    })}
                    placeholder={"Enter Password Again"}
                    style={{fontSize:18}}
                    
                    
                />
                
            </View>

            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
                style={{
                    height:50,
                    width:'85%',
                    backgroundColor:'#ff6d43',
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
                           color:'white'
                       }}
                    >
                        SIGN UP
                    </Text>
            </TouchableOpacity>

            

            </ScrollView>
            {this.state.bottomBarShown ?
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
                    backgroundColor:'gray',
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
                    backgroundColor:'#ff6d43',
                }}>

                </View>

            </View>
            : null}
           
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