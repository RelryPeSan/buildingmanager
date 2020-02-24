import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

//import EquipamentosDB from '../../model/equipamentos';

export default function Equipamentos() {
  /*async function getEquipamentos() {
    const eq = await EquipamentosDB.index();
    console.log(eq);
  } //*/

  return (
    <View style={styles.container}>
      <Text>Equipamentos</Text>
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
