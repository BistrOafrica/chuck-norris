import React from 'react';

//css
import './Styles/index.css';

//redux && store
import {createRoot} from 'react-dom/client';
import { Provider } from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import {configureStore} from "@reduxjs/toolkit";
import {persistReducer,persistStore} from 'redux-persist'
import rootReducer from "./Store/Reducers/reducers";

//root-node
import App from './App';


const persistConfig={
    key:"root",
    storage
}

const persistedReducer=persistReducer(persistConfig,rootReducer);

const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})

const persistedStore=persistStore(store);

const root=createRoot(document.getElementById("root"))
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistedStore}>
                    <App />
        </PersistGate>
    </Provider>);


