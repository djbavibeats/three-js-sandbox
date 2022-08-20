import * as THREE from 'three'
import Experience from '../../../Experience'
import Environment from '../../Environment'

/**
 * Model Imports
 */
import Floor from './Models/Floor.js'
import Cube from './Models/Cube.js'

export default class SceneTwo {
    constructor() {
        this.experience = new Experience
        this.scene = this.experience.scene
        
        this.cube = new Cube()
        this.floor = new Floor()
    }
}