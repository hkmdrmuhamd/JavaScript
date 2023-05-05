class Person{
    constructor(){
        this.name = "Muhammed"
        this.age = 22
    }



    displayFunc(){
        return this.name + " - " + this.age
    }
}

const person = new Person()
console.log(person.displayFunc())