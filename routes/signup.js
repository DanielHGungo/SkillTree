const express = require('express')
const router = express.Router()
const StrixhavenDAO = require('../public/dao/arcanumDAO')
const bcrypt = require('bcryptjs')

router.get('/', (req, res) => {
  res.render('signup', {
      ErrMsg: '',
      UserValue: '',
      PasswordValue: ''
  })
})

// Signup route, and Validation
router.post('/', async (req, res) => {
    let isPwValid = true
    let isUsrValid = true
    let myString = ''
    // req.body.username and pw are both string types
    if(req.body.password.length < 8) {
        isPwValid = false
        myString = 'Password must be at least 8 characters'
    }
    if(req.body.password.length > 15){
        isPwValid = false
        myString = 'Password must not exceed 15 characters'
    }
    if(req.body.username.length < 4){
        isUsrValid = false
        myString = 'Username must be at least 4 characters'
    }
    if(req.body.username.length > 15){
        isUsrValid = false
        myString = 'Username must not exceed 15 characters'
    }

    let myRegUsr = new RegExp(req.body.username, 'i')
    try{
      const myDoc = await StrixhavenDAO.find({owner: { $regex: myRegUsr } })
      if(myDoc){
        isUsrValid = false
        myString = 'Username is already taken'
      }

      if(isPwValid && isUsrValid){
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        await StrixhavenDAO.insertOne({
            owner: req.body.username,
            password: hashedPassword
        })
        res.render('index', {
            ErrMsg: 'Account was created successfully!',
            UserValue: '',
            PasswordValue: ''
        })
        // res.send(`I will create account with user: ${req.body.username} and password: ${req.body.password}`)
    } else {
        res.render('signup', {
            ErrMsg: myString,
            UserValue: req.body.username,
            PasswordValue: req.body.password
        })
    }
    } catch(e){
        console.error(`Error in signup POST ${e}`)
        res.send('error with server or database')
    }
})

module.exports = router