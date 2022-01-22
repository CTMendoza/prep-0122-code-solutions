const person = {
  firstName: 'Chris',
  lastName: 'Mendoza',
  hobby: 'Playing Video Games'
};

console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log('The persons full name is ', fullName);
person.job = 'Accountant';
console.log('The person"s current job is  ', person.job);
person.previousJob = 'Billing Clerk';
console.log('The person"s previous job was  ', person.previousJob);
console.log(person);
