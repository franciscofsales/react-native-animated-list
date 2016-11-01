/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  LayoutAnimation
} from 'react-native';
import DynamicListRow from './DynamicListRow';



export default class DynamicList extends Component {
  constructor(props){
    super(props);
    this._renderRow = this._renderRow.bind(this);
    this._onAfterRemovingElement = this._onAfterRemovingElement.bind(this);
    this._deleteItem = this._deleteItem.bind(this);
    this.state = {
        loading     : true,
        refreshing  : false,
        rowToDelete : null,
        dataSource: null
    };
  }

  componentWillMount() {
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  componentWillUpdate(nextProps, nextState) {

    if (nextState.rowToDelete !== null) {
        this._data = this._data.filter((item) => {
            if (item != nextState.rowToDelete) {
                return item;
            }
        });
    }
  }

  createDataSource({items}){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this._data = items;
    this.setState({dataSource: ds.cloneWithRows(items)});
  }

  _renderRow(rowData, sectionID, rowID, ) {
      return (
        <DynamicListRow
          time={this.props.time}
          remove={rowData == this.state.rowToDelete}
          onRemoving={this._onAfterRemovingElement}>
            {React.cloneElement(this.props.renderRow(rowData), {onRemove: this._deleteItem})}
          </DynamicListRow>
      );
  }

  _deleteItem(row) {
     this.setState({
         rowToDelete : row
     });
     this.createDataSource(this.props);
  }

  _onAfterRemovingElement() {
    const toDelete = this.state.rowToDelete;
    this.setState({
       rowToDelete : null,
    });
    this.createDataSource({items:this._data});
    this.props.onRemove(toDelete);
  }

   render() {
       return (
           <View style={styles.container}>
             <ListView
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                style={this.props.style}
             />
           </View>
       );
   }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
