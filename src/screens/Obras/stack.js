import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ObrasScreen from '.';
import ObraInformacaoScreen from './Informacao';
import ObraCadastrarScreen from './Cadastrar';

import MenuHamburguer from '../../components/CustomDrawer/MenuHamburguer';
import TouchableIcon from '../../components/TouchableIcon';
import Color from '../../config/color';

const Stack = createStackNavigator();

function StackObra() {
  return (
    <Stack.Navigator
      initialRouteName="Obras"
      screenOptions={{
        headerTintColor: '#FFF',
        headerStyle: {backgroundColor: Color.primary},
      }}
      headerMode="screen">
      <Stack.Screen
        name="Obras"
        component={ObrasScreen}
        options={({navigation}) => ({
          title: 'Obras',
          headerRight: () => (
            <TouchableIcon
              onPress={() => {
                navigation.navigate('ObraCadastrar');
              }}
              nameIcon="plus"
            />
          ),
          headerLeft: () => (
            <MenuHamburguer nav={() => navigation.openDrawer()} />
          ),
        })}
      />
      <Stack.Screen
        name="ObraInformacao"
        component={ObraInformacaoScreen}
        options={{
          title: 'Informações da Obra',
          headerTitleStyle: {color: '#FFF', fontSize: 18},
        }}
      />
      <Stack.Screen
        name="ObraCadastrar"
        component={ObraCadastrarScreen}
        options={{
          title: 'Nova Obra',
        }}
      />
    </Stack.Navigator>
  );
}

export default function ContainerStack({navigation}) {
  return <StackObra />;
}
