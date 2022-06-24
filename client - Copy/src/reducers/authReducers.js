
import { authConstants } from "../constants";

const initState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: ''
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: ''
};



export default (state = initState, action) => {
    //console.log('auth_reducer_action',action);
//console.log('auth_reducers_state',state);
//console.log('auth_reducer_action',action);

    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false
            }
            break;
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...initState
            }
            break;
        case authConstants.LOGOUT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;

    }
    return state;
}

function EditReducer(state = {}, action) {


	
	
  switch (action.type) {
	  
    case authConstants.EDIT_REQUEST:
      return { loading: true };
    case authConstants.EDIT_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case authConstants.EDIT_FAILURE:
      return { loading: false, error: action.payload };
	
	  
    default: return state;
  }
}



export {
  EditReducer
}