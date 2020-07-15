import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../pages/Home';
import EditPage from '../pages/Edit';

import 'react-native-gesture-handler';

export default function Routes() {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={HomePage} options={{ title: "Lista de Tarefas" }} />
                <Stack.Screen name="edit" component={EditPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}