import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginRedux from "./loginRedux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persisrConfigure = {
  key: "AColoshopuser",
  version: 1,
  storage,
};

const rootReducer = combineReducers({ loginuser: loginRedux });
const persistReducers = persistReducer(persisrConfigure, rootReducer);

export const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
