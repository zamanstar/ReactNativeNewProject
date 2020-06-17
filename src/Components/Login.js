import React , { Component } from 'react';
import { 
  AppRegistry,
  TouchableOpacity,
   View,
  Text,
  StyleSheet, 
  Image, 
  ScrollView, 
  TouchableHighlight,
  TextInput
 } from 'react-native';
import styles from './../assets/Css/login';
import { LinearGradient } from 'expo-linear-gradient';


export default class Login extends Component {

    render() {
        const styles2 = StyleSheet.create({
            container: {
              justifyContent: "center",
              alignItems: "center"
            },
            absolute: {
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0
            }
          });
        return(
   
            <View style={styles.container}>
                     <LinearGradient
          colors={['#3181e5', '#594dc2']} style={styles.main} >  
        
        

              <View style={styles.loginBox}>
                   <Text style={styles.loginTitle} >ورود</Text>
                   <View style = {styles.inputGroups}>
                       <Text style = {styles.labelText}>ایمیل : </Text>
                       <TextInput 
                       style = {styles.inputText}
                       underlineColorAndroid = 'transparent'
                       placeholder = "لطفا ایمیل خود را وارد کنید"
                       />
                   </View>
                   <View style = {styles.inputGroups}>
                       <Text style = {styles.labelText}>پسورد : </Text>
                       <TextInput 
                       style = {styles.inputText}
                       underlineColorAndroid = 'transparent'
                       secureTextEntry ={true}
                       placeholder = "لطفا پسورد خود را وارد کنید"
                       />
                   </View> 
      
                   <TouchableOpacity activeOpacity = {.6} >
                       <Text style={styles.loginButton}>ورود به اپلیکیشن</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                       <Text style={styles.forgetPassword}>فراموشی رمز عبور</Text>
                    </TouchableOpacity>
                </View>
         
            
            </LinearGradient>
            </View>
            
        )
    }
}  