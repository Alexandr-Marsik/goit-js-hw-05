//*Напиши стрелочную функцию getTotalBalanceByGender(users, gender), которая будет принимать два параметра: первый параметр users - массив объектов пользователей, второй параметр gender - строка, которая сохраняет пол. Функция должна использовать цепочку вызова методов и возвращать общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.

const getTotalBalanceByGender = (users, gender) =>
  users
    .filter(user => user.gender === gender)
    .reduce((acc, user) => acc + user.balance, 0);
const clients = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(clients, 'male')); // 12053

console.log(getTotalBalanceByGender(clients, 'female')); // 8863
