import { TEST_FETCH, TEST_POST, ERROR } from "../actions/types";

export default function(state = [], action){
	switch (action.type) {
		case TEST_FETCH:
			return action.payload;
			break;
		case TEST_POST:
			return { 
				...state,
                success: action.payload,
				errors: '',
			}
			break;
		case ERROR:
            return {
				...state,
                success: '',
                errors: action.payload
            }
		default:
			// statements_def
			return state;
			break;
	}
}