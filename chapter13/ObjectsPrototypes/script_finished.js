// Simple prototype example

// WHAT FOLLOWS IS A CONSTRUCTOR FUNCTION:
function Player(n,s,r) {
	this.name = n;
	this.score = s;
	this.rank = r;
}

/*
Everty object in JS has a "prototype property". And functions, like the Player fn I just made, is an object.
And I can use that prototype property that exists in all objects by default. And I can use it like this:
Player.prototype.logInfo = function() {... console.log...}	// this .logInfo is my method, I can call it whatever. 
															// and I can add more, like .promote
*/
Player.prototype.logInfo = function() {
	console.log("I am:" , this.name);
}

Player.prototype.promote = function() {
	this.rank++;
	console.log("My new rank is: " , this.rank);
}

// Finally, using .prototype, I'm making .logInfo & .promote available on any new Player object.
// And now after creating the new player Fred, I can fred.logInfo(), and fred.promote();
var fred =  new Player("Fred",10000,5);
fred.logInfo();
fred.promote();

var bob = new Player("Bob",50,1);
bob.logInfo();
bob.promote();

var jane = new Player("Jane",50000,10);
jane.logInfo();
jane.promote();













