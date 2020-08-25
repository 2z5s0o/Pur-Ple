controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
info.onLifeZero(function () {
    if (info.score() >= info.highScore()) {
        game.over(true)
    } else {
        scene.cameraShake(4, 500)
        game.over(false)
    }
})
let yummy = 0
info.setLife(1)
let hide = 0
let Random_ReD = 0
scene.setBackgroundImage(img`
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    a a a a c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a 
    a a a a a a c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a 
    a a a a a a a a a c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a 
    a a a a a a a a a a c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c a a a a a a a a a a a a a a c c c c c c c 
    a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c 
    a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c a a a a a a a a a a c c c c c c c c c c c c c 
    a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c a a a a a a a a a a c c c c c c c c c c c c c c 
    a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c a a a a a a a a a a a c c c c c c c c c c c c c c c 
    a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c c c c 
    a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c c c c c 
    a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a c c c c c c c c c c c c c c c a a a a a a a a a a a a a c c c c c c c c c c c c c c c c 
    a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c 
    a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c 
    a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c 
    a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c a a 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c a a a a 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c a a a a a 
    c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    c c c c a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    c c c c c c a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    c c c c c c c a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    c c c c c c c a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    c c c c c c a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c a a a a c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    c c c c c c a a a a a a a a c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
    c c c c c c a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c a a a a a a a a a a a a a a a a a a 
    c c c c c a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a 
    c c c c c a a a a a a a c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c a a a a a a a a a a a a a a 
    c c c c a a a a a a a c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a 
    c c c a a a a a a a a c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a 
    c c a a a a a a a a c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a 
    a a a a a a a a a c c c c c c c c c c c c c c c a a a a a a a a a a a c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a 
    a a a a a a a a c c c c c c c c c c c c c c c a a a a a a a a a a c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a 
    a a a a a a a c c c c c c c c c c c c c c c c a a a a a a a a a c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    a a a a a a c c c c c c c c c c c c c c c c a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    a a a a a c c c c c c c c c c c c c c c c a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    a a a c c c c c c c c c c c c c c c c c c a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    a c c c c c c c c c c c c c c c c c c c a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c a a a a a a a c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c a a a a a a a c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c a a a a a a a c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c a a a a a a a c c c c c c c c c c c c c c a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c a a a a a a a a c c c c c c c c c c a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c 
    c c c a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c 
    c a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a c c c a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c 
    a a a a a a a a a a a a c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a c c c c c c c c a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c 
    a a a a a a a a a a a a c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c 
    a a a a a a a a a a a a a c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c 
    a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c 
    c a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c 
    c a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c 
    c c a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c 
    c c c a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c 
    c c c c a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c 
    c c c c c a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c 
    c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c 
    c c c c c c c c a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c 
    c c c c c c c c c c c a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c 
    c c c c c c c c c c c c c c a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c 
    a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c 
    a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c 
    a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c a 
    a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a 
    a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c a a a 
    a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a 
    a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a 
    c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a 
    c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a c 
    c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a c c 
    c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c 
    `)
