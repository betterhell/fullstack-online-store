const {Brand} = require("../models/models")
const ApiError = require("../error/ApiError")

const createBrand = async (req, res) => {
    const {name, image} = req.body
    const brand = await Brand.create({name, image})
    return res.json(brand)
}

const getAllBrands = async (req, res) => {
    const brands = await Brand.findAll()
    return res.json(brands)
}


module.exports = {createBrand, getAllBrands}