const MongoClient = require('mongodb').MongoClient;
url ='mongodb://localhost:27017/'

ola = [];

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("local");
  dbo.collection("startup_log").findOne({}, function(err, result) {
    if (err) throw err;

    result2 = [];

    for(var i in result)
    result2.push([i, result [i]]);
    ola=result2;
    console.log(result2[1]);
    db.close();
  });

  
});

console.log(ola);