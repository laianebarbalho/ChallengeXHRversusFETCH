// XHR vs. Fetch() 
//XHR

let buttonOne = document.getElementById("one");
let pSpan = document.getElementById("paragraph");;

buttonOne.addEventListener('click', () => {
  // Step 1: Create our AJAX object:
  let xhr = new XMLHttpRequest();

  // step 2: configure our AJAX object:
  xhr.open("GET", "https://icanhazdadjoke.com/");

  xhr.setRequestHeader("Accept", "application/json");

  // Step 3: listen for events and define our callback function

  xhr.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
      let jsonData = xhr.responseText;
      let JSObject = JSON.parse(jsonData)
      pSpan.innerHTML = JSObject.joke;
    }
  }
  // Step 4: send our request to the server
  xhr.send();  
});

// Fetch()
let buttonTwo = document.getElementById('two');

buttonTwo.addEventListener('click', () => {
  let url = "https://icanhazdadjoke.com/";
  let myHeaders = {
    "Accept": "application/json",
  };
  fetch(url, {
    headers: myHeaders,
  })
    .then(response => {
      return response.json();
    })
    .then(jokeObject => {
      return jokeObject.joke.toUpperCase();
    })
    .then(finalJoke => {
      pSpan.innerHTML = finalJoke;
    })
    .catch(err => { 
      console.log(err)
    })

})

// Using Fetch with Async/ Await

let buttonThree = document.getElementById("three");

buttonThree.addEventListener("click", displayJoke)

async function displayJoke() {
  // use await to wait for the response to come back before continuing with our code
  let url = "https://icanhazdadjoke.com/";
  let myHeaders = {
    "Accept": "application/json",
  };
  let response = await fetch(url, {
    headers: myHeaders,
  });
  let jokeObject = await response.json();
  let lowerCaseJoke = jokeObject.joke.toLowerCase();
  pSpan.innerHTML = lowerCaseJoke;
}
