const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const {User} = require('./models/user')
const tokenAuth = require('./authentcation/tokenAuth')
const todoRouter = require('./routes/todo')

const app = express()
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/todoApp", {useNewParser:true, useUnifiedTopology})
const db = mongoose.connection
db.on('error', console.log("monogodb cannot connect"))


app.use('/login', async (req,res)=>{
    const {username,password} = req.body
    try{
        const user = await User.findOne({username})
        if(!user){
            return res.status(401).json({message:"Invalid username or password"})
        }
        const isMatch = await user.comparePassword(password)
        if(!isMatch){
            return res.status(401).json({message:"Invalid username or password"})
        }
        const jwtkey = process.env.JWT_KEY
        const token = jwt.sign({username:user.username, role:user.role},jwtkey)
        res.json({token})
}catch(error){
    console.error(error)
    return res.status(403).json("Inernal server error")
}
})

app.use(todoRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Listening to server ${PORT}` )
})