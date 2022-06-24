import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { insert,update,inserttest } from './actions';

import { Row,Col,Container,Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './App.css';



function Insert() {
   const [id, setId] = useState('');	
   const [name, setName] = useState('');
   const [brand, setBrand] = useState('');
   const [price, setPrice] = useState('');
   const [countInStock, setCountInStock] = useState('');
   const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  
  
  console.log('id',id);
  
  
   const clear = () => {
    setId('');
 setName('');
   setBrand('');
   setPrice('');
   setCountInStock('');
   setDescription('');
 
  };
  
	 let navigate = useNavigate();
	const auth = useSelector((state) => state.auth);
//const edit_data = useSelector((state) => state.Edit);
//console.log('edit_data',edit_data)

const edit_data = useSelector(state => {
	
	const a='one';

	if(id!==undefined)
	{	
		if(state.Edit) {
			return state.Edit
			}
	}
   return null;
})

//console.log('data1==',data1)




const initial = useSelector((state) => state.initial);



const data = useSelector(state => {
   if(typeof(edit_data.userInfo) !== "undefined") {
       return state.initial.userInfo.find((message) =>
	message._id === edit_data.userInfo._id)
   }
   return null;
})

console.log('data==',data)

/*if (typeof(edit_data.userInfo) !== "undefined")
{
//const initial = useSelector((state) => state.initial);

}

*/
 useEffect(() => {
    if (data) 
	{
		setId(data._id);
	setName(data.name);
	  setBrand(data.brand);
   setPrice(data.price);
   setCountInStock(data.countInStock);
   setDescription(data.description);
	}
  }, [data]);

	




  
 





if (auth.authenticate) {
    navigate('../dashboard');
  }
  

	

	 
	 
  const userInsert = (e) => {
        e.preventDefault();
		if(id)
		{
			//alert(5);
 const user = {
            name, brand,price,countInStock,description
			}
			
		 dispatch(inserttest(id,user));	
		   clear();
		   setId('');
		}
else		
{	
        const user = {
            name, brand,price,countInStock,description
			}
			 
		dispatch(insert(user));
		clear();
}
	}
	
	
  return (
    <div >	




  
  



  
  
	<Form onSubmit={userInsert}>
  <Form.Group className="mb-3" >
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" 
	
	value={name}
onChange={(e) => setName(e.target.value)}
	
/>
   
   
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Brand</Form.Label>
    <Form.Control type="text" placeholder="Brand" 
	value={brand}
	onChange={(e) => setBrand(e.target.value)}
	/>
  </Form.Group>
  
  
    <Form.Group className="mb-3" >
    <Form.Label>Price</Form.Label>
    <Form.Control type="text" placeholder="Price"
	value={price}
	onChange={(e) => setPrice(e.target.value)}
	/>
  </Form.Group>


  <Form.Group className="mb-3" >
    <Form.Label>Stock</Form.Label>
    <Form.Control type="text" placeholder="Stock"

value={countInStock}
	onChange={(e) => setCountInStock(e.target.value)}
	/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="description"
value={description}
	onChange={(e) => setDescription(e.target.value)}
	/>
  </Form.Group>







  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
     
	


	
	

    </div>
  );
}

export default Insert;
