const express = require("express")
const logger = require("morgan")
const cors = require("cors")

const coasterRouter = require("./routes/coasterRouter")

const PORT = process.env.PORT || 3000

const db = require("./db")

// const { Coaster } = require("./models")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger("dev"))

// app.get("/coasters", async (req, res) => {
//   try {
//     let coasters = await Coaster.find({})
//     res.status(200).send(coasters)
//   } catch (error) {
//     res.status(500).send({ msg: "Error getting all coasters!", error })
//   }
// })

// app.post("/coasters", async (req, res) => {
//   try {
//     let newCoaster = await Coaster.create(req.body)
//     res.status(200).send(newCoaster)
//   } catch (error) {
//     res.status(500).send({ msg: "Error creating a new coaster!", error })
//   }
// })

app.use("/coasters", coasterRouter)

app.use("/", (req, res) => {
  res.send(`Welcome!`)
})

app.listen(PORT, () => {
  console.log(`Express Server Running on Port`, PORT, `. . .`)
})
