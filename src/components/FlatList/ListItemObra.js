import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import ProgressBar from '../ProgressBar';
// import LeftActions from './LeftActions';
// import RightActions from './RightActions';

function ListItemObra({data, onPress, ...props}) {
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={onPress} {...props}>
      <View style={styles.tituloCliente}>
        <Text style={[styles.text, styles.textDescricao]}>
          {data.descricao}
        </Text>
        <Text style={[styles.text, styles.textCliente]}> • {data.cliente}</Text>
      </View>
      <Text style={[styles.text, styles.textEndereco]}>{data.endereco}</Text>
      <View style={styles.containerPorcentagem}>
        <Text style={[styles.text, styles.textPorcentagem]}>
          {data.porcentagem}%
        </Text>
        <ProgressBar
          progress={data.porcentagem}
          styleContainer={styles.progressCotainer}
          styleProgress={styles.progressBar}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
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
  progressCotainer: {
    borderRadius: 10,
  },
  progressBar: {
    borderRadius: 10,
  },
});

export default ListItemObra;
