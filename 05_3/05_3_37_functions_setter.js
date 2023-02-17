// setters to change (mutate) them
const person = {
  firstName : 'Albert',
  lastName : 'Einstein',
  genius : function() {
      console.log('Programming');
    },
  get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.genius();
console.log(person.fullName);

// set a new name
person.fullName = 'Nikola Tesla';
console.log(person.fullName);
    