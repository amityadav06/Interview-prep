const url = "https://canopy-frontend-task.vercel.app/api/transactions";

function getName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 2000);
  });
}

const fetchData = async () => {
  const res = await fetch(url);
  const myname = await getName("Amit");
  console.log(res);
  console.log(myname);
  console.log("Hello there");
};
fetchData();
