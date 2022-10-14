  const results = document.querySelector("#results")

function golferFetch(){
  fetch("https://pow-application.herokuapp.com/api/v1/golfers")
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    data.forEach((result) => {
      const golferTag =
      `<div class="card rounded" style="width: 24rem;">
        <div class="card-body">
          <h5 class="card-title">Golfer: ${result.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Handicap: ${result.handicap}</h6>
          <p class="card-text">Comment: ${result.review}</p>
        </div>
      </div>`

      results.insertAdjacentHTML("beforeend", golferTag)
    })
  })
}
golferFetch()

  const addGolfer = (event) => {
    event.preventDefault()
    const nameValue = document.getElementById("name").value
    const handicapValue = document.getElementById("handicap").value
    const reviewValue = document.getElementById("review").value

    fetch("https://pow-application.herokuapp.com/api/v1/golfers", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({"name": nameValue, "handicap": handicapValue, "review": reviewValue})
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
      })
      results.innerHTML = ""
      golferFetch();
  }

  const form = document.querySelector("#form")
  form.addEventListener("submit", addGolfer)
