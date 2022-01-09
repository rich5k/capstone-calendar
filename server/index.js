const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// const fs = require('fs');

// const {CLIENT_ORIGIN}= require('./config');


const db = require('./db');
const eventRouter = require('./routes/event-router');
// const movieRatingRouter = require('./routes/movieRating-router');
const userRouter = require('./routes/user-router');

const app= express();
const apiPort = 8000;



app.use(bodyParser.urlencoded({extended: true}));

// have to find a way to use the cors origin without getting errors
// app.use(cors({
//     origin: CLIENT_ORIGIN

// }
// ));

app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/',(req,res)=>{
    res.send('Hello World!')
})



app.use('/api',eventRouter);
// app.use('/api',movieRatingRouter);
app.use('/api',userRouter);

app.listen(process.env.PORT || apiPort, ()=>console.log(`Server running on port ${apiPort}`));