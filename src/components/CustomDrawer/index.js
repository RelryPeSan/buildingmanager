import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

//import Color from '../../config/color';

function CustomDrawer({userdata, ...props}) {
  const {user} = userdata;
  console.log(user);
  return (
    <DrawerContentScrollView style={styleLocal.container}>
      <View style={styleLocal.userArea}>
        <Image
          source={require('../../assets/purple-bg_640.png')}
          style={styleLocal.background}
        />
        <View style={styleLocal.containerInfo}>
          <Image
            source={require('../../assets/avatar-default.png')}
            style={styleLocal.avatar}
          />
          <Text style={styleLocal.userName}>{user.displayName}</Text>
          <Text style={styleLocal.userEmail}>{user.email}</Text>
        </View>
      </View>
      <DrawerItemList
        {...props}
        itemStyle={styleLocal.item}
        labelStyle={styleLocal.label}
      />
    </DrawerContentScrollView>
  );
}

const styleLocal = StyleSheet.create({
  container: {
    //flex: 1,
  },
  userArea: {
    backgroundColor: '#a236f4',
    marginBottom: 6,
    marginTop: -4,
  },
  background: {
    //flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  containerInfo: {
    padding: 10,
    paddingTop: 16,
  },
  avatar: {
    width: 55,
    height: 55,
  },
  userName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  userEmail: {
    fontSize: 14,
    color: '#ddd',
  },
  item: {
    marginHorizontal: 0,
    marginVertical: 0,
    borderRadius: 0,
    //marginHorizontal: -20,
  },
  label: {},
});

export default CustomDrawer;
