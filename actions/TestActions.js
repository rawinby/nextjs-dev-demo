import axios from "axios";
import { TEST_POST, ERROR } from "./types";


export const testPost = values => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios.get(process.env.GITHUB_API_ENDPOINT + "/search/repositories?q=language:javascript&sort=stars&order=desc", values).then(res => {
				dispatch({ 
					type: TEST_POST,
					payload: res.data
				})
				resolve(res)
			}).catch(err => {
				dispatch({
					type: ERROR,
					payload: err.status+': '+err.message
				})
				reject(err)
			})
		});
	}
}
