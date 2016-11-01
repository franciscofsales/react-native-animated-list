/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  LayoutAnimation
} from 'react-native';




export default class DynamicListRow extends Component {
  constructor(props){
    super(props);
    this.state = {
      _rowOpacity : new Animated.Value(0)
    };
    this._transitionTime = this.props.time || 200;
  }
  componentWillMount(){
    this._rowScale = new Animated.Value(1);
  }

  componentWillUpdate(){
    LayoutAnimation.spring();
  }

  componentDidMount() {
    Animated.timing(this.state._rowOpacity, {
      toValue  : 1,
      duration : this._transitionTime
    }).start();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.remove) {
      this.onRemoving(nextProps.onRemoving);
    }
    else {
      this.resetScale();
    }
  }

  onRemoving(callback) {
    this._rowScale.setValue(1);
    Animated.sequence([
      Animated.timing(this._rowScale, {
        toValue: 0,
        duration: this._transitionTime,
      })
    ]).start(callback);
  }

  resetScale() {
    this._rowScale.setValue(1);
  }

  render() {
      const scaleAnimation = {
        opacity: this.state._rowOpacity,
        marginTop: this._rowScale.interpolate({
          inputRange:[0,1],
          outputRange:[30, 0]
        }),
        transform: [
          {
            scale: this._rowScale
          }
        ],
      };

      return (
          <Animated.View
              style={[scaleAnimation, {opacity: this.state._rowOpacity}]}>
              {this.props.children}
          </Animated.View>
      );
  }
}
