import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class MenuHamburguer extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.nav}>
        <Icon name="menu" size={24} style={styles.botaoPlus} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  botaoPlus: {
    color: '#FFF',
    marginRight: 10,
    padding: 12,
  },
});
