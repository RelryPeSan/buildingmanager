import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default function Colaboradores() {
  return (
    <View style={styles.container}>
      <Text>Lista de Equipamentos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
