import React from 'react';

import {View, ActivityIndicator, StyleSheet} from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={28} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3a4e7e',
    opacity: 0.3,
    zIndex: 100,
  },
});
