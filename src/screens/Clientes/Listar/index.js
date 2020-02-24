import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Listar() {
  return (
    <View style={styles.container}>
      <Text>Clientes Listar</Text>
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
