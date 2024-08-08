function getName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Inside Name SetTimeout");
      resolve(name);
    }, 2000);
  });
}

function getHobbies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hello from Hobbies");
      resolve(["Cricket", "Football", "Ball"]);
    }, 3000);
  });
}

getName("Amit")
  .then((res) => {
    return getHobbies(res);
  })
  .then((res) => {
    console.log(res);
  });
