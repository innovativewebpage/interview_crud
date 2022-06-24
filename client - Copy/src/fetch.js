import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { insert, deleteProdcut,editProdcut} from './actions';

import { Row,Col,Container,Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './App.css';



function SignIn() {
	
	 let navigate = useNavigate();
	 const dispatch = useDispatch();


	const initial_data = useSelector((state) => state.initial);

	//console.log('initial_data_fetch',initial_data)


const deleteHandler = (product) => {
     dispatch(deleteProdcut(product._id));
  };


  const editHandler = (product) => {
   dispatch(editProdcut(product._id));
 //alert(product)
   
  };

	
	
  return (
    <div className="App">	



<table style={{ fontSize: 12 }} responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Count In Stock</th>
            <th>Description</th>
			<th>Edit</th>
			<th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {initial_data.userInfo.length > 0
            ? initial_data.userInfo.map((product,index) => (
                <tr key={product._id}>
                  <td>{index+1}</td>
                  <td>{product.name}</td>
                  <td>{product.brand}</td>
                  <td>{product.price}</td>
				  <td>{product.countInStock}</td>
				  <td>{product.description}</td>
				  <td><Button 
				  onClick={() => editHandler(product)}
				  variant="primary">Edit</Button></td>
				   <td><Button 
				   onClick={() => deleteHandler(product)}
				   variant="danger">Delete</Button></td>
                </tr>
              ))
            : null}
        </tbody>
      </table>

	
	

    </div>
  );
}

export default SignIn;
