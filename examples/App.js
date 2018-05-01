import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import BasicExample from 'rock-native-forms/examples/BasicExample';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  content: {
    padding: 16,
  },
});

export default class App extends Component {
  render() {
    return (
      <KeyboardAwareScrollView style={styles.container} contentContainerStyle={styles.content}>
        <BasicExample />
      </KeyboardAwareScrollView>
    );
  }
}
