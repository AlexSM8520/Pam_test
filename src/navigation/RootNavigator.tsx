import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './AppStackNavigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
