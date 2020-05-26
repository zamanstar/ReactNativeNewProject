import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   
    container : {
        flex : 1,
        backgroundColor : '#74b9ff',
        justifyContent : 'center',
        alignItems:'center',
        flexDirection : 'row'
    },
    loginBox : {
       backgroundColor : '#fff' ,
      // width : 150,
        height : 150,
       flex : 1,
       marginRight: 50,
       marginLeft: 50,
       borderRadius : 5,
       elevation:2,
       shadowColor: 'black',
       shadowOffset : {with : 0 , height:2},
       shadowOpacity : 1
    }
  });


  export default styles