import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export class Ocr extends Component {
  static navigationOptions = {
    headerTitle: 'Scan'
  };

  constructor(props){
    super(props);

    this.state = {
        avatarSource: null
    };
  }

  onPressButtonGET(base64img){
    fetch('https://led-ls.co/recognitionimage',{
      'method':'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imagen: base64img
      })
    })
    .then((response)=>response.json())
    .then((responseData)=>
                this.setState({
                  contenido: responseData.contenido,
                  tipo: responseData.tipo_contenido,
                  valor: responseData.valor})
        )
   }

  render() {
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        this.props.navigation.navigate('BudgetExecution');
      } else if (response.error) {
        alert('ImagePicker Error: ', response.error);
      } else {
        base64img= 'data:image/jpeg;base64,' + response.data;
        this.onPressButtonGET(base64img);
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          avatarSource: source,
        });
      }
    });

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>OCR</Text>
        <Button
          title="Resumen de Compra"
          onPress={() => {
            this.props.navigation.navigate('Summary');
          }}
        />
        <Image source={this.state.avatarSource} />
      </View>
    )
  }
}

export default Ocr