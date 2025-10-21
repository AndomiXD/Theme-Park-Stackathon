const { Coaster } = require("../models")

const GetCoasters = async (req, res) => {
  try {
    const coasters = await Coaster.find()
    res.status(200).send(coasters)
  } catch (error) {
    throw error
  }
}

const CreateCoaster = async (req, res) => {
  try {
    const coasters = await Coaster.create(req.body)
    res.status(200).send(coasters)
  } catch (error) {
    throw error
  }
}

const GetOneCoaster = async (req, res) => {
  try {
    const coaster = await Coaster.findById(req.params._id)
    res.status(200).send(coaster)
  } catch (error) {
    throw error
  }
}

const DeleteCoaster = async (req, res) => {
  try {
    await Coaster.findByIdAndDelete(req.params._id)
    res.status(200).send({ msg: "Post Deleted", id: req.params.id })
  } catch (error) {
    throw error
  }
}

const AddReview = async (req, res) => {
  try {
    const { comment, rating } = req.body

    const coaster = await Coaster.findById(req.params._id)
    // Append the new review and save
    coaster.reviews.push({ comment, rating })
    await coaster.save()

    res.status(200).send(coaster)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCoasters,
  CreateCoaster,
  GetOneCoaster,
  DeleteCoaster,
  AddReview,
}
