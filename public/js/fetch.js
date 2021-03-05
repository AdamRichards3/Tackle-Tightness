 'use strict'
 // This will pull the data from the database when the users presses the submit button
 async function searchHandler() {
  clearSearchResult();
  let userInput = document.getElementById("dropDown").value;

  const options = {
    method: 'GET'
  };

  let getExercises = await fetch('/loadExercises/' + userInput, options);
  getData();
}
// This function is used to display the data from the database 
async function displayExercises(){
  let userInput = document.getElementById("dropDown").value;

  const options = {
    method: 'GET'
  };

  let fetchExercises = await fetch('/loadExercises/' + userInput, options);
  let test = await fetchExercises.json();

  return test;
}
// This function will get the data from the json loop through it and return all the exersises and names
async function getData(){
  const loadExercises = await displayExercises();

  const gridEle = document.getElementById('exercise-grid');

  for (let i = 0; i < loadExercises.length; i++){

    let parentEle = document.createElement("div");
    parentEle.className = "exercise-result";
    
    const name = document.createElement('div');
    name.className = "exercise-name";
    name.textContent = loadExercises[i].exercise_name;
    parentEle.appendChild(name);
    
    const description = document.createElement('div');
    description.textContent = loadExercises[i].exercise_description;
    description.className = "exercise-description";
    parentEle.appendChild(description);

    gridEle.appendChild(parentEle);
  }
}
// This function will allow the user to press the clear button and clear the previous search
function clearSearchResult(){
  let parentEle = document.getElementById("exercise-grid");
  let childrenEle = parentEle.querySelectorAll(".exercise-result");

  for(let i =0; i < childrenEle.length; i++){
      parentEle.removeChild(childrenEle[i]);
  }
}

// This on load function will make sure that when the pages loads the button will work
window.onload = function () {
  document.getElementsByClassName("submit")[0].addEventListener("click", searchHandler);
  document.getElementsByClassName("clear")[0].addEventListener("click", clearSearchResult);
  
}