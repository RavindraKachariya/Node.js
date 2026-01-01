import express, { urlencoded } from 'express'
import dotenv from 'dotenv'

dotenv.config({
    path: "./.env"
})

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use("/public/css", express.static('public/css'));

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render('index')
})

app.listen(process.env.PORT, () => {
    console.log(`Server Start on port ${process.env.PORT}`);
})