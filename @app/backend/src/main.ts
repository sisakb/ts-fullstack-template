import * as trpcExpress from "@trpc/server/adapters/express"
import morgan from "morgan"
import express from "express"
import env from "@backend/env"
import { createContext } from "@backend/trpc"
import { appRouter } from "@backend/appRouter"

const app = express()

app.use(morgan("dev"))

app.get("/", (req, res) => {
	res.send({
		message: "Hello World!",
	})
})

app.use(
	"/api/trpc",
	trpcExpress.createExpressMiddleware({ router: appRouter, createContext })
)

const PORT = env.BACKEND_PORT || env.PORT

app.listen(PORT, () => {
	console.log(`Backend running on http://localhost:${PORT}`)
})
