import { createSlice } from "@reduxjs/toolkit";
import ALL_PRODUCTS from "../data/dummy-data";

const productSlice = createSlice({
  name: "productList",
  initialState: {
    allProduct: [ALL_PRODUCTS],
    userProduct: [ALL_PRODUCTS.filter(product => product.ownerID === 'u1')]
    
  },
  reducers: {
   
  },
});
export const productSliceActions = productSlice.actions;
export default productSlice;
