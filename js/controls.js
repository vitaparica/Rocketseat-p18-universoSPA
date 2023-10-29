import {
    btnHome,
    btnUniverse,
    btnExploration,
    backgroundHome,
    backgroundUniverse,
    backgroundExploration } from './elements.js'

export default function Controls() {

    function clickHome() {
        backgroundHome.classList.remove('hide')
        backgroundUniverse.classList.add('hide')
        backgroundExploration.classList.add('hide')
        btnHome.classList.add('hover-on')
        btnUniverse.classList.remove('hover-on')
        btnExploration.classList.remove('hover-on')
    }
    
    function clickUniverse() {
        backgroundHome.classList.add('hide')
        backgroundUniverse.classList.remove('hide')
        backgroundExploration.classList.add('hide')
        btnUniverse.classList.add('hover-on')
        btnExploration.classList.remove('hover-on')
        btnHome.classList.remove('hover-on')
    }
    
    function clickExploration() {
        backgroundHome.classList.add('hide')
        backgroundUniverse.classList.add('hide')
        backgroundExploration.classList.remove('hide')
        btnExploration.classList.add('hover-on')
        btnUniverse.classList.remove('hover-on')
        btnHome.classList.remove('hover-on')
    }

    function clickError404() {
        window.location.href = "/"
    }

    return {
        clickHome,
        clickUniverse,
        clickExploration,
        clickError404
    }
}