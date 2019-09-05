const Task = require("./models");

module.exports = {
    index : (req,res)=>{
        Task.find({},function(err,data){
            if(err){
                console.log(err);
            }else{
                console.log(data);
                res.json(data);
            }
        })
    },
    create: (req,res)=>{
        Task.create({
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed}, function(err,task){
            if(err){
                console.log(err);
                res.redirect('/tasks');
            }else{
                console.log(task.title);
                res.redirect('/tasks');
            }
        })
    },
    update: (req,res)=>{
        Task.update(req.body, {runValidators: true}, function(err,task){
            if(err){
                console.log(err);
                res.redirect('/tasks');
            }else{
                console.log(task.title);
                res.redirect('/tasks');
            }
        })
    },
    remove: (req,res)=>{
        Task.remove({_id: req.params.id}, function(err,data){
            if(err){
                console.log(err);
                res.redirect('/tasks');
            }else{
                console.log(data);
                res.redirect('/tasks');
            }
        })
    },
    find: (req,res)=>{
        Task.findById(req.params.id, function(err,task){
            if(err){
                console.log(err);
                res.redirect('/tasks')
            }else{
                console.log(task);
                res.json(task);
                
            }
        })
    }
};