// const obj = { a: 1, b: 2 };
// const copy = obj;
// copy.a = 3;
// console.log(obj.a);


// const person = { name: 'Alice', age: 25 };
// delete person.age;
// console.log(person.age);


// const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     displayInfo: function() {
//         return `${this.make} ${this.model}`;
//     }
// };
// console.log(car.displayInfo());


// const obj = { x: 1, y: 2 };
// const { x, y } = obj;
// console.log(x + y);



// const book = {
//     title: '1984',
//     author: 'Orwell'
// };
// book.title = 'Animal Farm';
// console.log(book.title);



// const user = { name: 'John' };
// user = { name: 'Doe' }; // Will this line throw an error?



// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1, c: 3 };
// console.log(obj2);


// const person = { name: 'Bob' };
// person.age = 30;
// delete person.name;
// console.log(person);



// const obj = { a: 1, b: { c: 2 } };
// const clone = { ...obj };
// clone.b.c = 3;
// console.log(obj.b.c);



// const car = { brand: 'Ford', model: 'Mustang' };
// const { brand, ...rest } = car;
// console.log(rest);



// const obj = { x: 1, y: 2 };
// Object.freeze(obj);
// obj.x = 3;
// console.log(obj.x);



// const obj = { a: 1, b: 2 };
// Object.defineProperty(obj, 'c', { value: 3, writable: false });
// obj.c = 4;
// console.log(obj.c);



// const person = { name: 'Alice', age: 25 };
// for (let key in person) {
//     console.log(key);
// }



// const obj = { a: 1, b: 2 };
// const obj2 = Object.assign({}, obj);
// obj2.a = 3;
// console.log(obj.a);



// const employee = {
//     name: 'Jane',
//     role: 'Developer',
//     details: function() {
//         return `${this.name} is a ${this.role}`;
//     }
// };
// console.log(employee.details());



// const obj = { a: 1, b: 2 };
// delete obj; // Will this line throw an error?



// const student = { name: 'John', grades: [90, 85, 88] };
// const average = (student.grades.reduce((acc, grade) => acc + grade) / student.grades.length);
// console.log(average);



// const car = { brand: 'Honda' };
// car.year = 2020;
// console.log(car['year']);



// const obj = { a: 1 };
// Object.defineProperty(obj, 'b', { value: 2, enumerable: false });
// console.log(Object.keys(obj));



// const data = { name: 'Alice' };
// const clone = Object.create(data);
// clone.name = 'Bob';
// console.log(clone.name);
// console.log(data.name);
