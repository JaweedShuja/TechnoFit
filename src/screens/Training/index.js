import React, { Component } from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
 } from 'react-native'
 import Drawer from 'react-native-drawer'
 import { LineChart, Grid } from 'react-native-svg-charts'
 import * as shape from 'd3-shape'
import ProgressCircle from 'react-native-progress-circle'
import MySwiper from 'react-native-swiper'


 

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
                
                onPress={() => { item == 'Training' ?  this.closeControlPanel() :
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
                                        source={require('../../images/notfound.png')}

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
                                        source={require('../../images/notfound.png')}

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
                                        source={require('../../images/notfound.png')}

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
                                        source={require('../../images/notfound.png')}

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
                                        source={require('../../images/notfound.png')}

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
                                        source={require('../../images/notfound.png')}

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
                        tintColor:"#f67953"
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