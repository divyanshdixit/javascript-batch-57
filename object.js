// methods == function
var details = { // 2000
    name: 'divyansh',
    age: 28,
    city: 'noida',
    printNameAge: function(){
        console.log('first');
    }
}

details.age = 29
console.log(details) // 2000

var name = "divyansh"; // reference/address => memory location 1000
name = "abhi"; // 1001
console.log(name)