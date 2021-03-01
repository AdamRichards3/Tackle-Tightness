
async function fetch(){
    console.log("test");
    const fetchOptions = {
        method: 'GET'
      };
    
    let response = await fetch('/loadExercises', fetchOptions);
    console.log(await response.text());
}

window.onload = function(){
  console.log("loaded");
  fetch();
}