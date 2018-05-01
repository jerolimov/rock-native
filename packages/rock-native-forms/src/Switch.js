import React, { Component } from 'react';
import { Switch as OriginalSwitch } from 'react-native';

export default class Switch extends Component {
  render() {
    return (
      <OriginalSwitch
        {...this.props}
      />
    );
  }
}
