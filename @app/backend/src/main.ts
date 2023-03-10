import prisma from "./db"
import express from "express"
import morgan from "morgan"
import env from "./env"
const app = express()

app.use(morgan("dev"))

console.log(env)

app.get("/", (req, res) => {
	res.send({
		message: "Hello World!",
	})
})

app.get("/api", (req, res) => {
	res.send({
		path: "/api",
		status: "OK",
	})
})

app.get("/api/users", async (req, res) => {
	const users = await prisma.user.findMany()
	res.send(users)
})

const PORT = env.BACKEND_PORT
app.listen(PORT, () => {
	console.log(`Backend started on http://localhost:${PORT}`)
})
