import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class EditBudget extends Component {
  static navigationOptions = {
    headerTitle: 'Editar Presupuesto'
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Nueva Cuenta</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('BudgetExecution');
          }}
        />
      </View>
    )
  }
}

export default EditBudget