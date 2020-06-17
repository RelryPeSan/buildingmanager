import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import TouchableIcon from '~/components/TouchableIcon/index';

export default function Search({iconEnabled = true}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Pesquisar..."
        style={styles.textInput}
        returnKeyType="search"
      />
      <TouchableIcon
        onPress={() => {}}
        styleTouchable={styles.touchableIcon}
        styleIcon={styles.icon}
        size={28}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // backgroundColor: '#FFF',
    paddingHorizontal: 10,
    margin: 5,
  },
  textInput: {
    borderWidth: 1.5,
    borderColor: '#bbb',
    paddingLeft: 15,
    paddingRight: 50,
    borderRadius: 100,
    backgroundColor: '#FFF',
    fontSize: 18,
  },
  touchableIcon: {
    position: 'absolute',
    right: 10,
    // borderWidth: 1,
    top: -5,
  },
  icon: {
    color: '#000',
  },
});
