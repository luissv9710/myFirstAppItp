// Trabajo realizado en clase del 28 octubre 2022
// -----------------------------------------------------
import React, {useEffect, useState} from 'react';
import {Text, ActivityIndicator, View} from 'react-native';
//import HolaMundo from "./src/components/HolaMundo";
//import Title from "./src/components/Title";
import styles from './src/styles/styles';
import {Button, Image} from '@rneui/themed';
import img1 from './src/assets/img1.jpg';
import img2 from './src/assets/img2.jpg';
import img3 from './src/assets/img3.jpg';
import img4 from './src/assets/img4.jpg';
import {getText} from '.src/services/getData';

const arrayImg = [img1, img2, img3, img4]; 


const App = () => {
  const [txt, setTxt] = useState('Valor por default');
  const [img, setImg] = useState(img4);

  useEffect(() => {
    updateTxt();
    updateTxtImg();
  }, []);

  const updateTxt = () => getText().then(result => setTxt(result.fact));

  const updateTxtImg = () => {
    getText.then(result => setTxt(result.fact));
    const itemRandom = arrayImg[Math.floor(Math.random() * arrayImg.length)];
    setImg(itemRandom);
  };
  /*const getImg = () => arrayImg[Math.floor(Math.random() * arrayImg.length)];  */

  return (
    <View style={styles.main}>
      <View style={styles.left}>
        <Button title="Actualizar" onPress={updateTxt} />
        <Button title="Actualizar" onPress={updateTxtImg} />
      </View>
      <Image
        source={img1}
        //source={img}
        containerStyle={styles.item}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text style={styles.txt}>{txt}</Text>
    </View>
  );
};

export default App;
