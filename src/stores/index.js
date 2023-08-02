import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import ShopApp from '../reducers';

const store = configureStore({
    reducer: ShopApp,
    middleware: [thunkMiddleware],
});
export default store;
