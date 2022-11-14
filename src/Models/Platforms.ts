import { Scene, SceneLoader, ActionManager, ExecuteCodeAction, Vector3, TransformNode } from "@babylonjs/core"

export const LoadPlatforms = async (scene: Scene): Promise<void> => {
  let activePlatform: number = 1;
  const direction = [
    {forward: 3, backward: 2},
    {forward: 1, backward: 3},
    {forward: 2, backward: 1}
  ];
  const models = await SceneLoader.ImportMeshAsync(
    "",
    "/assets/glb-models/",
    "BTLMN_LemonPlatforms.glb",
    scene
  );

  const platforms = models.meshes[0]
  platforms.position.y = -100

  const lookatObjects: string[] = ["LemonPos_1", "LemonPos_2", "LemonPos_3"];

  lookatObjects.forEach((name, index) => {
    const object = scene.getNodeByName(name) as TransformNode
    if (!object) return;
    object.rotate(new Vector3(0,1,0), (Math.PI + Math.PI/3)*index)
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
        scene.getAnimationGroupByName('Forward' + direction[index].forward)?.start(false, 1)
        rotationAngle = 2*Math.PI/3;
      } else
      if (activePlatform == direction[index].backward) {
        scene.getAnimationGroupByName('Backward' + direction[index].backward)?.start(false, 1)
        rotationAngle = -2*Math.PI/3;
      }

      lookatObjects.forEach((name) => {
        const node = scene.getNodeByName(name) as TransformNode;
        node.rotation.y = 0;
        const id = setInterval(frame, 5);
        let time = 0
        function frame() {
          time += 5
          if (time > 300) {
            clearInterval(id);
          } else {
            node.rotate(new Vector3(0,1,0), rotationAngle/60)
          }
        }
      });
      activePlatform = index + 1
    }));
    
  });



  const canvas: any = document.getElementById("renderCanvas");              
  const currentPosition = { x: 0, y: 0 };
  let clicked = false;

  canvas.addEventListener("pointerdown", function (evt: MouseEvent) {
    currentPosition.x = evt.clientX;
    clicked = true;
  });
  
  canvas.addEventListener("pointermove", function (evt: MouseEvent) {
    if (!clicked) {
      return;
    }
    const activeLemon = scene.getNodeByName(`LemonPos_${activePlatform}`) as TransformNode
    const activePlace = scene.getNodeByName(`Platform_${activePlatform}`) as TransformNode
    const dx = evt.clientX - currentPosition.x;
    const angleY = dx * 0.01;
    activeLemon.rotation.y += angleY;
    activePlace.rotate(new Vector3(0,1,0), angleY);
    currentPosition.x = evt.clientX;
  });
  
  canvas.addEventListener("pointerup", function () {
    clicked = false;
  });

}
