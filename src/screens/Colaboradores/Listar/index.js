import React from 'react';

import {View, StyleSheet, FlatList} from 'react-native';

import ListItemColaborador from '~/components/FlatList/ListItemColaborador';
import Search from '~/components/Search/index';

export default function Colaboradores() {
  const colaboradores = [
    {
      id: '1',
      url_foto: require('../../../assets/avatar-default.png'),
      nome: 'Pedro Augusto',
      apelido: 'Boca',
      telefone: ['(12) 99574-5689'],
      email: 'pedro.augusto@gmail.com',
      documentos: {
        rg: '38.457.125-9',
        cpf: '555.485.789-63',
      },
      vestimenta: {
        avental: '42',
        bota: '42',
        calca: '40',
      },
      banco: {
        agencia: '8574',
        conta: '78569',
        digito: '6',
        nomebanco: 'Santander',
      },
    },
    {
      id: '2',
      url_foto: require('../../../assets/avatar-default.png'),
      nome: 'Pedro Augusto',
      apelido: 'Boca',
      telefone: ['(12) 99574-5689'],
      email: 'pedro.augusto@gmail.com',
      documentos: {
        rg: '38.457.125-9',
        cpf: '555.485.789-63',
      },
      vestimenta: {
        avental: '42',
        bota: '42',
        calca: '40',
      },
      banco: {
        agencia: '8574',
        conta: '78569',
        digito: '6',
        nomebanco: 'Santander',
      },
    },
    {
      id: '3',
      url_foto: require('../../../assets/avatar-default.png'),
      nome: 'Pedro Augusto',
      apelido: 'Boca',
      telefone: ['(12) 99574-5689'],
      email: 'pedro.augusto@gmail.com',
      documentos: {
        rg: '38.457.125-9',
        cpf: '555.485.789-63',
      },
      vestimenta: {
        avental: '42',
        bota: '42',
        calca: '40',
      },
      banco: {
        agencia: '8574',
        conta: '78569',
        digito: '6',
        nomebanco: 'Santander',
      },
    },
  ];

  return (
    <View style={styles.container}>
      <Search />
      <FlatList
        data={colaboradores}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListItemColaborador
            data={item}
            onPress={() => {}}
            style={styles.item}
          />
        )}
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
});
