import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from "react-native";

const CryptoContainer = () => {
    return (
        <View>
            <Text>Crypto List</Text>
        </View>
    );
};
const mapStateToProps = (state) => ({
    crypto: state.crypto
});
export default connect(mapStateToProps)(CryptoContainer);
