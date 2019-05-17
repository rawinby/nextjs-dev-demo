import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import ProductReducer from "./ProductReducer";
import OrderReducer from "./OrderReducer";
import TestReducer from "./TestReducer";

const rootReducer = combineReducers({

	orders: OrderReducer,
	products: ProductReducer,
	form : reduxForm,
	Test: TestReducer

})

export default rootReducer;