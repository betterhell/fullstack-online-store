const ApiError = require("../error/ApiError")

const registration = async (req, res) => {

}

const login = async (req, res) => {

}

const checkAuth = async (req, res, next) => {
    const {id} = req.query
    if (!id) {
       return next(ApiError.badRequest("ne zadan id"))
    }
    res.json(id)
}

module.exports = {registration, login, checkAuth}