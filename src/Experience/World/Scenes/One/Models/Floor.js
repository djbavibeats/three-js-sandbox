import * as THREE from 'three'
import Experience from "../../../../Experience"

import grassVertexShader from '../shaders/grass/vertex.glsl'
import grassFragmentShader from '../shaders/grass/fragment.glsl'

export default class Floor {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setGeometry()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry() {
        this.geometry = new THREE.PlaneGeometry(3.5, 15)
    }


    setMaterial() {
        this.material = new THREE.ShaderMaterial({
            vertexShader: grassVertexShader,
            fragmentShader: grassFragmentShader,

        })
    }

    setMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.rotation.x = - Math.PI * 0.5
        this.mesh.receiveShadow = true
        this.scene.add(this.mesh)
    }
}