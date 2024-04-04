const express = require('express')
const todoController = require('../controllers/todo')
const router = express.Router()

router.get('/todos',getAll,async(req,res)=>{
    
    const todos = todoController.getAll()

})
router.get('/todos',getOne,async(req,res)=>{
    const todos = todoController.getOne()

})

router.post('/todos',createTodo,async(req,res,next)=>{
    try{
        todoController.createTodo()
    }
   catch(err){

   }
})

router.put('/todos/:id',updateTodo, (req,res,next)=>{

})

router.delete('todos/:id', deltetTodo,async(req,res,next)=>{

})