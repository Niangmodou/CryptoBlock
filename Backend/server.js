const express = require('express');
const bodyParser = require('body-parser');
const blockchain = require('./blockchain.js')
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))//MiddleWare
app.use(bodyParser.json())
app.use(cors())

const database = {
	users: [
		{
			id:'123',
			name: 'Mo',
			password: 'cookie',
			email:'Mo@nyu.edu',
			balance: 50,
			joined: new Date()
		},
		{
			id:'345',
			name: 'Sally',
			password: 'cookie',
			email:'Sally@nyu.edu',
			balance: 100,
			joined: new Date()
		}
	],
	login: [
		{
			id: '987',
			hash: '',
			email: 'Mo@nyu.edu'
		}
	]
}

const {Blockchain} = blockchain;

/*

localhost:3000/ -> 

localhost:3000/signin -> POST request
localhost:3000/register -> POST request

localhost:3000/home -> GET Request to display Information
localhost:3000/send -> POST request to send coins from one user to another
localhost:3000/request -> POST request to send the request
*/

app.get('/',(req,res) => {
	/*
	Homepage when app is running
	*/
	res.json(database.users);
})

app.get('/homepage/:id',(req,res) => {
	/*
	Get -> /homepage/:userid -> responds with json of user data
	*/
	//console.log(req.params)
	const {id} = req.parameters;
	let found = false;
	database.users.forEach(users => {
		if(users.id === id){
			return res.json(user);
			found = true;
		}
	})
	if(!found){
		res.status(404).json("no such users");
	}
})

app.post('/signin',(req,res) => {
	/*
	Post -> responds with success or fail
	Retrieves login data for email and password sent from 
	the frontend
	*/
	const {email,password} = req.body;
	
	if(email === database.users[0].email
	 && password === database.users[0].password){
	 	res.json("succes");
	}else{
		res.status(400).json("error");
	}

})

app.post('/register',(req,res) =>{
	/*
	Post -> returns user object
	Retrieves data for email and password sent from 
	the frontend
	*/

	const {email,name,password} = req.body;

	database.users.push({
		id:'123',
		name: name,
		password: password,
		email:email,
		balance: 0,
		joined: new Date()
	})

	res.json(database.users[database.users.length - 1]); //returns last item
})

app.post('/send',(req,res) => {
	/*
	:pararm => create_transaction(name,amount)
	- Takes In Sender and Receiver Information from text box
	- Creates Transaction to Send to another User
	- Checks if account has sufficient balance before sending
	- Finds Receiver to add balance to their account
	- Adds Transaction to transaction database
	*/
	let senderName = "Sample Sender";//Receive from Frontend
	let senderAmount = 50;

	let receiverName = "Sample Receiver" ;

	block = Blockchain.create_transaction(name,amount);
	let info = {
		"from": block.hash,
		"amount": block.amount, 
	}

})
app.listen(3000, ()=> {
	console.log("server is running");
});