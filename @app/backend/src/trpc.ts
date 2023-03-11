import { initTRPC } from "@trpc/server"
import type * as trpcExpress from "@trpc/server/adapters/express"
import superjson from "superjson"
import prisma from "@backend/db"

type CreateContextOptions = Record<string, never>
const createInnerTRPCContext = (_opts: CreateContextOptions) => {
	return {
		prisma,
	}
}

export const createContext = (
	_ops: trpcExpress.CreateExpressContextOptions
) => {
	return createInnerTRPCContext({})
}

const t = initTRPC.context<typeof createContext>().create({
	transformer: superjson,
})

export const router = t.router
export const publicProcedure = t.procedure
