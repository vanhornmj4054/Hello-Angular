const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/restful_task', {useNewUrlParser: true});

var TaskSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 2 },
    description: { type: String, required: true, minlength: 2 },
    completed: { type: Boolean, required: true},
    }, { timestamps: true });

mongoose.model('Task', TaskSchema);

var Task = mongoose.model('Task');

module.exports = Task;