# Online-Shop
An online shop with user comments

## Tutorial

### Step1 : Install Nodejs
Online Shop uses Nodejs as Backend Language

Download and install Nodejs with this link :
```sh[
https://nodejs.org/en/download
```

### Step2 : Install MongoDB
Online Shop uses MongoDB so install MongoDB
```sh
https://www.mongodb.com/docs/manual/installation/
```

### Step3 : Clone GitHub Repo
Goto your IDE (I usually use Vscode and Webstorm) and clone the src
```sh
https://github.com/AsadiAhmad/Online-Shop.git
```

### Step4 : set your Nodejs Application
the src does'nt have any Nodejs configuration file

create New file named `package.json` in root of src with this lines :
```sh
{
  "name": "untitled",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "ejs": "^3.1.9",
    "express": "^4.19.2",
    "jquery": "^3.7.1",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.5.0",
    "mongoose": "^8.3.0",
    "multer": "^1.4.5-lts.1",
    "path": "^0.12.7"
  }
}
```
Goto your IDE terminall and type 
```sh
npm install
```
with this command nodejs will install package-lock.json and set the configurations

### Step5 : Install necessary Packages
Install all of the Packages with npm command
```sh
npm install ejs
```
```sh
npm install express
```
```sh
npm install jquery
```
```sh
npm install jsonwebtoken
```
```sh
npm install mongodb
```
```sh
npm install mongoose
```
```sh
npm install multer
```
```sh
npm install path
```
for checking installed packages you can run this command :
```sh
npm list
```

### Step6 : Create Connection to MongoDB
I have gitignore my connection so you need create new connection file :

Create a Floder named `Connection` in /root/public/JS/BackEnd path

Create js file named `connection` like this :
```sh
const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://<user>:<password>@cluster-0-130.81jyjqx.mongodb.net/';
const dbName = 'OnlineShop';

let db;

async function connection() {
    if (!db) {
        const client = new MongoClient(uri, { useUnifiedTopology: true });
        await client.connect();
        db = client.db(dbName);
    }
    return db;
}

module.exports = connection;
```
#### Dont forget to replcae your `username` and `password` of your Mongo database here
if you have another formate of connection string you can replace it into uri
