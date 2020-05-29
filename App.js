import {AppRegistry, View} from 'react-native'
// import app from './src/AppMain';
import React , { Component } from 'react';
import Login from './src/Components/Login';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';




export default class myapp extends Component {

  constructor(){
    super()

    this.state = {
    dataLoaded : false
    }
  }

  fetchFonts() {
    console.log('hi2');
    return Font.loadAsync({
      'IRANSansMobile-bold': require('./src/assets/Font/IRANSansMobile_Bold.ttf'),
      'IRANSansMobile-Light': require('./src/assets/Font/IRANSansMobile_Light.ttf'),
      'IRANSansMobile-Medium': require('./src/assets/Font/IRANSansMobile_Medium.ttf'),
      'IRANSansMobile-UltraLight': require('./src/assets/Font/IRANSansMobile_UltraLight.ttf'),
      'IRANSansMobile': require('./src/assets/Font/IRANSansMobile.ttf'),

      });
  }

  render() {
      const dataLoaded = this.state.dataLoaded;
    if(!dataLoaded){
      console.log('hi');
      return(
        <AppLoading
        startAsync = {this.fetchFonts}
        onFinish = {() => this.setState({dataLoaded : true})}
        />
      )
    }
      return (
      <>
      <Login></Login>
      </>
        // <ScrollView>
        //   <Article Text={article[1].body} image={article[1].imageUrl} />
        //   <Article Text={article[2].body} image={article[2].imageUrl} />
        // </ScrollView>
        // <View style={styles.container2}> 
        //   <View style={styles.box1}></View>
        //   <View style={styles.box2}></View>
        //   <View style={styles.box3}></View>
        //   <View style={styles.box4}></View>
        //   <View style={styles.box5}></View>
        //   <View style={styles.box6}></View>
        // </View>
    )
  }
}


AppRegistry.registerComponent('myapp' ,  () => myapp)

