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
import Drawer from 'react-native-drawer'


 

class App extends Component {
    static navigationOptions = {
        headerShown:null
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
                                source={require('../../images/notfound.png')}
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
                                source={require('../../images/notfound.png')}
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
                                source={require('../../images/notfound.png')}
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
                                source={require('../../images/notfound.png')}
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
                                source={require('../../images/notfound.png')}
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
                                source={require('../../images/notfound.png')}
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
                                source={require('../../images/notfound.png')}
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
                        onPress={() => this.props.navigation.navigate('TrainerProfile')}
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