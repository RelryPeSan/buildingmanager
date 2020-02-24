import React from 'react';

import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import Color from '../../config/color';

export default function ButtonOpacity({
  title,
  styleButton,
  styleTitle,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, styleButton]}
      activeOpacity={0.75}
      onPress={onPress}>
      <Text style={[styles.text, styleTitle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.primary,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 10,
    shadowColor: '#111',
    shadowRadius: 4,
    shadowOffset: {
      height: 6,
      width: 6,
    },
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
