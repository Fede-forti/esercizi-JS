const person = {

  get firstName() {
    return `${this.name}`;
  },

  set firstName(value) {
    this.name = value;
  },

  get lastName() {
    return `${this.surname}`;
  },

  set lastName(value) {
    this.surname = value;
  },

  fullName() {
     return `${this.firstName} ${this.lastName}`
  },
}



const john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Doe';


const simon = Object.create(person);
simon.firstName ='Simon';
simon.lastName ='Collins';


console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins