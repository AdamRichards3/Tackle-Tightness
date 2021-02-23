async function test(){
    console.log("test");
    const fetchOptions = {
        method: 'GET'
      };
    
    let response = await fetch('/api/hello', fetchOptions);
    console.log( await response.text());
}

window.onload = function(){
  test();
};