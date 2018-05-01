import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextInput as OriginalTextInput, Text, View } from 'react-native';

import FormContext from './FormContext';

export default class TextInput extends PureComponent {
  static propTypes = {
    autoTrim: PropTypes.bool,
    required: PropTypes.bool,
    validateMinLength: PropTypes.number,
    validateMaxLength: PropTypes.number,
  }

  static defaultProps = {
    autoTrim: true,
  }

  constructor(props) {
    super(props);

    const value = this.props.initialValue || '';
    this.state = {
      value,
      focused: false,
      touched: false,
      dirty: false,
      valid: this.validate(value),
    }
  }

  onChangeText = (text) => {
    this.setState({
      value: text,
      dirty: true,
      valid: this.validate(text),
    });
    if (this.props.onChangeText) {
      this.props.onChangeText(text);
    }
  }

  onBlur = (event) => {
    this.setState({
      focused: false,
    });
  }

  onFocus = (event) => {
    this.setState({
      focused: true,
      touched: true,
    });
  }

  onEndEditing = (event) => {
    if (this.props.autoTrim) {
      console.log('auto trim');
      this.setState({
        value: this.state.value.trim(),
        focused: false,
      });
    } else {
      this.setState({
        focused: false,
      });
    }
  }

  onSubmitEditing = (event) => {
    this.setState({
      focused: false,
    });
  }

  validate = (value) => {
    const { required, validateMinLength, validateMaxLength } = this.props;

    const currentLength = value && value.length || 0;

    if (currentLength === 0 && required) {
      return false;
    }

    if (currentLength !== 0 && currentLength < validateMinLength) {
      return false;
    }

    if (currentLength !== 0 && currentLength > validateMaxLength) {
      return false;
    }

    return true;
  }

  render() {
    const p = this.props;
    const { value, focused, touched, dirty, valid } = this.state;
    const style = [
      p.style,
      focused ? p.focusedStyle : p.unfocusedStyle,
      touched ? p.touchedStyle : p.untouchedStyle,
      dirty ? p.dirtyStyle : p.pristineStyle,
      valid ? p.validStyle : p.invalidStyle,
    ];

    return (
      <FormContext.Consumer>
        {(formState) => (
          <View>
            <Text>
              Parent state: {JSON.stringify(formState)}
            </Text>
            <Text>
              TextInput state: {JSON.stringify(this.state)}
            </Text>
            <OriginalTextInput
              {...this.props}
              value={value}
              onChangeText={this.onChangeText}

              onChange={this.onChange}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              onEndEditing={this.onEndEditing}
              onSubmitEditing={this.onSubmitEditing}
              style={style}
            />
          </View>
        )}
      </FormContext.Consumer>
    );
  }
}
