// import { configureStore } from '@reduxjs/toolkit'
// import { cartReducer } from "./cartSlice"
// import  favoritesReducer  from "./favoritesSlice"

// export const store = configureStore({
//   reducer: {
//     basket: cartReducer,
//     favorites: favoritesReducer,
//   },
// });

// import { configureStore } from "@reduxjs/toolkit";
// import { cartReducer } from "./cartSlice";
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, cartReducer)

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })

// export const persistor = persistStore(store);

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { cartFavoritesReducer } from "./favoritesSlice";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth";
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

const persistConfig = {
  key: "root",
  storage,
};

//////////////////////////////////////////////////////////////
const basketPersistConfig = {
  key: "basket",
  storage,
};

const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

const authPersistConfig = {
  key: "auth",
  storage,
};

const rootReducer = combineReducers({
  favorites: (favoritesPersistConfig, cartFavoritesReducer),
  basket: (basketPersistConfig, cartReducer),
  auth: (authPersistConfig, authReducer),
});

/////////////////////////////////////////////////////////////////

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export default store;
export const persistor = persistStore(store);
