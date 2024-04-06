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

### Step5 : install necessary Packages
Install all of the Packages with npm command
```sh
npm install
```
