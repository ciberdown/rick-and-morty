import characterReducer from "./reducers/characterReducers";
import locationReducer from "./reducers/locationReducers";
import episodeReducer from "./reducers/episodeReducers";

const { configureStore } = require("@reduxjs/toolkit");

const reducer = {
  characters: characterReducer,
  episodes: episodeReducer,
  locations: locationReducer,
};

const store = configureStore({
  reducer,
});

export default store;
