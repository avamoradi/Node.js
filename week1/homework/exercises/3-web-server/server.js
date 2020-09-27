/**
 * Exercise 3: Create an HTTP web server
 */

var http = require('http');
var fs = require('fs');
const { Script } = require('vm');

//create a server
let server = http.createServer(function (req, res) {
	// YOUR CODE GOES IN HERE
		if (req.url === "/" ){
			res.setHeader('content-Type' , 'text/html');
			const fsDirectory = fs.readFileSync('./index.html');
			res.write(fsDirectory); // Sends a response back to the client
			res.end(); // Ends the response

		}

		if (req.url === "/indexe.js"){
			res.setHeader('content-Type', 'file');
			const fsDirectory = fs.readFileSync('./index.js');
			res.write(fsDirectory);
			res.end(); // Ends the response


		}
});

server.listen(3004); // The server starts to listen on port 3000