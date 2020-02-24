import React from 'react';

import {View, StyleSheet} from 'react-native';

//import Color from '../../config/color';
import ButtonOpacity from '../../components/ButtonOpacity';

export default function Settings({navigation, route}) {
  const {efetuarLogout, loadingScreen} = route.params;

  function signOut() {
    loadingScreen(true);
    efetuarLogout();
    //navigation.setOptions();
  }

  return (
    <View style={styles.container}>
      <ButtonOpacity title="Sair" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
});
