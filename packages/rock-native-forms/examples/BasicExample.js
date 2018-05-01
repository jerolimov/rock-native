import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Form, FormGroup, Picker, Slider, Switch, TextInput } from '../src';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  content: {
    padding: 16,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  textInputFocused: {
    backgroundColor: '#eeffff',
  },
  textInputValid: {
    borderColor: 'green',
  },
  textInputInvalid: {
    borderColor: 'red',
  }
});

export default class BasicExample extends Component {
  render() {
    return (
      <Form>
        {formState => (
          <View>
            <Text>
              Form state: {JSON.stringify(formState)}
            </Text>
            <FormGroup>
              <Text>Username:</Text>
              <TextInput
                name="username"
                style={styles.textInput}
                focusedStyle={styles.textInputFocused}
                validStyle={styles.textInputValid}
                invalidStyle={styles.textInputInvalid}
                validateMinLength={3}
                validateMaxLength={6}

                maxLength={10}
              />
            </FormGroup>
            <FormGroup>
              <Text>Password:</Text>
              <TextInput
                name="password"
                secureTextEntry
                style={styles.textInput}
                focusedStyle={styles.textInputFocused}
                validStyle={styles.textInputValid}
                invalidStyle={styles.textInputInvalid}
                required
              />
            </FormGroup>
            <FormGroup>
              <Text>Picker:</Text>
              <Picker />
            </FormGroup>
            <FormGroup>
              <Text>Slider:</Text>
              <Slider />
            </FormGroup>
            <FormGroup>
              <Text>Switch:</Text>
              <Switch />
            </FormGroup>
          </View>
        )}
      </Form>
    );
  }
}
