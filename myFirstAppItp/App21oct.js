import React from "react";
import {TouchableOpacity, View} from "react-native";
import HolaMundo from "./src/components/HolaMundo";
import Title from "./src/components/Title";
import styles from "./src/styles/styles";
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Button, Input} from '@rneui/themed';
import HolaMundo from './src/components/HolaMundo';
import Title from './src/components/Title';
import styles from './src/styles/styles';
import {getText} from './src/services/getData';

const App = () => {
  const [text, setTexto] = useState('');
  const [fact, setFact] = useState('');

  useEffect(() => {
    getText().then(result => {
      console.log(result, result.fact);
      setFact(result.fact);
    });
  }, []);

  return (
    <View style={styles.main}>
      <Button title="Solid" />
      <Button title="Outline" type="outline" />
      <Button title="Clear" type="clear" />

      <Input placeholder="BASIC INPUT" value={text} onChangeText={setTexto} />

      <HolaMundo
        parametro1={text}
        propiedad2="red"
        fontSize={18}
        value={true}
      />
      </TouchableOpacity>
      <HolaMundo
        parametro1="adios"
        propiedad2="blue"
        fontSize={24}
        value={true}
      />
      <Title />
    </View>
  );
};
export default App;
