const express = require('express')
const router = express.Router();


const Product = require('./productModel');



router.post('/create',async (req,res) => {
	
 const product = new Product({	  	  
    name : req.body.name,
	brand: req.body.brand,
	price: req.body.price,
	countInStock: req.body.countInStock,
    description: req.body.description
  });
  
const newProduct = await product.save();
  
  if (newProduct) {
    return res
      .status(201)
      .send({ message: 'New Product Created', 
	  data: newProduct });
  }
  return res.status(500).send({ message: ' Error in Creating Product.' });

});


router.get("/read",async (req,res) => {
	var findData = await Product.find();
res.json({values:findData});
})


router.get("/:id", async (req, res) => {
  try {
    // Find user by id
    let editProduct = await Product.findById(req.params.id);
    res.json(editProduct);
  } catch (err) {
    console.log(err);
  }
});


router.put("/:id",  async (req, res) => {
	
	
	
  try {
	  console.log(req.params.id);
    let updateProduct = await Product.findById(req.params.id);
		
		

	
    const data = {
      name: req.body.name ,
	  brand:req.body.brand,
	  price:req.body.price,
	  countInStock:req.body.countInStock,
	  description:req.body.description
    };
	
		//console.log('data',data);
	
	
    updateProduct = await Product.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(updateProduct);
  } catch (err) {
    console.log(err);
  }
});



router.delete('/:id', async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ message: 'Product Deleted' });
  } else {
    res.send('Error in Deletion.');
  }
});


module.exports = router