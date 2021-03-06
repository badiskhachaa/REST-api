const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

//get all users
router.get('/', (req,res)=>{
          User.find()
          .then( (data)=>{res.status(200).send(data)
          })
                    .catch((error)=>{
                              res.status(400).send
                                        ({message: "error get users"})
                              })
                    
                    })



//post a user
router.post("/newUser", (req, res) => {
  
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    adress: req.body.adress,
    age: req.body.age
  });
  newUser
    .save()
    .then((user) => res.status(200).send({ user }))
    .catch((error) => {
      res.status(400).send({message: "error post user"});
    });
});


//edit user by id PUT method

router.put('/users/:id', (req,res)=>{
          User.findByIdAndUpdate(req.params.id, req.body )
          .then((data)=>{res.status(200).send(data)})
          .catch ((error) => {
                    res.status(400).send({message: "error put user"});
                  });
          });


// delete user by id  DELETE method
router.delete('/:id', (req,res)=>{
User.findByIdAndRemove(req.params.id)
.then((data)=>{res.status(200).send(data)})
.catch ((error) => {
          res.status(400).send({message: "error put user"});
        });
});



module.exports = router;
