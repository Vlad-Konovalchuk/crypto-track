import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function CoinCard({ symbol, price_usd, percent_change_24h }) {
  return (
    <View>
      <Text>{symbol}</Text>
      <Text>{price_usd}</Text>
      <Text>{percent_change_24h}</Text>
    </View>
  );
}
