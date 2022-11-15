// Trabajo realizado en clase del 28 octubre 2022
// Modificado 11 nov 2022
// -----------------------------------------------------
import {StyleSheet, Dimensions} from 'react-native';
import {background, primary} from './colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  main:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: background,
  },
  textPrimary: {
    color: primary,
  },
  title:{
    color: primary,
    fontSize: 18,
  },
  item: {
    width: width - 30,
    height: width - 30,
    resizeMode: 'cover',
    backgroundColor: 'red',
  },
  listimg: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    backgroundColor: 'red',
  },
  width100: {
    width: '100%',
  },   
  txt:{
    fontSize: 18,
    width: width - 30,
  },  
  btn:{
    margin: 15,
  },  
  left:{
    width,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 15,
    padding: 15,
  },
  description:{
    color: 'blue',
    fontSize: 18,
  }
});

export default styles;