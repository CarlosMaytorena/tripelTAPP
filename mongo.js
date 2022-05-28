const MongoClient = require('mongodb').MongoClient;
url ='mongodb://localhost:27017/'

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("local");
  dbo.collection("startup_log").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });

  
});