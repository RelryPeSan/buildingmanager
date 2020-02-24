import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import DadosScreen from './Dados';
import CustosScreen from './Custos';

import Color from '../../../config/color';

const Tab = createMaterialTopTabNavigator();

export default function TabsObraInfo({route}) {
  console.log(route.params);
  const obra = route.params;
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
        name="ObraDados"
        component={DadosScreen}
        options={{
          title: 'Dados',
        }}
        initialParams={{obra}}
      />
      <Tab.Screen
        name="ObraCustos"
        component={CustosScreen}
        options={{
          title: 'Custos',
        }}
        initialParams={{obra}}
      />
    </Tab.Navigator>
  );
}
