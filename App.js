import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './src/screens/Home';
import Rules from './src/screens/Rules';
import Credit from './src/screens/Credit'
import LoadPage from './src/screens/LoadPage';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name = 'Home' component = {Home} />
        <Stack.Screen name = 'Rules' component = {Rules} />
        <Stack.Screen name = 'Credits' component = {Credit} />
        <Stack.Screen name = 'LoadPage' component = {LoadPage} />
      </Stack.Navigator>      
    </NavigationContainer>
  );
}
