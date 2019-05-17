import { ORDER_FETCH } from "../actions/types";

export default function(state = [], action){
	switch (action.type) {
		case ORDER_FETCH :
			// statements_1
			return action.payload;
			break;
		default:
			// statements_def
			return state;
			break;
	}
}