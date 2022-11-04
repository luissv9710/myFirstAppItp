import React, { useEffect, useState } from "react";
import {TouchableOpacity, View} from "react-native";
import HolaMundo from "./src/components/HolaMundo";
import Title from "./src/components/Title";
import styles from "./src/styles/styles";
import {Button} from '@rneui/themed';

import {Image} from '@rneui/themed';
import img1 from './src/assets/great.jpg';
import img2 from './src/assets/great.jpg';
import img3 from './src/assets/great.jpg';
import img4 from './src/assets/great.jpg';

const arrayImg = [img1, img2, img3, img4]; 

import {getText} from '.src/services/getData';

const App = () => {
  const [txt, setText] = useState('Valor por default');
  const [img, setImg] = useState(img4);
  
  useEffect({} => {
    updateTextImg();
  }, []);

  const updateTextImg = () => {
    getText.then(result => setText(result.fact));
    const itemRandom = arrayImg[Math.floor(Math.random() * arrayImg.length)];
    setImg(itemRandom);
  };
  
  /*const getImg = () => arrayImg[Math.floor(Math.random() * arrayImg.length)];  */

  return (
    <View style={styles.main}>
        <View style={styles.left}>
          <Button title="Actualizar" onPress={updateTextImg} />
        </View>
      <Image
        source={img}
        containerStyle={styles.item}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text style={styles.txt}>
        {txt}
      </Text>      
    </View>
  );
};

export default App;