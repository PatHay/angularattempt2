var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
    user: { type: String, required: true },
    question: { type: String, required: true },
    desc: { type: String },
    created_at: { type: Date, default: Date.now },
    answers: [{type: Schema.Types.ObjectId, ref: 'answers'}],
   })

var question = mongoose.model('Question', QuestionSchema);
module.exports = question;