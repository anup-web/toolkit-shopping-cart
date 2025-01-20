import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',    
});

const singleproductSlice = createSlice({
     name: 'singleproducts',
     initialState: {
        singledata: [],
        status: STATUSES.IDLE,        
     },

     reducers: {
           // setProducts(state, action) {
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // },
     },
     extraReducers: (builder) => {
        builder
         .addCase(singlefetchProducts.pending, (state) => {
             state.status = STATUSES.LOADING;
         })
         .addCase(singlefetchProducts.fulfilled, (state, action) => {             
             state.data = action.payload;
             state.status = STATUSES.IDLE;
         })
         .addCase(singlefetchProducts.rejected, (state, action) => {
             state.status = STATUSES.ERROR;
             console.error('Error fetching products:', action.error);
         });
     }
    
});


export const { id } = singleproductSlice.actions;

export default singleproductSlice.reducer;


// Thunks
export const singlefetchProducts = createAsyncThunk('products/singlefetch', async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const singledata = await res.json();
        return singledata;
});

// export const singlefetchProducts = createAsyncThunk(
//     'items/fetchSingleItem', 
//     async (id) => { 
//       try {
//         const response = await axios.get(`/api/items/${itemId}`);
//         return response.data; 
//       } catch (error) {
//         // Handle errors appropriately 
//         // For example:
//         throw new Error(`Failed to fetch item with ID ${itemId}: ${error.message}`); 
//       }
//     }
//   );

// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         } catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     };
// }