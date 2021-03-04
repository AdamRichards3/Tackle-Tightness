 'use strict'
 async function searchHandler() {
  let userInput = document.getElementById("dropDown").value;

  const options = {
    method: 'GET'
  };

  let getExercises = await fetch('/loadExercises/' + userInput, options);
  console.log(await getExercises.text());
}

async function displayExercises(){
  let userInput = document.getElementById("dropDown").value;

  const options = {
    method: 'GET'
  };

  let fetchExercises = await fetch('/loadExercises/' + userInput, options);
  return await fetchExercises;
}

function getData(){
  const loadExercises = displayExercises();
  console.log(loadExercises)
  const body = document.getElementById('exercise-grid');
  console.log(body);
  
  const name = document.createElement('h2');
  name.className = "name";
  name.textContent = displayExercises.text;
  body.appendChild(name);

  const description = document.createElement('h2');
  description.className = "description";
  body.appendChild(description);
}


window.onload = function () {
  document.getElementsByClassName("submit")[0].addEventListener("click", searchHandler);
  getData();
}