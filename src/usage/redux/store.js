import characterReducer from './reducers/characterReducers'


const { configureStore } = require("@reduxjs/toolkit")

const reducer = {
    characters: characterReducer,
    // eposode: ,
    // location: ,
}

const store = configureStore({
    reducer,
})

export default store;