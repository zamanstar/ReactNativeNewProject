import React , { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import styles from './../assets/Css/login';

export default class Login extends Component {

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.loginBox}>
                   <Text style={styles.loginTitle} >ورود</Text>
                   <view style = {styles.inputGroups}>
                       <Text style = {styles.labelText}>ایمیل : </Text>
                       <TextInput 
                       style = {styles.inputText}
                       placeholder = "لطفا ایمیل خود را وارد کنید"
                       />
                   </view>
                </View>
            </View>
        )
    }
}  