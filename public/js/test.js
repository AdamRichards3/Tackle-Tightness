window.onload = function(){
  console.log("loaded");
  test();
}

async function test(){
    console.log("test");
    const fetchOptions = {
        method: 'GET'
      };
    
    let response = await fetch('/loadExercises', fetchOptions);
    console.log(await response.text());
}