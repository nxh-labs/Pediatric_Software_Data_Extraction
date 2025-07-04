import path from "path"
import fs from 'fs'
export const moveNeededAssetOnBuildDir = async (): Promise<void> => {
    try {
        const buildPath = path.join(__dirname, "..", "dist")
        const neededAssetPath = path.join(__dirname, "..", "assets", "needed_assets")
        if (!fs.existsSync(buildPath)) {
            fs.mkdirSync(buildPath)
        }
        if (!fs.existsSync(neededAssetPath)) return
        const readNeededAsset = fs.readdirSync(neededAssetPath)
        for (const assetPath of readNeededAsset) {
            fs.writeFileSync(path.join(buildPath, assetPath), fs.readFileSync(path.join(neededAssetPath, assetPath)))
        }
        

    } catch (error) {

    }
}

moveNeededAssetOnBuildDir().then(() => {
    console.log("Sucessfuly move needed asset on build dir.")
}).catch((e) => console.error("Erreur lors du move needed asset on build dir"))