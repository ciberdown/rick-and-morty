import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

const reducers = {
  setModeDark: (state) => {
    state.mode = "dark";
  },
  setModeLight: (state) => {
    state.mode = "light";
  },
};

export const charSlice = createSlice({
  name: "mode",
  initialState,
  reducers,
});

export const { setModeDark, setModeLight } = charSlice.actions;

export default charSlice.reducer;
