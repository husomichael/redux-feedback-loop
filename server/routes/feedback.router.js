const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//POST ROUTE
router.post('/', (req, res) =>{
    console.log('POST /feedback');
    const newFeedback = req.body;
    const sqlText = (`
    INSERT INTO "feedback" 
        ("feeling", "understanding", "support", "comments")
    VALUES 
    ($1, $2, $3, $4);
    `);
    const sqlValues = [
        newFeedback.feeling,
        newFeedback.understanding,
        newFeedback.support,
        newFeedback.comment
    ];
    console.log('sqlText:', sqlText);
    pool.query(sqlText, sqlValues)
    .then((dbRes) =>{
        console.log('dbRes:', dbRes);
        res.sendStatus(201); //ok, created
    }).catch((dbErr) =>{
        console.log('dbErr:', dbErr);
    });
});

module.exports = router;