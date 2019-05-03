import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Ocr extends Component {
  static navigationOptions = {
    headerTitle: 'Scan'
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>OCR</Text>
        <Button
          title="Resumen de Compra"
          onPress={() => {
            this.props.navigation.navigate('Summary');
          }}
        />
      </View>
    )
  }
}

export default Ocr