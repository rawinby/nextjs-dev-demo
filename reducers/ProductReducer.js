import { PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_CREATE, PRODUCT_UPDATE } from "../actions/types";

export default function(state = [], action){
	switch (action.type) {
		case PRODUCTS_FETCH :
		case PRODUCT_FETCH:
			// statements_1
			return action.payload;
			break;
		case PRODUCT_CREATE:
			return  { 
						saved: true,
						msg: "บันทึกสินค้าเรียบร้อย"
					};
		case PRODUCT_UPDATE:
			return  {	 ...state, 
						saved: true, 
						msg: "อัพเดทสินค้าเรียบร้อย" 
					};
		default:
			// statements_def
			return state;
			break;
	}
}