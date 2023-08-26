import characterReducer from "./reducers/characterReducers";
import locationReducer from "./reducers/locationReducers";
import episodeReducer from "./reducers/episodeReducers";
import modeReducers from "./reducers/modeReducers";

const { configureStore } = require("@reduxjs/toolkit");

const reducer = {
  characters: characterReducer,
  episodes: episodeReducer,
  locations: locationReducer,
  mode: modeReducers,
};

const store = configureStore({
  reducer,
});

export default store;
