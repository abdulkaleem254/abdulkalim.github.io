var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb+srv://Testsample:kaleem%40786@cluster0.xhjw7.mongodb.net/notesDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var Comments = req.body.Comments;
    // var password = req.body.password;

    var data = {
        "firstname": firstname,
        "lastname":lastname,
        "email" : email,
        "Comments": Comments
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('signup_success.html')

})

// getting data from server
var mydata="kaleem";
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Testsample:kaleem%40786@cluster0.xhjw7.mongodb.net/notesDB";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("notesDB");
  dbo.collection("users").find({}).toArray(function(err, result) {
    if (err) throw err;
    mydata=result;
    db.close();
});
});
console.log(mydata);
// getting end
app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(3000);

module.exports={mydata};

console.log("Listening on PORT 3000");