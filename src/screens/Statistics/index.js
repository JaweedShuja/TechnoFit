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
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
 
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
                    Statistics

                </Text>
               

            </View>
           
            <View style={{flex:8, paddingBottom:10, marginHorizontal:5}}>
                <View 
                    style={{
                        flex:6, 

                    }}
                >
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                    }}>
                        <Text
                        style={{
                            fontWeight:'bold',
                            fontSize:16,
                            marginLeft:'5%',
                        }}
                    >Heart Rate</Text>

                    <View style={{
                        height:35,
                        width:35,
                        backgroundColor:'black',
                        position:'absolute',
                        right:'5%',
                        borderRadius:70,
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                         <Image
                            style={{
                                height:20,
                                width:20,
                            }}
                            source={require('./src/images/heartIcon.png')}

                        />

                    </View>

                    </View>
                    
                    <View style={{
                        height:'80%',
                        width:'90%',
                        backgroundColor:'white',
                        borderRadius:10, 
                        position:'absolute',
                        bottom:10, 
                        alignSelf:'center',


                    }}>
                        <View style={{
                            flexDirection:'row',
                            flex:1,
                            alignItems:'center',
                            justifyContent:'space-around',
                            paddingTop:5
                        }}>
                            <View>
                                <Text style={{
                                    fontSize:14, fontWeight:'bold', color:'gray'
                                }}>
                                    Days
                                </Text>
                                <View style={{height:5, width:5, borderRadius:70, backgroundColor:'white', alignSelf:'center', marginTop:5}}>

                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize:14, fontWeight:'bold', color:'black'
                                }}>
                                    Weeks
                                </Text>
                                <View style={{height:5, width:5, borderRadius:70, backgroundColor:'red', alignSelf:'center', marginTop:5}}>

                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize:14, fontWeight:'bold', color:'gray',
                                }}>
                                    Months
                                </Text>
                                <View style={{height:5, width:5, borderRadius:70, backgroundColor:'white', alignSelf:'center', marginTop:5}}>

                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize:14, fontWeight:'bold', color:'gray'
                                }}>
                                    Years
                                </Text>
                                <View style={{height:5, width:5, borderRadius:70, backgroundColor:'white', alignSelf:'center', marginTop:5}}>

                                </View>
                            </View>


                        </View>
                        <View
                            style={{
                                flex:4,
                            }}
                        >
                               <LineChart
                style={{ height: '100%', width:'90%', alignSelf:'center' }}
                data={data}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{  bottom: 10, top:10 }}
                curve={shape.curveNatural}
            >
                <Grid />
            </LineChart>

                        </View>
                        <View
                            style={{
                                flex:1,
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'space-around',
                                paddingBottom:5,
                                paddingHorizontal:5,
                            }}
                        >

