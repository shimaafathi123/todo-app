const tokenAuth = (req,res,next)=>
{    const authHeader = req.headers['authorization']
     const token = authHeader && authHeader.split(' ')[1]
      res.json({token})
      next()
}

module.exports = tokenAuth