const {Brand} = require("../models/models")
const ApiError = require("../error/ApiError")

const uuid = require("uuid");
const path = require("path");

const createBrand = async (req, res, next) => {
    try {
        const {name} = req.body
        const {image} = req.files

        let fileName = uuid.v4() + ".jpg"

        await image.mv(path.resolve(__dirname, "..", "static", fileName))

        const brand = await Brand.create({name, image: fileName})

        return res.json(brand)

    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
}

const getAllBrands = async (req, res, next) => {
    try {
        const brands = await Brand.findAll()
        return res.json(brands)

    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
}

const updateBrand = async (req, res, next) => {
    try {
        const {name, image} = req.body
        const {id} = req.params

        const brand = await Brand.update({name, image},
            {
                where: {id},
            },
        )

        if (!brand) {
            next(ApiError.badRequest("Brand not found"))
        }

        return res.json({message: `Brand ${id} was update`})
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
}

const deleteBrand = async (req, res, next) => {
    try {
        const {id} = req.params

        const brand = await Brand.destroy(
            {
                where: {id},
            },
        )

        if (!brand) {
            next(ApiError.badRequest("Brand not found"))
        }

        return res.json({message: `Brand ${id} was delete`})
    } catch (error) {
        next(ApiError.badRequest(error.message))
    }
}


module.exports = {createBrand, getAllBrands, updateBrand, deleteBrand}