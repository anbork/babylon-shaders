import * as BABYLON from '@babylonjs/core';
import "@babylonjs/loaders";
import { LoadCap } from './Models/Cap'

const canvas: any = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

// Add your code here matching the playground format
const createScene = function () {
  const scene = new BABYLON.Scene(engine);
  const camera = new BABYLON.ArcRotateCamera(
    "camera",
    Math.PI / 2,
    Math.PI / 3.2,
    4,
    BABYLON.Vector3.Zero(),
    scene
  )

  camera.attachControl(canvas, true);
  new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);

  LoadCap()

  return scene;
};

const scene = createScene(); //Call the createScene function

engine.runRenderLoop(function () {
  
  scene.render();
});

window.addEventListener("resize", function () {
  engine.resize();
});
