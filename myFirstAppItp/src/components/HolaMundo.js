import React from "react";
import {Text} from "react-native";

const HolaMundo = ({value, parametro1, propiedad2, fontSize}) => {
  let fondo = 'black';
  if (value) {
    fondo = 'white';
  };

  return (
    <Text
      style={{
        backgroundColor: fondo,
        color: propiedad2,
        fontSize
      }}
    >{parametro1}</Text>
  );
};

export default HolaMundo;