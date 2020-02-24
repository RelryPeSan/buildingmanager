import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import ListItem from '../../../components/FlatList/ListItem';
import Separator from '../../../components/util/Separator';

export default function Andamento() {
  const obras = [
    {
      id: '1',
      descricao: 'Museu de Arte',
      endereco: 'Rua Flamengo, 45 - Ipiranga',
      cliente: 'Fulano',
      porcentagem: 100,
    },
    {
      id: '2',
      descricao: 'Galeria Sobrado',
      endereco: 'Rua B, 980 - Centro',
      cliente: 'Beutrano',
      porcentagem: 100,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={obras}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ListItem data={item} />}
        ItemSeparatorComponent={() => <Separator size={10} />}
        style={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lista: {
    width: '95%',
    margin: 10,
  },
});
