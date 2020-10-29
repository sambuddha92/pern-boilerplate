import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from "redux"; 
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk"

import authReducer from "./authSlice";

const reducers = combineReducers({
  auth: authReducer     
 });
 
 const persistConfig = {
     key: "root",
     whitelist: ["auth"],
     storage
 };
 
 const persistedReducer = persistReducer(persistConfig, reducers);

 const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: [thunk]
});

const persistor = persistStore(store);

export {
  store,
  persistor
};
