import { Scene, SceneLoader } from "@babylonjs/core"

export const LoadBackpack = async (scene: Scene): Promise<void> => {
  await SceneLoader.ImportMeshAsync(
    "",
    "/assets/glb-models/",
    "BTLMN_Outfits_Tier_MP_Backpack.glb",
    scene
  );
}
