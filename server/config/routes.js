var answers = require('../controllers/answers.js');
var questions = require('../controllers/questions.js');

const path = require('path');

module.exports = function (app) {

    app.get('/questions', (req,res,next)=>{
        console.log("get route working");
        questions.index(req, res);
    })

    app.post('/questions', (req, res, next)=>{
        console.log("create route working and posted to db");
        console.log(req.body);
        questions.new(req, res);
    });


    // app.delete('/questions/:id', (req, res, next)=> {
    //     console.log("delete route working");
    //     console.log(req.params.id);
    //     questions.remove(req, res);
    // });

    // app.put('/questions/:id', (req, res, next)=> {
    //     console.log("update route working");
    //     console.log(req);
    //     questions.update(req, res);
    // });

    app.post('/question/:id/new_answer', (req, res, next)=>{
        console.log("Answer route working");
        console.log(req);
        answers.new(req, res);
    });

    app.get('/question/:id', (req, res, next)=>{
        console.log("Answer Get Route");
        console.log(req);
        answers.showAll(req, res);
    })

    app.get('*', function(req, res){
        res.sendFile('index.html', { root: './../public/dist' });
    });
};