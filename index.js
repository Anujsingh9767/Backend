require('dotenv').config()
console.log(process.env)



const express = require('express')

/*
The difference between const express = require('express') and
 import express from "express" lies in the module system they use. 
 The first statement uses CommonJS (CJS), which is the traditional 
 module system in Node.js and works by default. 
It uses require() to import modules and is compatible with older Node.js versions.
 On the other hand, the second statement 
follows ECMAScript Modules (ESM), which is the modern JavaScript module system. 
To use import, you need to either set "type": "module" 
in the package.json file or use a .mjs file extension. 
ESM supports advanced features like top-level await and better tree-shaking for optimized performance.
 While CommonJS remains widely used, ESM is becoming the preferred approach for modern development, 
 especially in front-end frameworks and newer Node.js applications.
*/

const app = express()
//app mai express ki sari property hain 

const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter' , (req , res)=>{
    res.send('AnujSinghcom')
})

app.get('/login' , (req,res)=>{
    res.send('<h1>Please login at chai aur code </h1>')
})

app.get('/youtube' , (req,res)=>{
    res.send("<h2>Chai aur Code </h2>")
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})