//============== CALLBACK  ===========================

// function getUsername(email, callback) {
//   const name = email.split("@");

//   if (name.length > 1) {
//     callback(name[0]);
//   } else {
//     callback(new Error("invalid email or username"));
//   }
// }
// function callback(arg) {
//   alert(arg);
// }

// ---------------- PROMISE --------------------------

function getUsername(email) {
  return new Promise((resolve, reject) => {
    const name = email.split("@");
    if (name.length > 1) {
      resolve(name[0]);
    } else {
      reject("invalid username");
    }
  });
}

getUsername("amityadav0607@gmail.com")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
