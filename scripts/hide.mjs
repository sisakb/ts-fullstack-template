import fs from "fs"
import path from "path"

const settings = fs.readFileSync(
	path.join(process.cwd(), ".vscode", "settings.json"),
	"utf8"
)

const settingsJson = JSON.parse(settings)

if (
	settingsJson["files.exclude"] === undefined &&
	settingsJson["_files.exclude"]
) {
	settingsJson["files.exclude"] = settingsJson["_files.exclude"]
	delete settingsJson["_files.exclude"]
} else if (
	settingsJson["files.exclude"] &&
	settingsJson["_files.exclude"] === undefined
) {
	settingsJson["_files.exclude"] = settingsJson["files.exclude"]
	delete settingsJson["files.exclude"]
}

fs.writeFileSync(
	path.join(process.cwd(), ".vscode", "settings.json"),
	JSON.stringify(settingsJson, null, 4)
)
