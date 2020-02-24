import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

export default class Colaboradores extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Colaboradores</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
