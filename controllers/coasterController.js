const { Coaster } = require("../models")

const GetCoasters = async (req, res) => {
  try {
    const coasters = await Coaster.find({})
    res.status(200).send(coasters)
  } catch (error) {
    throw error
  }
}

const CreateCoaster = async (req, res) => {
  try {
    const coaster = await Coaster.create(req.body)
    res.status(200).send(coaster)
  } catch (error) {
    throw error
  }
}

// const DeletePost = async (req, res) => {
//   try {
//     await Post.deleteOne({ _id: req.params.id })
//     res.status(200).send({ msg: "Post Deleted", id: req.params.id })
//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
  GetCoasters,
  CreateCoaster,
  // DeletePost,
}
