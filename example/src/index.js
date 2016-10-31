import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import DynamicListView from './DynamicListView';
import {Data} from './data';
import Row from './Row';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  _renderRow(rowData) {
    return (<Row item={rowData} />);
  }

  _removeItem(item) {
    Data.splice(Data.indexOf(item), 1);
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
    paddingTop: 50,
    backgroundColor: '#eee',
    justifyContent:'center',
    alignItems: 'center'
  }
});
