const jwt = require("jsonwebtoken")
const ApiError = require("../error/ApiError");

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }

    try {
        const token = req.headers.authorization.split(" ")[1] // split Bearer token
        if (!token) {
          return next(ApiError.notAuth("User is not authorized"))
        }

        req.user = jwt.verify(token, process.env.SECRET_JWT_KEY)
        next()
    } catch (error) {
        next(ApiError.notAuth("User is not authorized"))
    }
}