import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  episodes: null,
  error: null,
  isLoading: false,
  page: 1,
};

const reducers = {
  setEpisodes: (state, action) => {
    state.episodes = action.payload;
    state.error = null;
    state.isLoading = false;
  },
  setEpisodeError: (state, action) => {
    state.episodes = null;
    state.isLoading = false;
    state.error = action.payload;
  },
  setEpisodeIsLoadingTrue: (state) => {
    state.isLoading = true;
  },
  nextEpisodePage: (state) => {
    state.page = state.page + 1;
  },
  prevEpisodePage: (state) => {
    state.page = state.page - 1;
  },
};

export const episodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers,
});

export const {
  setEpisodes,
  setEpisodeError,
  setEpisodeIsLoadingTrue,
  nextEpisodePage,
  prevEpisodePage,
} = episodesSlice.actions;

export default episodesSlice.reducer;