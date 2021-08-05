const express = require('express')
const router = express.Router()
const StrixhavenDAO = require('../public/dao/arcanumDAO')
const bcrypt = require('bcryptjs')

router.get('/', (req, res) => {
    res.render('index', {
        ErrMsg: '',
        UserValue: '',
        PasswordValue: ''
    })
})

//Login Route, needs Authentication
router.post('/', async (req, res) => {
    try{
        console.log('received get, with username and pw: ')
        let myUser = req.body.username
        let myPW = req.body.password
        let myRegUsr = new RegExp(req.body.username, 'i')
        if(myUser !== undefined && myUser !== ''){
          const myDoc = await StrixhavenDAO.find({owner: { $regex: myRegUsr } })
          // console.log(typeof numberSkills)
          // console.log(numberSkills)
          //if no doc with 'owner: myUser' is found, returns undefined
          if(myDoc === undefined){
              //if doc not found return to login page
              res.render('index', {
                  ErrMsg: 'No User Found with that Name and Password',
                  UserValue: req.body.username,
                  PasswordValue: ''
              })
          }
          else{
            //TODO: Create a middleware to check for both myDoc or numberSkills
            //is undefined, or make sure each user is created with numSkills: 0
            if(await bcrypt.compare(myPW, myDoc.password)){
              myUser = myDoc.owner
              const numberSkills = myDoc.numSkills
              myDoc.password = "";
              let strDoc = JSON.stringify(myDoc)
              res.render('skilltree', {myDoc: strDoc,
                User: myUser,
                initialPoints: numberSkills
              })
            }
            else{
                res.render('index', {
                    ErrMsg: 'Wrong password',
                    UserValue: req.body.username,
                    PasswordValue: ''
                })
            }
          }
        } else{
              res.send('Invalid username input')
              // res.render('index')
          }
        
    } catch(e){
        console.error(`Error with get render ${e}`)
        res.send('error with server')
    }
})

module.exports = router 