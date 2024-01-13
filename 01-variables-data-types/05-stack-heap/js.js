const person = {
  name: "Bac",
  age: "18",
}

let newPerson = person
newPerson.name = "Bac new"
if(newPerson.age<20){
  newPerson.age=20
}

console.log(newPerson);