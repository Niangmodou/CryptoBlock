
const sha256 = require('js-sha256');

//Block Class to store information for individual blocks
class Block {
	constructor(name,amount,index,previous_hash) {
		this.name = name;
		this.amount = amount;
		this.index = index;
		this.timestamp = new Date()
		this.previous_hash = previous_hash;
		this.hash = this.hash_block(this.name,this.data)
		this.data = { 
			"from": this.hash,
			"amount": amount,
			"to": '//TODO!!!!!'
		}

	}
	hash_block(name,amount) {
		let hash = sha256.create();
		hash.update(`${name} ${amount}`);
		return hash.hex();
	}
}

//Blockchain class to chain the blocks together
class Blockchain {
	constructor() {
		this.chain = [];
		this.transactions = [];

		this.create_genesis();
	}

	create_genesis() {
		//Creates Genesis Block in BlockChain

		let new_block = new Block("Genesis",0,0,"Genesis");
		this.chain.push(new_block);
	}

	last_block() {
		//Retrieves the last block within the chain

		let lengthLast = this.chain.length - 1;
		return this.chain[lengthLast];

	}

	hash_last() {
		//Retrieves the hash of the last block within the chain

		let lastBlock = this.last_block();
		let hash = lastBlock.hash;

		return hash

	}

//IMPLEMENT SENDER AND RECEIVER SYSTEM NEXT!!!!!
	create_transaction(name,amount){
		//Creates and adds a transaction to the blockchain
		let index = this.chain.length - 1;

		let prev_hash = this.hash_last();
		let new_block = new Block(name,amount, index,prev_hash)

		let transaction = {
			"sender": name,
			"amount": amount,
			"time": new_block.timestamp
		};
		this.transactions.push(transaction);
		return new_block;
	}
}

module.exports = {
	Blockchain: Blockchain,
}

// const main = () => {
// 	let bc = new Blockchain();

// 	let names = ["Ron","Tom","Micah","Trevor","Jerry"];
// 	let amnts = [20,30,20,800,10];

// 	for (let i = 0; i < 5; i++){
// 		let name = names[i];
// 		let amount = amnts[i];

// 		let block = bc.create_transaction(name,amount);
// 		console.log(`Block #${block.index} has been added to blockchain!`)
// 		console.log(`Name: ${block.name}	Amount: $${block.amount}	   Time: ${block.timestamp}`)
// 		console.log(`Hash: ${block.hash}`)
// 	}
// }

// main()











