const person ={
    name: "binet",
    age : 30,
    profession: "frontend developer",
    /*
console.log(person.name);
console.log(person.age);
console.log(person.profession);
*/


    
    introduce: function(){
        console.log('i am ${this.name} i am ${this.age} years old, i work as a ${this.profession}.');

    }

    
};
person.introduce();





  
