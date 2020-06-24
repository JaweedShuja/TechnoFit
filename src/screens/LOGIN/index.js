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
    constructor(props){
        super(props)



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
                marginTop:'15%'
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
                    marginTop:'15%',
                    borderRadius:5
                }}
            >
                <TextInput
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
                    placeholder={"Password"}
                    style={{fontSize:18}}
                    
                    
                />
            </View>

            <TouchableOpacity
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
                        LOGIN
                    </Text>
            </TouchableOpacity>

            

            </ScrollView>
            
           
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