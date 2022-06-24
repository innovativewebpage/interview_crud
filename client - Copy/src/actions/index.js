import axios from "axios";

import { authConstants } from "../constants";

export const insert = (user) => async (dispatch) => {
	console.log('insert=',user);
	  const res = await axios.post(`/app/data/create`, {
            ...user
        });
		
		//console.log('res=',res)
		if(res.status === 201){
			
			console.log('res.data',res.data)
			
			const { data } = res.data;
			
			dispatch({
                type: authConstants.INSERT_SUCCESS,
                payload: {
                    data
                }
            })  
        }
}


export const getInitialData = () => {
  return async (dispatch) => {
    const res = await axios.get(`/app/data/read`);
	if(res.status === 200){
	 const { values } = res.data;
	 
	 dispatch({
                type: authConstants.INITIAL_SUCCESS,
                payload: {
                    values
                }
            });
	}
  };
};


export const deleteProdcut = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete('/app/data/' + id, {
    });
//console.log('data',data);
getInitialData();
    //dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};



export const editProdcut = (productId) => async (dispatch) => {
	
	try {
		//dispatch({ type: PRODUCT_EDIT_REQUEST });
	
const { data } = await axios.get('/app/data/' + productId, {});
getInitialData();
	 dispatch({ type:authConstants.EDIT_SUCCESS, payload: data });
    //console.log('editdata',data)
	
	}
	
	catch (error) {
		 //dispatch({ type: PRODUCT_EDIT_FAIL, payload: error.message });
 
		  }
};

export const inserttest = (id,test) => async (dispatch) => {
	console.log('insert=',id);
	console.log('test=',test);
	    const { data } =  await axios.put(
        '/app/data/' + id,
		{ 
				...test
		});
	 getInitialData();
	 //dispatch({ type: UPDATE, payload: data });
		}

/*export const update = (id, user) => async (dispatch) => {
	
	console.log('id');
	
  try {
    const { data } =  await axios.put(
        '/app/data/' + id,
		{ 
				user
		});

    //dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};*/