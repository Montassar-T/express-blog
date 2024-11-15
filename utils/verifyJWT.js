const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
    console.log('Headers:', req.headers); // Log all headers

    const authHeader = req.headers.authorization || req.headers.Authorization;

    if( !authHeader ){ return res.status(401).json({ message: "Unauthorized" });}

    token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
        if (err) return res.status(403).json({ message: "Forbidden" });
        next();
    });
};



module.exports = verifyJWT;