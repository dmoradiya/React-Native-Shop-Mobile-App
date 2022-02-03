import React from 'react';
import { FlatList, View, Text,Image } from 'react-native';
import { useSelector } from "react-redux";

const ProductOverlay = (props) => {
    const allProducts = useSelector(state => state.productList.allProduct);
    console.log(allProducts);
  return (
    <FlatList
      data={allProducts}
      keyExtractor={(item, index) => {item.map(x=>x.id)}}
      renderItem={(itemData) =>
        itemData.item.map((data) => (
          <View>
            <Image
              style={{ width: 300, height: 300 }}
              source={{ uri: data.imageUrl }}
            />
            <Text>{data.price}</Text>
            <Text>{data.title}</Text>
          </View>
        ))
      }
    />
  );
};

export default ProductOverlay;
