import React from 'react';
import {View, StyleSheet} from 'react-native';

function Separator({size}) {
  return <View style={[styles.separator, {height: size}]} />;
}

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    //height: 10,
    //backgroundColor: '#ddd',
  },
});

export default Separator;
