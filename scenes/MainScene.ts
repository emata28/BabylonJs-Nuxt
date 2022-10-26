import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  Light,
  SceneLoader,
} from 'babylonjs'

import 'babylonjs-loaders'

let canvas: HTMLCanvasElement
let engine: Engine
let scene: Scene
let camera: ArcRotateCamera

let lights: [Light]

const CreateScene = (canvasRef: HTMLCanvasElement) => {
  canvas = canvasRef

  engine = new Engine(canvas)
  scene = new Scene(engine)
}

const AddCamera = () => {
  camera = new ArcRotateCamera('camera1', 0, 0, 10, new Vector3(0, 5, 0), scene)
  camera.setTarget(Vector3.Zero())

  camera.attachControl(canvas, true)
}

const AddLights = () => {
  const light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene)
  light.intensity = 0.7

  if (lights) {
    lights.push(light)
  } else {
    lights = [light]
  }
}

const loadModels = () => {
  SceneLoader.ImportMesh('', 'glb/', 'red_01.glb', scene, (newMeshes) => {
    camera.target = newMeshes[0].getAbsolutePosition()
  })

  MeshBuilder.CreateGround(
    'ground1',
    { width: 6, height: 6, subdivisions: 2 },
    scene
  )
}

const startRendering = () => {
  engine.runRenderLoop(() => {
    scene.render()
  })
}

export default { CreateScene, AddCamera, AddLights, loadModels, startRendering }
