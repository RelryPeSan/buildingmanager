import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Custos({navigation}) {
  const obra = {
    id: '1',
    descricao: 'Prédio Conceição',
    endereco: 'Rua Conceição, 342 - Itamambuca',
    cliente: 'José Augusto',
    porcentagem: 81,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>{obra.descricao}</Text>
      <Text style={styles.cliente}>{obra.cliente}</Text>
      <Text style={styles.endereco}>{obra.endereco}</Text>
      <Text style={styles.porcentagem}>{obra.porcentagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  descricao: {
    fontSize: 20,
  },
});
