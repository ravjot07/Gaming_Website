const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64*16
canvas.height = 64*9

c.fillStyle = "white"
c.fillRect (0, 0, canvas.width, canvas.height)

const player = new Player()
const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    }
}

// const background = new sprite({
//     position : {
//         x:0,
//         y:0,
//     },
//     imgSrc : '\graphics\bg-hill ps.png'
// })

function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = "white"
    c.fillRect(0, 0, canvas.width, canvas.height)

    // background.update()

    player.velocity.x = 0
    if (keys.d.pressed) player.velocity.x = 5
    else if (keys.a.pressed) player.velocity.x = -5

    player.draw()
    player.update()
}

animate()