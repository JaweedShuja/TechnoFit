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
                    backgroundColor:'white'
                }}>
                <Text style={{
                    color:'#44474f',
                    fontSize:25,
                    fontWeight:'bold', 
                    marginLeft:15,
                }}>
                    Training

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
               
                <View
                    style={{
                        height:50,
                        backgroundColor:'white',
                        flexDirection:'row',
                    }}
                >

                    <View
                        style={{
                            flex:1,
                            alignItems:'center',
                            justifyContent:'center',
                            borderBottomWidth:2,
                            borderColor:'#ff723c'
                        }}
                    >
                        <Text
                            style={{
                                fontSize:17,
                                fontWeight:'bold',
                            }}
                        >
                            Master


                        </Text>

                    </View>

                    <View
                        style={{
                            flex:1,
                            alignItems:'center',
                            justifyContent:'center',
                            borderBottomWidth:2,
                            borderColor:'white'
                        }}
                    >
                        <Text
                            style={{
                                fontSize:17,
                                fontWeight:'bold',
                                color:'gray'
                            }}
                        >
                            Skilled


                        </Text>

                    </View>
                    <View
                        style={{
                            flex:1,
                            alignItems:'center',
                            justifyContent:'center',
                            borderBottomWidth:2,
                            borderColor:'white'
                        }}
                    >
                        <Text
                            style={{
                                fontSize:17,
                                fontWeight:'bold',
                                color:'gray'
                            }}
                        >
                            Beginnar


                        </Text>

                    </View>
                    
                </View>

                <View
                    style={{
                        flex:1,
                    }}
                >
                    <View
                        style={{flex:1}}
                    >
                        <Text
                            style={{
                                fontSize:18,
                                fontWeight:'bold',
                                margin:10
                            }}
                        >
                            Most Popular Trainings
                        </Text>

                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View>
                                <View
                                    style={{
                                        height:'65%',
                                        width:130,
                                        backgroundColor:'white',
                                        marginLeft:10,
                                        marginRight:10,
                                        borderRadius:10,
                                        alignItems:'center',
                                        justifyContent:'center',
                                        
                                    }}
                                >
                                    <Image
                                        style={{
                                            height:50,
                                            width:60,
                                        }}
                                        source={require('./src/images/notfound.png')}

                                    />

                                  
                                    


                                </View>
                                <Text
                                        style={{
                                            fontSize:16,
                                            fontWeight:'bold',
                                            marginLeft:10,
                                            marginTop:5,
                                        }}   >
                                        Split  Squat
                                    </Text>
                                    <Text
                                        style={{
                                            marginLeft:10,
                                            color:'gray'
                                        }}   >
                                        110 Hours
                                    </Text>
                            </View>

                            <View>
                                <View
                                    style={{
                                        height:'65%',
                                        width:130,
                                        backgroundColor:'white',
                                        marginLeft:10,
                                        marginRight:10,
                                        borderRadius:10,
                                        alignItems:'center',
                                        justifyContent:'center',
                                        
                                    }}
                                >
                                    <Image
                                        style={{
                                            height:50,
                                            width:60,
                                        }}
                                        source={require('./src/images/notfound.png')}

                                    />

                                  
                                    


                                </View>
                                <Text
                                        style={{
                                            fontSize:16,
                                            fontWeight:'bold',
                                            marginLeft:10,
                                            marginTop:5,
                                        }}   >
                                        flow Yoga
                                    </Text>
                                    <Text
                                        style={{
                                            marginLeft:10,
                                            color:'gray'
                                        }}   >
                                        120 Hours
                                    </Text>
                            </View>

                            <View>
                                <View
                                    style={{
                                        height:'65%',
                                        width:130,
                                        backgroundColor:'white',
                                        marginLeft:10,
                                        marginRight:10,
                                        borderRadius:10,
                                        alignItems:'center',
                                        justifyContent:'center',
                                        
                                    }}
                                >
                                    <Image
                                        style={{
                                            height:50,
                                            width:60,
                                        }}
                                        source={require('./src/images/notfound.png')}

                                    />

                                  
                                    


                                </View>
                                <Text
                                        style={{
                                            fontSize:16,
                                            fontWeight:'bold',
                                            marginLeft:10,
                                            marginTop:5,
                                        }}   >
                                        Split  Squat
                                    </Text>
                                    <Text
                                        style={{
                                            marginLeft:10,
                                            color:'gray'
                                        }}   >
                                        110 Hours
                                    </Text>
                            </View>

                            

                        </ScrollView>

                    </View>

                    <View
                        style={{flex:1}}
                    >
                         <Text
                            style={{
                                fontSize:18,
                                fontWeight:'bold',
                                margin:10,
                            }}
                        >
                            Just for you
                        </Text>

                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View>
                                <View
                                    style={{
                                        height:'65%',
                                        width:130,
                                        backgroundColor:'white',
                                        marginLeft:10,
                                        marginRight:10,
                                        borderRadius:10,
                                        alignItems:'center',
                                        justifyContent:'center',
                                        
                                    }}
                                >
                                    <Image
                                        style={{
                                            height:50,
                                            width:60,
                                        }}
                                        source={require('./src/images/notfound.png')}

                                    />

                                  
                                    


                                </View>
                                <Text
                                        style={{
                                            fontSize:16,
                                            fontWeight:'bold',
                                            marginLeft:10,
                                            marginTop:5,
                                        }}   >
                                        Split  Squat
                                    </Text>
                                    <Text
                                        style={{
                                            marginLeft:10,
                                            color:'gray'
                                        }}   >
                                        110 Hours
                                    </Text>
                            </View>

                            <View>
                                <View
                                    style={{
                                        height:'65%',
                                        width:130,
                                        backgroundColor:'white',
                                        marginLeft:10,
                                        marginRight:10,
                                        borderRadius:10,
                                        alignItems:'center',
                                        justifyContent:'center',
                                        
                                    }}
                                >
                                    <Image
                                        style={{
                                            height:50,
                                            width:60,
                                        }}
                                        source={require('./src/images/notfound.png')}

                                    />

                                  
                                    


                                </View>
                                <Text
                                        style={{
                                            fontSize:16,
                                            fontWeight:'bold',
                                            marginLeft:10,
                                            marginTop:5,
                                        }}   >
                                        flow Yoga
                                    </Text>
                                    <Text
                                        style={{
                                            marginLeft:10,
                                            color:'gray'
                                        }}   >
                                        120 Hours
                                    </Text>
                            </View>

                            <View>
                                <View
                                    style={{
                                        height:'65%',
                                        width:130,
                                        backgroundColor:'white',
                                        marginLeft:10,
                                        marginRight:10,
                                        borderRadius:10,
                                        alignItems:'center',
                                        justifyContent:'center',
                                        
                                    }}
                                >
                                    <Image
                                        style={{
                                            height:50,
                                            width:60,
                                        }}
                                        source={require('./src/images/notfound.png')}

                                    />

                                  
                                    


                                </View>
                                <Text
                                        style={{
                                            fontSize:16,
                                            fontWeight:'bold',
                                            marginLeft:10,
                                            marginTop:5,
                                        }}   >
                                        Split  Squat
                                    </Text>
                                    <Text
                                        style={{
                                            marginLeft:10,
                                            color:'gray'
                                        }}   >
                                        110 Hours
                                    </Text>
                            </View>

                            

                        </ScrollView>
                        

                    </View>

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