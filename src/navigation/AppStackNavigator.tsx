import * as React from 'react';
import homeView from '../Home/View/HomeView.tsx';
import ListaView from '../Lista/View/ListaView.tsx';
import TaskView from '../Task/View/TaskView.tsx';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        component={homeView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="List"
        component={ListaView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Task"
        component={TaskView}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
