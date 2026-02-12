import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const res = await axios.get(
      "https://fakestoreapi.com/products"
    );
    return res.data;
  }
);

const slice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    favorites: JSON.parse(localStorage.getItem("favorites")) || []
  },

  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;

      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(
          (f) => f !== id
        );
      } else {
        state.favorites.push(id);
      }

      localStorage.setItem(
        "favorites",
        JSON.stringify(state.favorites)
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (s) => {
        s.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (s, a) => {
        s.loading = false;
        s.items = a.payload;
      });
  },
});

export const { toggleFavorite } = slice.actions;
export default slice.reducer;
