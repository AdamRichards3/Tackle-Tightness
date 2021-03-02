async function get() {
  console.log("test");
  // const fetchOptions = {
  //     method: 'GET'
  //   };

  console.log("before");
  // const response = await fetch('/loadExercises', fetchOptions);
  // const text1 = await response.json;
  // console.log(response);

  let data = {
    searchType: "Pulled Hamstring"
  };

  let formattedJSON = JSON.stringify(data);

  const options = {
    method: 'GET'
  };

  let userInput = "pulledHamstring";
  let getExercises = await fetch('/loadExercises/' + userInput, options);
  console.log(await getExercises.text());
}

function searchHandler() {
  let options = document.getElementById("dropDown").value;
  console.log(options);

}


window.onload = function () {
  console.log("loaded");
  console.log(document.getElementsByClassName("submit")[0]);
  document.getElementsByClassName("submit")[0].addEventListener("click", searchHandler);
  // let metaData = document.querySelector('loadExersices');
  // console.log(metaData);

  // if(metaData == 'exerscise'){
  //   displayExersice();
  // }
  get();
}