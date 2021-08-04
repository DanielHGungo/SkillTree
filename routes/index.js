const express = require('express')
const router = express.Router()
const StrixhavenDAO = require('../public/dao/arcanumDAO')

router.get('/', (req, res) => {
    res.render('index', {
        ErrMsg: '',
        UserValue: '',
        PasswordValue: ''
    })
})

router.post('/', async (req, res) => {
    try{
        console.log('received get, with username and pw: ')
        let myUser = req.body.username
        let myPW = req.body.password
        if(myUser !== undefined && myUser !== ''){
          const myDoc = await StrixhavenDAO.find({owner: myUser})
          //if no doc with 'owner: myUser' is found, returns undefined
          if(myDoc === undefined){
              //if doc not found return to login page
              res.render('index', {
                  ErrMsg: 'No User Found with that Name',
                  UserValue: req.body.username,
                  PasswordValue: req.body.password
              })
          }
          else{
            let strDoc = JSON.stringify(myDoc)
            res.render('skilltree', {myDoc: strDoc,
              User: myUser
            })
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