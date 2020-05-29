import React , { Component } from 'react';
import { AppRegistry,TouchableOpacity, View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import styles from './../assets/Css/login';

export default class Login extends Component {

    render() {
        return(
            <View style={styles.container}>
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
                   <TouchableOpacity>
                       <Text style={styles.loginButton}>ورود به اپلیکیشن</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                       <Text style={styles.forgetPassword}>فراموشی رمز عبور</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}  