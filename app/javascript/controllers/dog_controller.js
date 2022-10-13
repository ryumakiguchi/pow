  const results = document.querySelector("#results")

function dogFetch(){
  fetch("https://pow-application.herokuapp.com/api/v1/dogs")
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    data.forEach((result) => {
      const dogTag = `<li class="list-inline-item cards">
        <p>${result.name}</p>
        <p>${result.breed}</p>
      </li>`
      results.insertAdjacentHTML("beforeend", dogTag)
    })
  })
}
dogFetch()

  const addDog = (event) => {
    event.preventDefault()
    const nameValue = document.getElementById("name").value
    const breedValue = document.getElementById("breed").value
    fetch("https://pow-application.herokuapp.com/api/v1/dogs", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({"name": nameValue, "breed": breedValue})
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
      })
      results.innerHTML = ""
      dogFetch();
  }

  const form = document.querySelector("#form")
  form.addEventListener("submit", addDog)
