import * as THREE from 'three'
import Experience from './Experience.js'

export default class Raycaster {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas

        this.setInstance()
    }

    setInstance() {
        this.instance = new THREE.Raycaster()
    }
}