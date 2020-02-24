import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ObrasAndamentoScreen from './Andamento';
import ObrasConcluidaScreen from './Concluida';

import Color from '../../config/color';

const Tab = createMaterialTopTabNavigator();

export default function TabsObras({navigation}) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: Color.primary,
        },
        labelStyle: {
          color: '#FFF',
        },
      }}>
      <Tab.Screen
        name="ObrasAndamento"
        component={ObrasAndamentoScreen}
        options={{
          title: 'Em Andamento',
        }}
      />
      <Tab.Screen
        name="ObrasConcluida"
        component={ObrasConcluidaScreen}
        options={{
          title: 'Concluídas',
        }}
      />
    </Tab.Navigator>
  );
}
