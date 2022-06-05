document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')

    let doodlerLeftSpace = 50
    let doodlerBottomSpace = 150
    let isGameOver = false
    let platformCount = 5
    let platforms = []
    let upTimerId 
    let downTimerId


    // creates doodle
    function createDoodler() {
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodlerLeftSpace = platforms[0].left
        doodler.style.left = doodlerLeftSpace + 'px'
        doodler.style.bottom = doodlerBottomSpace + 'px'
    }
    createDoodler()

    class Platform{
        constructor(platformBottom){
            this.bottom = platformBottom
            this.left = Math.random() * 315
            this.visual = document.createElement('div')

            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left = this.left + 'px'
            visual.style.bottom = this.bottom + 'px'
            grid.appendChild(visual)
        }
    }
    // creates platforms
    function createPlatform() {
        for (let i = 0; i < platformCount; i++){
            let platformGap = 600 / platformCount
            let platformBottom = 100 + i * platformGap
            let newplatform = new Platform(platformBottom)
            platforms.push(newplatform)
        }
    }
// moves platforms down when doodle moves 200px up
    function movePlatforms() {
        if(doodlerBottomSpace > 200) {
            platforms.forEach(platform => {
                platform.bottom -=4
                let visual = platform.visual
                visual.style.bottom = platform.bottom + 'px'
            })
        }
    }

    function jump(){
        clearInterval(downTimerId)
        upTimerId = setInterval( function (){
            doodlerBottomSpace += 20
            doodler.style.bottom = doodlerBottomSpace + 'px'
            if (doodlerBottomSpace> 350) {
                fall()
            }
        },30)
    }

    function fall() {
        clearInterval(upTimerId)
        downTimerId = setInterval( function(){
            doodlerBottomSpace -= 5
            doodler.style.bottom = doodlerBottomSpace + 'px'
            if (doodlerBottomSpace <= 0) {
                gameOver()
            }
        },30)
    }
    // start game function
    function start() {
        if (!isGameOver) {
            createPlatform()
            createDoodler()
            setInterval(movePlatforms,30)
            jump()
        }
    }

    function gameOver() {
        console.log("gameover");
        isGameOver = true
        clearInterval(upTimerId)
        clearInterval(downTimerId)
    }
    start()
})