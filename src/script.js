import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

//Loading
const textureLoader = new THREE.TextureLoader()

const normalTexture = textureLoader.load('/textures/roughnormal.jpg')

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')


// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.TorusKnotGeometry(.7, .07, 3, 20,13,20)

const geometry2 = new THREE.TorusKnotGeometry(1, .08, 13, 20,1,20)

// Materials

const material = new THREE.MeshStandardMaterial()
material.roughness = 0.2
material.metalness = 0.7
//material.normalMap = normalTexture;

material.color = new THREE.Color("rgb(0%, 60%, 40%)")

// Mesh
const sphere = new THREE.Mesh(geometry,material)
scene.add(sphere)

const sphere2 = new THREE.Mesh(geometry2,material)
scene.add(sphere2)

// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 

document.addEventListener('mousemove',onDocumentMouseMove)
let mouseX = 0
let mouseY = 0

let TargetX = 0
let TargetY = 0

const windowHalfX =window.innerWidth/2;
const windowHalfY =window.innerHeight/2;

onDocumentMouseMove = (event) =>{
    mouseX = (event.clientX -windowHalfX)
    mouseY = (event.clientX -windowHalfY)
}
*/

/*function addstar(){
    const geometry3 = new THREE.SphereGeometry(0.25,13,13);
    const material3 = new THREE.MeshStandardMaterial({color:0xffffff})
    const star = new THREE.Mesh( geometry3.material3);

    const [x,y,z]=Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread());

    star.position.set(x,y,z);
    scene.add(star)
}

Array(200).fill().forEach(addStar)
*/
const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = .5 * elapsedTime
    sphere2.rotation.y = .7 * elapsedTime
    sphere2.rotation.x = .7 * elapsedTime
    //sphere.rotation.y +=

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()