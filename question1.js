// let person = {
//     name: "John",
//     age: 25,
//     printInfo: function() {
//       console.log("Name: " + this.name + ", Age: " + this.age);
//     }
//   }

//   person.printInfo()


let person1 = {
    name: "Bob",
    age: 25,
    greet: function() {
        return this.age
     }
  };
  
  let person2 = {
    name: "Samantha",
    age: 30,
    greet: function() {
        return this.age
     }
  };
  
  
  person1.greet() // 25
  let obj1 = person1.greet


  let obj2 = person2.greet

  
  console.log(obj1() + obj2())