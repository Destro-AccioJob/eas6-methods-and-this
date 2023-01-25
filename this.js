

//  this :  current contect 

// let obj = {
//     name : "Abhishek",
//     age : 23,
//     x : this.name // undefined
    
// }


// function display(a,b){
//     console.log(a,b, this.name)
// }
// display()


// call, bind, apply

// call => calling  function

// display.call(obj, 10,20)

// display.apply(obj, [10,20])


let obj = {
    name : "Abhishek",
    age : 23,
    display: function(){  
        console.log(this.name)
    }
    
}

// obj.display()

let obj2 = obj.display

obj2.bind(obj)()

// obj1 and obj2 both are different objects








