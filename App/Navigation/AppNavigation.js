import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../Containers/Home';

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    HomeScreen: {screen: HomeScreen},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'HomeScreen',
  },
);

export default createAppContainer(PrimaryNav);
