const express = require("express")
const logger = require("morgan")
const cors = require("cors")

const coasterRouter = require("./routes/coasterRouter")

const PORT = process.env.PORT || 3000

const db = require("./db")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger("dev"))

app.use("/coasters", coasterRouter)

app.listen(PORT, () => {
  console.log(`Express Server Running on Port`, PORT, `. . .`)
})
