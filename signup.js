const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); const app = express();
const mongoose = require('mongoose'); mongoose.connect('mongodb://localhost/test');

const publicFolder = path.join(__dirname, 'public');

app.use(express.static (publicFolder));
app.use(bodyParser.urlencoded({ extended: true }))

const User = mongoose.model('User', {name: String, age: Number});

app.get('', (req, res) =>{
    res.render(publicFolder + '/signup.html');
})

app.post('/user', (req, res) =>{
                                        //id of input           //id of input
    const user = new User({name: req.body.username, age: req.body.age});

    user.save().then(newUser => {
        res.send("creaetd new user successfully!");
    }).catch(err => {
        res.send("something went wrong!");
    })
})
