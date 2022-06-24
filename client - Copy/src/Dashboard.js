import React from "react";
import { signout } from "./actions";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
	const initial = useSelector((state) => state.initial);
	
	console.log('initial',initial.userInfo);
	let navigate = useNavigate();
	  const dispatch = useDispatch();
	  
	  
	  const auth = useSelector((state) => state.auth);
	console.log('signin=',auth);
	

if (!auth.authenticate) {
    navigate('../Signin');
  }
	
 const logout = () => {
   dispatch(signout());
  
  };
	
  return (
    <div>
      <h1>Dashboard{initial.userInfo.length}</h1>
	  <button onClick={logout}> Click me!</button>
	  {initial.userInfo.length > 0 ? 'ss' : 'tt' }
	
	
	
	<table style={{ fontSize: 12 }} responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {initial.userInfo.length > 0
            ? initial.userInfo.map((product,index) => (
                <tr key={product._id}>
                  <td>{index+1}</td>
                  <td>{product.fullName}</td>
                  <td>{product.email}</td>
                  <td>{product.username}</td>
      
                </tr>
              ))
            : null}
        </tbody>
      </table>
	
    </div>
  );
};

export default Dashboard;