import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';

import ListItem from '../../../components/FlatList/ListItemObra';
// import Separator from '../../../components/util/Separator';

import Color from '../../../config/color';

export default function Andamento({navigation}) {
  const obras = [
    {
      id: '1',
      descricao: 'Prédio Conceição',
      endereco: 'Rua Conceição, 342 - Itamambuca',
      cliente: 'José Augusto',
      porcentagem: 81,
    },
    {
      id: '2',
      descricao: 'Clinica Pet',
      endereco: 'Rua B, 88 - Praia Grande',
      cliente: 'Felipe',
      porcentagem: 42,
    },
    {
      id: '3',
      descricao: 'Casa Aluguel',
      endereco: 'Rua do Centro',
      cliente: 'Amanda',
      porcentagem: 55,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={obras}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListItem
            data={item}
            onPress={() => {
              navigation.navigate('ObraInformacao', item);
            }}
            style={styles.item}
            // styleItem={styles.item}
          />
        )}
        // ItemSeparatorComponent={() => <Separator size={10} />}
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
    flex: 1,
    width: '100%',
  },
  item: {
    backgroundColor: '#FFF',
    padding: 8,
    marginVertical: 6,
    marginHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#cfd5e4',
    elevation: 6,
    shadowOpacity: 0.5,
    shadowColor: '#333',
  },
  botao: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.primary,
    position: 'absolute',
    right: 18,
    bottom: 18,
  },
  botaoIcon: {
    color: '#FFF',
  },
});
