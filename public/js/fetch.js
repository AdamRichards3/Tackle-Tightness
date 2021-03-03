 async function searchHandler() {
  let userInput = document.getElementById("dropDown").value;

  const options = {
    method: 'GET'
  };

  let getExercises = await fetch('/loadExercises/' + userInput, options);
  console.log(await getExercises.text());
}


window.onload = function () {
  console.log("loaded");
  console.log(document.getElementsByClassName("submit")[0]);
  document.getElementsByClassName("submit")[0].addEventListener("click", searchHandler);
}