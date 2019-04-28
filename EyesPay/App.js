import { createAppContainer, createStackNavigator } from 'react-navigation';
import Settings from './screens/Settings';
import Home from './screens/Home';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Details: {
    screen: Settings,
  },
}, 
{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(AppNavigator);