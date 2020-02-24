import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MenuHamburguer from '../../components/CustomDrawer/MenuHamburguer';
import TouchableIcon from '../../components/TouchableIcon';

import ClientesCadastrar from './Cadastrar';
import ClientesListar from './Listar';

import Color from '../../config/color';

const Stack = createStackNavigator();

export default function StackClientes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#FFF',
        headerStyle: {backgroundColor: Color.primary},
      }}>
      <Stack.Screen
        name="Listar"
        component={ClientesListar}
        options={({navigation}) => ({
          title: 'Clientes',
          headerLeft: () => (
            <MenuHamburguer nav={() => navigation.openDrawer()} />
          ),
          headerRight: () => (
            <TouchableIcon
              nav={navigation}
              toRoute="Cadastrar"
              nameIcon="plus"
            />
          ),
        })}
      />
      <Stack.Screen
        name="Cadastrar"
        component={ClientesCadastrar}
        options={{title: 'Novo Cliente'}}
      />
    </Stack.Navigator>
  );
}
