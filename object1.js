// own prop, methods
// {key: value }

// this => it will denote the parent object

console.log(this); // window.

var obj = {
    name: 'divyansh',
    age: 28,
    printName: function(){
        console.log('name is ', this.name)
        return ''
    },
    add: function(x,y){
        console.log(`the sum of ${x} and ${y} is: ${x+y}`)
    }
};

console.log(obj.add(2,3))

console.log(obj.printName())
// var name = 'divyansh';
// console.log(name)

// console.log(object.propertyName)
console.log(obj.name)

// length of object
console.log(Object.keys(obj).length) // return array

// adding new prop:
obj.city = 'noida';
// adding new method:
obj.printNameAge = function(){
    console.log('first');
}
console.log(obj);
console.log(obj.printNameAge()) // to call the method add () 

// change the value of prop:
obj.name = 'abhishek';
console.log(obj)

// delete the prop:
delete obj.city;

console.log(obj);