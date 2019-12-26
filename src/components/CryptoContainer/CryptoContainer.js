import React, { useEffect } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { FetchCoinData } from "../../actions";
const CryptoContainer = ({}) => {
  useEffect(() => {
    FetchCoinData();
    return () => {
      ;
    };
  }, []);
  return (
    <View>
      <Text>Crypto List</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  crypto: state.crypto
});
export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
