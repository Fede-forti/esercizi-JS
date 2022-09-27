const person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    city: 'Roma'
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
};



console.log(person.address.city); 
console.log(person.fullName()); 