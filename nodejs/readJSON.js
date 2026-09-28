const users = require('../data/users.json');

users.forEach(user =>
    console.log(user.userName)
);

const users1 = require('../data/users1.json');

users1.forEach(user => console.log(user.name));
