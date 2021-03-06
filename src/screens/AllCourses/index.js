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
import Drawer from 'react-native-drawer'

 

class App extends Component {
    static navigationOptions = {
        headerShown :null
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
                
                onPress={() =>  
                    this.props.navigation.navigate(`${item}`)
                }
                
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

            </TouchableOpacity>
            
        })
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
                    flexDirection:'row'
                }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                    >
                <Image
                    style={{
                        height:40,
                        width:40,

                    }}
                    source={require('../../images/backIcon.png')}
                
                />
                </TouchableOpacity>
                <Text style={{
                    color:'#44474f',
                    fontSize:30,
                    fontWeight:'bold', 
                    marginLeft:15,
                }}>
                    All Courses

                </Text>

                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Search')}
                style={{
                    position:'absolute',
                    right:50
                }}>
                    <Image
                        style={{
                            height:25, 
                            width:25, 
                        }}
                        source={require('../../images/search.png')}
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
                                source={require('../../images/notfound.png')}
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
                                source={require('../../images/notfound.png')}
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
                                source={require('../../images/notfound.png')}
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