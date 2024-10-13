console.log("client side js");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const p1 = document.querySelector("#message-one");
const p2 = document.querySelector("#message-two");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  p1.textContent = "Loading...";
  p2.textContent = "";

  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          p1.textContent = data.error;
          p2.textContent = "";
        } else {
          p1.textContent = data.location;
          p2.textContent = data.forecast;
        }
      });
    }
  );
});
