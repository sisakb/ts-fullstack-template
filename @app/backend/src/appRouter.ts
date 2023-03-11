import { router } from "@backend/trpc"
import { testRouter } from "@backend/routers/testRouter"

export const appRouter = router({
	test: testRouter,
})

export type AppRouter = typeof appRouter
