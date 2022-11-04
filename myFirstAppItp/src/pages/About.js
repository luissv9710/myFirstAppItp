// Trabajo realizado en clase del 01 noviembre 2022
// -----------------------------------------------------
import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '@rneui/themed';
import styles from '../styles/styles';

const About = ({navigation}) => {
  const irA = () => {
    navigation.navigate('PictureScreen');
  };
  return (
    <View style={styles.main}>
      <Text style={styles.description}>Acerca de</Text>
      <Button color="warning" title="Ir a -> Picture" onPress={irA} />
    </View>
  );
};

export default About;
