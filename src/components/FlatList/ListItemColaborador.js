import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

// import LeftActions from './LeftActions';
// import RightActions from './RightActions';

function ListItemColaborador({data, onPress, ...props}) {
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={onPress} {...props}>
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image source={data.url_foto} style={styles.image} />
        </View>
        <View style={styles.containerInfo}>
          <View style={styles.tituloCliente}>
            <Text style={[styles.text, styles.textDescricao]}>{data.nome}</Text>
            <Text style={[styles.text, styles.textCliente]}>
              {' '}
              • {data.apelido}
            </Text>
          </View>
          <Text style={[styles.text, styles.textEndereco]}>{data.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
  },
  containerImage: {},
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 16,
    color: '#222',
    fontFamily: 'Sans-serif',
    fontWeight: 'bold',
  },
  containerPorcentagem: {},
  textPorcentagem: {
    alignSelf: 'flex-end',
    fontSize: 14,
    color: '#999',
    paddingRight: 4,
  },
  textDescricao: {},
  textEndereco: {
    fontWeight: '300',
    fontSize: 15,
  },
  textCliente: {
    color: '#aaa',
  },
  tituloCliente: {
    flexDirection: 'row',
  },
  containerInfo: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: 'center',
  },
});

export default ListItemColaborador;
