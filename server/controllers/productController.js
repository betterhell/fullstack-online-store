const {Product, ProductInfo, ProductImages} = require("../models/models")
const ApiError = require("../error/ApiError")

const uuid = require("uuid")
const path = require("path")

const createProductImage = async (image, productId) => {
    let fileName = uuid.v4() + path.extname(image.name)

    await image.mv(path.resolve(__dirname, "..", "static", fileName))

    return await ProductImages.create({name: fileName, initialName: image.name, productId})
}

const createProduct = async (req, res, next) => {
    try {
        let {name, price, brandId, info} = req.body
        let {images} = req.files

        const product = await Product.create({name, price, brandId})

        images?.map((image) => createProductImage(image, product.id))

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

        const product = await Product.findOne(
            {
                where: {id},
                include: [{model: ProductInfo, as: 'info'}, {model: ProductImages, as: 'images'}]
            },
        )

        return res.json(product)

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
        let {images} = req.files

        await ProductImages.destroy({where: {productId: id}})

        const product = await Product.update({name, price, brandId, info},
            {
                where: {id},
                include: [{model: ProductInfo, as: 'info'}, {model: ProductImages, as: 'images'}]
            },
        )

        images?.map((image) => createProductImage(image, id))

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

        const product = await Product.destroy(
            {
                where: {id},
            },
        )

        if (!product) {
            next(ApiError.badRequest("Product not found"))
        }

        return res.json({message: `Product ${id} was delete`})
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
}



module.exports = {createProduct, getProduct, getAllProducts, updateProduct, deleteProduct}