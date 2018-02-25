# IEEE ATEITH Student Branch
This API is created to exchange data with our web page

### useful commands
`npm install` to install dependencies.
`npm start` or `node bin/www` to start the server.
`git pull` to pull newest changed from the repositorys.
`PORT=9000 npm start` to start on port 9000 (change the number to use another port).

### About
By default the sever is set to run on port 3001


### Notes
To create a route
- create a file at /routes/__filename.js__
- `require` it at /app.js
- `app.use()` it at /app.js
- create responses at /routes/__filename.js__

Great!! We have a new route!


### Response types

`GET`  typical request from a browser.
`POST` is used to update data.
`PUT`  is used to create data
`DELETE` is used to remove data.
