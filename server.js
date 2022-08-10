const express = require("express")
const app = express()
const MongoClient = require('mongoDb').MongoClient;
var cors = require('cors')

//Connect to mongoDB
const uri = "mongodb+srv://admin:123qwe@cluster0.1henban.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri,{ useNewUrlParser: true })

//Create a collection
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
   

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

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
    createColllection('books')

})

