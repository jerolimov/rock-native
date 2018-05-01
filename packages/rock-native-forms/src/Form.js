import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormContext from './FormContext';

export default class Form extends Component {
  static propTypes = {
    render: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  }

  state = {
    submitted: false,
    valid: true,
    invalid: false,
    value: {},
  }

  submit = () => {
    this.setState({ submitted: true });
  }

  reset = () => {
    this.setState({ submitted: false });
  }

  render() {
    const { render, children } = this.props;

    const content =
      render ? render() :
      typeof children === 'function' ? children() :
      children;

    return (
      <FormContext.Provider value={this.state}>
        {content}
      </FormContext.Provider>
    );
  }
}
