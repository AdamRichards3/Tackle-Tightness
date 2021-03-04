 'use strict'
 async function searchHandler() {
  clearSearchResult();
  let userInput = document.getElementById("dropDown").value;

  const options = {
    method: 'GET'
  };

  let getExercises = await fetch('/loadExercises/' + userInput, options);
  console.log(await getExercises.text());
  getData();
}

async function displayExercises(){
  let userInput = document.getElementById("dropDown").value;

  const options = {
    method: 'GET'
  };

  let fetchExercises = await fetch('/loadExercises/' + userInput, options);
  let test = await fetchExercises.json();
  console.log(test);

  return test;
}

async function getData(){
  const loadExercises = await displayExercises();
  console.log(loadExercises)
  console.log(loadExercises[1]);

  const gridEle = document.getElementById('exercise-grid');

  for (let i = 0; i < loadExercises.length; i++){

    let parentEle = document.createElement("div");
    parentEle.className = "exercise-result";
    console.log(parentEle);
    
    const name = document.createElement('h2');
    name.className = "exercise-name";
    name.textContent = loadExercises[i].exercise_name;
    parentEle.appendChild(name);
    
    const description = document.createElement('h2');
    description.textContent = loadExercises[i].exercise_description;
    description.className = "exercise-description";
    parentEle.appendChild(description);

    gridEle.appendChild(parentEle);
  }
}

function clearSearchResult(){
  let parentEle = document.getElementById("exercise-grid");
  let childrenEle = parentEle.querySelectorAll(".exercise-result");

  console.log(parentEle);
  console.log(childrenEle);
  for(let i =0; i < childrenEle.length; i++){
      parentEle.removeChild(childrenEle[i]);
  }
}


window.onload = function () {
  document.getElementsByClassName("submit")[0].addEventListener("click", searchHandler);
  document.getElementsByClassName("clear")[0].addEventListener("click", clearSearchResult);
  
}