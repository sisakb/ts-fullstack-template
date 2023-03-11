import * as TsconfigPathsPlugin from "@esbuild-plugins/tsconfig-paths"
import { build } from "esbuild"

const args = process.argv.slice(2)
const isDev =
	args.includes("--dev") || args.includes("-d") || args.includes("-D")

if (isDev) {
	console.time("Build time")
	console.log("Building in development mode")
}

await build({
	entryPoints: ["./src/main.ts"],
	bundle: true,
	platform: "node",
	packages: "external",
	outdir: "dist",
	sourcemap: true,
	target: "node18",
	format: "esm",
	minify: !isDev,
	plugins: [TsconfigPathsPlugin.TsconfigPathsPlugin({})],
	logLevel: isDev ? "warning" : "info",
})

if (isDev) {
	console.timeEnd("Build time")
}
