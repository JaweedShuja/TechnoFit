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
import Drawer from 'react-native-drawer'
const Percentage = 66;
import ControlPanel from '../ControlPanel'
 
class App extends Component {
    static navigationOptions = {
        headerShown : null
    }
    constructor(props){
        super(props)

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
        }
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
                
                onPress={() => { item == 'Dashboard' ?  this.closeControlPanel() :
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
        {/* header */}
            <View 
                style={{
                    flex:1, 
                    alignItems:'center', 
                    flexDirection:'row'
                }}>
                <Text style={{
                    color:'#44474f',
                    fontSize:30,
                    fontWeight:'bold', 
                    marginLeft:15,
                }}>
                    Dashboard

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
            <View style={{flex:1}}>
                <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity>
                    <Text style={{fontSize:18, fontWeight:'bold', marginVertical:15, marginHorizontal:15}}>
                        Today
                    </Text>
                    <View style={{
                        height:7, 
                        width:7, 
                        borderRadius:70,
                        marginBottom:20,
                        backgroundColor:'red',
                        alignSelf:'center', 
                        marginTop:-10
                    }}>

                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={{fontSize:18, color:'gray',fontWeight:'bold', marginVertical:15, marginHorizontal:15}}>
                        Week
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={{fontSize:18,color:'gray', fontWeight:'bold', marginVertical:15, marginHorizontal:15}}>
                        Month
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={{fontSize:18,color:'gray', fontWeight:'bold', marginVertical:15, marginHorizontal:15}}>
                        3 Months
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={{fontSize:18, color:'gray', fontWeight:'bold', marginVertical:15, marginHorizontal:15}}>
                        6 Months
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={{fontSize:18, color:'gray', fontWeight:'bold', marginVertical:15, marginHorizontal:15}}>
                        Year
                    </Text>
                    </TouchableOpacity>
                    


                </ScrollView>

            </View>
            <View style={{flex:8, flexDirection:'row', paddingBottom:10, marginHorizontal:5}}>
                <View style={{flex:1, }}>
                    <View style={{flex:2, alignItems:'center', justifyContent:'center'}}>
                        <View style={{
                            height:'90%',
                            width:'80%',
                            backgroundColor:'white', 
                            borderRadius:25,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                            justifyContent:'space-around',

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
                                    }}
                                >Heart</Text>

                                <View style={{
                                    height:25,
                                    width:25,
                                    borderRadius:70,
                                    backgroundColor:'#f67953',
                                    position:'absolute',
                                    right:10, 
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>

                                    <Image
                                        style={{
                                            width:15, 
                                            height:15
                                        }}
                                        source={require('../../images/heartIcon.png')}

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
                                        backgroundColor:'red'
                                    }}
                                >

                                </View>

                                <View
                                    style={{
                                        height:60,
                                        width:3,
                                        backgroundColor:'orange'
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
                                        height:40,
                                        width:3,
                                        backgroundColor:'red'
                                    }}
                                >

                                </View>

                                <View
                                    style={{
                                        height:60,
                                        width:3,
                                        backgroundColor:'orange'
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
                                        height:40,
                                        width:3,
                                        backgroundColor:'red'
                                    }}
                                >

                                </View>

                                <View
                                    style={{
                                        height:60,
                                        width:3,
                                        backgroundColor:'orange'
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

                            </View>

                            <View style={{
                                flexDirection:'row'
                            }}>
                                <Text 
                                    style={{
                                        fontSize:14,
                                        fontWeight:'bold',
                                        marginLeft:15
                                    }}
                                >
                                    120
                                </Text>
                                <Text
                                    style={{
                                        color:'lightgray',
                                        fontSize:12,
                                        alignSelf:'flex-end',
                                        marginLeft:3
                                    }}
                                >
                                    bmp
                                </Text>

                            </View>

                        </View>

                    </View>
                    <View style={{flex:2, alignItems:'center', justifyContent:'center'}}>
                        <View style={{
                            height:'90%',
                            width:'80%',
                            backgroundColor:'white', 
                            borderRadius:25,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,
                            elevation: 3,
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
                                    }}
                                >Water</Text>

                                <View style={{
                                    height:25,
                                    width:25,
                                    borderRadius:70,
                                    backgroundColor:'lightblue',
                                    position:'absolute',
                                    right:10, 
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>

                                    <Image
                                        style={{
                                            width:15, 
                                            height:15
                                        }}
                                        source={require('../../images/waterDrop.png')}

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
                                        backgroundColor:'#7fc0fe'
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
                                        backgroundColor:'#7fc0fe'
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
                                        backgroundColor:'#7fc0fe'
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
                                        backgroundColor:'gray'
                                    }}
                                >

                                </View>

                                <View
                                    style={{
                                        height:5,
                                        width:3,
                                        backgroundColor:'gray'
                                    }}
                                >

                                </View>

                                <View
                                    style={{
                                        height:5,
                                        width:3,
                                        backgroundColor:'gray'
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
                                        marginLeft:15
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

                    </View>
                    <View style={{flex:1.5, alignItems:'center', justifyContent:'center'}}>
                        <View style={{
                            height:'90%',
                            width:'80%',
                            backgroundColor:'white', 
                            borderRadius:25,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,
                            elevation: 3,
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
                                    }}
                                >Training</Text>

                                <View style={{
                                    height:25,
                                    width:25,
                                    borderRadius:70,
                                    backgroundColor:'#6d4d85',
                                    position:'absolute',
                                    right:10
                                }}>
                                    
                                </View>
                            </View>

                            

                            <View style={{
                                flexDirection:'row'
                            }}>
                                <Text 
                                    style={{
                                        fontSize:14,
                                        fontWeight:'bold',
                                        marginLeft:15
                                    }}
                                >
                                    t30
                                </Text>
                                <Text
                                    style={{
                                        color:'lightgray',
                                        fontSize:12,
                                        alignSelf:'flex-end',
                                        marginLeft:3
                                    }}
                                >
                                    Hours
                                </Text>

                            </View>

                            

                        </View>

                    </View>

                </View>
                <View style={{flex:1}}>
                    <View style={{flex:2,  alignItems:'center', justifyContent:'center'}}>
                        <View style={{
                            height:'90%',
                            width:'80%',
                            backgroundColor:'white', 
                            borderRadius:25,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
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
                                    }}
                                >Steps</Text>

                                <View style={{
                                    height:25,
                                    width:25,
                                    borderRadius:70,
                                    backgroundColor:'#6d4d85',
                                    position:'absolute',
                                    right:10
                                }}>
                                    
                                </View>
                            </View>

                            <View style={{
                                alignItems:'center',
                                justifyContent:'center'
                            }}>
                            <ProgressCircle
                                        percent={70}
                                        radius={45}
                                        borderWidth={8}
                                        color="#6d4d85"
                                        shadowColor="lightgray"
                                        bgColor="#fff"
                                    >
                                        <View>
                                            <Text style={{ fontSize: 16, }}>3215</Text>
                                            <Text style={{ fontSize: 12, color:'lightgray', alignSelf:'center'}}>Steps</Text>

                                        </View>
                                    </ProgressCircle>
                            </View>

                        </View>

                    </View>
                    <View style={{flex:1.5,  alignItems:'center', justifyContent:'center'}}>
                        <View style={{
                            height:'90%',
                            width:'80%',
                            backgroundColor:'white', 
                            borderRadius:25,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,
                            elevation: 3,
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
                                    }}
                                >Sleep</Text>

                                <View style={{
                                    height:25,
                                    width:25,
                                    borderRadius:70,
                                    backgroundColor:'#fcc836',
                                    position:'absolute',
                                    right:10
                                }}>
                                    
                                </View>

                                
                            </View>

                            

                            <View >
                                <Text 
                                    style={{
                                        fontSize:14,
                                        fontWeight:'bold',
                                        marginLeft:15
                                    }}
                                >
                                    8:30
                                </Text>
                                <Text
                                    style={{
                                        color:'lightgray',
                                        fontSize:12,
                                        marginLeft:15
                                    }}
                                >
                                    Hours
                                </Text>

                            </View>

                            

                        </View>

                    </View>
                    <View style={{flex:2,  alignItems:'center', justifyContent:'center'}}>
                    <View style={{
                            height:'90%',
                            width:'80%',
                            backgroundColor:'white', 
                            borderRadius:25,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,
                            elevation: 3,
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
                                    }}
                                >Calories</Text>

                            <View style={{
                                    height:25,
                                    width:25,
                                    borderRadius:70,
                                    backgroundColor:'#f67953',
                                    position:'absolute',
                                    right:10
                                }}>
                                    
                                </View>
                            </View>

                            <View style={{
                                alignItems:'center',
                                justifyContent:'center'
                            }}>
                            <ProgressCircle
                                        percent={70}
                                        radius={45}
                                        borderWidth={8}
                                        color="#f67953"
                                        shadowColor="lightgray"
                                        bgColor="#fff"
                                    >
                                        <View>
                                            <Text style={{ fontSize: 16, }}>861</Text>
                                            <Text style={{ fontSize: 12, color:'lightgray', alignSelf:'center'}}>Kcol</Text>

                                        </View>
                                    </ProgressCircle>
                            </View>

                        </View>

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
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Dashboard')}
                    >
                    <Image

                        style={{
                            height:30,
                            width:30,
                            tintColor:'#f67953'
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
                            tintColor:'gray'
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