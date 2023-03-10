import { defineConfig, loadEnv } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default ({ mode }) => {
	const rootDir = path.join(process.cwd(), "..", "..")
	process.env = Object.assign(process.env, loadEnv(mode, rootDir, ""))

	if (
		!process.env.FRONTEND_PORT ||
		!process.env.BACKEND_PORT ||
		isNaN(Number(process.env.FRONTEND_PORT)) ||
		isNaN(Number(process.env.BACKEND_PORT))
	) {
		throw new Error(
			"You must set FRONTEND_PORT and BACKEND_PORT environment variables"
		)
	}

	return defineConfig({
		plugins: [react()],
		server: {
			proxy: {
				"/api": {
					target: `http://localhost:${process.env.BACKEND_PORT}`,
					changeOrigin: true,
				},
			},
			port: Number(process.env.FRONTEND_PORT),
			strictPort: true,
		},
	})
}
