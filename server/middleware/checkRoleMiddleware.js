const jwt = require("jsonwebtoken")
const ApiError = require("../error/ApiError")

module.exports = function (role) {
    return function (req, res, next) {

        if (req.method === "OPTIONS") {
            next()
        }

        try {
            const token = req.headers.authorization.split(" ")[1] // split Bearer token
            if (!token) {
                return next(ApiError.notAuth("User is not authorized"))
            }

            const decoded = jwt.verify(token, process.env.SECRET_JWT_KEY)

            if (decoded.role !== role) {
                return next(ApiError.notAuth("Do not access"))
            }

            req.user = decoded
            next()
        } catch (error) {
            next(ApiError.notAuth("User is not authorized"))
        }
    }
}

