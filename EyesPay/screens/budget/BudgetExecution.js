import React, { Component } from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


 export class BudgetExecution extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Presupuesto",
    headerRight: <Icon name="home" color="#000" size={30} />,
  });

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  state = {
    modalVisible: false,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello World!</Text>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
        <Text>Ejecución de Presupuesto</Text>
        <TouchableHighlight>
          <Icon name="home" color="#000" size={30} />
        </TouchableHighlight>
      </View>
    )
  }
}

export default BudgetExecution