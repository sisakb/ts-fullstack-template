import { publicProcedure, router } from "@backend/trpc"

export const testRouter = router({
	hello: publicProcedure.query(() => {
		return "Hello from trpc!" as const
	}),
	users: publicProcedure.query(async ({ ctx }) => {
		return await ctx.prisma.user.findMany()
	}),
})
