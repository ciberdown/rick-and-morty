import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: null,
  isLoading: false,
  error: null,
  page: 1,
};

const reducers = {
  setCharacters: (state, action) => {
    state.characters = action.payload;
    state.isLoading = false;
    state.error = null;
  },
  setIsloadingTrue: (state, action) => {
    state.isLoading = true;
  },
  setError: (state, action) => {
    state.error = action.payload;
    state.characters = null;
    state.isLoading = false;
  },
  nextPage: (state, action) => {
    if (state.page < 42) {
      state.page = state.page + 1;
    }
  },
  prevPage: (state, action) => {
    if (state.page > 1) {
      state.page = state.page - 1;
    }
  },
};

export const charSlice = createSlice({
  name: "characters",
  initialState,
  reducers,
});

export const { setCharacters, setError, setIsloadingTrue, nextPage, prevPage } =
  charSlice.actions;

export default charSlice.reducer;
