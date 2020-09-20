# Full Stack MERN eCommerce using session
<img src="https://i.imgur.com/5zIPHL2.png" alt="project image" />

## Demo

This application is deployed on Heroku. Please check it out :smile: [here](https://mern0men-shop.herokuapp.com/).


### Requirements:

* Node.js installed
* MongoDB connection

### Usage:
1. Clone repo on your local machine:
```
$ git clone https://github.com/dnisdv/men-shop.git
$ cd men-shop
```
2. Create a `.env` file in ```server``` folder and insert the following code. Replace values with yours!!
```
    DB_USER=
    DB_PASS=
    NODE_ENV=
    SESS_NAME=
    SESS_SECRET=
```
3. Install server-side dependencies and run it:
```
$ npm run server
```
4. Install client-side dependencies and run it:
```
$ npm run client
```
#### Run in production mode
1. Change ```NODE_ENV``` in .env file to ```production```
```
...
NODE_ENV=production
...
```
2. Build the app:
```
$ npm run build:client
```
3. Execute the app:<br/>
```
$ npm run server
```
