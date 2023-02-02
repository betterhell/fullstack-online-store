const ApiError = require("../error/ApiError")
const {User, Basket} = require("../models/models")
const JwtGenerator = require("../JwtGenerator/JwtGenetator")

const bcrypt = require("bcrypt")

const registration = async (req, res, next) => {
    try {
        const {email, password, role} = req.body

        if (!email || !password) {
            return next(ApiError.badRequest("Incorrect email or password"))
        }

        const candidate = await User.findOne({where: {email}})

        if (candidate) {
            return next(ApiError.badRequest("User with this email already registered"))
        }

        const hashPassword = await bcrypt.hash(password, 5)

        const user = await User.create({email, password: hashPassword, role})
        const basket = await Basket.create({userId: user.id})

        const token = JwtGenerator(user.id, email, role)
        res.json({token})
    } catch (error) {
        next(ApiError.internal("Failed to sign up"))
    }

}

const login = async (req, res, next) => {
    try {
        const {email, password} = req.body

        const user = await User.findOne({where: {email}})
        if (!user) {
           return next(ApiError.internal("Incorrect email or password"))
        }

        let comparePassword = bcrypt.compare(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal("Incorrect email or password"))
        }

        const token = JwtGenerator(user.id, user.email, user.role)
        res.json({token})
    } catch (error) {
        next(ApiError.internal("Failed to sign in"))
    }
}

const checkAuth = async (req, res, next) => {
    try {
        const token = JwtGenerator(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    } catch (error) {
        next(ApiError.internal("Failed to sign in"))
    }
}

module.exports = {registration, login, checkAuth}