import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export default function TouchableIcon({nav, toRoute, nameIcon}) {
  return (
    <TouchableOpacity onPress={() => nav.navigate(toRoute)}>
      <Icon name={nameIcon} size={22} style={styles.botaoPlus} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botaoPlus: {
    color: '#FFF',
    marginRight: 10,
    padding: 6,
  },
});
