import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './screens/auth/Login'
import NewAccount from './screens/auth/NewAccount'
import RecoveryPassword from './screens/auth/RecoveryPassword'
import BudgetExecution from './screens/budget/BudgetExecution'
import EditBudget from './screens/budget/EditBudget'
import CategorizeProducts from './screens/products/CategorizeProducts'
import EditProfile from './screens/profile/EditProfile'
import Ocr from './screens/scan/Ocr'
import Summary from './screens/scan/Summary'

const AuthStack = createStackNavigator({
  Login: {screen: Login},
  NewAccount: {screen: NewAccount},
  RecoveryPassword: {screen: RecoveryPassword}
},
{
  initialRouteName: "Login"
});

const BudgetStack = createStackNavigator({
  BudgetExecution: {screen: BudgetExecution},
  EditBudget: {screen: EditBudget}
},
{
  initialRouteName: "BudgetExecution"
});

const ProductsStack = createStackNavigator({
  CategorizeProducts: {screen: CategorizeProducts}
},
{
  initialRouteName: "CategorizeProducts"
});

const ProfileStack = createStackNavigator({
  EditProfile: {screen: EditProfile}
},
{
  initialRouteName: "EditProfile"
});

const ScanStack = createStackNavigator({
  Ocr: {screen: Ocr},
  Summary: {screen: Summary}
},
{
  initialRouteName: "Ocr"
});

const TabNavigator = createBottomTabNavigator({
  Productos: ProductsStack,
  Scan: ScanStack,
  Presupuesto: BudgetStack
});

export default createAppContainer(createSwitchNavigator(
  {
    Auth: AuthStack,
    App: TabNavigator,
    Profile: ProfileStack
  },
  {
    initialRouteName: 'Auth',
  }
));
