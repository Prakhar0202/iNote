const express = require("express");
const { default: mongoose } = require("mongoose");
const router =  express.Router();

router.get('/',(req,res)=>{
    obj = {
        a: 'thios',
        number: 34
    }
res.json(obj)
})
module.exports = router;