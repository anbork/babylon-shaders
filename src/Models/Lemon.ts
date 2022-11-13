import { Scene, SceneLoader, Mesh, TransformNode } from "@babylonjs/core"
import data from "./data.json"

export const Lemon = async (scene: Scene): Promise<void> => {
  const models = await SceneLoader.LoadAssetContainerAsync(
    "/assets/glb-models/",
    "BTLMN_Outfits_Tier_MP_20.glb",
    scene
  );

  const LemonForCopy = {
    root: models.meshes[0],
    skeleton: models.skeletons[0],
    animationGroups: models.animationGroups
  }

  const outfits: string[][] = data.map(({ model }) => {
    return Object.values(model).map((value: any) => {
      if (value && typeof value === 'object' && value.flavour) return value.flavour
      return value
    })
  })

  outfits.forEach((_list, index) => {
    [`Plus_${index+1}`, `Plus_${index+1}_Stroke`].forEach(plus => {
      const mesh = scene.getMeshByName(plus)!
      mesh.visibility = 0
    })

    const nodePosition = scene.getNodeByName(`LemonPos_${index + 1}`) as TransformNode
    let newLemon = LemonForCopy.root.clone(`Lemon_${index + 1}`, nodePosition) as Mesh;
    let newLemonSkeleton = LemonForCopy.skeleton.clone(`Skeleton_${index + 1}`);
    newLemon.getChildMeshes(false, (mesh) => mesh.getClassName() === "Mesh" && (mesh as Mesh).getTotalVertices() > 0).forEach((mesh) => {
      console.log(mesh.name)
      //const name = mesh.name.split('.')[1];
      //if (!list.includes(name)) mesh.visibility = 0;
      newLemon.rotation = nodePosition.rotation
      mesh.skeleton = newLemonSkeleton;
    });
  })

  models.animationGroups[0].start(true, 1.5);
}
