const {Product, ProductInfo} = require("../models/models")
const ApiError = require("../error/ApiError")
const uuid = require("uuid")
const path = require("path")

const createProduct = async (req, res, next) => {
    try {
        let {name, price, brandId, info} = req.body
        const {image} = req.files

        let fileName = uuid.v4() + ".jpg"


        await image.mv(path.resolve(__dirname, "..", "static", fileName))
        const product = await Product.create({name, price, brandId, image: fileName})

        if (info) {
            info = JSON.parse(info)
            info.forEach(i => ProductInfo.create({title: i.title, description: i.description, productId: product.id}))
        }

        return res.json(product)
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
}

const getProduct = async (req, res, next) => {
    try {
        const {id} = req.params
        const device = await Product.findOne(
            {
                where: {id},
                include: [{model: ProductInfo, as: 'info'}]
            },
        )
        return res.json(device)
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
}

const getAllProducts = async (req, res, next) => {
    try {
        let {brandId, limit, page} = req.query

        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit

        let products

        if (!brandId) {
            products = await Product.findAndCountAll({limit, offset})
        }

        if (brandId) {
            products = await Product.findAndCountAll({where: {brandId}, limit, offset})
        }

        return res.json(products)

    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const {name, price, brandId, info} = req.body
        const {id} = req.params
        const {image} = req.files

        let fileName = uuid.v4() + ".jpg"

        await image.mv(path.resolve(__dirname, "..", "static", fileName))

        const product = await Product.update({name, price, brandId, image: fileName, info},
            {
                where: {id},
            },
        )

        if (!product) {
            next(ApiError.badRequest("Product not found"))
        }

        return res.json({message: `Product ${id} was update`})
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const {id} = req.params

        const device = await Product.destroy(
            {
                where: {id},
            },
        )

        if (!device) {
            next(ApiError.badRequest("Product not found"))
        }

        return res.json({message: `Product ${id} was delete`})
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
}



module.exports = {createProduct, getProduct, getAllProducts, updateProduct, deleteProduct}