import React,{useState} from 'react'
import { 
    Text, 
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback,
    TextInput,
    Dimensions,
    FlatList
 } from 'react-native'
//  import LinearGradient from "react-native-linear-gradient";


export default class ControlPanel extends React.Component {
    render() {
        return(
    //         <LinearGradient
    //     style={{height:'100%'}}
    //     colors={[
    //       "#71C9DB",
    //       "#3a7bd5"
    //     ]}
    //   >
            <View style={{ flex:1, height:'100%', backgroundColor:'red'}}>
                <Text style={{fontSize:18, color:'white', fontWeight:'bold', marginTop:50, marginLeft:30,}}>
                    Select City
                </Text>
                <TouchableOpacity onPress={() => this.props.close()}>
                    <Text style={{fontSize:18, color:'white', fontWeight:'bold' ,marginLeft:30, marginTop:60,}}>
                        Abu Dhabi
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.close()}>
                    <Text style={{fontSize:18, color:'white', fontWeight:'bold', marginLeft:30, marginTop:20,}}>
                        Al Ain
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.close()}>
                    <Text style={{fontSize:18, color:'white', fontWeight:'bold', marginLeft:30, marginTop:20,}}>
                        Dubai
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.close()}>
                    <Text style={{fontSize:18, color:'white', fontWeight:'bold', marginLeft:30, marginTop:20,}}>
                        Sharjah
                    </Text>
                </TouchableOpacity>
                
                

            </View>
            // </LinearGradient>
        );
    }
}

