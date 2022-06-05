document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')

    let doodlerLeftSpace = 50
    let doodlerBottomSpace = 150
    let isGameOver = false


    // creates doodle
    function createDoodler() {
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left = doodlerLeftSpace + 'px'
        doodler.style.bottom = doodlerBottomSpace + 'px'
    }
    createDoodler()

    // start game function
    function start() {
        if (!isGameOver) {
            createDoodler()
        }
    }
    start()
})