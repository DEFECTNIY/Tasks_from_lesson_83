// 1
const informationAboutMe = {
  name:'albert',
  age:23,
  city:'ufa',
  hobbies:`love kalyan and korol i shut`,
} 

console.log(informationAboutMe)
// 2
const object={
  sayHello(name){
    console.log(`Hello ${name}`)
  }
}
console.log(object.sayHello('Kostya'))
// 3
const users = [
  {
    name:'john',
    age:25,
    isAdmin:true,
  },

  {
    name:'john',
    age:23,
    isAdmin:false,
  },

  {
    name:'john',
    age:30,
    isAdmin:true,
  },

  {
    name:'Alex',
    age:20,
    isAdmin:false,
  }
]

let simpleUsers=0

for(let i = 0; i<users.length;i++){
  if (users[i].isAdmin) {
    simpleUsers++
  }
}
console.log(simpleUsers); 