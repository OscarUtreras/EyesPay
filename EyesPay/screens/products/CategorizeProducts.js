import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class CategorizeProducts extends Component {
    static navigationOptions = {
        headerTitle: 'Productos'
      };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Categorizar Productos</Text>
      </View>
    )
  }
}

export default CategorizeProducts