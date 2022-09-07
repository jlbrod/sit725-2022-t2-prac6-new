var express = require("express")
var app = express()
var cors = require('cors')
let projectCollection; 

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

//testing for Prac6
app.get('/addNumber/:n1/:n2', function(request, response){
    response.sendStatus(200);
})

app.get('/addTwoNumbers/:n1/:n2', function(request, response){

    response.json({statusCode: 200}); })


app.get('/api/projects/:array', function(request, response){

    response.json({statusCode: 200}); })


//Connect to mongoDB
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://admin:123qwe@cluster0.1henban.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri,{ useNewUrlParser: true })

//create collection....
const createColllection = (collectionName) => {
    client.connect((err,db) => {
        projectCollection = client.db().collection(collectionName);
        if(!err) {
            console.log('MongoDB Connected')
        }
        else {
            console.log("DB Error: ", err);
            process.exit(1);
        }
    })
}
   
const createUserColllection = (collectionName2) => {
    client.connect((err,db) => {
        projectCollection = client.db().collection(collectionName2);
        if(!err) {
            console.log('MongoDB Connected')
        }
        else {
            console.log("DB Error: ", err);
            process.exit(1);
        }
    })
}


//insert project......
const insertProjects = (project, callback) => {
    projectCollection.insert(project,callback);
}


//get project....
const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

//get API call

app.get('/api/projects',(req,res) => {
    getProjects((err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
})

// post API call
app.post('/api/projects',(req,res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;
    insertProjects(newProject,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Project Successfully added", data: result})
        }
    })
})

var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: "+port)
    createColllection('Books')
    createUserColllection('Users')
})


