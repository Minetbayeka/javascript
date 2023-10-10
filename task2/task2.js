function greet(name){
    return "Hello, "+ name + "!";
    
}
var myName="binet";
var message =greet(myName);
console.log(message);

/*----------rewrite the greet function using arrow function syntax---

const greet = (name) => {
    return 'hello, ${name}!';

    const myName = "binet";
    const message =greet(myName);
    console.log(message);

}*/