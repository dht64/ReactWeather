var names = ['Do', 'Huu', 'Tung'];

// names.forEach(function(name) {
// 	console.log('forEach', name);
// });
// 
// names.forEach((name) => {
// 	console.log('arrowFunc', name);
// 	console.log('something else');
// });

// names.forEach((name) => console.log(name));
// 
// var returnMe = (name) => name + '!';
// console.log(returnMe('Tung'));

var person = {
	name: 'Tung',
	greet: function() {
		names.forEach((name) => {
			console.log(this.name + ' says hi to ' + name);
		});
	}
};
person.greet();

// Challenge
var addStatement = (a, b) => {
	return a + b;
};
console.log(addStatement(4, 7));

var addExpression = (a, b) => a + b;
console.log(addExpression(4, 1));
