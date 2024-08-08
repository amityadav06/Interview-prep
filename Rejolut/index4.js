const id = "5370b168efb757a";
const sec = "afa0ba9c5439021873cb7f36166cb36779ae2f77";

const file = document.getElementById("file");
const img = document.getElementById("img");
const url = document.getElementById("url");

file.addEventListener("change", (e) => {
  const formData = new FormData();
  formData.append("image", e.target.files[0]);
  fetch("https://api.imgur.com/3/image/", {
    method: "post",
    headers: {
      Authorization: "Client-ID 5370b168efb757a",
    },
    body: formData,
  })
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      img.src = data.data.link;
      url.innerText = data.data.link;
    });
});
