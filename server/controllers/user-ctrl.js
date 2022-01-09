const User = require('../models/user-model');

const createUser=async(req,res)=>{
    const body = req.body;

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to create'
        })
    }
    const obj={
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phoneNum: req.body.phoneNum
    }
    User.create(obj, (err,item)=>{
        if(err){
            return res.status(404).json({
                err,
                message: 'User not created'
            })
        }
        else{
            return res.status(200).json({
                success: true,
                message: 'User created'
            })
        }
    })
}

const updateUser=async(req,res)=>{
    const body = req.body;

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to create'
        })
    }
    
    User.findOne({_id: req.params.id}, (err,user)=>{
        if(err){
            return res.status(404).json({
                err,
                message: 'User not found'
            })
        }
        user.name= body.name;
        user.email= body.email;
        user.password=body.password;
        user.phoneNum= body.phoneNum;

        user
            .save()
            .then(()=>{
                return res.status(200).json({
                    success: true,
                    id:user._id,
                    message: 'User updated'
                })
            })
            .catch(error=>{
                return res.status(404).json({
                    error,
                    message: 'User not updated'
                })
            })
    })
}


module.exports={
    createUser
}