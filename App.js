import React, { Component } from 'react'
import { 
    View, 
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions
 } from 'react-native'
 import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    dataset: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days", "Sunny Days", "Snowy Days"] // optional
  };
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
 
class App extends Component {
   render() {
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
                        <LineChart
  data={data}
  width={200}
  height={256}
  verticalLabelRotation={30}
  chartConfig={chartConfig}
  bezier
/>

                       

                    </View>

                </View>

                <View 
                    style={{
                        flex:4, backgroundColor:'green'
                    }}
                >

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