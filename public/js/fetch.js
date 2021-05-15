 'use strict'
 // This will pull the data from the database when the users presses the submit button
 async function searchExercises() {
  clearSearchResult();
  getExercises();
}
// This function is used to display the data from the database 
async function displayExercises(){
  let userInput = document.getElementById("dropDown").value;

  const options = {
    method: 'GET'
  };
  // This fetches the data from the quieres in the app.js file
  let fetchExercises = await fetch('/loadExercises/' + userInput, options);
  let wait = await fetchExercises.json();

  return wait;
}
// This function will get the data from the json loop through it and return all the exersises and names
async function getExercises(){
  const loadExercises = await displayExercises();

  const gridEle = document.getElementById('exercise-grid');
  // This for loop creates the elements which the data will put put inside
  for (let i = 0; i < loadExercises.length; i++){
    //Creates the container which will hold all the data 
    let parentEle = document.createElement("div");
    parentEle.className = "exercise-result";
    // This creates the element which the exercise name will go in
    const name = document.createElement('div');
    name.className = "exercise-name";
    name.textContent = loadExercises[i].exercise_name;
    parentEle.appendChild(name);
    // This is the element which the description of the exerscies will go
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
  document.getElementsByClassName("submit")[0].addEventListener("click", searchExercises);
  document.getElementsByClassName("clear")[0].addEventListener("click", clearSearchResult);
  
}