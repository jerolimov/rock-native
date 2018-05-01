/**
 * TouchableItem renders a touchable that looks native on both iOS and Android.
 *
 * It provides an abstraction on top of TouchableNativeFeedback with Ripple
 * animation on Android (>= Android 5.0 aka Lollipop, SDK Level 21) and
 * TouchableOpacity (iOS and older Android versions).
 *
 * TouchableNativeFeedback.Ripple causes a crash on old Android versions,
 * therefore only enable it on Android Lollipop and above.
 *
 * All props pass to the TouchableNativeFeedback / TouchableOpacity element.
 *
 * All touchables on Android should have the ripple effect according to
 * platform design guidelines.
 */

import React, { Component } from 'react';
import { Platform, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

const USE_NATIVE_FEEDBACK = Platform.OS === 'android' && Platform.Version >= 21;

export default class Touchable extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    style: PropTypes.any,
    textStyle: PropTypes.any,
    borderless: PropTypes.any,
    pressColor: PropTypes.any,
    onPress: PropTypes.func.isRequired,
    onPressArgument: PropTypes.any,
    delay: PropTypes.number,
    block: PropTypes.number,
  };

  static defaultProps = {
    borderless: false,
    pressColor: USE_NATIVE_FEEDBACK ? 'rgba(0, 0, 0, .32)' : null,
    delay: USE_NATIVE_FEEDBACK ? 200 : 0,
    block: 300,
  };

  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress(event) {
    const { onPress, onPressArgument, delay, block } = this.props;

    if (onPress && !this.ignoreOnPress) {
      if (delay > 0 && block > 0) {
        this.ignoreOnPress = true;
        setTimeout(() => { onPress(event, onPressArgument); }, delay);
        setTimeout(() => { this.ignoreOnPress = false; }, delay + block);
      } else if (delay > 0) {
        this.ignoreOnPress = true;
        setTimeout(() => { onPress(event, onPressArgument); }, delay);
        setTimeout(() => { this.ignoreOnPress = false; }, delay);
      } else if (block > 0) {
        this.ignoreOnPress = true;
        onPress(event, onPressArgument);
        setTimeout(() => { this.ignoreOnPress = false; }, block);
      } else {
        onPress(event, onPressArgument);
      }
    }
  }

  render() {
    const { children, style, textStyle, pressColor, borderless, ...rest } = this.props;

    let content = children;
    if (typeof content === 'string') {
      content = <Text style={textStyle}>{content}</Text>;
    }
    content = <View style={style}>{content}</View>;

    if (USE_NATIVE_FEEDBACK) {
      const background = TouchableNativeFeedback.Ripple(pressColor, borderless);
      return (
        <TouchableNativeFeedback {...rest} onPress={this.onPress} background={background}>
          {content}
        </TouchableNativeFeedback>
      );
    }

    return (
      <TouchableOpacity {...this.rest} onPress={this.onPress}>
        {content}
      </TouchableOpacity>
    );
  }
}
