
import { authConstants } from "../constants";



const initState = {
    userInfo:[]
};

export default (state = initState, action) => {

    //console.log('auth_reducer_action',action);


//console.log('auth_reducers_state',state);
//console.log('auth_reducer_action',action);

    switch (action.type) {
        case authConstants.INITIAL_REQUEST:
            state = {
              loading: true
            }
            break;
        case authConstants.INITIAL_SUCCESS:
            state = {
            loading: false, 
			userInfo: action.payload.values
			   
            }
            break;
   

    }
    return state;
}