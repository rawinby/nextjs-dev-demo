import axios from "axios";
import { PRODUCTS_FAIL, PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_CREATE, PRODUCT_UPDATE } from "./types";

export function productsFail (error) {
  return {
    type: PRODUCTS_FAIL,
    error
  }
}

export const productFetch = id => {
	return dispatch => {
		axios.get(process.env.REACT_APP_API_URL + "/products/"+ id).then(response => {
			dispatch({
				type: PRODUCT_FETCH,
				payload: response.data
			});
		})
	}
}

export const productsFetch = () => {
	return dispatch => {
		axios.get(process.env.REACT_APP_API_URL + "/products").then(response => {
			dispatch({
				type: PRODUCTS_FETCH,
				payload: response.data
			});
		})
	}
}

export const productDelete = id => {
	return dispatch => {
		axios.delete(process.env.REACT_APP_API_URL + "/products/"+ id).then(response => {
			axios.get(process.env.REACT_APP_API_URL + "/products").then(response => {
				dispatch({
					type: PRODUCTS_FETCH,
					payload: response.data
				});
			})
		})
	}
}

export const productCreate = values => {
	return dispatch => {
		axios.post(process.env.REACT_APP_API_URL + "/products", values).then( response => {
			dispatch({ 
				type: PRODUCT_CREATE
			})
		})
	}
}

export const productUpdate = (id, values) => {
	return dispatch => {
		axios.put(process.env.REACT_APP_API_URL + "/products/"+id, values).then( response => {
			dispatch({
				type: PRODUCT_UPDATE
			})
		})
	}
}