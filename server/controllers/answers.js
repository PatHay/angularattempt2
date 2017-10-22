var mongoose = require('mongoose');


var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
var path = require('path');


module.exports = {
    showAll: (req, res, next)=> {
        Question.find({})
        .populate('answers')
        .exec(function(err, results){
            if(err) { 
                res.json(`This is the error in showall answers ${err}`);
            } else {
                res.json(results);
            }
        })
    },
    new: (req, res, next) => {
        Question.findOne({_id: req.params.id}, function(err, question){
            var answer = new Answer(req.body);
            answer._question = question._id;

            answer.save(function(err){
                question.answers.push(answer);
                question.save(function(err){
                    if(err) {
                        console.log('Error')
                    } else {
                        res.json("Answer successfully added to question!")
                    }
                })
            })
        })
        // var answer = new Answer({ user: req.body.user,
        //     answer: req.body.answer,
        //     desc: req.body.desc,
        //     like: req.body.like,
        //     created_at: new Date(),
        //     _question: req.params.id });
        // answer.save(function (err, result) {
        //     if (err) {
        //         res.json(`Error in Answer ${err}`)
        //     } else {
        //         res.json(`Success in answer ${result}`);
        //     }
        // });
    },
    showOne: (req,res,next) => {
        Answer.findOne({answer: req.params.answer}, function(err, result){
            if(err) { 
                res.json(`This is the error in showall answers ${err}`);
            } else {
                res.json(`This is the result in showall answers ${results}`);
            }
        });
    },

}