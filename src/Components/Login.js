import React , { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import styles from './../assets/Css/login';

export default class Login extends Component {

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.loginBox}></View>
            </View>
        )
    }
}  