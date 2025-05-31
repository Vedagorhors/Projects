const visitors = [
  {  
    name: 'Анна',
    age: 30
  },
  {
    name: 'Евгений',
    age: 18
},
{
    name: 'Павел',
    age: 17
}
]

const MAX_AGE = 18;

for (let i = 0; i < visitors.length; i++) {
    if (visitors[i].age >= MAX_AGE) {
        console.log(visitors[i].name)
    }
}