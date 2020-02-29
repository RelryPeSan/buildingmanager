import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export default function TouchableIcon({
  onPress,
  nameIcon = 'plus',
  size = 22,
  styleIcon,
  styleTouchable,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.touchable, styleTouchable]}
      activeOpacity={0.65}>
      <Icon name={nameIcon} size={size} style={[styles.icon, styleIcon]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    margin: 10,
    borderRadius: 10000,
  },
  icon: {
    color: '#FFF',
    padding: 6,
  },
});
