/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  LayoutAnimation
} from 'react-native';
import Animation, {
  Enter, Leave, Reset
} from './animations';

export default class DynamicListRow extends Component {
  constructor(props){
    super(props);
    this.state = {
      _controlVar : new Animated.Value(0)
    };
    this._transitionTime = this.props.time || 200;
  }
  componentWillMount(){
    this._controlVar = new Animated.Value(1);
  }

  componentWillUpdate(){
    LayoutAnimation.spring();
  }

  componentDidMount() {
    Enter(this.state._controlVar, this._transitionTime).start();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.remove) {
      this.onRemoving(nextProps.onRemoving);
    }
    else {
      this._reset();
    }
  }

  onRemoving(callback) {
    Leave(this.state._controlVar, this._transitionTime).start(callback);
  }

  _reset() {
    Reset(this.state._controlVar);
  }

  render() {
    let rowAnimation = Animation(this.props.animation, this.state._controlVar);
    if(this.props.animationFunc) {
      rowAnimation = this.props.animationFunc(this.state._controlVar);
    }


      return (
          <Animated.View
              style={rowAnimation}>
              {this.props.children}
          </Animated.View>
      );
  }
}
