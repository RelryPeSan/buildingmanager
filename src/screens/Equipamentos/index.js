import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MenuHamburguer from '../../components/CustomDrawer/MenuHamburguer';
import TouchableIcon from '../../components/TouchableIcon';

import EquipamentosCadastrar from './Cadastrar';
import EquipamentosListar from './Listar';

import Color from '../../config/color';

const Stack = createStackNavigator();

export default function StackEquipamentos() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#FFF',
        headerStyle: {backgroundColor: Color.primary},
      }}>
      <Stack.Screen
        name="Listar"
        component={EquipamentosListar}
        options={({navigation}) => ({
          title: 'Equipamentos',
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
        component={EquipamentosCadastrar}
        options={{title: 'Novo Equipamento'}}
      />
    </Stack.Navigator>
  );
}
