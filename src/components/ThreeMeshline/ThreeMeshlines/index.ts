import * as THREE from "three";
import { Mesh, Vector3, MathUtils } from "three";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import theme from "utils/theme";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";
import { MeshLine, MeshLineMaterial, MeshLineRaycast } from "three.meshline";

interface IOptions {
  mountPoint: HTMLDivElement;
  width: number;
  height: number;
}

Math.floor(Math.random() * 16777215).toString(16);

class ThreeMeshlines {
  private renderer: THREE.WebGLRenderer;
  private composer: THREE.Composer;
  private camera: THREE.Camera;
  private cubeGroup: THREE.Group;
  private clock: THREE.Clock;
  private control: OrbitControls;
  private line: any;
  private points: any;
  private amountToAdd = 0.01;
  private lm: any;
  constructor(options: IOptions) {
    const { mountPoint, width, height } = options;

    // this is just here for reference. most of this file should be overwritten :)

    // basics
    const clock = (this.clock = new THREE.Clock());
    const scene = new THREE.Scene();
    const camera = (this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    ));
    const renderer = (this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    }));

    scene.background = new THREE.Color(theme.colors.white);
    renderer.setSize(width, height);
    camera.position.z = 9;

    // post processing support
    const composer = (this.composer = new EffectComposer(renderer));

    const renderPass = new RenderPass(scene, camera);
    renderPass.clear = false;
    composer.addPass(renderPass);

    this.control = new OrbitControls(camera, renderer.domElement);
    this.control.listenToKeyEvents(window);

    // mount to DOM
    mountPoint.appendChild(renderer.domElement);
    // VR support
    // renderer.xr.enabled = true;
    // mountPoint.appendChild( VRButton.createButton( renderer ) );

    this.addMeshes(scene);
  }

  addMeshes(scene: THREE.Scene) {
    this.points = [];
    for (var i = -10; i < 10.1; i += 0.1) {
      this.points.push([i, Math.sin(i), 0]);
    }

    this.line = new MeshLine();
    this.line.setPoints(this.points.flat());

    const lineMaterial = (this.lm = new MeshLineMaterial({
      color: new THREE.Color(0xffff00),
      lineWidth: 0.1
    }));
    lineMaterial.transparent = true;
    const lineMesh = new THREE.Mesh(this.line, lineMaterial);

    scene.add(lineMesh);
  }

  resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    const needResize = canvas.width !== width || canvas.height !== height;

    if (needResize) {
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // use 2x pixel ratio at max
    }

    return needResize;
  }

  public setAnimationLoop(callback: Function): void {
    setInterval(() => {
      this.amountToAdd *= -1;
    }, 2000);

    this.renderer.setAnimationLoop(callback);
  }

  render() {
    // check if we need to resize the canvas and re-setup the camera
    if (this.resizeRendererToDisplaySize(this.renderer)) {
      const canvas = this.renderer.domElement;
      this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
      this.camera.updateProjectionMatrix();
    }

    this.points = this.points.map((point) => [
      point[0],
      point[1] * (1 + this.amountToAdd),
      point[2]
    ]);
    this.line.setPoints(this.points.flat());
    this.lm.color.setHex(Math.floor(Math.random() * 16777215));
    this.composer.render();
  }
}

export default ThreeMeshlines;
