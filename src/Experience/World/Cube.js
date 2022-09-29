import * as THREE from 'three'
import Experience from '../Experience'

export default class Cube {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        
        this.setGeometry()
        this.setMaterial()
        this.setMesh()
    }
    setGeometry() {
        this.geometry = new THREE.BoxGeometry(5, 5)
    }

    setMaterial() {
        this.material = new THREE.MeshStandardMaterial({ color: 0xff0000 })
    }

    setMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.rotation.x = - Math.PI * 0.5
        this.mesh.receiveShadow = true
        this.scene.add(this.mesh)

    }
}