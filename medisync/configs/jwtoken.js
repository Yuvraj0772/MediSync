const jwt = require('jsonwebtoken');


const secret = "dsjrApcnA-4ndwjfn";
const exptm = "10m";

function generateToken(mobile, role){
    const token = jwt.sign({mobile, role}, secret, {expiresIn: exptm});
    return token;
}

function verifyToken(token,callback){
    jwt.verify(token, secret, (err, data) => {
        if(err){
            return callback(err,null);

        }
}