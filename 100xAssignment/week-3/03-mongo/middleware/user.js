const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const isUserExists = await User.findOne({username : req.headers.username, password : req.headers.password})
    if(isUserExists){
        console.log(isUserExists);
        next();
    }else{
        res.status(403).json({
            msg : "User not exists"
        });
        return;
    }
}

module.exports = userMiddleware;