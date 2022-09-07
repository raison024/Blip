const router = require('express').Router();
const { Router } = require('express');
let User = require('../models/user.model');


router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/profile/:id").get((req,res) => {
    var id=req.params.id;
    var getUserDetails= User.find({_id:id});
    getUserDetails.exec()
    .then(data=>{
        res.status(200).json({
            message:"OK",
            results:data
        });
    })
    .catch(err=>{
        res.json(err);
    })
    
    
    });

router.route("/Register").post((req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email:email},(err,users)=>{
        if(users){
            res.send({message:"user already exist"})
        }else {
            const users = new User({name,email,password})
            users.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"sucessfull"})
                }
            })
        }
    })
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
  
    const newUser = new User({
      name,
      email,
      password,
    });
  
    newUser.save()
    .then(() => res.send({message:"sucessfull"}))
    .catch(err => res.status(400).json('Error: ' + err));
  });

router.route("/Login").post((req,res)=>{
    const {email,password} =req.body;
    User.findOne({email:email},(err,users)=>{
        if(users){
           if(password === users.password){
               res.send({message:"Login Success",users:users})                          
           }else{
               res.send({message:"Wrong Credentials"})
           }
        }else{
            res.send("not register")
        }
    })
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});
  
  router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(() => res.json('User deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;