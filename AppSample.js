import React , { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Image, ScrollView } from 'react-native';


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
        // <ScrollView>
        //   <Article Text={article[1].body} image={article[1].imageUrl} />
        //   <Article Text={article[2].body} image={article[2].imageUrl} />
        // </ScrollView>
        <View style={styles.container2}> 
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
          <View style={styles.box5}></View>
          <View style={styles.box6}></View>
        </View>
    )
  }
};

class Article extends Component {

  render(){
    return (
      <View style={styles.container}>
      <Image style={styles.articleImage} source={this.props.image}/>
      <Text style={styles.articleText} >{this.props.Text} </Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,

    //in baraye shadow dadan be ios
    shadowColor: '#000',
    shadowOffset: {width: 0 , height: 10 },
    shadowOpacity: .1,

    //in baraye shadow daddan be android
    elevation:3

  },
  container2 : {
     backgroundColor : 'black',
     flexDirection : 'row',
     flexWrap : 'wrap',
     justifyContent : 'center',
     alignItems : 'center',
     flex: 1
  },
  articleImage : {
    width: '100%',height: 200
  },
  articleText : {
    fontSize : 14,
    textAlign:"right",
    lineHeight:25,
    padding:10
  },
  box1 : {
    width:100,height:100,
    backgroundColor : '#0984e3'
  },
  box2 : {
    width:100,height:100,
    backgroundColor : '#ff7675'
  },
  box3 : {
    width:100,height:100,
    backgroundColor : '#00cec9'
  },
  box4 : {
    width:100,height:100,
    backgroundColor : '#fab1a0'
  },
  box5 : {
    width:100,height:100,
    backgroundColor : '#e84393'
  },
  box6 : {
    width:100,height:100,
    backgroundColor : '#fdcb6e'
  },
});

AppRegistry.registerComponent('myapp' , () => myapp)