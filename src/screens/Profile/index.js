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
 import Drawer from 'react-native-drawer'


 

class App extends Component {
    static navigationOptions = {
        headerShown : null
    }
    constructor(props) {
        super(props);
        this.state = {
            menuItems:[
                'Dashboard',
                'Goal',
                'Training',
                'Profile',
                'Notifications',
                'My Videos',
                'Photos',
                'Statistics',
                'Settings',
            ]
        };

       
      }
     
      closeControlPanel = () => {
        this._drawer.close()
        };
        openControlPanel = () => {
        this._drawer.open()
        };
   render() {
    let items = []

    items.push(
        <View
          style={{
              flex:8,
              justifyContent:'space-around',
          }}
        >
            {
                this.state.menuItems.map((item, index) => {
                return <TouchableOpacity
                
                onPress={() => { item == 'Profile' ?  this.closeControlPanel() :
                    this.props.navigation.navigate(`${item}`)
                }}
                
                  style={{flexDirection:'row'}}
                >
                    <Image

                      style={{
                          height:20, width:20, marginLeft:20
                      }}
                      source={require('../../images/dashboardIcon.png')}


                    />
                    <Text
                      style={{
                          fontSize:16,
                          fontWeight:'bold',
                          marginLeft:10,
                      }}
                    >
                        {item}
                    </Text>

            </TouchableOpacity>})
                }
            

        </View>
    )
 
       return (
        <View style={styles.container}> 
        {/* header */}
        <Drawer
            type="overlay"
             content={<View style={{ flex:1, height:'100%', backgroundColor:'white'}}>
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
                    marginLeft:20
                }}>
                    Menu

                </Text>

                
               
                

                
                    <TouchableOpacity 
                        onPress={() => this.closeControlPanel()}
                    style={{ 
                        position:'absolute',
                        right:10,
                        height:30,
                        width:30,
                        backgroundColor:'#f1f0f3', 
                        borderRadius:70,
                        alignItems:'center',
                        justifyContent:'center',
                        }}>

                        <Image
                            style={{height:15, width:15}}
                            source={require('../../images/cross.png')}
                        />
                            
                    
                </TouchableOpacity>
               

            </View>
           
            <View style={{flex:8, paddingBottom:10}}>
              {items}
              
              <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
                style={{
                    flex:1,
                    backgroundColor:'#ff714a',
                    margin:15,
                    borderRadius:5,
                    alignItems:'center',
                    justifyContent:'center',
                }}
              >
                  <Text
                    style={{fontSize:18, fontWeight:'bold', color:'white'}}
                  >
                      Log Out

                  </Text>

              </TouchableOpacity>
            </View>
             
             

         </View>}
            // tapToClose={true}
            openDrawerOffset={0}
            panCloseMask={0.2}
            closedDrawerOffset={-3}
            side={'right'}
            tweenHandler={(ratio) => ({
                main: { opacity:(2-ratio)/2 }
            })}
            ref={(ref) => this._drawer = ref}
        >
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
                    source={require('../../images/54810svg.png')}
                    />
                </TouchableOpacity>
                

                
                    <TouchableOpacity 
                    onPress={() => this.openControlPanel()}
                    style={{ position:'absolute',
                    right:10}}>
                    <Image
                    style={{
                        height:25, 
                        width:25, 
                    
                    }}
                    source={require('../../images/drawer.png')}
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

                                source={require('../../images/notfound.png')}

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
                            source={require('../../images/notfound.png')}

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
                            source={require('../../images/notfound.png')}

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
                            source={require('../../images/notfound.png')}

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
                                        source={require('../../images/notfound.png')}

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
                                        source={require('../../images/notfound.png')}

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
                                        source={require('../../images/notfound.png')}

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
                                        source={require('../../images/notfound.png')}

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
                                        source={require('../../images/notfound.png')}

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
                                        source={require('../../images/notfound.png')}

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
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Dashboard')}
                    >

                    <Image

                        style={{
                            height:30,
                            width:30,
                        }}
                        source={require('../../images/dashboardIcon.png')}


                    />
                    </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Statistics')}
                        >
                    <Image

                    style={{
                        height:30,
                        width:30,
                    }}
                    source={require('../../images/signalIcon.png')}


                    />
                    </TouchableOpacity>

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

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Training')}
                >
                    <Image

                    style={{
                        height:30,
                        width:30,
                    }}
                    source={require('../../images/dumbellIcon.png')}


                    />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Profile')}
                    >
                    <Image

                        style={{
                            height:20,
                            width:20,
                            tintColor:'#f67953'
                        }}
                        source={require('../../images/profile.png')}


                    />
                    </TouchableOpacity>

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
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('AllCourses')}
                style={{
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
            </Drawer>
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