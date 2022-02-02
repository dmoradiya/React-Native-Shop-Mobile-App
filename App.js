import { Provider } from "react-redux";

import { StyleSheet, Text, View, FlatList } from "react-native";
import store from "./store";
import ProductOverlay from "./screens/shop/ProductOverlay";

export default function App() {
  
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Welcome React Native!</Text>
        <ProductOverlay />      
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
