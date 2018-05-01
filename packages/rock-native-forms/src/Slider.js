import React, { Component } from 'react';
import { Slider as OriginalSlider } from 'react-native';

export default class Slider extends Component {
  render() {
    return (
      <OriginalSlider
        {...this.props}
      />
    );
  }
}
