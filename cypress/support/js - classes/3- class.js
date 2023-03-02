class Parent {
    constructor(name, age){
        this.firstName = this.firstName;
        this.age = age;
        this.lastName = "Bosiuk"
    }

    gretting(){
        console.log('Hey');
    }

    tellName(){
        console.log(`My name is ${this.firstName} ${this.lastName}!`)
    }

    tellAge(){
        console.log(`I'm ${this.age} old`)
    }

    tellJob(){
        this.Job = "QA"
        console.log(`My job title is ${this.Job}`)
    }
}

class Child extends Parent{
    greeting(){
        console.log('\nHey This is new greeting')
    }

    goToSchool(){
        console.log('I hate school')
    }
}
const parent = new Parent('Oleg', '29')
const child = new Child('Lena', '4')

parent.greeting()
parent.tellName()
parent.tellAge()
parent.tellJob()

child.greeting()
child.goToSchool()
