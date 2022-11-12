import { Scene, SceneLoader, MeshBuilder, Vector3, Mesh, TransformNode, StandardMaterial, Color3 } from "@babylonjs/core"
import data from "./data.json"

export const Lemon = async (scene: Scene): Promise<void> => {
  const models = await SceneLoader.ImportMeshAsync(
    "",
    "/assets/glb-models/",
    "BTLMN_Outfits_Tier1_MP.glb",
    scene
  );

  const firstLemon: string[] = Object.values(data[1].model).map((value: any) => {
    if (value && typeof value === 'object' && value.flavour) return value.flavour
    return value
  });

  const lemon = models.meshes[0]
  models.meshes.forEach(mesh => {
    if (!firstLemon.includes(mesh.name)) {
      mesh.visibility = 0;
    }
  })
  
  const nodePosition = scene.getNodeByName("LemonPos_1") as TransformNode
  lemon.rotation = nodePosition.rotation
  lemon.parent = nodePosition
}
