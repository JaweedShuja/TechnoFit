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


 

class App extends Component {
    static navigationOptions = {
        headerShown:null
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
     
    
   render() {
      let items = []

      items.push(
          <View
            style={{
                flex:8,
                justifyContent:'space-around'
            }}
          >
              {
                  this.state.menuItems.map((item, index) => {
                  return <View
                  
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

              </View>})
                  }
              

          </View>
      )
 
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
                    Menu

                </Text>

                
               
                

                
                    <TouchableOpacity style={{ 
                        position:'absolute',
                        right:10,
                        height:30,
                        width:30,
                        backgroundColor:'gray', 
                        borderRadius:70,
                        alignItems:'center',
                        justifyContent:'center',
                        }}>
                            <Text
                                style={{
                                    fontSize:15
                                }}
                            >
                                X
                            </Text>
                    
                </TouchableOpacity>
               

            </View>
           
            <View style={{flex:8, paddingBottom:10, marginHorizontal:5}}>
              {items}
              
              <View
                style={{
                    flex:1,
                    backgroundColor:'#ff714a',
                    margin:10,
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
                        source={require('../../images/dashboardIcon.png')}


                    />

                    <Image

                    style={{
                        height:30,
                        width:30,
                    }}
                    source={require('../../images/signalIcon.png')}


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
                    source={require('../../images/dumbellIcon.png')}


                    />

                    <Image

                        style={{
                            height:30,
                            width:30,
                        }}
                        source={require('../../images/signalIcon.png')}


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