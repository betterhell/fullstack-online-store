const { Slide } = require("../models/models");
const ApiError = require("../error/ApiError");

const uuid = require("uuid");
const path = require("path");

const createSlide = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const { image } = req.files;

    let fileName = uuid.v4() + ".jpg";

    await image.mv(path.resolve(__dirname, "..", "static", fileName));

    const slide = await Slide.create({ title, image: fileName, description });

    return res.json(slide);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
};

const getAllSlide = async (req, res, next) => {
  try {
    const slides = await Slide.findAll();
    return res.json(slides);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
};

const updateSlide = async (req, res, next) => {
  try {
    const { title, image, description } = req.body;
    const { id } = req.params;

    const slide = await Slide.update(
      { title, image, description },
      {
        where: { id },
      }
    );

    if (!slide) {
      next(ApiError.badRequest("Slide not found"));
    }

    return res.json({ message: `Slide ${id} was update` });
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
};

const deleteSlide = async (req, res, next) => {
  try {
    const { id } = req.params;

    const slide = await Slide.destroy({
      where: { id },
    });

    if (!slide) {
      next(ApiError.badRequest("Slide not found"));
    }

    return res.json({ message: `Slide ${id} was delete` });
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
};

module.exports = { createSlide, getAllSlide, updateSlide, deleteSlide };
