import React, { useEffect } from "react";
import { connect } from "react-redux";
import { View, ScrollView } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { FetchCoinData } from "../../actions";
import CoinCard from "../CoinCard/CoinCard";
const CryptoContainer = ({ crypto }) => {
  useEffect(() => {
    FetchCoinData();
    return () => {};
  }, []);

  function renderCoins() {
    return (
      !!crypto.data.length &&
      crypto.data.map((coin, idx) => (
        <CoinCard
          key={idx}
          coin_name={coin.name}
          symbol={coin.symbol}
          price_usd={coin.price_usd}
          percent_change_24h={coin.percent_change_24h}
          percent_change_7d={coin.percent_change_7d}
        />
      ))
    );
  }
  function renderSpinner() {
    return (
      <Spinner
        visible={crypto.isLoading}
        textContent={"Loading...."}
        animation="fade"
      />
    );
  }
  return (
    <ScrollView contentContainerStyle={contentContainer}>
      {crypto.isLoading ? renderSpinner() : renderCoins()}
    </ScrollView>
  );
};
const styles = {
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 55
  }
};
const mapStateToProps = state => ({
  crypto: state.crypto
});
export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
