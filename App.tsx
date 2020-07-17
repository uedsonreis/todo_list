import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './src/store';

import Routes from './src/components/Routes';

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <StatusBar barStyle="dark-content" />
                <Routes />
            </PersistGate>
        </Provider>
    );
}
