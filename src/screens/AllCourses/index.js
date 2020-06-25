import React, { Component } from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
 } from 'react-native'
 import { LineChart, Grid } from 'react-native-svg-charts'
 import * as shape from 'd3-shape'
import ProgressCircle from 'react-native-progress-circle'

 

class App extends Component {
   render() {
      
 
       return (
        <View style={styles.container}> 
        {/* header */}
            <View 
                style={{
                    flex:1, 
                    alignItems:'center', 
                    flexDirection:'row'
                }}>
                <Image
                    style={{
                        height:40,
                        width:40,

                    }}
                    source={require('./src/images/backIcon.png')}
                
                />
                <Text style={{
                    color:'#44474f',
                    fontSize:30,
                    fontWeight:'bold', 
                    marginLeft:15,
                }}>
                    All Courses

                </Text>

                <TouchableOpacity style={{
                    position:'absolute',
                    right:50
                }}>
                    <Image
                        style={{
                            height:25, 
                            width:25, 
                        }}
                        source={require('./src/images/search.png')}
                    />  
                </TouchableOpacity>
                    <TouchableOpacity style={{ position:'absolute',
                    right:10}}>
                    <Image
                    style={{
                        height:25, 
                        width:25, 
                    
                    }}
                    source={require('./src/images/drawer.png')}
                    />
                </TouchableOpacity>
               

            </View>
           
            <View style={{flex:8, paddingBottom:10, marginHorizontal:5}}>
                <ScrollView
                showsVerticalScrollIndicator={false}
                >
                    <View style={{
                        width:'90%',
                        height:230,
                        backgroundColor:'white',
                        alignSelf:'center',
                        borderRadius:10, 
                        marginTop:10,
                    }}>
                        <View style={{
                            flex:4,
                            alignItems:'center',
                            justifyContent:'center',
                        }}>
                            <Image
                                style={{
                                    height:66,
                                    width:83.2,
                                }}
                                source={require('./src/images/notfound.png')}
                            />

                        </View>
                        <View style={{
                            flex:2,
                            
                        }}>
                            <View style={{width:'90%', height:2, backgroundColor:'lightgray', alignSelf:'center'}}>

                            </View>
                            <View style={{
                                margin:15
                            }}>

                                <Text style={{
                                    fontSize:17,
                                    fontWeight:'bold',
                                }}>
                                    Cardio Exarcise

                                </Text>

                                <Text
                                    style={{
                                        fontSize:14,
                                        fontWeight:'bold',
                                        color:'lightgray', 
                                    }}
                                >
                                    110 Hours
                                </Text>
                            </View>

                        </View>

                    </View>
                    <View style={{
                        width:'90%',
                        height:230,
                        backgroundColor:'white',
                        alignSelf:'center',
                        borderRadius:10, 
                        marginTop:15,
                    }}>
                         <View style={{
                            flex:4,
                            alignItems:'center',
                            justifyContent:'center',
                        }}>
                            <Image
                                style={{
                                    height:66,
                                    width:83.2,
                                }}
                                source={require('./src/images/notfound.png')}
                            />

                        </View>
                        <View style={{
                            flex:2,
                            
                        }}>
                            <View style={{width:'90%', height:2, backgroundColor:'lightgray', alignSelf:'center'}}>

                            </View>
                            <View style={{
                                margin:15
                            }}>

                                <Text style={{
                                    fontSize:17,
                                    fontWeight:'bold',
                                }}>
                                    Cardio Exarcise

                                </Text>

                                <Text
                                    style={{
                                        fontSize:14,
                                        fontWeight:'bold',
                                        color:'lightgray', 
                                    }}
                                >
                                    110 Hours
                                </Text>
                            </View>

                        </View>

                    </View>
                    <View style={{
                        width:'90%',
                        height:230,
                        backgroundColor:'white',
                        alignSelf:'center',
                        borderRadius:10, 
                        marginTop:15,
                    }}>
                         <View style={{
                            flex:4,
                            alignItems:'center',
                            justifyContent:'center',
                        }}>
                            <Image
                                style={{
                                    height:66,
                                    width:83.2,
                                }}
                                source={require('./src/images/notfound.png')}
                            />

                        </View>
                        <View style={{
                            flex:2,
                            
                        }}>
                            <View style={{width:'90%', height:2, backgroundColor:'lightgray', alignSelf:'center'}}>

                            </View>
                            <View style={{
                                margin:15
                            }}>

                                <Text style={{
                                    fontSize:17,
                                    fontWeight:'bold',
                                }}>
                                    Cardio Exarcise

                                </Text>

                                <Text
                                    style={{
                                        fontSize:14,
                                        fontWeight:'bold',
                                        color:'lightgray', 
                                    }}
                                >
                                    110 Hours
                                </Text>
                            </View>

                        </View>

                    </View>
                    

                </ScrollView>
              

            </View>
            <View style={{flex:1, backgroundColor:'white'}}>
                <View style={{
                    width:'40%',
                    height:'100%',
                    flexDirection:'row', 
                    alignItems:'center',
                    justifyContent:'space-around'

                }}>

                    <Image

                        style={{
                            height:30,
                            width:30,
                        }}
                        source={require('./src/images/dashboardIcon.png')}


                    />

                    <Image

                    style={{
                        height:30,
                        width:30,
                    }}
                    source={require('./src/images/signalIcon.png')}


                    />

                </View>

                <View style={{
                    width:'40%',
                    height:'100%',
                    position:'absolute',
                    right:0,
                    flexDirection:'row', 
                    alignItems:'center',
                    justifyContent:'space-around'

                }}>

                    <Image

                    style={{
                        height:30,
                        width:30,
                    }}
                    source={require('./src/images/dumbellIcon.png')}


                    />

                    <Image

                        style={{
                            height:30,
                            width:30,
                        }}
                        source={require('./src/images/signalIcon.png')}


                    />

                </View>
               

            </View>
            <View style={{
                height:75,
                width:75, 
                backgroundColor:'white',
                position:'absolute',
                borderRadius:70,
                bottom:0,
                alignSelf:'center',
                alignItems:'center', 
                justifyContent:'center'
            }}>
                <TouchableOpacity style={{
                     height:55,
                     width:55, 
                     backgroundColor:'#f67953',
                    borderRadius:70,
                    alignItems:'center', 
                    justifyContent:'center'
                }}>
                    <Text style={{
                        fontSize:35,
                        color:'white',
                        marginBottom:5
                    }}>
                        +

                    </Text>

                </TouchableOpacity>

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