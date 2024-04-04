const {Todo} = require('../models/todo')

const createTodo = async function(userId,title,desc){
    try{
        const newTodo = await Todo.create({title:})

    }
    catch(error){
        console.error(error)
    }
}

const getAll = async function(userId,query){
    if(query.status){
        const todos = limit(query.limit).skip(query.skip).populate(userId).exec
    }
    const todos = await Todo.find(userId)

}

const updateTodo = async function(userId){
    try{
        const updatedTodo = await Todo.find(useId)

    }
    catch(error){
        console.error(error)
    }
}

const deltetTodo = async function(userId){
    try{
        const deltetTodo = await Todo.find(userId)
    }
    catch(error){
        console.error(error)
    }
}

const getOne =async function (userId){

}

module.exports ={
    getAll,
    getOne,
    updateTodo,
    deleteTodo,
    createTodo
}