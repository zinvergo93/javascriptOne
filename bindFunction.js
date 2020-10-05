const userOne = {
    firstName: 'Zachary',
    lastName: 'Invergo'
}

const userTwo = {
    firstName: 'Yvonne',
    lastName: 'Invergo'
}

const fullName = function() {
    return `${this.lastName}, ${this.firstName}`;
}

const zachary = fullName.bind(userOne)
const yvonne = fullName.bind(userTwo)


console.log(zachary());
console.log(yvonne());