import axios from "axios";
import { ORDER_FETCH } from "./types";

export const ordersFetch = () => {

	return dispatch => {
		axios.get(process.env.REACT_APP_API_URL + "/orders").then(response => {
			dispatch({
				type: ORDER_FETCH,
				payload: response.data
			});
		})
	}
}

export const orderDelete = id => {
	return dispatch => {
		axios.delete(process.env.REACT_APP_API_URL + "/orders/"+ id).then(response => {
			axios.get(process.env.REACT_APP_API_URL + "/orders").then(response => {
				dispatch({
					type: ORDER_FETCH,
					payload: response.data
				});
			})
		})
	}
}