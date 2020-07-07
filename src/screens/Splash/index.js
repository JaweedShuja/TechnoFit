import React, { Component } from 'react'
import { 
    View, 
    Text,
    StyleSheet
 } from 'react-native'
 
class Splash extends Component {
   static navigationOptions = {
       headerShown : null
   } 
   constructor(props){
       super(props)
       
   }
   componentDidMount(){
    var t = setInterval(() => {
        this.props.navigation.navigate('GetStarted')
        clearInterval(t)

    },2000)
   }
   render() {
       return (
           <View style={styles.container}>
               <View>
                    <View style={styles.centerBox}>
                        <View style={styles.logoBox} >
                            
                        </View>  
                        <Text  style={styles.logoText}>
                            <Text style={{color:'#6e4f85'}} >FIT</Text>
                            <Text style={{color:"#ff6d43"}}>NESS</Text>
                        </Text>  
                    </View>                    
               </View>
               <View style={styles.topDesign} >

                </View>
                <View style={styles.bottomDesign} >

                </View>
           </View>
        )
    }
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f1f0f3',
        alignItems:'center',
        justifyContent:'center',
    },
    centerBox:{
        height:250,
        width:200,
    },
    logoBox:{
        height:150,
        width:150,
        backgroundColor:'white',
        alignSelf:'center',   
        borderRadius:20,
    },
    logoText:{
        fontSize:50, 
        fontWeight:'bold', 
        alignSelf:'center'
    },
    topDesign:{
        height:250,
        width:250,
        backgroundColor:'#6e4f85',
        position:'absolute',
        top:-100,
        right:-100,
        borderRadius:250,
        alignSelf:'center',
        justifyContent:'center'
    },
    bottomDesign:{
        height:250,
        width:250,
        backgroundColor:'#ff6d43',
        position:'absolute',
        bottom:-100,
        left:-100,
        borderRadius:250
    },
    

})