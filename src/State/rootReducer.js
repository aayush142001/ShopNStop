import { combineReducers } from 'redux';
import { authReducer } from './Auth/Reducer';
import { cartReducer } from './Cart/Reducer';
import { orderReducer }  from './Order/Reducer';
import { customerProductReducer } from './Product/Reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    products: customerProductReducer,
    cart: cartReducer,
    order: orderReducer,
});

export default rootReducer;