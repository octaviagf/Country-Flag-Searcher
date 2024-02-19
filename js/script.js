const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

async function getFlag() {
  const country = document.querySelector(".country").value;

  if (country === "") {
    alert("You must type a country name.");
  } else {
    container.innerHTML = "";

    const response = await fetch(
      `https://restcountries.com/v2/name/${country}`
    );

    const data = await response.json();

    const html = `<h1 class = "name">${data[0].name}</h1>
      <img src = "${data[0].flag}" class = "img"/>`;

    container.insertAdjacentHTML("beforeend", html);
    country.value = "";
  }
}

btn.addEventListener("click", getFlag);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    getFlag();
  }
});
