const express = require('express')
const router = express.Router()
const MoviesDAO = require('../public/dao/moviesDAO')
const StrixhavenDAO = require('../public/dao/arcanumDAO')
// import express from 'express'
// const indexRouter = express.Router()
router.get('/', async (req, res) =>{
    try{
        const myDoc = await StrixhavenDAO.find({owner: 'Daniel'})
        let strDoc = JSON.stringify(myDoc)
        res.render('index', {myDoc: strDoc})
    } catch(e){
        console.error(`Error with get render ${e}`)
        res.send('error with server')
    }
    
})
router.post('/', async (req, res) =>{
    // let testObject = {title: 'test', author: 'me'}
    try{
        
        console.log('Saving Skills....')
        let myObj = JSON.parse(req.body.myBtns)
        // console.log(typeof myDoc)
        // console.log(myDoc)
        await StrixhavenDAO.updateArcanum(myObj)
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