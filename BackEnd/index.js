const express = require('express')
const app = express();
const mongoose = require('mongoose');



const url = `mongodb+srv://${'omarrizwan'}:${'reaang12'}@cluster0.asgxn.mongodb.net/${'my_own_interview_one'}?retryWrites=true&w=majority`;
var db = mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},(err) => {
	if(!err)
	{
		console.log("mongoose connection succedeed");
	}
else
{
console.log("error in DB connection"+err);
}
});

app.use(express.json())

const ProductRoute = require('./productRoutes');
app.use('/app/data',ProductRoute);





//Start the server
var port =5000;

app.listen(port,function(){
	console.log('server start on port' + port);
});

