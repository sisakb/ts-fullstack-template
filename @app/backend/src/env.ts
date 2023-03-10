import { z } from "zod"

export const envSchema = z
	.object({
		BACKEND_PORT: z.coerce.number().positive().optional(),
		PORT: z.coerce.number().positive().optional(),
		DATABASE_URL: z.string(),
	})
	.refine(
		(data) => data.BACKEND_PORT || data.PORT,
		"Either BACKEND_PORT or PORT must be set"
	)

export type Env = z.infer<typeof envSchema>

let env: Env

try {
	env = envSchema.parse(process.env)
} catch (error) {
	if (error instanceof z.ZodError) {
		console.error(error.issues)
	}
	throw new Error("Invalid environment variables, see above")
}

export default env
