import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const cache = localStorage.getItem("products");

    if (cache) {
      return JSON.parse(cache);
    }

    const res = await axios.get(
      "https://fakestoreapi.com/products"
    );

    localStorage.setItem(
      "products",
      JSON.stringify(res.data)
    );

    return res.data;
  }
);

const slice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
    favorites: JSON.parse(
      localStorage.getItem("favorites") || "[]"
    ),
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
        s.error = null;
      })
      .addCase(fetchProducts.fulfilled, (s, a) => {
        s.loading = false;
        s.items = a.payload;
      })
      .addCase(fetchProducts.rejected, (s) => {
        s.loading = false;
        s.error = "Failed to load products";
      });
  },
});

export const { toggleFavorite } = slice.actions;
export default slice.reducer;
