import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locations: null,
  error: null,
  isLoading: false,
  page: 1,
};

const reducers = {
  setLocations: (state, action) => {
    state.locations = action.payload;
    state.error = null;
    state.isLoading = false;
  },
  setLocationError: (state, action) => {
    state.error = action.payload;
    state.locations = null;
    state.isLoading = false;
  },
  setLocationIsLoadingTrue: (state, action) => {
    state.isLoading = true;
  },
  nextLocationPage: (state, action) => {
    state.page = state.page + 1;
  },
  prevLocationPage: (state, action) => {
    state.page = state.page - 1;
  },
};

export const locationSlice = createSlice({
  name: "locations",
  initialState,
  reducers,
});

export const {
  setLocations,
  setLocationError,
  setLocationIsLoadingTrue,
  nextLocationPage,
  prevLocationPage,
} = locationSlice.actions;

export default locationSlice.reducer;