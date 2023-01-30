const {Product} = require("../models/models")
const ApiError = require("../error/ApiError")
const uuid = require("uuid")
const path = require("path")

const createProduct = async (req, res, next) => {
    try {
        const {name, price, brandId, info} = req.body
        const {image} = req.files
        let fileName = uuid.v4() + ".jpg"
        await image.mv(path.resolve(__dirname, "..", "static", fileName))

        const product = await Product.create({name, price, brandId, image: fileName})
        return res.json(product)

    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
}

const getProduct = async (req, res) => {

}

const getAllProducts = async (req, res) => {

}


module.exports = {createProduct, getProduct, getAllProducts}