import React, { Component } from 'react';
import {Text, View, FlatList, Dimensions, StyleSheet, ActivityIndicator} from 'react-native';
import {LineChart} from "react-native-chart-kit";


const {width, height} = Dimensions.get('window')

 export class BudgetExecution extends Component {
  static navigationOptions = {
    headerTitle: 'Presupuesto',
  };

  constructor(props){
    super(props);

    this.state = {
        loading: false,
        budgets1: [],
        budgets2: [],
        general_budget: [],
        error: null
    };
  }

  componentDidMount(){
    this.getData();
  }

  getData = () => {
    const url = global.url +'budgets/'+1;
    this.setState( {loading: true} );
    fetch(url)
    .then( res => res.json())
    .then( res => {
        this.setState({
            general_budget: res.splice(0,1)[0],
            budgets1: res.splice(0, res.length/2),
            budgets2: res,
            error: res.error || null,
            loading: false
        });
    })
    .catch(error => {
        this.setState({ error, loading:false });
        alert("Error")
    });
  };

  render() {
    if(this.state.loading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      
      <View style={styles.container}>
      <View>
  <Text>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel={"$"}
    yAxisSuffix={"k"}
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
        <View style={styles.general}>
          <Text>{this.state.general_budget.current + ' / ' + this.state.general_budget.max}</Text>
          <Text>{global.categories[0].name}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.columns}>
            <FlatList
              data={this.state.budgets1}
              renderItem={({ item }) => (
                <View style={styles.box}>
                  <Text>{item.current + ' / ' + item.max}</Text>
                  <Text>{global.categories[item.id_category-1].name}</Text>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.columns}>
            <FlatList
              data={this.state.budgets2}
              renderItem={({ item }) => (
                <View style={styles.box}>
                  <Text>{item.current + ' / ' + item.max}</Text>
                  <Text>{global.categories[item.id_category-1].name}</Text>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  columns: {
    width: width/2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  general: {
    margin: '1%',
    height: height*1.4/6,
    justifyContent: 'flex-end'
  },
  box: {
    marginVertical: '1%',
    marginHorizontal: '2%',
    height: height*0.75/6,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default BudgetExecution