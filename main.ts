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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    info.changeLifeBy(5)
    YellOw.setPosition(randint(10, scene.screenWidth() - 10), randint(10, scene.screenHeight() - 10))
    PurPle.startEffect(effects.spray)
    YellOw.startEffect(effects.ashes)
    yummy = 1
    pause(200)
    effects.clearParticles(PurPle)
    effects.clearParticles(YellOw)
})
let yummy = 0
let PurPle: Sprite = null
let YellOw: Sprite = null
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
    a a a a c c c c c c c c c c c c c c c c c a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    a c c c c c c c c c c c c c c c c c c c a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c a a a a a a a c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c a a a a a a a c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c a a a a a a a c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c a a a a a a a c c c c c c c c c c c c c c a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c a a a a a a a a c c c c c c c c c c a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a c c c a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a c c c c c c c c a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
    `)
YellOw = sprites.create(img`
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
YellOw.setPosition(80, 80)
PurPle = sprites.create(img`
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
info.setLife(1)
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
effects.blizzard.startScreenEffect()
pause(1500)
effects.blizzard.endScreenEffect()
forever(function () {
    if (info.score() > 0) {
        pause(4000 / info.score())
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (yummy == 1) {
        music.pewPew.playUntilDone()
        yummy = 0
    }
})
