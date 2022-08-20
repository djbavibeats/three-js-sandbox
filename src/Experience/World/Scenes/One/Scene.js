import * as THREE from 'three'
import Experience from '../../../Experience'
import Environment from '../../Environment'

/**
 * Model Imports
 */
import Floor from './Models/Floor.js'
import DoorOne from './Models/Doors/DoorOne.js'
import DoorTwo from './Models/Doors/DoorTwo.js'
import DoorThree from './Models/Doors/DoorThree.js'
import DoorFour from './Models/Doors/DoorFour.js'
import DoorFive from './Models/Doors/DoorFive.js'
import DoorSix from './Models/Doors/DoorSix.js'


export default class SceneOne {
    constructor() {
        this.experience = new Experience
        this.scene = this.experience.scene
        
        this.doorOne = new DoorOne()
        this.doorTwo = new DoorTwo()
        this.doorThree = new DoorThree()
        this.doorFour = new DoorFour()
        this.doorFive = new DoorFive()
        this.doorSix = new DoorSix()
        this.floor = new Floor()
    }
}