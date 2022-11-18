import * as BABYLON from '@babylonjs/core';
import { GLTFFileLoader, GLTFLoaderAnimationStartMode } from "@babylonjs/loaders";
import { LoadPlatforms } from './Models/Platforms'
import { Lemon } from './Models/Lemon'

BABYLON.SceneLoader.OnPluginActivatedObservable.add(function (loader) {
  (loader as GLTFFileLoader).animationStartMode = GLTFLoaderAnimationStartMode.NONE;
});

const canvas: any = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

// Add your code here matching the playground format
const createScene = function () {
  const scene = new BABYLON.Scene(engine);
  
  const camera = new BABYLON.ArcRotateCamera(
    "camera",
    -Math.PI / 2,
    Math.PI / 2.1,
    800,
    new BABYLON.Vector3(0,0,0),
    scene
  )

  camera.lowerAlphaLimit = camera.alpha;
  camera.upperAlphaLimit = camera.alpha;
  camera.upperBetaLimit = camera.beta;
  camera.lowerBetaLimit = camera.beta;
  camera.wheelPrecision = 0.5;
  camera.lowerRadiusLimit = 300;
  camera.upperRadiusLimit = 1000;

  
  camera.attachControl(canvas, true);
  new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);

  LoadPlatforms(scene);
  Lemon(scene)
  //LoadBackpack(scene)

  return scene;
};

const scene = createScene(); //Call the createScene function

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener("resize", function () {
  engine.resize();
});
