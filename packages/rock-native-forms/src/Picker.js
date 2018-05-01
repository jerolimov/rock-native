import React, { Component } from 'react';
import { Picker as OriginalPicker } from 'react-native';

export default class Picker extends Component {
  render() {
    return (
      <OriginalPicker
        {...this.props}
      />
    );
  }
}
