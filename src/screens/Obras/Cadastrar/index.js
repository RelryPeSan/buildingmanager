import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';

import DatePicker from '../../../components/DatePicker';

import Color from '../../../config/color';

export default function Cadastrar({navigation}) {
  const [obraDescricao, setObraDescricao] = useState('');
  const [obraResponsavel, setObraResponsavel] = useState('');
  const [obraCliente, setObraCliente] = useState('');
  const [obraDataInicio, setObraDataInicio] = useState(new Date());
  const [region, setRegion] = useState({
    latitude: -23.436102,
    longitude: -45.083178,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.label}>Descrição:</Text>
        <TextInput
          placeholder="Descrição da obra"
          value={obraDescricao}
          onChangeText={setObraDescricao}
          returnKeyType="next"
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.label}>Responsavel:</Text>
        <TextInput
          placeholder="Responsavel pela obra"
          value={obraResponsavel}
          onChangeText={setObraResponsavel}
          returnKeyType="next"
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.label}>Cliente:</Text>
        <TextInput
          placeholder="Cliente"
          value={obraCliente}
          onChangeText={setObraCliente}
          returnKeyType="next"
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.label}>Data de Inicio:</Text>
        <DatePicker
          date={obraDataInicio}
          onChange={setObraDataInicio}
          styleContainer={styles.dataContainer}
          styleText={styles.dataText}
        />
      </View>
      <View>
        <Text style={styles.label}>Endereço:</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -23.436102,
            longitude: -45.083178,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          region={region}
          rotateEnabled={false}
          showsUserLocation
          loadingEnabled
          showsPointsOfInterest={false}
          //zoomEnabled={false}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.75}
        onPress={() => {
          console.log(obraDataInicio);
        }}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
  },
  label: {
    fontSize: 16,
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1.5,
    borderColor: '#cfd5e4',
    height: 34,
    paddingVertical: 0,
    fontSize: 16,
  },
  dataContainer: {
    borderBottomWidth: 1.5,
    borderColor: '#cfd5e4',
    height: 34,
    paddingVertical: 0,
  },
  dataText: {},
  map: {
    width: '100%',
    height: 200,
  },
  button: {
    backgroundColor: Color.primary,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginVertical: 20,
    borderRadius: 6,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
