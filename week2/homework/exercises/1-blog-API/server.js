'use strict'
const express = require('express')
const app = express();
app.use(express.json());

const fs = require("fs");
const { title } = require('process');
 
// YOUR CODE GOES IN HERE

app.get('/blogs/:title', (req, res)  => {readBlogs(req, res);})

app.post('/blogs' , (req, res) => {createBlogs(req, res);})

app.put('/posts/:title' , (req, res) => {updateBlogs(req, res);})

app.delete('/blogs/:title' , (req, res) => {deleteBlogs(req, res);})

//delete 
function deleteBlogs(req, res){
  const title = req.params.title;
  if (fs.existsSync(title)){
    fs.unlinkSync(title);
    res.end('ok')
  } else {
    res.send('This post does not exist!')
  }
}

//update
function updateBlogs(req, res){
  if (isInvalid(req)) {
    res.status(400);
    res.send('invalid request');
    return;
  }
  let updateBlogs = {
    title : req.body.title,
    content : req.body.content
  }
  const title = req.params.title;
   if (fs.existsSync(title)){
   fs.writeFileSync(title, JSON.stringify(updateBlogs));
   res.send('ok')
   } else {
     res.send('This post does not exist!')
   }
}
    
//create
function createBlogs(req, res){
  if (isInvalid(req)){
    res.status(400);
    res.send('Invalid request');
    return;
  }
  let newBlog = {
    title: req.body.title,
    content : req.body.content,
  }
   fs.writeFileSync('blogs.json', JSON.stringify(newBlog));
   res.send('ok');
   res.status(201);
}

//read
function readBlogs(req, res){
  const title = req.params.title;
  if (fs.existsSync(title)){
    const post = fs.readFileSync(title)
    res.send(post);
  } else {
    res.send('This post does not exist!')
  }
}
 
function isInvalid(req) {
  if (typeof req.body == "undefined" || 
  typeof req.body.title == "undefined" ||
  typeof req.body.content == "undefined"){
    return true;
  } else {
    return false;
  }
}

app.listen(3000);