import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
   
    container : {
      flex : 1,
    },
    main : {
      flex : 1,  
      justifyContent : 'center',
      alignItems:'center',
      flexDirection : 'row'
    },
    loginBox : {
       backgroundColor : '#fff' ,
      // width : 150,
        height : 350,
       flex : 1,
       marginRight: 50,
       marginLeft: 50,
       borderRadius : 5,
       elevation:2,
       shadowColor: 'black',
       shadowOffset : {with : 0 , height:2},
       shadowOpacity : .1,
       paddingBottom :20
    },
    loginTitle : {
      fontFamily : 'IRANSansMobile',
      margin : 2,
      textAlign : 'center',
      fontSize : 18,
      paddingTop : 10


    },
    inputGroups : {
      margin :5,
      marginRight :20,
      marginLeft:20
    },
    labelText : {
      fontFamily:'IRANSansMobile-Medium',
      textAlign : 'right',
      marginBottom : 5,
      margin :10,
      color : '#5256c9',
      ...Platform.select({
        ios : {
          fontFamily:'IRANSansMobile',
          fontWeight : '500'
        } ,
        android : {
          fontFamily:'IRANSansMobile-Medium',
        }
      }),
      fontWeight : 'bold'
    },
    inputText : {
      fontFamily:'IRANSansMobile-Light',
      textAlign : 'right',
      borderColor : 'rgba(0,0,0,.1)',
      borderWidth : 1,
      padding : 10
   

    },
    loginButton:{
      fontFamily : 'IRANSansMobile',
      marginRight :25,
      marginLeft : 25,
      backgroundColor : '#426bd7',
      textAlign : 'center',
      padding : 10,
      borderRadius : 25,
      color : 'white',
      marginTop : 15,

      //in shadow vase android
      elevation : 2,

      // ina shadow vase iose
      shadowColor: 'black',
      shadowOffset : { width : 0 , height : 2},
      shadowOpacity : .1,
      overflow : 'hidden'

      // baraye font ina ro zadim

      
    } ,
    forgetPassword:{
      fontFamily : 'IRANSansMobile',
      textAlign : 'center',
      marginTop : 15
    }
  });


  export default styles