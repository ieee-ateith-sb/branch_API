var mongoose = require('mongoose')

var user = encodeURIComponent('branch_webpage');
var passwd = encodeURIComponent('passwd');
var authMechanism = 'DEFAULT';

var url = `mongodb://${user}:${passwd}@cluster0-shard-00-00-vyvir.mongodb.net:27017,cluster0-shard-00-01-vyvir.mongodb.net:27017,cluster0-shard-00-02-vyvir.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`;
mongoose.connect(url);

var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log("Connected to the database");
  console.log(`using ${user} and ${passwd}`);
});
