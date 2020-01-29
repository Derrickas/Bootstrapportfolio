// // var, let, const

// // string . numbers, bolean, null, undefined

// const name = 'john';
// const age = 30;
// const rating = 4.5;
// const iscool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof age);




// // concatenation
// console.log(' my name is ' + name + 'and I am ' + age);

// // template string
// // must use back tics
// console.log('my name is ${name} and i am ${age}')

// const s = 'Hello world';


//methods of strings must have parenthises
// properties of strings do not have parenthises
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(''))

// Arrays are variables that hold multiple values

// const fruits = ['apples', 'oranges', 'pears'];

// fruits[3] = 'grapes';



// // /fruits.push('mangos'); add string to last place in array

// // fruits.unshift('strawberries'); add sdtring to begining of array

// // fruits.pop('apples') remove string from array


// // console.log(fruits);

// console.log(Array.isArray(fruits));

// console.log(fruits.indexOf('oranges'));


// object literals

// const person =  { 
//     firstName: 'jon',
//     Lastname: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// console.log(person.firstName, person.Lastname)
// console.log( person.hobbies[1])

const todos = [
    {
        id: 1,
        text: 'take out trask',
        iscompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        iscompleted: true
        
    },
    { 
          id: 3,
        text: 'Dentist apt.',
        iscompleted: false
    }
];
// console.log(todos[1].text);

// // jason format

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)

// for loop
// for(let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text); 
    //while

    // let i = 0;
    // while(i <10) [
    //     i++
    // ]

    // for(let todo of todos) {
    //     console.log(todo.id)
    // }

    // forEach array loop, map returns array, filter returns specific results
    
    const todotext = todos.map(function(todo) {
        return todo.text;
        
    });

    console.log(todotext);

    //turninary opperator = you have a condition and 'if its true' 'if its not true'


    // const x = 10 

    // const color = ('green')

    // switch is used to evaluate a condition
    
    // switch(color) {
    //     case 'red':
    //         console.log('color is red');
    //         break;
    //     case 'blue':
    //         console.log('color is blue');
    //         break;
    //        default:
    //        console.log('color is not red or blue')
    //        break; 
        

// functions Nan = not a number, functions must be called to appear in console.log

// function addNums(num1 = 1, num2 = 1) {
//     console.log(num1 + num2);
// }

// addNums();

// arrow functions

// const addNums = (num1, num2) => {
//     return num1 + num2;
// } 
//     console.log(addNums(5, 5));

// Constructor function

function Person(firstname, lastname, dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
    this.getbirthyear = function() {
        return this.dob.getfullyear();
    }

}
// Instantiate object
const person1 = new Person('jon', 'doe', '4-3-1980');
const person2 = new Person('mary', 'smith', '2-3-1990');
const person3 = new Person('jacob', 'doon', '2-1-1880');

console.log(person1.getbirthyear());
