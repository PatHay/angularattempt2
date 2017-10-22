var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
    _question: { type: Schema.Types.ObjectId, ref: 'questions' },
    user: { type: String, required: true },
    answer: { type: String, required: true },
    desc: {type: String },
    like: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now },
   })

var answer = mongoose.model('Answer', AnswerSchema);
module.exports = answer;