const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    userId: {type: mongoose.SchemaTypes.ObjectId, required:true, unique:true},
    title:{type:String , required:true},
    description:{type:String},
    completed:{type:Boolean, default:false}
},
{timestamps:true}
)

todoSchema.findOneAndUpdate = async foau(){
    
}



const Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo