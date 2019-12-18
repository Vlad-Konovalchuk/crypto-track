import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from "./src/components/Header";
import {CryptoContainer} from "./src/components/CryptoContainer";
import {Provider} from 'react-redux';
import {store} from "./src/store";

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Header/>
                Test?
                <CryptoContainer/>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
