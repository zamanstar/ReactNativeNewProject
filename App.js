import {AppRegistry, View} from 'react-native'
// import app from './src/AppMain';
import React , { Component } from 'react';
import Login from './src/Components/Login';




export default class myapp extends Component {

  constructor(){
    super()

    this.state = {
      article : {
        1:{
          imageUrl : { uri : 'https://roocket.ir/public/images/2020/3/4/1583305013laravel-poster-1.png'},
          body : 'node یک پلتفرم است که به شما اجازه میدهد از جاوااسکریپت سمت سرور برای ایجاد کردن اپلیکیشن‌های وب خود استفاده کنیدآشنایی با امکانات جدید لاراول '
        },
        2:{
          imageUrl : { uri : 'https://roocket.ir/public/images/2020/1/29/laravel-projects-2.png'},
          body : 'لاراول یکی از محبوب‌ترین فریمورک‌های PHP در ایران و جهان به شمار می‌آید، که ما تصمیم داریم در این دوره در قالب یک پروژه آن را به شکل حرفه‌ای و کاربردی... '
        }
    
      }
    }
  }

  render() {

    const article = this.state.article;
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

