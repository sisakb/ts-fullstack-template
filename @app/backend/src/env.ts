import { z } from "zod"

export const envSchema = z.object({
	FRONTEND_PORT: z.coerce.number().positive(),
	BACKEND_PORT: z.coerce.number().positive(),
	DATABASE_URL: z.string(),
})

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
