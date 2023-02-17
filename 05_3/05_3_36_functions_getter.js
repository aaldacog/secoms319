const person = {
  firstName : 'Albert',
  lastName : 'Einstein',
  genius : function() {
      console.log('Programming');
  },
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

person.genius();
console.log(person.fullName);
 
    