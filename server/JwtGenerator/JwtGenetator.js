const jwt = require("jsonwebtoken");

 const generateJwt = (id, email, role) => {
    return jwt.sign(
        {
            id: id,
            email,
            role
        },
        process.env.SECRET_JWT_KEY, {expiresIn: "24h"},
    )
}

module.exports = generateJwt