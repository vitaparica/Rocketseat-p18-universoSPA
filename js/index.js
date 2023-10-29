import { Router } from './router.js'
import Controls from './controls.js'
import Events from './events.js'

import { 
    btnHome,
    btnUniverse,
    btnExploration,
    errorScreen,
    backgroundHome,
    backgroundUniverse,
    backgroundExploration
} from "./elements.js";

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


const controls = Controls({
    btnHome,
    btnUniverse,
    btnExploration,
    errorScreen,
    backgroundHome,
    backgroundUniverse,
    backgroundExploration
})

Events({controls})