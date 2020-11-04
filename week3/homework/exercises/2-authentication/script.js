
/**
 * 2. Authentication
 * 
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */

//  function printBooks() {
//   // YOUR CODE GOES IN HERE
//    fetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books',
//     {
//       headers: { 'Authorization': 'Basic  YWRtaW46aHZnWDhLbFZFYQ==' }
//     })
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.log(err))
// }

async function printBooks(){
  try{
    const res = await fetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books',
    {
     headers: { 'Authorization': 'Basic  YWRtaW46aHZnWDhLbFZFYQ==' }
    });

    const json = await res.json();
    console.log(json);
  }
  catch{}
}

printBooks();



