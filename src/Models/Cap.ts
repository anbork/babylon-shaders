import { SceneLoader, Vector3 } from "@babylonjs/core"
import { shader } from "./Shader"

export const LoadCap = async (): Promise<void> => {
  const models = await SceneLoader.ImportMeshAsync(
    "",
    "/assets/glb-models/",
    "test.glb"
  );

  const cap = models.meshes[1];
  const shaderMaterial = shader();

  shaderMaterial.needDepthPrePass = true;
  cap.position = new Vector3(0, 0, 0);
  cap.material = shaderMaterial;

  
  console.log("models", models);
}
