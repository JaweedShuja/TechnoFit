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
          switchOn1: false,
          switchOn2: false,
          switchOn3: false,
          switchOn4: false,
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

        this.onPress1 = this.onPress1.bind(this)
        this.onPress2 = this.onPress2.bind(this)
        this.onPress3 = this.onPress3.bind(this)
        this.onPress4 = this.onPress4.bind(this)
      }
      closeControlPanel = () => {
        this._drawer.close()
        };
        openControlPanel = () => {
        this._drawer.open()
        };
     
      onPress1(){
        this.setState({
            switchOn1: !this.state.switchOn1
        })
      }
      onPress2(){
          this.setState({
              switchOn2: !this.state.switchOn2
          })
      }
      onPress3(){
        this.setState({
            switchOn3: !this.state.switchOn3
        })
    }
    onPress4(){
        this.setState({
            switchOn4: !this.state.switchOn4
        })
    }
      getButtonText() {
        return this.state.switchOn4 ? "Hour" : "Day";
      }
     
      getRightText() {
        return this.state.switchOn4 ? "" : "Hour";
      }
     
      getLeftText() {
        return this.state.switchOn4 ? "Day" : "";
      }
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
                
                onPress={() => { item == 'Settings' ?  this.closeControlPanel() :
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
                    flexDirection:'row',
                    justifyContent:'center'
                }}>

            
            <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{

                position:'absolute',
                left:10
            }}
            >
                <Text style={{
                        color:'#ff6d3d',
                        fontSize:18,
                        fontWeight:'bold',
                        alignSelf:'center',
                    }}>
                        Cancel

                    </Text>
            </TouchableOpacity>

                
                <Text style={{
                    color:'#44474f',
                    fontSize:25,
                    fontWeight:'bold',
                    alignSelf:'center',
                }}>
                    Edit Training

                </Text>
                

                
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
               
                
                
              

              
                        <Text
                            style={{
                                fontSize:25,
                                fontWeight:'bold',
                                margin:10,
                                marginBottom:10
                            }}
                        >
                            Morning Workout
                        </Text>
                        <View
                            style={{
                                flexDirection:'row',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize:18,
                                    fontWeight:'bold',
                                    marginBottom:10,
                                    marginLeft:10,
                                    opacity:0.8
                                }}
                            >
                                10 Jan - 15 Feb. 2019
                            </Text>
                            <Image
                                style={{
                                    height:10, 
                                    width:10,
                                    marginTop:10,
                                    marginLeft:5,
                                    opacity:0.5
                                }}
                                source={require('../../images/down.png')}

                            />
                        </View>

                       

                    <Text
                        style={{
                            fontSize:16, 
                            color:'gray',
                            fontWeight:'bold',
                            marginLeft:10
                        }}
                    >
                        Scheduled Training

                    </Text>
                    
                    <View
                        style={{
                            width:'90%',
                            height:80,
                            alignSelf:'center',
                            borderRadius:10,
                            backgroundColor:'white',
                            marginTop:10,
                            flexDirection:'row',
                            alignItems:'center',
                        }}
                    >
                       <View
                        style={{
                            marginLeft:10,
                        }}
                       
                       >
                       <Text
                            style={{
                                fontSize:18, fontWeight:'bold',
                            }}
                        >
                            Push-Up
                        </Text>
                        <Text
                            style={{
                                fontSize:14, 
                                color:'gray'
                            }}
                        >
                            10 Minuts
                        </Text>
                       </View>


                       {/* yaha */}

                       <View
                        style={{
                            height:'100%',
                            flexDirection:'row',
                            flex:1,
                            justifyContent:'flex-end',
                            alignItems:'center',
                            marginRight:10
                        }}
                       >
                           <SwitchToggle

                                backgroundColorOn="#ff6839"
                                backgroundColorOff="white"
                                containerStyle={{
                                    width: 70,
                                    height: 36,
                                    borderRadius: 25,
                                    padding: 5,
                                    borderWidth:2,
                                    borderColor:'#ff6839'
                                }}
                                circleStyle={{
                                    width: 25,
                                    height: 25,
                                    borderRadius: 19,
                                    borderWidth:2,
                                    borderColor:'#ff6839'
                                }}
                                switchOn={this.state.switchOn1}
                                onPress={this.onPress1}
                                circleColorOff="white"
                                circleColorOn="white"
                                duration={500}  
                                />

                       </View>
        
      

                    </View>

                    <View
                        style={{
                            width:'90%',
                            height:80,
                            alignSelf:'center',
                            borderRadius:10,
                            backgroundColor:'white',
                            marginTop:10,
                            flexDirection:'row',
                            alignItems:'center',
                        }}
                    >
                       <View
                        style={{
                            marginLeft:10,
                        }}
                       
                       >
                       <Text
                            style={{
                                fontSize:18, fontWeight:'bold',
                            }}
                        >
                            Push-Up
                        </Text>
                        <Text
                            style={{
                                fontSize:14, 
                                color:'gray'
                            }}
                        >
                            10 Minuts
                        </Text>
                       </View>


                       {/* yaha */}

                       <View
                        style={{
                            height:'100%',
                            flexDirection:'row',
                            flex:1,
                            justifyContent:'flex-end',
                            alignItems:'center',
                            marginRight:10
                        }}
                       >
                           <SwitchToggle

                                backgroundColorOn="#ff6839"
                                backgroundColorOff="white"
                                containerStyle={{
                                    width: 70,
                                    height: 36,
                                    borderRadius: 25,
                                    padding: 5,
                                    borderWidth:2,
                                    borderColor:'#ff6839'
                                }}
                                circleStyle={{
                                    width: 25,
                                    height: 25,
                                    borderRadius: 19,
                                    borderWidth:2,
                                    borderColor:'#ff6839'
                                }}
                                switchOn={this.state.switchOn2}
                                onPress={this.onPress2}
                                circleColorOff="white"
                                circleColorOn="white"
                                duration={500}  
                                />

                       </View>
        
      

                    </View>

                    <View
                        style={{
                            width:'90%',
                            height:80,
                            alignSelf:'center',
                            borderRadius:10,
                            backgroundColor:'white',
                            marginTop:10,
                            flexDirection:'row',
                            alignItems:'center',
                        }}
                    >
                       <View
                        style={{
                            marginLeft:10,
                        }}
                       
                       >
                       <Text
                            style={{
                                fontSize:18, fontWeight:'bold',
                            }}
                        >
                            Push-Up
                        </Text>
                        <Text
                            style={{
                                fontSize:14, 
                                color:'gray'
                            }}
                        >
                            10 Minuts
                        </Text>
                       </View>


                       {/* yaha */}

                       <View
                        style={{
                            height:'100%',
                            flexDirection:'row',
                            flex:1,
                            justifyContent:'flex-end',
                            alignItems:'center',
                            marginRight:10
                        }}
                       >
                           <SwitchToggle

                                backgroundColorOn="#ff6839"
                                backgroundColorOff="white"
                                containerStyle={{
                                    width: 70,
                                    height: 36,
                                    borderRadius: 25,
                                    padding: 5,
                                    borderWidth:2,
                                    borderColor:'#ff6839'
                                }}
                                circleStyle={{
                                    width: 25,
                                    height: 25,
                                    borderRadius: 19,
                                    borderWidth:2,
                                    borderColor:'#ff6839'
                                }}
                                switchOn={this.state.switchOn3}
                                onPress={this.onPress3}
                                circleColorOff="white"
                                circleColorOn="white"
                                duration={500}  
                                />

                       </View>
        
      

                    </View>

                    <View
                        style={{
                            width:'90%',
                            height:80,
                            alignSelf:'center',
                            borderRadius:10,
                            backgroundColor:'white',
                            marginTop:10,
                            flexDirection:'row',
                            alignItems:'center',
                        }}
                    >
                       <View
                        style={{
                            marginLeft:10,
                        }}
                       
                       >
                       <Text
                            style={{
                                fontSize:18, fontWeight:'bold',
                            }}
                        >
                            Push-Up
                        </Text>
                        <Text
                            style={{
                                fontSize:14, 
                                color:'gray'
                            }}
                        >
                            10 Minuts
                        </Text>
                       </View>


                       {/* yaha */}

                       <View
                        style={{
                            height:'100%',
                            flexDirection:'row',
                            flex:1,
                            justifyContent:'flex-end',
                            alignItems:'center',
                            marginRight:10
                        }}
                       >
                           <SwitchToggle

                                backgroundColorOn="#ff6839"
                                backgroundColorOff="white"
                                containerStyle={{
                                    width: 70,
                                    height: 36,
                                    borderRadius: 25,
                                    padding: 5,
                                    borderWidth:2,
                                    borderColor:'#ff6839'
                                }}
                                circleStyle={{
                                    width: 25,
                                    height: 25,
                                    borderRadius: 19,
                                    borderWidth:2,
                                    borderColor:'#ff6839'
                                }}
                                switchOn={this.state.switchOn4}
                                onPress={this.onPress4}
                                circleColorOff="white"
                                circleColorOn="white"
                                duration={500}  
                                />

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