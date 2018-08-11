const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
let data = require('./jobs');

let initialJobs = data.jobs;
let addedJobs = [];

const getAllJobs = () =>{
    return [...addedJobs, ...initialJobs];
};

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const api = express.Router();

//la partie get qui envoie les données vers l'utilisateur
api.get('/jobs',(req, res)=>{
//res.json(data.jobs);
res.json(getAllJobs());
});

// on va récupérer les valeur du client
api.post('/jobs', (req, res) =>{
    const job = req.body;
    addedJobs = [job, ...addedJobs];
    console.log('nb of job ' + getAllJobs().length);
    res.json(job);
});

app.use('/api', api);//localhost:4201/api/jobs
// creation du port de l'api sur le port 4201
const port = 4201;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});