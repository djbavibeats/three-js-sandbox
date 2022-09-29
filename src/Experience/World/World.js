import Experience from '../Experience.js'
import Cube from './Cube.js'
import Environment from './Environment.js'

export default class World {
    constructor() {
        this.experience = new Experience
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () => {
            // Setup
            this.cube = new Cube()
            this.environment = new Environment()
        })
    }

    update() {
    }
}