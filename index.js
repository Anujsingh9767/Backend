// require('dotenv').config()
// console.log(process.env)



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


const GithubData ={
    
        AnujSingh : {
            "login": "Anujsingh9767",
        "id": 178825633,
        "node_id": "U_kgDOCqipoQ",
        "avatar_url": "https://avatars.githubusercontent.com/u/178825633?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Anujsingh9767",
        "html_url": "https://github.com/Anujsingh9767",
        "followers_url": "https://api.github.com/users/Anujsingh9767/followers",
        "following_url": "https://api.github.com/users/Anujsingh9767/following{/other_user}",
        "gists_url": "https://api.github.com/users/Anujsingh9767/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Anujsingh9767/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Anujsingh9767/subscriptions",
        "organizations_url": "https://api.github.com/users/Anujsingh9767/orgs",
        "repos_url": "https://api.github.com/users/Anujsingh9767/repos",
        "events_url": "https://api.github.com/users/Anujsingh9767/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Anujsingh9767/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 4,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2024-08-19T17:24:00Z",
        "updated_at": "2025-03-14T04:17:59Z"
        }
        
}

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

app.get('/github' , (req,res)=>{
    res.json(GithubData)
})


app.listen(port , () => {
    console.log(`Example app listening on port ${port}`)
})