import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ProgressBar from '../../../../components/ProgressBar';

export default function Dados({navigation, route}) {
  const {obra} = route.params;

  console.log(obra);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.descricao}>{obra.descricao}</Text>
        <Text style={styles.cliente}>{obra.cliente}</Text>
        <Text style={styles.endereco}>{obra.endereco}</Text>
        <Text style={styles.porcentagem}>{obra.porcentagem}</Text>
        <ProgressBar progress={obra.porcentagem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 15,
  },
  descricao: {
    fontSize: 20,
  },
});
