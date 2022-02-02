import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useSelector } from "react-redux";

const ProductOverlay = () => {
    const allProducts = useSelector((state) => {
      console.log(state.productList);
    });
  return <View>

  </View>;
};

export default ProductOverlay;
