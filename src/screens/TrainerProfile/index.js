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
 import SwitchToggle from "react-native-switch-toggle";


 

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };

       
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

            
            

                
                <Text style={{
                    color:'#44474f',
                    fontSize:25,
                    fontWeight:'bold',
                    marginLeft:10
                }}>
                    Profile

                </Text>

                
                <TouchableOpacity style={{ position:'absolute',
                    right:50}}>
                    <Image
                    style={{
                        height:25, 
                        width:25, 
                    
                    }}
                    source={require('./src/images/54810svg.png')}
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
                    width:'95%',
                    height:130,
                    alignSelf:'center',
                    flexDirection:'row',
                }}
               >
                   <View
                    style={{flex:2}}>

                        <View
                            style={{
                                height:130,
                                width:130,
                                backgroundColor:'white',
                                borderRadius:10, 
                                
                                alignItems:'center',
                                justifyContent:'center',
                            }}
                        >
                            <Image
                                style={{height:50,width:63,}}

                                source={require('./src/images/notfound.png')}

                            />

                        </View>

                   </View>
                  
                   <View
                    style={{
                        flex:3,
                        justifyContent:'space-around'
                    }}
                   >
                       <Text
                        style={{
                            fontSize:18, 
                            fontWeight:'bold',
                            marginLeft:20,
                        }}
                       >

                           John Anderson
                       </Text>

                       <View
                        style={{
                            height:50,
                            marginHorizontal:20,
                            flexDirection:'row',
                        }}
                       
                       >
                           <View
                         style={{
                             flex:1,
                             justifyContent:'center'
                         }}  
                         >
                               <Text
                                style={{
                                    fontWeight:'bold',

                                }}
                               >
                                 2931
                             </Text>
                             <Text
                                style={{
                                    fontSize:12,
                                    color:'gray'
                                    
                                }}
                               >
                                 Followers
                             </Text>

                           </View>
                           <View
                         style={{
                             flex:1,
                             justifyContent:'center'
                         }}  
                         >
                             <Text
                                style={{
                                    fontWeight:'bold',

                                }}
                               >
                                 215
                             </Text>
                             <Text
                                style={{
                                    fontSize:12,
                                    color:'gray'
                                    
                                }}
                               >
                                 Followings
                             </Text>
                           

                           </View>

                       </View>

                       <View
                        style={{
                            height:3,
                            marginHorizontal:20,
                            flexDirection:'row',
                        }}
                       >
                           <View
                            style={{
                                flex:3,
                                height:'100%',
                                backgroundColor:'red'
                            }}
                           >

                           </View>
                           <View
                            style={{
                                flex:1,
                                height:'100%',
                                backgroundColor:'gray'
                            }}
                           >

                           </View>

                       </View>

                       <View
                        style={{
                            flexDirection:'row',
                            marginHorizontal:20
                        }}
                       >
                           <Text
                           style={{
                               fontWeight:'bold',
                               
                           }}
                           >
                               Skilled
                           </Text>

                           <Text
                            style={{
                                fontSize:12,  color:'gray', 
                                alignSelf:'center',
                                position:'absolute',
                                right:0
                            }}  
                        >
                            110 Hours

                           </Text>

                       </View>

                   </View>


                   

               </View>

               <Text
                style={{
                    fontSize:16,
                    fontWeight:'bold',
                    marginLeft:10,
                    marginTop:10
                }}
               >
                   Trainings
               </Text>

               <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
               >

                <View
                    style={{
                        height:70,
                        width:200,
                        marginLeft:10,
                        marginTop:10,
                        flexDirection:'row',
                    }}
                >

                    <View
                        style={{
                            height:60,
                            width:60,
                            backgroundColor:'white',
                            alignSelf:'center',
                            borderRadius:10,
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                    >
                        <Image
                            style={{
                                height:20,
                                width:25,
                            }}
                            source={require('./src/images/notfound.png')}

                        />

                    </View>
                    <View

                            style={{marginLeft:10, alignSelf:'center'}}
                    >
                        <Text
                            style={{
                                fontWeight:'bold',
                                fontSize:16
                            }}

                        >
                            Cardio Exercise

                        </Text>
                        <Text
                            style={{
                                color:'gray'
                            }}

                        >
                            5 days ago

                        </Text>

                    </View>

                </View>

                <View
                    style={{
                        height:70,
                        width:200,
                        marginLeft:10,
                        marginTop:10,
                        flexDirection:'row',
                    }}
                >

                    <View
                        style={{
                            height:60,
                            width:60,
                            backgroundColor:'white',
                            alignSelf:'center',
                            borderRadius:10,
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                    >
                        <Image
                            style={{
                                height:20,
                                width:25,
                            }}
                            source={require('./src/images/notfound.png')}

                        />

                    </View>
                    <View

                            style={{marginLeft:10, alignSelf:'center'}}
                    >
                        <Text
                            style={{
                                fontWeight:'bold',
                                fontSize:16
                            }}

                        >
                            Cardio Exercise

                        </Text>
                        <Text
                            style={{
                                color:'gray'
                            }}

                        >
                            5 days ago

                        </Text>

                    </View>

                </View>

                <View
                    style={{
                        height:70,
                        width:200,
                        marginLeft:10,
                        marginTop:10,
                        flexDirection:'row',
                    }}
                >

                    <View
                        style={{
                            height:60,
                            width:60,
                            backgroundColor:'white',
                            alignSelf:'center',
                            borderRadius:10,
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                    >
                        <Image
                            style={{
                                height:20,
                                width:25,
                            }}
                            source={require('./src/images/notfound.png')}

                        />

                    </View>
                    <View

                            style={{marginLeft:10, alignSelf:'center'}}
                    >
                        <Text
                            style={{
                                fontWeight:'bold',
                                fontSize:16
                            }}

                        >
                            Cardio Exercise

                        </Text>
                        <Text
                            style={{
                                color:'gray'
                            }}

                        >
                            5 days ago

                        </Text>

                    </View>

                </View>



               </ScrollView>

               <Text
                style={{
                    fontSize:16,
                    fontWeight:'bold',
                    marginLeft:10
                }}
               >
                   Photos


               </Text>

               <ScrollView
                showsVerticalScrollIndicator={false}
               >

                            <View
                                style={{flexDirection:'row', height:120}}
                            >
                                <View
                                    style={{flex:1,
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }}
                                >
                                    <View
                                        style={{height:90, width:90, borderRadius:10, alignItems:'center', justifyContent:'center', backgroundColor:'white'}}
                                    >
                                        <Image
                                        style={{
                                            height:40,
                                            width:50
                                        }}
                                        source={require('./src/images/notfound.png')}

                                        />

                                    </View>
                                    
                                </View><View
                                    style={{flex:1,
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }}
                                >
                                    <View
                                        style={{height:90, width:90, borderRadius:10, alignItems:'center', justifyContent:'center', backgroundColor:'white'}}
                                    >
                                        <Image
                                        style={{
                                            height:40,
                                            width:50
                                        }}
                                        source={require('./src/images/notfound.png')}

                                        />

                                    </View>
                                    
                                </View><View
                                    style={{flex:1,
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }}
                                >
                                    <View
                                        style={{height:90, width:90, borderRadius:10, alignItems:'center', justifyContent:'center', backgroundColor:'white'}}
                                    >
                                        <Image
                                        style={{
                                            height:40,
                                            width:50
                                        }}
                                        source={require('./src/images/notfound.png')}

                                        />

                                    </View>
                                    
                                </View>

                            </View>

                            <View
                                style={{flexDirection:'row', height:120}}
                            >
                                <View
                                    style={{flex:1,
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }}
                                >
                                    <View
                                        style={{height:90, width:90, borderRadius:10, alignItems:'center', justifyContent:'center', backgroundColor:'white'}}
                                    >
                                        <Image
                                        style={{
                                            height:40,
                                            width:50
                                        }}
                                        source={require('./src/images/notfound.png')}

                                        />

                                    </View>
                                    
                                </View><View
                                    style={{flex:1,
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }}
                                >
                                    <View
                                        style={{height:90, width:90, borderRadius:10, alignItems:'center', justifyContent:'center', backgroundColor:'white'}}
                                    >
                                        <Image
                                        style={{
                                            height:40,
                                            width:50
                                        }}
                                        source={require('./src/images/notfound.png')}

                                        />

                                    </View>
                                    
                                </View><View
                                    style={{flex:1,
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }}
                                >
                                    <View
                                        style={{height:90, width:90, borderRadius:10, alignItems:'center', justifyContent:'center', backgroundColor:'white'}}
                                    >
                                        <Image
                                        style={{
                                            height:40,
                                            width:50
                                        }}
                                        source={require('./src/images/notfound.png')}

                                        />

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