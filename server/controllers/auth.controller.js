const User      = require('../models/user')
const Config    = require('../config/configs')
const jwt       = require('jsonwebtoken');
const bcrypt    = require('bcrypt-nodejs')

function signup(req, res) {
    User.find({email: req.body.email}, (err, users) => { 
        console.log('dwadwadawdwaddwadwa')
        if(err) res.status(400).send({err: err, data: null}).end()

        else if(users && users.length > 0) res.status(400).send({err: 'User already registered', data: null}).end()
        else {

            // create a sample user
            var newUser = new User({ 
                email: req.body.email, 
                password: bcrypt.hashSync(req.body.password),
                role: req.body.role
            });

            // save the sample user
            newUser.save(function(err, user) {
                if (err) res.status(400).send({err: err, data: null}).end()
                else res.status(200).send({err: null, data: {email: user.email, role: user.role, _id: user._id}}).end()
            })
            
        }
    })   

}

function signin(req, res) {
    User.findOne({
        email: req.body.email
    }, (err, user) => {

        if (err) res.status(400).send({err: err, data: null}).end()

        if (!user) {
            res.status(400).send({err: 'Authentication failed. User not found.', data: null}).end()
        } else if (user) {

            // check if password matches
            if (!bcrypt.compareSync(req.body.password, user.password)) {
                res.status(400).send({err: 'Authentication failed. Wrong password.', data: null}).end()
            } else {

                // if user is found and password is right
                // create a token with only our given payload
                // we don't want to pass in the entire user since that has the password
                const payload = {
                    _id: user._id,
                    email: user.email,
                    role: user.role
                }

                var token = jwt.sign(payload, Config.auth.JWT_SECRET, {
                    /**
                        expiresIn provided in seconds
                    */
                    expiresIn: Config.auth.tokenExpiry 
                })

                // return the information including token as JSON
                res.status(200).send({err: null, data: {user: payload, token: token}}).end()
            }   

        }

    });
}

module.exports = {
    signup,
    signin
}