var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://hukidbsfapp:RPsFEjrjRGQD3aeHcQcamR1AVV1x80E7XunUzuUjjl1ZXuxZAQe3ctE4RxjJ8Nh8rSvFksg1waTglOjVA3mP6A==@hukidbsfapp.documents.azure.com:10250/?ssl=true'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);

console.log('BSF RESTful API server started on: ' + port);
