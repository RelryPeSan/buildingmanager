import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function IconMaterial({name, size, ...props}) {
  return <Icon name={name} size={size} {...props} />;
}
