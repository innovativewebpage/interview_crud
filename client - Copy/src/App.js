import React,{useState,useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Row,Col,Container,Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
BrowserRouter as Router,
Routes,
Route,
Link,
useParams

} from "react-router-dom";

import { isUserLoggedIn, getInitialData } from './actions';



import SignIn from './SignIn';
import Fetch from './fetch';
import HomePage from './HomePage';

import PrivateOutlet from "./PrivateOutlet";


import './App.css';

function App() {
	
const dispatch = useDispatch();
  //const auth = useSelector(state => state.auth)
const auth = useSelector((state) => state.auth);
	console.log(auth);
	const initial_data = useSelector((state) => state.initial);

const edit_data = useSelector((state) => state.Edit);

  useEffect(() => {
      dispatch(getInitialData());
  }, [edit_data,auth]);
	
  return (
  <Router>
    <div className="App">

 <Row>
 
 
   <Col xs={6}>
	<Routes>
	 
	  <Route path="/"  element={<Fetch/>}>Fetch
	  </Route>
	 
</Routes>
 </Col>
 
     <Col xs={6}>
	<Routes>
	 
	  <Route path="/"  element={<SignIn/>}>Sign In
	  </Route>
	 
</Routes>
 </Col>
 
  
	   </Row>



	  
	  
		
    </div>
	  </Router>
  );

}

export default App;
