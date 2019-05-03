import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Summary extends Component {
    static navigationOptions = {
        headerTitle: 'Resumen Compra'
      };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Resumen Compra</Text>
        <Button
          title="Ir a Presupuesto"
          onPress={() => {
            this.props.navigation.navigate('BudgetExecution');
          }}
        />
      </View>
    )
  }
}
export default Summary