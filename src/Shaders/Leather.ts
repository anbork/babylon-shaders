import * as BABYLON from '@babylonjs/core';

export const leather = ({ NormalTrimTexture, NormalDetailTexture, MaskTrimTexture }: { NormalTrimTexture: string, NormalDetailTexture: string, MaskTrimTexture: string }): BABYLON.NodeMaterial => {
  var nodeMaterial = new BABYLON.NodeMaterial("leather");

  // InputBlock
  var position = new BABYLON.InputBlock("position");
  position.visibleInInspector = false;
  position.visibleOnFrame = false;
  position.target = 1;
  position.setAsAttribute("position");
  
  // TransformBlock
  var WorldPos = new BABYLON.TransformBlock("WorldPos");
  WorldPos.visibleInInspector = false;
  WorldPos.visibleOnFrame = false;
  WorldPos.target = 1;
  WorldPos.complementZ = 0;
  WorldPos.complementW = 1;
  
  // InputBlock
  var World = new BABYLON.InputBlock("World");
  World.visibleInInspector = false;
  World.visibleOnFrame = false;
  World.target = 1;
  World.setAsSystemValue(BABYLON.NodeMaterialSystemValues.World);
  
  // TransformBlock
  var Worldnormal = new BABYLON.TransformBlock("World normal");
  Worldnormal.visibleInInspector = false;
  Worldnormal.visibleOnFrame = false;
  Worldnormal.target = 1;
  Worldnormal.complementZ = 0;
  Worldnormal.complementW = 0;
  
  // InputBlock
  var normal = new BABYLON.InputBlock("normal");
  normal.visibleInInspector = false;
  normal.visibleOnFrame = false;
  normal.target = 1;
  normal.setAsAttribute("normal");
  
  // PBRMetallicRoughnessBlock
  var PBRMetallicRoughness = new BABYLON.PBRMetallicRoughnessBlock("PBRMetallicRoughness");
  PBRMetallicRoughness.visibleInInspector = false;
  PBRMetallicRoughness.visibleOnFrame = false;
  PBRMetallicRoughness.target = 3;
  PBRMetallicRoughness.lightFalloff = 0;
  PBRMetallicRoughness.useAlphaTest = false;
  PBRMetallicRoughness.alphaTestCutoff = 0.4;
  PBRMetallicRoughness.useAlphaBlending = true;
  PBRMetallicRoughness.useRadianceOverAlpha = true;
  PBRMetallicRoughness.useSpecularOverAlpha = true;
  PBRMetallicRoughness.enableSpecularAntiAliasing = false;
  PBRMetallicRoughness.realTimeFiltering = false;
  PBRMetallicRoughness.realTimeFilteringQuality = 8;
  PBRMetallicRoughness.useEnergyConservation = true;
  PBRMetallicRoughness.useRadianceOcclusion = true;
  PBRMetallicRoughness.useHorizonOcclusion = true;
  PBRMetallicRoughness.unlit = false;
  PBRMetallicRoughness.forceNormalForward = false;
  PBRMetallicRoughness.debugMode = 0;
  PBRMetallicRoughness.debugLimit = -1;
  PBRMetallicRoughness.debugFactor = 1;
  
  // InputBlock
  var view = new BABYLON.InputBlock("view");
  view.visibleInInspector = false;
  view.visibleOnFrame = false;
  view.target = 1;
  view.setAsSystemValue(BABYLON.NodeMaterialSystemValues.View);
  
  // InputBlock
  var cameraPosition = new BABYLON.InputBlock("cameraPosition");
  cameraPosition.visibleInInspector = false;
  cameraPosition.visibleOnFrame = false;
  cameraPosition.target = 1;
  cameraPosition.setAsSystemValue(BABYLON.NodeMaterialSystemValues.CameraPosition);
  
  // PerturbNormalBlock
  var Perturbnormal = new BABYLON.PerturbNormalBlock("Perturb normal");
  Perturbnormal.visibleInInspector = false;
  Perturbnormal.visibleOnFrame = false;
  Perturbnormal.target = 2;
  Perturbnormal.invertX = false;
  Perturbnormal.invertY = false;
  Perturbnormal.useParallaxOcclusion = false;
  
  // InputBlock
  var uv = new BABYLON.InputBlock("uv2");
  uv.visibleInInspector = false;
  uv.visibleOnFrame = false;
  uv.target = 1;
  uv.setAsAttribute("uv2");
  
  // TextureBlock
  var NormalTrim = new BABYLON.TextureBlock("NormalTrim");
  NormalTrim.visibleInInspector = false;
  NormalTrim.visibleOnFrame = false;
  NormalTrim.target = 3;
  NormalTrim.convertToGammaSpace = false;
  NormalTrim.convertToLinearSpace = false;
  NormalTrim.disableLevelMultiplication = false;
  NormalTrim.texture = new BABYLON.Texture(NormalTrimTexture, null, false, false, 3);
  NormalTrim.texture.wrapU = 1;
  NormalTrim.texture.wrapV = 1;
  NormalTrim.texture.uAng = 0;
  NormalTrim.texture.vAng = 0;
  NormalTrim.texture.wAng = 0;
  NormalTrim.texture.uOffset = 0;
  NormalTrim.texture.vOffset = 0;
  NormalTrim.texture.uScale = 1;
  NormalTrim.texture.vScale = 1;
  NormalTrim.texture.coordinatesMode = 7;
  
  // LerpBlock
  var Lerp = new BABYLON.LerpBlock("Lerp");
  Lerp.visibleInInspector = false;
  Lerp.visibleOnFrame = false;
  Lerp.target = 4;
  
  // InputBlock
  var NormalColor = new BABYLON.InputBlock("Normal Color");
  NormalColor.visibleInInspector = false;
  NormalColor.visibleOnFrame = false;
  NormalColor.target = 1;
  NormalColor.value = new BABYLON.Color3(0.5019607843137255, 0.4980392156862745, 1);
  NormalColor.isConstant = false;
  
  // LerpBlock
  var Lerp1 = new BABYLON.LerpBlock("Lerp");
  Lerp1.visibleInInspector = false;
  Lerp1.visibleOnFrame = false;
  Lerp1.target = 4;
  
  // TextureBlock
  var NormalDetail = new BABYLON.TextureBlock("NormalDetail");
  NormalDetail.visibleInInspector = false;
  NormalDetail.visibleOnFrame = false;
  NormalDetail.target = 3;
  NormalDetail.convertToGammaSpace = false;
  NormalDetail.convertToLinearSpace = false;
  NormalDetail.disableLevelMultiplication = false;
  NormalDetail.texture = new BABYLON.Texture(NormalDetailTexture, null, false, false, 3);
  NormalDetail.texture.wrapU = 1;
  NormalDetail.texture.wrapV = 1;
  NormalDetail.texture.uAng = 0;
  NormalDetail.texture.vAng = 0;
  NormalDetail.texture.wAng = 0;
  NormalDetail.texture.uOffset = 0;
  NormalDetail.texture.vOffset = 0;
  NormalDetail.texture.uScale = 1;
  NormalDetail.texture.vScale = 1;
  NormalDetail.texture.coordinatesMode = 7;
  
  // ScaleBlock
  var Scale = new BABYLON.ScaleBlock("Scale");
  Scale.visibleInInspector = false;
  Scale.visibleOnFrame = false;
  Scale.target = 4;
  
  // InputBlock
  var uv1 = new BABYLON.InputBlock("uv");
  uv1.visibleInInspector = false;
  uv1.visibleOnFrame = false;
  uv1.target = 1;
  uv1.setAsAttribute("uv");
  
  // InputBlock
  var Float = new BABYLON.InputBlock("Float");
  Float.visibleInInspector = false;
  Float.visibleOnFrame = false;
  Float.target = 1;
  Float.value = 1;
  Float.min = 0;
  Float.max = 0;
  Float.isBoolean = false;
  Float.matrixMode = 0;
  Float.animationType = BABYLON.AnimatedInputBlockTypes.None;
  Float.isConstant = false;
  
  // InputBlock
  var NormalStrength = new BABYLON.InputBlock("Normal Strength");
  NormalStrength.visibleInInspector = true;
  NormalStrength.visibleOnFrame = false;
  NormalStrength.target = 1;
  NormalStrength.value = 1;
  NormalStrength.min = 0;
  NormalStrength.max = 3;
  NormalStrength.isBoolean = false;
  NormalStrength.matrixMode = 0;
  NormalStrength.animationType = BABYLON.AnimatedInputBlockTypes.None;
  NormalStrength.isConstant = false;
  
  // NormalBlendBlock
  var NormalBlend = new BABYLON.NormalBlendBlock("NormalBlend");
  NormalBlend.visibleInInspector = false;
  NormalBlend.visibleOnFrame = false;
  NormalBlend.target = 4;
  
  // InputBlock
  var ModelNormalStrength = new BABYLON.InputBlock("Model Normal Strength");
  ModelNormalStrength.visibleInInspector = true;
  ModelNormalStrength.visibleOnFrame = false;
  ModelNormalStrength.target = 1;
  ModelNormalStrength.value = 2;
  ModelNormalStrength.min = 0;
  ModelNormalStrength.max = 3;
  ModelNormalStrength.isBoolean = false;
  ModelNormalStrength.matrixMode = 0;
  ModelNormalStrength.animationType = BABYLON.AnimatedInputBlockTypes.None;
  ModelNormalStrength.isConstant = false;
  
  // TextureBlock
  var MaskTrim = new BABYLON.TextureBlock("MaskTrim");
  MaskTrim.visibleInInspector = false;
  MaskTrim.visibleOnFrame = false;
  MaskTrim.target = 3;
  MaskTrim.convertToGammaSpace = false;
  MaskTrim.convertToLinearSpace = true;
  MaskTrim.disableLevelMultiplication = false;
  MaskTrim.texture = new BABYLON.Texture(MaskTrimTexture, null, false, false, 3);
  MaskTrim.texture.wrapU = 1;
  MaskTrim.texture.wrapV = 1;
  MaskTrim.texture.uAng = 0;
  MaskTrim.texture.vAng = 0;
  MaskTrim.texture.wAng = 0;
  MaskTrim.texture.uOffset = 0;
  MaskTrim.texture.vOffset = 0;
  MaskTrim.texture.uScale = 1;
  MaskTrim.texture.vScale = 1;
  MaskTrim.texture.coordinatesMode = 7;
  
  // LerpBlock
  var Lerp2 = new BABYLON.LerpBlock("Lerp");
  Lerp2.visibleInInspector = false;
  Lerp2.visibleOnFrame = false;
  Lerp2.target = 4;
  
  // LerpBlock
  var Lerp3 = new BABYLON.LerpBlock("Lerp");
  Lerp3.visibleInInspector = false;
  Lerp3.visibleOnFrame = false;
  Lerp3.target = 4;
  
  // ColorSplitterBlock
  var ColorSplitter = new BABYLON.ColorSplitterBlock("ColorSplitter");
  ColorSplitter.visibleInInspector = false;
  ColorSplitter.visibleOnFrame = false;
  ColorSplitter.target = 4;
  
  // InputBlock
  var color = new BABYLON.InputBlock("color");
  color.visibleInInspector = false;
  color.visibleOnFrame = false;
  color.target = 1;
  color.setAsAttribute("color");
  
  // ScaleBlock
  var Scale1 = new BABYLON.ScaleBlock("Scale");
  Scale1.visibleInInspector = false;
  Scale1.visibleOnFrame = false;
  Scale1.target = 4;
  
  // InputBlock
  var FactorDirt = new BABYLON.InputBlock("FactorDirt");
  FactorDirt.visibleInInspector = false;
  FactorDirt.visibleOnFrame = false;
  FactorDirt.target = 1;
  FactorDirt.value = 0;
  FactorDirt.min = 0;
  FactorDirt.max = 1;
  FactorDirt.isBoolean = false;
  FactorDirt.matrixMode = 0;
  FactorDirt.animationType = BABYLON.AnimatedInputBlockTypes.None;
  FactorDirt.isConstant = false;
  
  // ScaleBlock
  var Scale2 = new BABYLON.ScaleBlock("Scale");
  Scale2.visibleInInspector = false;
  Scale2.visibleOnFrame = false;
  Scale2.target = 4;
  
  // InputBlock
  var FactorEdges = new BABYLON.InputBlock("FactorEdges");
  FactorEdges.visibleInInspector = true;
  FactorEdges.visibleOnFrame = false;
  FactorEdges.target = 1;
  FactorEdges.value = 1.26;
  FactorEdges.min = 0;
  FactorEdges.max = 2;
  FactorEdges.isBoolean = false;
  FactorEdges.matrixMode = 0;
  FactorEdges.animationType = BABYLON.AnimatedInputBlockTypes.None;
  FactorEdges.isConstant = false;
  
  // ScaleBlock
  var Scale3 = new BABYLON.ScaleBlock("Scale");
  Scale3.visibleInInspector = false;
  Scale3.visibleOnFrame = false;
  Scale3.target = 4;
  
  // LerpBlock
  var Lerp4 = new BABYLON.LerpBlock("Lerp");
  Lerp4.visibleInInspector = false;
  Lerp4.visibleOnFrame = false;
  Lerp4.target = 4;
  
  // InputBlock
  var Float1 = new BABYLON.InputBlock("Float");
  Float1.visibleInInspector = false;
  Float1.visibleOnFrame = false;
  Float1.target = 1;
  Float1.value = 1;
  Float1.min = 0;
  Float1.max = 0;
  Float1.isBoolean = false;
  Float1.matrixMode = 0;
  Float1.animationType = BABYLON.AnimatedInputBlockTypes.None;
  Float1.isConstant = true;
  
  // InputBlock
  var AOValue = new BABYLON.InputBlock("AOValue");
  AOValue.visibleInInspector = false;
  AOValue.visibleOnFrame = false;
  AOValue.target = 1;
  AOValue.value = 1;
  AOValue.min = 0;
  AOValue.max = 1;
  AOValue.isBoolean = false;
  AOValue.matrixMode = 0;
  AOValue.animationType = BABYLON.AnimatedInputBlockTypes.None;
  AOValue.isConstant = false;
  
  // InputBlock
  var Float2 = new BABYLON.InputBlock("Float");
  Float2.visibleInInspector = false;
  Float2.visibleOnFrame = false;
  Float2.target = 1;
  Float2.value = 1;
  Float2.min = 0;
  Float2.max = 0;
  Float2.isBoolean = false;
  Float2.matrixMode = 0;
  Float2.animationType = BABYLON.AnimatedInputBlockTypes.None;
  Float2.isConstant = false;
  
  // InputBlock
  var Float3 = new BABYLON.InputBlock("Float");
  Float3.visibleInInspector = false;
  Float3.visibleOnFrame = false;
  Float3.target = 1;
  Float3.value = 0;
  Float3.min = 0;
  Float3.max = 0;
  Float3.isBoolean = false;
  Float3.matrixMode = 0;
  Float3.animationType = BABYLON.AnimatedInputBlockTypes.None;
  Float3.isConstant = false;
  
  // InputBlock
  var Float4 = new BABYLON.InputBlock("Float");
  Float4.visibleInInspector = false;
  Float4.visibleOnFrame = false;
  Float4.target = 1;
  Float4.value = 0.46;
  Float4.min = 0;
  Float4.max = 1;
  Float4.isBoolean = false;
  Float4.matrixMode = 0;
  Float4.animationType = BABYLON.AnimatedInputBlockTypes.None;
  Float4.isConstant = false;
  
  // FragmentOutputBlock
  var FragmentOutput = new BABYLON.FragmentOutputBlock("FragmentOutput");
  FragmentOutput.visibleInInspector = false;
  FragmentOutput.visibleOnFrame = false;
  FragmentOutput.target = 2;
  FragmentOutput.convertToGammaSpace = false;
  FragmentOutput.convertToLinearSpace = false;
  FragmentOutput.useLogarithmicDepth = false;
  
  // TransformBlock
  var WorldPosViewProjectionTransform = new BABYLON.TransformBlock("WorldPos * ViewProjectionTransform");
  WorldPosViewProjectionTransform.visibleInInspector = false;
  WorldPosViewProjectionTransform.visibleOnFrame = false;
  WorldPosViewProjectionTransform.target = 1;
  WorldPosViewProjectionTransform.complementZ = 0;
  WorldPosViewProjectionTransform.complementW = 1;
  
  // InputBlock
  var ViewProjection = new BABYLON.InputBlock("ViewProjection");
  ViewProjection.visibleInInspector = false;
  ViewProjection.visibleOnFrame = false;
  ViewProjection.target = 1;
  ViewProjection.setAsSystemValue(BABYLON.NodeMaterialSystemValues.ViewProjection);
  
  // VertexOutputBlock
  var VertexOutput = new BABYLON.VertexOutputBlock("VertexOutput");
  VertexOutput.visibleInInspector = false;
  VertexOutput.visibleOnFrame = false;
  VertexOutput.target = 1;
  
  // Connections
  position.output.connectTo(WorldPos.vector);
  World.output.connectTo(WorldPos.transform);
  WorldPos.output.connectTo(WorldPosViewProjectionTransform.vector);
  ViewProjection.output.connectTo(WorldPosViewProjectionTransform.transform);
  WorldPosViewProjectionTransform.output.connectTo(VertexOutput.vector);
  WorldPos.output.connectTo(PBRMetallicRoughness.worldPosition);
  normal.output.connectTo(Worldnormal.vector);
  World.output.connectTo(Worldnormal.transform);
  Worldnormal.output.connectTo(PBRMetallicRoughness.worldNormal);
  view.output.connectTo(PBRMetallicRoughness.view);
  cameraPosition.output.connectTo(PBRMetallicRoughness.cameraPosition);
  WorldPos.output.connectTo(Perturbnormal.worldPosition);
  Worldnormal.output.connectTo(Perturbnormal.worldNormal);
  uv.output.connectTo(Perturbnormal.uv);
  NormalColor.output.connectTo(Lerp1.left);
  uv1.output.connectTo(Scale.input);
  Float.output.connectTo(Scale.factor);
  Scale.output.connectTo(NormalDetail.uv);
  NormalDetail.rgb.connectTo(Lerp1.right);
  NormalStrength.output.connectTo(Lerp1.gradient);
  Lerp1.output.connectTo(NormalBlend.normalMap0);
  NormalColor.output.connectTo(Lerp.left);
  uv.output.connectTo(NormalTrim.uv);
  NormalTrim.rgb.connectTo(Lerp.right);
  ModelNormalStrength.output.connectTo(Lerp.gradient);
  Lerp.output.connectTo(NormalBlend.normalMap1);
  NormalBlend.output.connectTo(Perturbnormal.normalMapColor);
  Float2.output.connectTo(Perturbnormal.strength);
  Perturbnormal.output.connectTo(PBRMetallicRoughness.perturbedNormal);
  color.output.connectTo(ColorSplitter.rgba);
  ColorSplitter.rgbOut.connectTo(Lerp3.left);
  ColorSplitter.rgbOut.connectTo(Scale1.input);
  FactorDirt.output.connectTo(Scale1.factor);
  Scale1.output.connectTo(Lerp3.right);
  uv.output.connectTo(MaskTrim.uv);
  MaskTrim.g.connectTo(Lerp3.gradient);
  Lerp3.output.connectTo(Lerp2.left);
  ColorSplitter.rgbOut.connectTo(Scale2.input);
  FactorEdges.output.connectTo(Scale2.factor);
  Scale2.output.connectTo(Lerp2.right);
  MaskTrim.r.connectTo(Lerp2.gradient);
  Lerp2.output.connectTo(Scale3.input);
  MaskTrim.b.connectTo(Scale3.factor);
  Scale3.output.connectTo(PBRMetallicRoughness.baseColor);
  Float3.output.connectTo(PBRMetallicRoughness.metallic);
  Float4.output.connectTo(PBRMetallicRoughness.roughness);
  MaskTrim.b.connectTo(Lerp4.left);
  Float1.output.connectTo(Lerp4.right);
  AOValue.output.connectTo(Lerp4.gradient);
  Lerp4.output.connectTo(PBRMetallicRoughness.ambientOcc);
  PBRMetallicRoughness.lighting.connectTo(FragmentOutput.rgb);
  PBRMetallicRoughness.alpha.connectTo(FragmentOutput.a);
  
  // Output nodes
  nodeMaterial.addOutputNode(VertexOutput);
  nodeMaterial.addOutputNode(FragmentOutput);
  nodeMaterial.build();
  
  nodeMaterial.needDepthPrePass = true;
  return nodeMaterial;
}