let YelLow = sprites.create(img`
    . 4 4 4 . . 4 4 4 4 4 . . . . . . 
    . 4 d 5 4 4 5 5 5 5 5 4 4 . . . . 
    . e 4 5 5 5 1 5 4 4 4 5 5 4 . . . 
    . . e 5 5 5 5 4 1 f a 4 1 5 4 . . 
    . . e d 5 5 5 4 1 f f 4 1 1 5 4 . 
    . e 4 d 5 5 5 4 1 1 1 4 5 1 5 4 . 
    . e 4 4 5 5 5 5 4 4 4 5 5 5 5 5 4 
    . c e 4 4 4 5 5 5 5 5 5 5 5 1 5 4 
    . c 4 1 f a 4 5 5 5 5 5 5 5 5 5 4 
    . c 4 1 f f 4 d 5 5 5 5 5 5 5 5 4 
    . . c 1 1 1 4 4 d d 5 5 5 5 5 4 4 
    . . c 4 4 4 4 4 4 d d d 5 5 5 4 e 
    . . . c e e 4 4 4 4 4 d d 5 5 5 e 
    . . . . c e e e 4 4 4 4 4 d d 5 c 
    . . . . . c c e e e e 4 4 4 4 4 c 
    . . . . . . . c c c c c c c c c . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let ReD = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
YelLow.setPosition(80, 80)
ReD.setPosition(randint(10, scene.screenWidth() - 10), randint(10, scene.screenHeight() - 10))
let PurPle = sprites.create(img`
    . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . 
    . . . . . . . . . . f f c a a a a c f f . . . . . . . . . . 
    . . . . . . . . f f c a a a a a a a a c f f . . . . . . . . 
    . . . . . . . f c a a a a a a a a a a a a c f . . . . . . . 
    . . . . . . f c a a a a a a a a a a a a a a c f . . . . . . 
    . . . . . . f c a f f 1 1 a a a a f f 1 1 a a f . . . . . . 
    . . . . . f c a a f f f 1 a a a a f f f 1 a a c f . . . . . 
    . . . . . f c a a f f f f a a a a f f f f a a c f . . . . . 
    . . . . . f a a a f f f f a a a a f f f f a a a f . . . . . 
    . . . . f c a a a a a a a a a a a a a a a a a a c f . . . . 
    . . . . f a a a c a a a a a a a a a a a a c a a a f . . . . 
    . . . . f c a a c c a f f f f f f f f a c c a a c f . . . . 
    . . . . f c a a a c a f f f f f f f f a c a a a c f . . . . 
    . . . f c c c a a a a f f f f f f f f a a a a c c c f . . . 
    . . f a c c c a a a a f f f f f f f f a a a a c c c a f . . 
    . . f c a a c c a a a a f f f f f f a a a a c c a a c f . . 
    . . . f c a a a c c a a a a a a a a a a c c a a a c f . . . 
    . . . . f f c c a a a a a a a a a a a a a a c c f f . . . . 
    . . . . . . f f f f c c c a a a a c c c f f f f . . . . . . 
    . . . . . . . . . . f f f f f f f f f f . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(PurPle)
PurPle.setFlag(SpriteFlag.StayInScreen, true)
game.setDialogTextColor(10)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c c c c c . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c c c c a a c c c c c . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c c c a a 7 5 5 5 a a c c c c . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c c a a 7 7 7 7 7 5 5 5 a a c c c . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c c a a 7 7 7 7 7 7 7 7 5 5 a a c c c . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c a a 7 7 7 f 1 1 1 1 7 7 5 5 a a c c . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . c c a a a 7 7 f 1 f f f f 1 7 7 5 a a a c c . 
    f f f f f . . . . . . . . . . . . . . . . . . . . . . c c a a 7 7 7 f 1 7 7 7 f 1 7 7 5 5 a a c c . 
    f 1 1 1 f f . . . . . . . . . . . . . . . . . . . . . c a a a 7 7 7 f 1 7 7 7 f 1 7 7 7 5 a a a c . 
    f 1 f f 1 f . . . . . . . . . f f f f f f f f f f . c c a a f 7 7 7 f 1 1 1 1 1 1 7 7 7 5 f a a c c 
    f 1 f f 1 f f f . . f f f f f f 1 1 1 f f 1 1 1 f . c c a a f 7 7 7 f 1 f f f f 1 7 7 7 7 f a a c c 
    f 1 f f 1 f 1 f f f f 1 1 f f 1 f f f f 1 f f f f . c a a a f 6 7 7 f 1 7 7 7 f 1 7 7 7 6 f a a a c 
    f 1 1 1 f f 1 1 1 f 1 f f 1 f 1 1 1 f f 1 1 1 f f . c a a a f 6 7 7 f 1 7 7 7 f 1 7 7 7 6 f a a a c 
    f 1 f f f f 1 f f f 1 1 1 1 f f f f 1 f f f f 1 f . c c a a f 6 6 7 f f 7 7 7 f f 7 7 6 6 f a a c c 
    f 1 f . . f 1 f . f 1 f f f f f f f 1 f f f f 1 f . c c a a f f 6 6 7 7 7 7 7 7 7 7 6 6 f f a a c c 
    f 1 f . . f 1 f . f f 1 1 1 f 1 1 1 f f 1 1 1 f f . . c a a a f 6 6 6 6 7 7 7 7 6 6 6 6 f a a a c . 
    f f f . . f f f . . f f f f f f f f f f f f f f . . . c c a a f f 6 6 6 6 6 6 6 6 6 6 f f a a c c . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . c c a a a f f 6 6 6 6 6 6 6 6 f f a a a c c . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c a a a f f f 6 6 6 6 f f f a a a c c . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c c a a a a f f f f f f a a a a c c c . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c c a a a a a a a a a a a a c c c . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c c c a a a a a a a a c c c c . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c c c c a a c c c c c . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c c c c c . . . . . . . . . 
    `)
game.setDialogFrame(img`
    . . . 1 . . . 9 . . . . . f . 
    f 3 3 1 3 1 1 3 3 3 3 9 f f . 
    . f 9 . f f 9 5 f . . 3 3 3 f 
    . 3 1 4 4 5 5 5 f 1 1 3 5 9 f 
    . 1 1 3 5 4 4 9 4 4 3 5 1 5 f 
    3 9 3 5 5 5 1 5 4 4 5 5 1 5 f 
    3 1 3 9 3 3 4 4 3 5 9 5 9 5 f 
    1 1 4 4 4 1 5 5 3 3 3 5 5 5 f 
    . 4 5 3 5 5 5 5 5 5 5 9 3 3 f 
    4 4 1 9 4 4 3 3 3 1 3 3 3 3 3 
    . . f 5 5 4 f 9 . f 5 3 5 5 3 
    . . f f f 4 . . . . 3 f f 3 f 
    . . . . . 4 . 1 3 3 . 3 3 f . 
    . . 1 . . 4 4 3 . 3 9 . . . . 
    . . . . . . 3 4 4 4 4 4 4 . . 
    `)
let Blizzz = 1
forever(function () {
    if (info.score() > 0) {
        pause(4000 / info.score())
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (Blizzz == 1) {
        effects.blizzard.startScreenEffect()
        pause(1500)
        effects.blizzard.endScreenEffect()
        Blizzz = 0
    }
})
forever(function () {
    if (yummy == 1) {
        music.pewPew.playUntilDone()
        yummy = 0
    }
})
forever(function () {
    if (hide == 0) {
        if (PurPle.overlapsWith(YelLow)) {
            info.changeScoreBy(1)
            info.changeLifeBy(5)
            YelLow.startEffect(effects.ashes)
            PurPle.startEffect(effects.spray)
            yummy = 1
            if (randint(0, 100) <= 20) {
                hide = 1
                Random_ReD = randint(1, 2)
                ReD.setPosition(randint(10, scene.screenWidth() - 10), randint(10, scene.screenHeight() - 10))
            }
            pause(200)
            effects.clearParticles(YelLow)
            effects.clearParticles(PurPle)
            YelLow.setPosition(randint(10, scene.screenWidth() - 10), randint(10, scene.screenHeight() - 10))
        }
    }
})
forever(function () {
    if (hide == 1) {
        if (PurPle.overlapsWith(ReD)) {
            info.changeScoreBy(3)
            info.changeLifeBy(3)
            ReD.startEffect(effects.ashes)
            PurPle.startEffect(effects.spray)
            yummy = 1
            Random_ReD = 0
            YelLow.setPosition(randint(10, scene.screenWidth() - 10), randint(10, scene.screenHeight() - 10))
            hide = 0
            pause(350)
            effects.clearParticles(ReD)
            effects.clearParticles(PurPle)
        }
    }
})
forever(function () {
    if (hide == 1) {
        YelLow.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
forever(function () {
    if (Random_ReD == 0) {
        ReD.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
forever(function () {
    if (hide == 0) {
        YelLow.setImage(img`
            . 4 4 4 . . 4 4 4 4 4 . . . . . . 
            . 4 d 5 4 4 5 5 5 5 5 4 4 . . . . 
            . e 4 5 5 5 1 5 4 4 4 5 5 4 . . . 
            . . e 5 5 5 5 4 1 f a 4 1 5 4 . . 
            . . e d 5 5 5 4 1 f f 4 1 1 5 4 . 
            . e 4 d 5 5 5 4 1 1 1 4 5 1 5 4 . 
            . e 4 4 5 5 5 5 4 4 4 5 5 5 5 5 4 
            . c e 4 4 4 5 5 5 5 5 5 5 5 1 5 4 
            . c 4 1 f a 4 5 5 5 5 5 5 5 5 5 4 
            . c 4 1 f f 4 d 5 5 5 5 5 5 5 5 4 
            . . c 1 1 1 4 4 d d 5 5 5 5 5 4 4 
            . . c 4 4 4 4 4 4 d d d 5 5 5 4 e 
            . . . c e e 4 4 4 4 4 d d 5 5 5 e 
            . . . . c e e e 4 4 4 4 4 d d 5 c 
            . . . . . c c e e e e 4 4 4 4 4 c 
            . . . . . . . c c c c c c c c c . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `)
    }
})
forever(function () {
    if (Random_ReD == 1) {
        ReD.setImage(img`
            . . . . . . . . . . . . . . . c 7 5 5 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . c 7 7 7 7 . . . . . . . . . . . . . 
            . . . . . . . . c e e e e . c 7 7 7 . e e e e e . . . . . . . . 
            . . . . . . c e e e e e e e c 6 7 7 e e e e e e e e . . . . . . 
            . . . . . c e e e e e e e e c 6 6 6 e e e 2 2 2 2 e e . . . . . 
            . . . . c e e e e e e e e e e c c e e e 2 2 2 2 2 2 e e . . . . 
            . . . c c e e e e e e 2 2 2 e e e e 2 2 2 2 2 2 2 2 2 e e . . . 
            . . . c e e e e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 2 2 2 2 e . . . 
            . . c c e e 2 2 2 2 4 4 2 2 2 2 2 2 2 2 2 4 4 5 4 4 2 2 e e . . 
            . . c c e 2 2 2 4 4 4 4 4 2 2 2 2 2 2 4 4 4 5 5 5 4 4 2 2 e . . 
            . . c e f f f f f f f f f f e f f e f f f f f f f f f f 2 e . . 
            . c f f f f f f f f 1 f f f f e e f f f f f f f 1 f f f f f e . 
            . f c e f f f f f f f 1 f f e e e e f f f f f f f 1 f f 2 2 f . 
            . c c e e f f f f f f f f 2 2 2 e e e f f f f f f f f 2 2 2 e . 
            . c e e e f f f f f f f f 2 2 2 2 2 e f f f f f f f f 2 2 2 e . 
            . c e e e e f f f f f f 2 2 2 2 2 2 2 e f f f f f f 2 2 2 2 e . 
            c c e e e e e e e e e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e 
            c c e e e e e e e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c c e e e e e 2 2 2 2 2 2 f f f f f f 2 2 2 2 2 2 2 2 4 2 2 2 e 
            c c e e e e 2 2 2 2 2 2 f f f f f f f f f 2 2 2 2 2 2 4 2 2 e e 
            c c e e e e e e 2 2 2 2 2 2 2 2 2 f f f f f 2 2 2 2 2 4 2 2 e e 
            . c c e e e e e e 2 2 2 2 2 2 2 2 2 2 2 f f 2 2 2 2 4 4 2 2 e . 
            . c c e e e e e e 2 2 2 2 2 e e e e 2 2 2 2 2 2 2 2 4 2 2 e e . 
            . c c e e e e e e 2 2 2 2 e e e e e e 2 2 2 2 2 2 4 4 2 2 e e . 
            . . c c e e e e e e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 2 2 e e . . 
            . . c c e e e e e e 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 2 2 2 e e . . 
            . . . c c e e e e e e 2 2 2 2 2 2 2 2 2 2 2 4 4 2 2 2 e e . . . 
            . . . c c e e e e e e 2 2 2 2 2 2 2 2 2 2 4 4 2 2 2 e e e . . . 
            . . . . c c e e e e e e 2 2 2 2 2 2 2 4 4 2 2 2 2 e e e . . . . 
            . . . . . c c c e e e e e 2 2 2 4 4 4 2 2 2 2 2 e e e . . . . . 
            . . . . . . c c c c e e e e e 2 2 2 2 2 2 2 e e e e . . . . . . 
            . . . . . . . . c c c c c c e e e e e e e e e e . . . . . . . . 
            `)
    } else if (Random_ReD == 2) {
        ReD.setImage(img`
            . . . . . . . . c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e e 2 e e . . 
            . c e e e e e c 6 e 2 2 2 2 e . 
            . c e e 2 2 e c c 2 2 4 4 2 e . 
            c e e 2 4 4 2 2 2 2 4 5 5 4 2 e 
            c e f f f 1 f 2 2 f f f 1 f 2 e 
            c e f f d f f 2 2 f f d f f 2 e 
            c e e f f f 2 2 2 2 f f f 2 2 e 
            c e 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 f f f f 2 2 2 4 2 e 
            . c e e e 2 2 2 2 2 2 2 2 4 e . 
            . c e e e 2 2 e e 2 2 2 4 2 e . 
            . . c e e e 2 2 2 2 4 4 2 e . . 
            . . . c c e e 4 4 4 2 e e . . . 
            . . . . . c c e e e e . . . . . 
            `)
    }
})
