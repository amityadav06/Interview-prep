// const url = "https://canopy-frontend-task.vercel.app/api/transactions";

console.log("start");
function getName(name, cb) {
  setTimeout(() => {
    console.log("Inside Name Timeout");
    cb(name);
  }, 2000);
}

function getHobbies(name, cb) {
  setTimeout(() => {
    console.log("Inside Hobbies Timeout");
    cb(["Cricket", "Reading", "Chess"]);
  }, 3000);
}

const nm = getName("Amit", (nm) => {
  console.log(nm);
  getHobbies(nm, (hobby) => {
    console.log(hobby);
  });
});
// console.log(nm);
console.log("end");
