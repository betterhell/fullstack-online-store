const {Brand} = require("../models/models")
const ApiError = require("../error/ApiError")

const createBrand = async (req, res, next) => {
    try {
        const {name, image} = req.body
        const brand = await Brand.create({name, image})

        if (!brand) {
            res.json(401).json({})
        }
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