const express = require('express');
const { mapReduce } = require('../models/task');
const Task = require('../models/task');

const router = express.Router();



router.get('/', async function(req,res){
    let tasks = await Task.find({});

    return res.render('home',{
        tasks : tasks
    })
})

router.get('/addTask',function(req,res){
    Task.create(req.query,function(err,task){
        if(err){
            console.log('Error creating the task object');
            return
        }
        return res.redirect('back');

    })
})

router.post('/toggleTask/:id/:state',async function(req,res){

    let task = await Task.findOne({_id:req.params.id});

    if(req.params.state == 0){
        task.isCompleted = false
    }else{
        task.isCompleted = true;
    }

    task.save();

    res.json(200,{
        message : 'The task was toggled successfully'
    })

});


router.get('/deleteTasks',async function(req,res){

    await Task.deleteMany({isCompleted:'true'})

    return res.redirect('back');

})
module.exports = router;