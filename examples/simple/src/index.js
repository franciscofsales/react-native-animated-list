import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import AnimatedList from 'react-native-animated-list';
import Data from './data';
import Row from './Row';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default class App extends Component {

  _renderRow(rowData) {
    return (<Row item={rowData} />);
  }

  _removeItem(item) {
    Data.splice(Data.indexOf(item), 1);
  }

  render() {
    return (
      <View style={styles.container}>
        <AnimatedList
          style={{ alignSelf: 'stretch' }}
          animation="opacity"
          items={Data}
          renderRow={this._renderRow}
          onRemove={(item) => this._removeItem(item)}
        />
      </View>
    );
  }
}
