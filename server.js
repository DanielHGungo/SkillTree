if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
// import { MongoClient } from "mongodb"
// import http from "http"
// import express from "express"
// const app = express()
// import expressLayouts from "express-ejs-layouts"

// import indexRouter from "./routes/index"
// import MoviesDAO from './public/dao/moviesDAO'
const MongoClient = require('mongodb').MongoClient

const StrixhavenDAO = require('./public/dao/arcanumDAO')
// const MoviesDAO = require('./public/dao/moviesDAO')
const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()
// const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')
const skilltreeRouter = require('./routes/skilltree')
const signupRouter = require('./routes/signup')
// const loginRouter = require('./routes/login')

app.set('view engine', 'ejs')
app.set('views', __dirname  + '/views')
// app.set('layout', 'layouts/layout')
app.use(express.json())
// app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({ limit: '10mb', extended: false }))


// const mongoose = require('mongoose')
// mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
// const db = mongoose.connection
// db.on('error', error => console.error(error))
// db.once('open', () => console.log('Connected to Mongoose'))

MongoClient.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        await StrixhavenDAO.injectDB(client)
        // await MoviesDAO.injectDB(client)
        console.log('Started MongoDB')
    })

app.use('/', indexRouter)
app.use('/skilltree', skilltreeRouter)
app.use('/signup', signupRouter)
// app.use('/login', loginRouter)

app.listen(process.env.PORT || 3000)
