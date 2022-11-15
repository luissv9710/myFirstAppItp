// Trabajo realizado en clase del 01 noviembre 2022
// Modificado 11 nov 2022
// -----------------------------------------------------
import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {Button, ListItem} from '@rneui/themed';
import styles from '../styles/styles';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

const DATA = [
  {
    title: 'Empresa',
    description: 'Desarrollo de Software',
    info: '1234567890'
  },
  {
    title: 'Area',
    description: 'Sistemas',
    info: '1234567891'
  },
  {
    title: 'Departamento',
    description: 'QA',
    info: '1234567892'
  },
  {
    title: 'Departamento',
    description: 'Finanzas',
    info: '1234567893'
  },
  {
    title: 'Departamento',
    description: 'Producción',
    info: '1234567894'
  },
  {
    title: 'Departamento',
    description: 'Ventas',
    info: '1234567895'
  },  
];

const itemRender = ({item}) => (
  <ListItem bottomDivider>
    <ListItem.Content>
      <ListItem.Title>{item.title}</ListItem.Title>
      <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
      <ListItem.Subtitle>{item.info}</ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
);

const itemImg = ({item}) => <Image source={item} style={styles.listimg} />;
const arrayImg = [img1, img2, img3, img4, img1, img2, img3, img4];
const keyExtractor = (item, index) => index.toString();

const About = ({navigation}) => {
  const irA = () => {
    navigation.navigate('PictureScreen');
  };
  return (
    <View style={styles.main}>
      <FlatList
        showsHorizontalScrollIndicator={true}
        horizontal={true}
        data={arrayImg}
        renderItem={itemImg}
        keyExtractor={keyExtractor}
      />
      <Text style={styles.description}>Acerca de</Text>
      <Button color="warning" title="Ir a -> Picture" onPress={irA} />
      <View style={styles.width100}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={itemRender}
          keyExtractor={keyExtractor}
        />
      </View>
    </View>
  );
};

export default About;
