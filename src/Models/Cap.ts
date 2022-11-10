import { SceneLoader, Vector3, VertexBuffer } from "@babylonjs/core"
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
  cap.position = new Vector3(0, 150, 0);
  cap.material = shaderMaterial;


  let positions = cap.getVerticesData(VertexBuffer.PositionKind)!
  positions = positions.map(uv => uv*100)
  cap.setVerticesData(VertexBuffer.PositionKind, positions, false)

  console.log("models", models);
}
