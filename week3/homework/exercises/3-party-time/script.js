
/**
 * 3: Party time
 * 
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */

const fetch = require('node-fetch');

async function makeReservation() {
  // YOUR CODE GOES IN HERE
  try{
    const body = { "name": "Ava Moradi","numberOfPeople": "2" };
    await fetch('https://reservation100-sandbox.mxapps.io/api/reservations', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => console.log(json));
  }
  catch{
    console.log('API ERROR');
    return 0
  }
}

makeReservation();