import express from "express"
import morgan from "morgan"
const app = express()

app.use(morgan("dev"))

app.get("/", (req, res) => {
	res.send("It's working!")
})

app.listen(3000, () => {
	console.log("Server started on port 3000")
})
