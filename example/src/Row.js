/* @flow */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default class Row extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.rowStyle} onPress={() => this.props.onRemove(this.props.item)}>
        <Text>{this.props.item}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  rowStyle: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 3,
    marginTop:3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
});