<View>
                                <Text style={{
                                    fontSize:12,  color:'gray'
                                }}>
                                    7:00AM
                                </Text>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize:12,  color:'gray'
                                }}>
                                    8:00AM
                                </Text>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize:12,  color:'gray',
                                }}>
                                    9:00AM
                                </Text>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize:12,  color:'gray'
                                }}>
                                    10:00AM
                                </Text>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize:12,  color:'gray'
                                }}>
                                    11:00AM
                                </Text>
                            </View>


                        </View>

                  

                       

                    </View>

                </View>

                <View 
                    style={{
                        flex:4,
                        flexDirection:'row',
                    }}
                >
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >

                        <View style={{
                            height:'90%',
                            width:150,
                            backgroundColor:'#6e4d88', 
                            borderRadius:10,
                            margin:10,
                            justifyContent:'space-around'

                            

                        }}>

                            <View
                                style={{
                                    flexDirection:'row'
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize:16, 
                                        fontWeight:'bold',
                                        marginLeft:15,
                                        color:'white'
                                    }}
                                >Steps</Text>

                                <View style={{
                                    height:25,
                                    width:25,
                                    borderRadius:70,
                                    backgroundColor:'#6e4d88',
                                    position:'absolute',
                                    right:10,
                                    borderWidth:1,
                                    borderColor:'white',
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>
                                    <Image
                                        style={{
                                            width:15, 
                                            height:15
                                        }}
                                        source={require('./src/images/Shoe.png')}

                                    />
                                    
                                </View>
                            </View>

                            <View style={{
                                alignItems:'center',
                                justifyContent:'center'
                            }}>
                            <ProgressCircle
                                        percent={66}
                                        radius={45}
                                        borderWidth={8}
                                        color="white"
                                        shadowColor="#785d8d"
                                        bgColor="#6e4d88"
                                    >
                                        <View>
                                            <Text style={{ 
                                                fontSize: 16, 
                                                fontWeight:'bold', 
                                                color:'white'
                                            }}>66%</Text>

                                        </View>
                                    </ProgressCircle>
                            </View>

                            <View style={{
                                flexDirection:'row'
                            }}>
                                <Text 
                                    style={{
                                        fontSize:14,
                                        fontWeight:'bold',
                                        marginLeft:15,
                                        color:'white'
                                    }}
                                >
                                    3215
                                </Text>
                                <Text
                                    style={{
                                        color:'lightgray',
                                        fontSize:12,
                                        alignSelf:'flex-end',
                                        marginLeft:3
                                    }}
                                >
                                    steps
                                </Text>

                            </View>

                            

                        </View>
                        <View style={{
                            height:'90%',
                            width:150,
                            backgroundColor:'#5aabfc', 
                            borderRadius:10,
                            margin:10,
                            justifyContent:'space-around'
                        }}>
                             <View
                                style={{
                                    flexDirection:'row'
                                }}
                             >
                                <Text
                                    style={{
                                        fontSize:16, 
                                        fontWeight:'bold',
                                        marginLeft:15,
                                        color:'white'
                                    }}
                                >Water</Text>

                                <View style={{
                                    height:25,
                                    width:25,
                                    borderRadius:70,
                                    backgroundColor:'#5aabfc',
                                    position:'absolute',
                                    right:10, 
                                    alignItems:'center',
                                    justifyContent:'center',
                                    borderWidth:1,
                                    borderColor:'white'
                                }}>

                                    <Image
                                        style={{
                                            width:15, 
                                            height:15
                                        }}
                                        source={require('./src/images/waterDrop.png')}

                                    />
                                    

                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection:'row', 
                                    alignItems:'center',
                                    marginHorizontal:20,
                                    justifyContent:'space-around'
                                }}
                            >
                                <View
                                    style={{
                                        height:40,
                                        width:3,
                                        backgroundColor:'lightblue'
                                    }}
                                >

                                </View>

                                <View
                                    style={{
                                        height:60,
                                        width:3,
                                        backgroundColor:'white'
                                    }}
                                >

                                </View>

                                <View
                                    style={{
                                        height:40,
                                        width:3,
                                        backgroundColor:'lightgray'
                                    }}
                                >

                                </View>

                                <View
                                    style={{
                                        height:30,
                                        width:3,
                                        backgroundColor:'white'
                                    }}
                                >

                                </View>

                                <View
                                    style={{
                                        height:40,
                                        width:3,
                                        backgroundColor:'lightgray'
                                    }}
                                >

                                </View>

                                <View
                                    style={{
                                        height:20,
                                        width:3,
                                        backgroundColor:'white'
                                    }}
                                >

                                </View>

                                <View
                                    style={{
                                        height:25,
                                        width:3,
                                        backgroundColor:'lightgray'
                                    }}
                                >

                                </View>

                                <View
                                    style={{
                                        height:10,
                                        width:3,
                                        backgroundColor:'#7fc0fe'
                                    }}
                                >

                                </View>

                                <View
                                    style={{
                                        height:5,
                                        width:3,
                                        backgroundColor:'white'
                                    }}
                                >

                                </View>

                                <View
                                    style={{
                                        height:5,
                                        width:3,
                                        backgroundColor:'white'
                                    }}
                                >

                                </View>

                                <View
                                    style={{
                                        height:5,
                                        width:3,
                                        backgroundColor:'white'
                                    }}
                                >

                                </View>

                                

                            </View>

                            <View style={{
                                flexDirection:'row'
                            }}>
                                <Text 
                                    style={{
                                        fontSize:14,
                                        fontWeight:'bold',
                                        marginLeft:15, 
                                        color:'white'
                                    }}
                                >
                                    6
                                </Text>
                                <Text
                                    style={{
                                        color:'lightgray',
                                        fontSize:12,
                                        alignSelf:'flex-end',
                                        marginLeft:3
                                    }}
                                >
                                    cups
                                </Text>

                            </View>


                        </View>
                        <View style={{
                            height:'90%',
                            width:150,
                            backgroundColor:'#fcc547', 
                            borderRadius:10,
                            margin:10,
                            justifyContent:'space-around'
                        }}>
                             <View
                                style={{
                                    flexDirection:'row'
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize:16, 
                                        fontWeight:'bold',
                                        marginLeft:15,
                                        color:'white'
                                    }}
                                >Sleep</Text>

                                <View style={{
                                    height:25,
                                    width:25,
                                    borderRadius:70,
                                    backgroundColor:'#fcc836',
                                    position:'absolute',
                                    right:10,
                                    borderWidth:1,
                                    borderColor:'white',
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>
                                     <Image
                                        style={{
                                            width:15, 
                                            height:15
                                        }}
                                        source={require('./src/images/moon.png')}

                                    />
                                    
                                </View>

                                
                            </View>

                            

                            <View >
                                <Text 
                                    style={{
                                        fontSize:14,
                                        fontWeight:'bold',
                                        marginLeft:15,
                                        color:'white'
                                    }}
                                >
                                    8:30
                                </Text>
                                <Text
                                    style={{
                                        color:'white',
                                        fontSize:12,
                                        marginLeft:15
                                    }}
                                >
                                    Hours
                                </Text>

                            </View>

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