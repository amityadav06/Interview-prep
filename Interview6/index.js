/* const names = {
  firstName: 'Amit',
  lastName: 'Yadav',
  fullName: function(){
    console.log(`${this.firstName} ${this.lastName}`);
  }
}
 */

function func1() {
  setTimeout(() => {
    console.log(x);
    console.log(y);
  }, 3000);

  var x = 2;
  let y = 12;
}

func1();

(function () {
  setTimeout(() => console.log(1), 2000);
  console.log(2);
  setTimeout(() => console.log(3), 0);
  console.log(4);
})();

//2 4 3 1

// PUNB0645100

// 6451 0001 0000 0755

const arr = [1, 2, 3, 5, 4, 4, 4, 4, 2, 5, 2, 8, 5];

console.log(
  arr.filter((item, index, self) => {
    return self.indexOf(item) === index;
  })
);

// localStorage.setItem('name', "placement");

// console.log(localStorage.getItem("name"));

// sessionStorage.setItem('name1', 'i got placed');

// console.log(sessionStorage.getItem("name1"));

const arrr = {
  posts: [
    {
      name: "amit",
      id: 2,
      likes: 3,
    },
    {
      name: "rahu;",
      id: 8,
      likes: 8,
    },
    {
      name: "sinlu",
      id: 8,
      likes: 55,
    },
    {
      name: "gajar",
      id: 8,
      likes: 0,
    },
  ],
};
