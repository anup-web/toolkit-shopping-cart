import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import singleproductSlice from './singleproductSlice';

const store = configureStore({
    reducer: {
        // Define your reducers here
        product: productReducer,
        cart: cartReducer,
        singleproduct: singleproductSlice,
        // Add other slice reducers here
    },
    // Other store setup goes here
})

export default store;