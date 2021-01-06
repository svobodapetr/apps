window.onload = () => {

    document.addEventListener('mousemove', addCursorLight)
    document.addEventListener('touchmove', addCursorLight)

};

function addCursorLight(e) {

    let x = e.clientX
    let y = e.clientY

    document.documentElement.style.setProperty('--cursorX', `${x}px`)
    document.documentElement.style.setProperty('--cursorY', `${y}px`)

}