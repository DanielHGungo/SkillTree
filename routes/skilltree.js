const express = require('express')
const router = express.Router()
// const MoviesDAO = require('../public/dao/moviesDAO')
const StrixhavenDAO = require('../public/dao/arcanumDAO')
// import express from 'express'
// const indexRouter = express.Router()
router.get('/', (req, res) =>{

    // try{
    //     console.log('received get, with username and pw: ')
    //     let myUser = req.query.username
    //     let myPW = req.query.password
    //     if(myUser !== undefined && myUser !== ''){
    //       const myDoc = await StrixhavenDAO.find({owner: myUser})
    //       //if no doc with 'owner: myUser' is found, returns undefined
    //       if(myDoc === undefined){
    //           //if doc not found return to login page
    //           res.render('index', {
    //               ErrMsg: 'No User Found with that Name'
    //           })
    //       }
    //       else{
    //         let strDoc = JSON.stringify(myDoc)
    //         res.render('skilltree', {myDoc: strDoc,
    //           User: myUser
    //         })
    //       }
    //     } else{
    //           res.send('Invalid username input')
    //           // res.render('index')
    //       }
        
    // } catch(e){
    //     console.error(`Error with get render ${e}`)
    //     res.send('error with server')
    // }
    
})
router.post('/', async (req, res) =>{
    // let testObject = {title: 'test', author: 'me'}
    try{
        // console.log(req.body.myTime)
        console.log('Saving Skills....')
        let myUsr = req.body.myUsr
        let myObj = JSON.parse(req.body.myBtns)
        let numSkills = parseInt(req.body.numSkills)
        console.log(typeof numSkills)
        console.log(numSkills)
        // console.log(typeof myDoc)
        // console.log(myDoc)
        // await StrixhavenDAO.updateArcanum(myObj)
        await StrixhavenDAO.updateArcanum(myUsr, myObj, numSkills)
        console.log('Saving Skills Success!')
        // console.log(typeof myObj)
        /// console.dir(myObj)
        /// console.log('OUTPUT complete')
        // let result = await MoviesDAO.deleteMovies()
        // let result = MoviesDAO.addMovie({
        //      title: "My Awesome Movies",
        //      fullplot: "Daniel made this insert!"
        //     })
    } catch(err) {
        console.error(`There was a problem in Post Router ${err}`)
        // console.error(`There was a problem inserting ${err}`)
    }
    //    res.send('Delete method was sent')
    // res.send("submit was successful?")
    // res.redirect('/')
    res.status(204).send()
})
module.exports = router