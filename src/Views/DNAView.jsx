import React, { useEffect, useRef } from "react";
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

const MOBILE_OPACITY = 0.13
const DESKTOP_OPACITY = 0.14


export default function Dna(props) {
  const height = props.view=="desktop"?1080:400
  var camera, renderer, scene, dnaModel;
  const mouse = new THREE.Vector2(500, 500);
  var windowHalf = new THREE.Vector2(window.innerWidth / 2, height / 2);
  const container = useRef()


  useEffect(() => {
    //Add event listeners
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onMouseMove, false);

    //Setup Camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / height, 0.01, 2000);
    camera.position.z = 1;

    //Setup Scene
    scene = new THREE.Scene();
    const color = 0xFFFFFF;
    const density = 0.005;
    scene.fog = new THREE.FogExp2(color, density);
    //Setup Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, height);
    container.current.appendChild(renderer.domElement);

    //Setup Lighting
    const ambientLight = new THREE.AmbientLight(0x888888);
    scene.add(ambientLight);

    const pointLight = new THREE.DirectionalLight(0x888888);
    camera.add(pointLight);
    scene.add(camera);

    const fbxLoader = new FBXLoader()
    fbxLoader.load(
      "dna-testt.fbx",
      (object) => {
        //Adjust scale of the model
        var bbox = new THREE.Box3().setFromObject(object);
        var currentBox = new THREE.Vector3(0, 0, 0)
        var desiredBox = props.view == "desktop" ? new THREE.Vector3(10, 10, 10) : new THREE.Vector3(6, 6, 6)
        bbox.getSize(currentBox)
        object.scale.setScalar(desiredBox.divide(currentBox).x)
        const box3 = new THREE.Box3().setFromObject(object);

        //Adjust the model pivot point
        const vector = new THREE.Vector3();
        box3.getCenter(vector);
        object.rotation.x = Math.PI / 2
        object.position.set(-vector.x, props.view == "desktop" ? 25 : 13, -15);
        object.traverse(function (child) {
          if (child.isMesh) {
            child.geometry.translate(0, 1999000, 0)
            child.material = new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0 })
            child.castShadow = true;
            child.receiveShadow = true;
          }
        })
        dnaModel = object


        // Add model to scene
        scene.add(dnaModel);
      })
    animate()
  }, [])



  //Ajdust renderer and camera on window resize
  function onWindowResize() {
    camera.aspect = window.innerWidth / height;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, height);
    windowHalf = new THREE.Vector2(window.innerWidth / 2, height / 2);
  }

  //Update mouse coordinates
  function onMouseMove(event) {
    if (props.view == "desktop") {
      mouse.x = (event.clientX - windowHalf.x);
      mouse.y = (event.clientY - windowHalf.x);
    }

  }

  //Render scene
  function animate() {
    if (dnaModel) {
      dnaModel.traverse(function (child) {
        if (child.isMesh) {
          if(props.view=="desktop"){
            if (child.material.opacity < DESKTOP_OPACITY) {
              child.material.opacity += 0.001
            }
          }
          else{
            if (child.material.opacity < MOBILE_OPACITY) {
              child.material.opacity += 0.001
            }
          }
         
        }
      })
      dnaModel.rotation.z += mouse.x * 0.00002
    }
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  return (
    <div ref={container} style={{ position: "absolute", width: "100%", height: height+"px",overflow:"hidden", zIndex: 0,marginTop:props.view=="desktop"?"0px":"85px"}}></div>
  )
}