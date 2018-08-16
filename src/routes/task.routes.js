const express = require('express');
const router = express.Router();

const Task = require('../models/task');

//read data
router.get('/',async (req,res)=>{
    const tasks = await Task.find();
   
    res.json(tasks);
});

//required one date
router.get('/:id',async(req,res)=>{
    const task = await Task.findById(req.params.id);
    res.json(task);
})

//create data
router.post('/', async(req, res)=>{
    const{title,description}=req.body;
    const task = new Task({title,description});
    await task.save();
    res.json({status: 'Task Saved'});
});
//update data
router.put('/:id', async(req,res)=>{
    const {title, description} =req.body;
    const newTask = {title,description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.jason({status: 'Task Upsted'});
});
//delete data
router.delete('/:id',async(req,res)=>{
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Task Delete'});
})

module.exports = router;