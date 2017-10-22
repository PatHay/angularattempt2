var mongoose = require('mongoose');


var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
var path = require('path');

module.exports = {
    index: function(req, res){
        Question.find({}, function(err, questions){
            if (err){
                console.log(`This is the error: ${err}`);
            }
            else{
                res.json({'questions': questions});
            }
        })
    },
    new: function(req, res){
        var question = new Question({ user: req.body.user, question: req.body.text, desc: req.body.desc, created_at: new Date() });
        question.save(function (err) {
            if (err) {
                console.log('something went wrong in add question');
                let errors = [];
                for (var key in err.errors){
                    errors.push(err.errors[key].message);
                }
                res.json({message: "Error", error: errors});
            } else {
                res.json({message:  "Success!", question: question});
            }
        });
    },

    remove: function(req, res){
        Question.remove({_id: req.params.id}, function(err){
            // console.log(req.route)
            if(err){
                console.log("Did not delete record!");
                console.log(req.params.id);
            } else {
                console.log("Successfully deleted record!");
                res.json({message:  "Success!"});
            }
        })
    },

    // update: function(req, res){
    //     Question.update({_id: req.params.id},
    //          {text: req.body, created_at: Date.now()},
    //         function(err){
    //         if(err){
    //             console.log("Did not edit record");
    //             console.log(err);
    //             console.log(req.body);
    //         } else {

    //             console.log("Successfully edited record!");
    //             res.json({message: "Successful edit!"});
    //         }
    //     })
    // }
}