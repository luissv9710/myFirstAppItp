//import React from "react";
//import {Text} from "react-native";
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

const HolaMundo = ({value, parametro1, propiedad2, fontSize}) => {
  const [fondo, setChangeFondo] = useState('black');

  useEffect(() => {
    //nuestra función
    if (value) {
      setChangeFondo('white');
    }
  }, []);

  /*let fondo = 'black';
  if (value) {
    fondo = 'white';
  };
  };*/

  return (
    <Text
      style={{
        backgroundColor: fondo,
        color: propiedad2,
        fontSize,
      }}
    >{parametro1}</Text>
  );
};
export default HolaMundo;
