import * as THREE from 'three'
import Experience from '../../../../../Experience'

export default class Cube {
    constructor() {
        this.Experience = new Experience()
        this.scene = this.Experience.scene
        this.time = this.Experience.time
        this.resource = this.Experience.resources
        this.mouse = this.Experience.mouse
        this.raycaster = this.Experience.raycaster

        this.setGeometry()
        this.setMaterial()
        this.setMesh()

        this.currentIntersect = null

        this.time.on('tick', () => {
            this.update()
        })

        window.addEventListener('click', () => {
            if (this.cubeIntersected)
                console.log('door one')
        })
    }

    setGeometry() {
        this.geometry = new THREE.BoxGeometry(1, 2.1, .9)
    }

    setMaterial() {
        this.material = new THREE.MeshStandardMaterial({
            color: 0x0000ff
        })
    }

    setMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.z = 6
        this.mesh.position.x = 2.05
        this.mesh.position.y = 1.05
        this.mesh.castShadow = true
        this.scene.add(this.mesh)
    }

    update() {
        const objectsToTest = [this.mesh]
        const intersects = this.raycaster.intersectObjects(objectsToTest)
        for (const object of objectsToTest) {
            object.material.color.set('#00ff00')
        }

        for (const intersect of intersects) {
            intersect.object.material.color.set('#000000')
        }

        if (intersects.length) {
            if (this.currentIntersect === null) {
                this.cubeIntersected = true
            }
            this.currentIntersect = intersects[0]
        } else {
            if (this.currentIntersect) {
                this.cubeIntersected = false
            }
            this.currentIntersect = null
        }
    }
}