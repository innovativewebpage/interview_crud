
import { combineReducers } from 'redux';
import  authReducer from './authReducers';
import  initialReducer from './initialReducers';
import  {EditReducer} from './authReducers';



const reducer = combineReducers({
	auth:authReducer,
	initial:initialReducer,
	Edit:EditReducer
	
});

 
 
 export default reducer;