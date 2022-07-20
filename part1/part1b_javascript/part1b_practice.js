console.log("this is a test")

const t = [1,2,3,4,5]

const [first, second, ...rest] = t

console.log(first);
console.log(second);
console.log(rest);

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log('hello, my name is ' + this.name);
    }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()