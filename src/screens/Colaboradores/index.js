import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MenuHamburguer from '../../components/CustomDrawer/MenuHamburguer';
import TouchableIcon from '../../components/TouchableIcon';

import ColaboradoresCadastrar from './Cadastrar';
import ColaboradoresListar from './Listar';

import Color from '../../config/color';

const Stack = createStackNavigator();

export default function StackColaboradores() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#FFF',
        headerStyle: {backgroundColor: Color.primary},
      }}>
      <Stack.Screen
        name="Listar"
        component={ColaboradoresListar}
        options={({navigation}) => ({
          title: 'Colaboradores',
          headerLeft: () => (
            <MenuHamburguer nav={() => navigation.openDrawer()} />
          ),
          headerRight: () => (
            <TouchableIcon
              onPress={() => {
                navigation.navigate('Cadastrar');
              }}
              nameIcon="plus"
            />
          ),
        })}
      />
      <Stack.Screen
        name="Cadastrar"
        component={ColaboradoresCadastrar}
        options={{title: 'Novo Colaborador'}}
      />
    </Stack.Navigator>
  );
}
