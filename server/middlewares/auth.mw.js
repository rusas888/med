const Configs    = require('../config/configs')
const jwt        = require('jsonwebtoken')
const User       = require('../models/user')


function verifyJWT_MW(req, res, next)
{
    // let token = (req.method === 'POST') ? req.body.token : req.query.token
    var token = req.body.token || req.headers['authorization'];
    console.log(jwt.decode(token, Configs.auth.JWT_SECRET));
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, Configs.auth.JWT_SECRET, function(err, user) {      
            if (err) {
                return res.status(403).send({err: err, data: null}).end();    
            } else {
                User.findOne({email: user.email, _id: user._id, role: user.role}).exec((err, result) => {
                    if(err) res.status(403).send({err: 'Failed to authenticate token.', data: null}).end();   
                    else if(result) {
                        // if everything is good, save to request for use in other routes
                        req.user = user;    
                        next();
                    } else {
                        res.status(403).send({err: 'Failed to authenticate token. Maybe it is already expired. Or user is not exists.', data: null}).end();   
                    }
                })
                
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({err: 'No token provided.', data: null}).end();

    }

}

module.exports =  {
  verifyJWT_MW
}