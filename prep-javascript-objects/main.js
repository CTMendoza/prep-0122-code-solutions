const person = {
  firstName: 'Chris',
  lastName: 'Mendoza',
  hobby: 'Playing Video Games',
  job: 'Accountant',
  previousJob: 'Billing Clerk'
};

console.log('firstName: ', person.firstName, 'lastName: ', person.lastName, 'hobby: ', person.hobby);

var fullName = person.firstName + ' ' + person.lastName;

console.log('The persons full name is ', fullName);

console.log('The person"s current job is  ', person.job);

console.log('The person"s previous job was  ', person.previousJob);

console.log(person);
