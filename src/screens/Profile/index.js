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
import MySwiper from 'react-native-swiper'


 

class App extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
   render() {
      
 
       return (
        <View style={styles.container}> 
        {/* header */}
            <View 
                style={{
                    flex:1, 
                    alignItems:'center', 
                    flexDirection:'row',
                }}>
                <View>
                <Text style={{
                    color:'#44474f',
                    fontSize:16,
                    fontWeight:'bold', 
                    marginLeft:15,
                }}>
                    Hey! Welcome

                </Text>
                <Text style={{
                    color:'#44474f',
                    fontSize:25,
                    fontWeight:'bold', 
                    marginLeft:15,
                }}>
                    Jhon!

                </Text>
                </View>

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
               
           <View style={{
               flex:6
           }}>
                <MySwiper
          
            dotStyle={{height:5, width:5, borderRadius:70, marginBottom:20, backgroundColor:'lightgray'}}
            activeDotStyle={{height:5, width:5, borderRadius:70, marginBottom:20, backgroundColor:'black'}}
            style={{}} showsButtons={false}
            >
               
                     <View style={{
                         height:'70%', 
                         backgroundColor:'white', 
                         width:'90%', 
                         borderRadius:10, 
                         alignSelf:'center',
                         marginTop:10,
                         alignItems:'center',
                         justifyContent:'center'
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
                        height:'70%', 
                        backgroundColor:'white', 
                        width:'90%', 
                        borderRadius:10,
                        alignSelf:'center',
                        marginTop:10,
                        alignItems:'center',
                         justifyContent:'center'
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
                        height:'70%', 
                        backgroundColor:'white', 
                        width:'90%', 
                        borderRadius:10,
                        alignSelf:'center',
                        marginTop:10,
                        alignItems:'center',
                         justifyContent:'center'
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
                        height:'70%', 
                        backgroundColor:'white', 
                        width:'90%', 
                        borderRadius:10,
                        alignSelf:'center',
                        marginTop:10,
                        alignItems:'center',
                        justifyContent:'center'
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
                        height:'70%', 
                        backgroundColor:'white', 
                        width:'90%', 
                        borderRadius:10,
                        alignSelf:'center',
                        marginTop:10,
                        alignItems:'center',
                         justifyContent:'center'
                    }}>
                        <Image
                                style={{
                                    height:66,
                                    width:83.2,
                                }}
                                source={require('./src/images/notfound.png')}
                            />

                    </View>
            </MySwiper>

           </View>
              <View style={{flex:4}}>

                  <Text
                    style={{
                        fontSize:18,
                        fontWeight:'bold',
                        margin:10
                    }}
                  >
                      Popular Training
                  </Text>

                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                      <View style={{
                          height:'92%',
                          width:200,
                          marginBottom:10,
                          marginLeft:10,
                      }}>
                          <View
                            style={{
                                height:'75%',
                                width:'90%', 
                                backgroundColor:'white',
                                borderRadius:10,
                                alignItems:'center',
                                justifyContent:'center'

                            }}
                          >
                              <Image
                                style={{
                                    height:39.6,
                                    width:49.92,
                                }}
                                source={require('./src/images/notfound.png')}
                            />

                            
                          </View>
                          <Text
                                style={{
                                    fontWeight:'bold',
                                }}
                            >
                                Legs & Abs

                            </Text>
                            <Text
                                style={{color:'gray'}}
                            >
                                Community

                            </Text>
                              


                      </View>

                      <View style={{
                          height:'92%',
                          width:200,
                          marginBottom:10,
                          marginLeft:10,
                      }}>
                          <View
                            style={{
                                height:'75%',
                                width:'90%', 
                                backgroundColor:'white',
                                borderRadius:10,
                                alignItems:'center',
                                justifyContent:'center'

                            }}
                          >
                              <Image
                                style={{
                                    height:39.6,
                                    width:49.92,
                                }}
                                source={require('./src/images/notfound.png')}
                            />

                            
                          </View>
                          <Text
                                style={{
                                    fontWeight:'bold',
                                }}
                            >
                                Legs & Abs

                            </Text>
                            <Text
                                style={{color:'gray'}}
                            >
                                Community

                            </Text>
                              


                      </View>

                  </ScrollView>

              </View>

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