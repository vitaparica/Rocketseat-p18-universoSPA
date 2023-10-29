import {
    btnHome,
    btnUniverse,
    btnExploration,
    errorScreen
} from "./elements.js"

export default function({controls}) {
    btnHome.addEventListener('click', function() {
        controls.clickHome()
    })

    btnUniverse.addEventListener('click', function() {
        controls.clickUniverse()
    })

    btnExploration.addEventListener('click', function() {
        controls.clickExploration()
    })

    errorScreen.addEventListener('click', function() {
        controls.clickError404()
    })
}