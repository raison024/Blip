const router = require('express').Router();
const { Router } = require('express');
let Plan = require('../models/plans.model');

router.route('/').get((req, res) => {
    Plan.find()
        .then(plans => res.json(plans))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route("/Register").post((req,res)=>{
    const name = req.body.name;
    const price = req.body.price;
    const validity = req.body.validity;
    Plan.findOne({name:name},(err,plans)=>{
        if(plans){
            res.send({message:"Plan already exists"})
        }else {
            const plans = new Plan({name,price,validity})
            plans.save(err=>{
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
    const price = req.body.price;
    const validity = req.body.validity;
  
    const newPlan = new Plan({
      name,
      price,
      validity,
    });
  
    newPlan.save()
    .then(() => res.send({message:"sucessfull"}))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Plan.findByIdAndDelete(req.params.id)
      .then(() => res.json('Plan deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;