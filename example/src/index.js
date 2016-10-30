import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import DynamicListView from './DynamicListView';
import {Data} from './data';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  _renderRow(rowData) {
    return <Text>{rowData}</Text>;
  }

  _removeItem(item) {
    Data.slice(Data.indexOf(item));
  }

  render() {

    return (
      <View style={styles.container}>
        <DynamicListView
          style={{alignSelf:'stretch'}}
          items={Data}
          renderRow={this._renderRow}
          onRemove={(item) => this._removeItem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
});
