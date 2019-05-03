import React, { Component } from 'react';
import { View, Text, Button, TouchableHighlight, StyleSheet } from 'react-native';

export class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login</Text>
        
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('BudgetExecution');
          }}>
          <Text>Ingresar</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('NewAccount');
          }}>
          <Text>Crear Cuenta</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('RecoveryPassword');
          }}>
          <Text>¿Olvidó su contraseña?</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})

export default Login