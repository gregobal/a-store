import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {cartReducer, cartSliceName} from "./cart";
import {orderReducer} from "./order";

const rootReducer = combineReducers({
    cart: cartReducer,
    order: orderReducer,
});

const persistConfig = {
    key: 'a-store',
    version: 1,
    storage,
    whitelist: [cartSliceName]
}

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
