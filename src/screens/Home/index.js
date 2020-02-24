import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ObrasScreen from '../Obras/stack';
import ClientesScreen from '../Clientes';
import ColaboradoresScreen from '../Colaboradores';
import EquipamentosScreen from '../Equipamentos';
import SettingsScreen from '../Settings';

import CustomDrawer from '../../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerStack({route}) {
  const {userdata, efetuarLogout, loadingScreen} = route.params;
  return (
    <Drawer.Navigator
      initialRouteName="Obras"
      drawerContent={props => CustomDrawer({userdata, ...props})}>
      <Drawer.Screen name="Obras" component={ObrasScreen} />
      <Drawer.Screen name="Clientes" component={ClientesScreen} />
      <Drawer.Screen name="Colaboradores" component={ColaboradoresScreen} />
      <Drawer.Screen name="Equipamentos" component={EquipamentosScreen} />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: 'Configurações'}}
        initialParams={{efetuarLogout, loadingScreen}}
      />
    </Drawer.Navigator>
  );
}
