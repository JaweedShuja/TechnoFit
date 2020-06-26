import React, { Component } from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput
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

                <Image
                    style={{
                        height:40,
                        width:40,

                    }}
                    source={require('./src/images/backIcon.png')}
                
                />

                <Text style={{
                    color:'#44474f',
                    fontSize:25,
                    fontWeight:'bold', 
                    marginLeft:15,
                }}>
                    Search

                </Text>
                

                
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
                        height:45,
                        width:'90%',
                        backgroundColor:'lightgray', 
                        alignSelf:'center',
                        borderRadius:33,
                        flexDirection:'row',
                    }}
                >

                    <Image
                        style={{
                            height:20, 
                            width:20, 
                            alignSelf:'center',
                            marginLeft:10,
                            opacity:0.5
                        }}
                        source={require('./src/images/search.png')}
                    />

                    <TextInput
                        placeholder="Search"
                        style={{
                            fontSize:16,
                            marginLeft:5
                        }}
                    />




                </View>

                
              

              

                    <View
                    >
                        <Text
                            style={{
                                fontSize:18,
                                fontWeight:'bold',
                                margin:10,
                                marginBottom:10
                            }}
                        >
                            Popular Courses
                        </Text>

                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View>
                                <View
                                    style={{
                                        height:100,
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
                                            marginLeft:15,
                                            marginTop:5,
                                        }}   >
                                        Split  Squat
                                    </Text>
                                    <Text
                                        style={{
                                            marginLeft:15,
                                            color:'gray'
                                        }}   >
                                        110 Hours
                                    </Text>
                            </View>

                            <View>
                                <View
                                    style={{
                                        height:100,
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
                                            marginLeft:15,
                                            marginTop:5,
                                        }}   >
                                        flow Yoga
                                    </Text>
                                    <Text
                                        style={{
                                            marginLeft:15,
                                            color:'gray'
                                        }}   >
                                        120 Hours
                                    </Text>
                            </View>

                            <View>
                                <View
                                    style={{
                                        height:100,
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
                                            marginLeft:15,
                                            marginTop:5,
                                        }}   >
                                        Split  Squat
                                    </Text>
                                    <Text
                                        style={{
                                            marginLeft:15,
                                            color:'gray'
                                        }}   >
                                        110 Hours
                                    </Text>
                            </View>

                            

                        </ScrollView>
                        

                    </View>

                    <Text
                            style={{
                                fontSize:18,
                                fontWeight:'bold',
                                margin:10,
                                marginBottom:10
                            }}
                        >
                            Top Trainers
                        </Text>

                        <ScrollView>
                            <View
                                style={{
                                    flexDirection:'row',
                                    height:70, 
                                    marginHorizontal:10,
                                }}
                            >
                                <View
                                    style={{
                                        height:60,
                                        width:60,
                                        backgroundColor:'white',
                                        borderRadius:10,
                                        alignSelf:'center',
                                        alignItems:'center',
                                        justifyContent:'center',
                                    }}
                                >
                                    <Image
                                        source={require('./src/images/notfound.png')}
                                        style={{height:26, width:33}}

                                    />
                                    

                                </View>
                                <View
                                        style={{
                                            height:60,
                                            width:100,
                                            alignSelf:'center',
                                            marginLeft:20,
                                            justifyContent:'space-around'
                                        }}
                                    >
                                        <Text
                                            style={{fontWeight:'bold'}}

                                        >
                                            Kelly Lowis

                                        </Text>

                                        <Text
                                            style={{color:'gray', fontSize:12}}

                                        >
                                            Ruving Coach

                                        </Text>


                                        <Text>
                                            <Text
                                                style={{
                                                    color:'#fcc542'
                                                }}
                                            >
                                            ★★★★
                                            </Text>
                                            <Text
                                                style={{color:'gray'}}
                                            >
                                            ★
                                            </Text>
                                        </Text>

                                    </View>

                                    <View
                                        style={{
                                            height:40,
                                            width:60,
                                            alignSelf:'center',
                                            position:'absolute',
                                            right:0
                                        }}
                                    >

                                        <Text
                                            style={{
                                                fontWeight:'bold',
                                            }}
                                        >
                                            2.1K

                                        </Text>
                                        <Text
                                            style={{
                                                color:'gray', 
                                                fontSize:12
                                            }}
                                        >
                                            Followers

                                        </Text>

                                    </View>

                            </View>

                            <View
                                style={{
                                    flexDirection:'row',
                                    height:70, 
                                    marginHorizontal:10,
                                }}
                            >
                                <View
                                    style={{
                                        height:60,
                                        width:60,
                                        backgroundColor:'white',
                                        borderRadius:10,
                                        alignSelf:'center',
                                        alignItems:'center',
                                        justifyContent:'center',
                                    }}
                                >
                                    <Image
                                        source={require('./src/images/notfound.png')}
                                        style={{height:26, width:33}}

                                    />
                                    

                                </View>
                                <View
                                        style={{
                                            height:60,
                                            width:100,
                                            alignSelf:'center',
                                            marginLeft:20,
                                            justifyContent:'space-around'
                                        }}
                                    >
                                        <Text
                                            style={{fontWeight:'bold'}}

                                        >
                                            Kelly Lowis

                                        </Text>

                                        <Text
                                            style={{color:'gray', fontSize:12}}

                                        >
                                            Ruving Coach

                                        </Text>


                                        <Text>
                                            <Text
                                                style={{
                                                    color:'#fcc542'
                                                }}
                                            >
                                            ★★★★
                                            </Text>
                                            <Text
                                                style={{color:'gray'}}
                                            >
                                            ★
                                            </Text>
                                        </Text>

                                    </View>

                                    <View
                                        style={{
                                            height:40,
                                            width:60,
                                            alignSelf:'center',
                                            position:'absolute',
                                            right:0
                                        }}
                                    >

                                        <Text
                                            style={{
                                                fontWeight:'bold',
                                            }}
                                        >
                                            2.1K

                                        </Text>
                                        <Text
                                            style={{
                                                color:'gray', 
                                                fontSize:12
                                            }}
                                        >
                                            Followers

                                        </Text>

                                    </View>

                            </View>

                            <View
                                style={{
                                    flexDirection:'row',
                                    height:70, 
                                    marginHorizontal:10,
                                }}
                            >
                                <View
                                    style={{
                                        height:60,
                                        width:60,
                                        backgroundColor:'white',
                                        borderRadius:10,
                                        alignSelf:'center',
                                        alignItems:'center',
                                        justifyContent:'center',
                                    }}
                                >
                                    <Image
                                        source={require('./src/images/notfound.png')}
                                        style={{height:26, width:33}}

                                    />
                                    

                                </View>
                                <View
                                        style={{
                                            height:60,
                                            width:100,
                                            alignSelf:'center',
                                            marginLeft:20,
                                            justifyContent:'space-around'
                                        }}
                                    >
                                        <Text
                                            style={{fontWeight:'bold'}}

                                        >
                                            Kelly Lowis

                                        </Text>

                                        <Text
                                            style={{color:'gray', fontSize:12}}

                                        >
                                            Ruving Coach

                                        </Text>


                                        <Text>
                                            <Text
                                                style={{
                                                    color:'#fcc542'
                                                }}
                                            >
                                            ★★★★
                                            </Text>
                                            <Text
                                                style={{color:'gray'}}
                                            >
                                            ★
                                            </Text>
                                        </Text>

                                    </View>

                                    <View
                                        style={{
                                            height:40,
                                            width:60,
                                            alignSelf:'center',
                                            position:'absolute',
                                            right:0
                                        }}
                                    >

                                        <Text
                                            style={{
                                                fontWeight:'bold',
                                            }}
                                        >
                                            2.1K

                                        </Text>
                                        <Text
                                            style={{
                                                color:'gray', 
                                                fontSize:12
                                            }}
                                        >
                                            Followers

                                        </Text>

                                    </View>

                            </View>

                            <View
                                style={{
                                    flexDirection:'row',
                                    height:70, 
                                    marginHorizontal:10,
                                }}
                            >
                                <View
                                    style={{
                                        height:60,
                                        width:60,
                                        backgroundColor:'white',
                                        borderRadius:10,
                                        alignSelf:'center',
                                        alignItems:'center',
                                        justifyContent:'center',
                                    }}
                                >
                                    <Image
                                        source={require('./src/images/notfound.png')}
                                        style={{height:26, width:33}}

                                    />
                                    

                                </View>
                                <View
                                        style={{
                                            height:60,
                                            width:100,
                                            alignSelf:'center',
                                            marginLeft:20,
                                            justifyContent:'space-around'
                                        }}
                                    >
                                        <Text
                                            style={{fontWeight:'bold'}}

                                        >
                                            Kelly Lowis

                                        </Text>

                                        <Text
                                            style={{color:'gray', fontSize:12}}

                                        >
                                            Ruving Coach

                                        </Text>


                                        <Text>
                                            <Text
                                                style={{
                                                    color:'#fcc542'
                                                }}
                                            >
                                            ★★★★
                                            </Text>
                                            <Text
                                                style={{color:'gray'}}
                                            >
                                            ★
                                            </Text>
                                        </Text>

                                    </View>

                                    <View
                                        style={{
                                            height:40,
                                            width:60,
                                            alignSelf:'center',
                                            position:'absolute',
                                            right:0
                                        }}
                                    >

                                        <Text
                                            style={{
                                                fontWeight:'bold',
                                            }}
                                        >
                                            2.1K

                                        </Text>
                                        <Text
                                            style={{
                                                color:'gray', 
                                                fontSize:12
                                            }}
                                        >
                                            Followers

                                        </Text>

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