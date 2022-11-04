// Trabajo realizado en clase del 28 octubre 2022
// -----------------------------------------------------
import {StyleSheet} from 'react-native';
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
  item:{
    width: width - 30, 
    height: width - 30,
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
});

export default styles;
