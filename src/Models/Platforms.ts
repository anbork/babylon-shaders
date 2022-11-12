import { Scene, SceneLoader, ActionManager, ExecuteCodeAction, Vector3, Quaternion, AbstractMesh } from "@babylonjs/core"

export const LoadPlatforms = async (scene: Scene): Promise<void> => {
  let activePlatform: number = 1;
  const direction = [
    {forward: 3, backward: 2},
    {forward: 1, backward: 3},
    {forward: 2, backward: 1}
  ];
  const camera = scene.getCameraByName('camera')!;
  const models = await SceneLoader.ImportMeshAsync(
    "",
    "/assets/glb-models/",
    "BTLMN_LemonPlatforms.glb",
    scene
  );
  
  const lookatObjects: string[] = ["Plus_1", "Plus_2", "Plus_3"];

  lookatObjects.forEach((name, index) => {
    const object = scene.getMeshByName(name);
    if (!object) return;
    object.rotate(new Vector3(0,1,0), Math.PI/3*index)
  });

  const objects: string[] = ["Plus_Back", "Plus_Cap", "Plus_Cloth", "Plus_Face", "Plus_Back_Stroke", "Plus_Cap_Stroke", "Plus_Cloth_Stroke", "Plus_Face_Stroke", "Line_Back_1", "Line_Back_2", "Line_Cap_1", "Line_Cap_2", "Line_Cloth_1", "Line_Cloth_2", "Line_Face_1", "Line_Face_2", "Point_Back", "Point_Cap", "Point_Cloth", "Point_Face", "Background_Sphere"];

  const unusedObjects: string[] = ["Point_Weapon", "Plus_Weapon", "Plus_Weapon_Stroke", "Line_Weapon_1", "Line_Weapon_2"];

  [...objects, ...unusedObjects].forEach(name => {
    const object = scene.getMeshByName(name);
    if (!object) return;
    object.visibility = 0;
    object.checkCollisions = false;
    object.isPickable = false;
  });



  ["collider1", "collider2", "collider3"].forEach((name, index) => {
    const collider = scene.getMeshByName(name);
    if (!collider) return;
    collider.actionManager = new ActionManager(scene);
    collider.visibility = 0;
    collider.actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnPointerOverTrigger, function(){	
      scene.hoverCursor = "pointer";
    }));
    collider.actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnPointerOutTrigger, function(){
      scene.hoverCursor = "default";
    }));
    
    collider.actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnPickTrigger, function(){
      let rotationAngle = 0;
      if (activePlatform == direction[index].forward) {
        scene.getAnimationGroupByName('Forward' + direction[index].forward)?.start(false, 0.5)
        rotationAngle = -Math.PI/3;
      } else
      if (activePlatform == direction[index].backward) {
        scene.getAnimationGroupByName('Backward' + direction[index].backward)?.start(false, 0.5)
        rotationAngle = Math.PI/3;
      }

      lookatObjects.forEach((name) => {
        const object = scene.getMeshByName(name)!;
        const id = setInterval(frame, 10);
        let time = 0
        function frame() {
          time += 10
          if (time > 200) {
            clearInterval(id);
          } else {
            console.log(time)
            object.rotate(new Vector3(0,1,0), rotationAngle/20)
          }
        }
      });
      activePlatform = index + 1
    }));
    
  });
}
