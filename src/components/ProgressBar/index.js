import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

// import { Container } from './styles';

export default class ProgressBar extends Component {
  render() {
    const percent = `${this.props.progress}%`;

    return (
      <View style={[styles.container, this.props.styleContainer]}>
        <View
          style={[styles.progress, {width: percent}, this.props.styleProgress]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 15,
    borderRadius: 3,
    borderColor: '#dadada',
    borderWidth: 0.4,
  },
  progress: {
    flex: 1,
    backgroundColor: '#47bb52',
  },
});
