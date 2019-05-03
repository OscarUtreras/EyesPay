import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class EditProfile extends Component {
  static navigationOptions = {
    headerTitle: 'Editar Perfil'
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Editar Perfil</Text>
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

export default EditProfile