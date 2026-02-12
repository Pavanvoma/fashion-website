import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const cache = localStorage.getItem("products");

    if (cache) return JSON.parse(cache);

    const res = await axios.get(
      "https://fakestoreapi.com/products"
    );

    localStorage.setItem("products", JSON.stringify(res.data));
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, state => {
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
