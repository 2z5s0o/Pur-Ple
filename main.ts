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
let random = 0
let yummy = 0
info.setLife(1)
let fruit = 0
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccaaaaaaccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccaaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccaaaaaaaaaaaaacccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccaaaaaaaaaaaaaaaaccccccccccccccaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccaaaaaaaaaaaaaaaaaacccccccccccccaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaccccccccccccccaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccc
    aaaaccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccaaaaaaaacccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccaaaaaaaaa
    aaaaaaccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccaaaaaaaaaaaaa
    aaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccaaaaaaaaaaaaaaaa
    aaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccaaaaaaaaaaaaaaccccccc
    aaaaaaaaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccaaaaaaaaaaaacccccccccc
    aaaaaaaaaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccaaaaaaaaaaccccccccccccc
    aaaaaaaaaaaaaaaccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccaaaaaaaaaaccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccaaaaaaaaaacccccccccccccc
    aaaaaaaaaaaaaaaaccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccaaaaaaaaaaaccccccccccccccc
    aaaaaaaaaaaaaaaacccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaccccccccccccaaaaaaaaaaaaccccccccccccccc
    aaaaaaaaaaaaaaaaccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaaacccccccccccccaaaaaaaaaaaacccccccccccccccc
    aaaaaaaaaaaaaaacccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaacccccccccccccccaaaaaaaaaaaaacccccccccccccccc
    aaaaaaaaaaaaaaccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccaaaaaaacccccccccccccccccaaaaaaaaaaaaaacccccccccccccccc
    aaaaaaaaaccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaacccccccccccccccc
    aaaccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaacccccccccccccccc
    accccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaacccccccccccccccc
    cccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaacccccccccccccccc
    cccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaacccccccccccccccc
    cccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccaaaaaaaaaaaaaaaaacccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccc
    ccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccaa
    cccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccaaaa
    ccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccaaaaa
    cccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    ccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    ccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    ccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    ccccaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    ccccccaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    ccccccaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccaaaaaaaaacccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    ccccccaaaaaaaaacccccccccccccccccccccccaaaacccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    ccccccaaaaaaaaccccccccccccccccccccaaaaaaaaaaaaccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    ccccccaaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccaaaaaaaaaaaaaaaaaa
    cccccaaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccaaaaaaaaaaaaaaaa
    cccccaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccaaaaaaaaaaaaaa
    ccccaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccaaaaaaaaaaa
    cccaaaaaaaacccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccaaaaaaaa
    ccaaaaaaaacccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccaaaaaa
    aaaaaaaaacccccccccccccccaaaaaaaaaaaccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccaaaa
    aaaaaaaacccccccccccccccaaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccaa
    aaaaaaaccccccccccccccccaaaaaaaaaccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccc
    aaaaaaccccccccccccccccaaaaaaaaccccccccccccccccccccccaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccc
    aaaaaccccccccccccccccaaaaaaaacccccccccccccccccccccccaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccccccccccccccccccccccccccccccc
    aaaccccccccccccccccccaaaaaaaccccccccccccccccccccccccaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccaaaaaccccccccccccccccccccccccccccccccccccccccc
    acccccccccccccccccccaaaaaaaacccccccccccccccccccccccaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccaaaaaaacccccccccccccccccccccccaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccaaaaaaacccccccccccccccccccccaaaaaaaaaaaaaccccccccccccccccccccccccccaaaacccccccccccccccccccccccccccccccccccccccccccccccccaaaacccccccccccccccc
    ccccccccccccccccccccaaaaaaaccccccccccccccccccccaaaaaaaaaaaaccccccccccccccccccccccccaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccaaaaaaaacccccccccccccc
    ccccccccccccccccccccaaaaaaaccccccccccccccccccaaaaaaaaaaaaaccccccccccccccccccccccaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaacccccccccccc
    ccccccccccccccccccccaaaaaacccccccccccccccccaaaaaaaaaaaacccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaccccccccccc
    ccccccccccccccccccccaaaaaaaccccccccccccccaaaaaaaaaaaaaccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaacccccccccc
    ccccccccccccccccccccaaaaaaaaccccccccccaaaaaaaaaaaaaaacccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaacccccccccc
    ccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaccccccccc
    cccaaaaaaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaccccccccc
    caaaaaaaaaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccaaaaaaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaacccccccc
    aaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccaaaaaaaaaaaaaccccccccaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaacccccccc
    aaaaaaaaaaaaccccccccccccaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccaaaaaaaaaaaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccc
    aaaaaaaaaaaaacccccccccccccccaaaaaaaaaaaacccccccccccccccccccccccccaaaaaaaaaaaaccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccc
    aaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaacccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccc
    caaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccc
    caaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccc
    ccaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccc
    cccaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccc
    ccccaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaacccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccc
    cccccaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccc
    ccccccaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccc
    ccccccccaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaacccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccc
    cccccccccccaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccc
    ccccccccccccccaaaaccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccc
    accccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccc
    aacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaacccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccc
    aaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccca
    aaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccaa
    aaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaccccccccccccccccccccaaa
    aaaaaaaccccccccccccccccccccccccccccccccaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaa
    aaaaaaaaaacccccccccccccccccccccccccaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccaaaaaaaaaaaaaaacccccccccccccccccccccccccccaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaa
    ccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccaaaaaaaaaaaaaaaccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaa
    cccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccaaaaaaaaaaaaaaaaaaccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccaaaaaaaaaaaaaaaaaaac
    cccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccaaaaaaaaaaaaaaaaaaaaacc
    cccccccccccccccccccccccaaaaaaaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccaaaaaaaaaaaaaaaaaaaaaaaaccc
    ccccccccccccccccccccccccccaaaaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccc
    cccccccccccccccccccccccccccaaaaaaaaaaaacccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccc
    ccccccccccccccccccccccccccccaaaaaaaaaaaacccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccc
    cccccccccccccccccccccccccccccaaaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccc
    cccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccc
    cccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccc
    ccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccc
    ccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccc
    `)
let FruIt = sprites.create(img`
    .444..44444......
    .4d5445555544....
    .e455515444554...
    ..e555541fa4154..
    ..ed55541ff41154.
    .e4d555411145154.
    .e445555444555554
    .ce44455555555154
    .c41fa45555555554
    .c41ff4d555555554
    ..c11144dd5555544
    ..c444444ddd5554e
    ...cee44444dd555e
    ....ceee44444dd5c
    .....cceeee44444c
    .......ccccccccc.
    .................
    .................
    `, SpriteKind.Food)
FruIt.setPosition(80, 80)
let PurPle = sprites.create(img`
    ............ffffff............
    ..........ffcaaaacff..........
    ........ffcaaaaaaaacff........
    .......fcaaaaaaaaaaaacf.......
    ......fcaaaaaaaaaaaaaacf......
    ......fcaff11aaaaff11aaf......
    .....fcaafff1aaaafff1aacf.....
    .....fcaaffffaaaaffffaacf.....
    .....faaaffffaaaaffffaaaf.....
    ....fcaaaaaaaaaaaaaaaaaacf....
    ....faaacaaaaaaaaaaaacaaaf....
    ....fcaaccaffffffffaccaacf....
    ....fcaaacaffffffffacaaacf....
    ...fcccaaaaffffffffaaaacccf...
    ..facccaaaaffffffffaaaacccaf..
    ..fcaaccaaaaffffffaaaaccaacf..
    ...fcaaaccaaaaaaaaaaccaaacf...
    ....ffccaaaaaaaaaaaaaaccff....
    ......ffffcccaaaacccffff......
    ..........ffffffffff..........
    `, SpriteKind.Player)
controller.moveSprite(PurPle)
PurPle.setFlag(SpriteFlag.StayInScreen, true)
game.setDialogTextColor(10)
game.setDialogCursor(img`
    ...................................cccccc.........
    ................................cccccaaccccc......
    ..............................ccccaa7555aacccc....
    .............................cccaa77777555aaccc...
    ............................cccaa7777777755aaccc..
    ............................ccaa777f11117755aacc..
    ...........................ccaaa77f1ffff1775aaacc.
    fffff......................ccaa777f1777f17755aacc.
    f111ff.....................caaa777f1777f17775aaac.
    f1ff1f.........ffffffffff.ccaaf777f1111117775faacc
    f1ff1fff..ffffff111ff111f.ccaaf777f1ffff17777faacc
    f1ff1f1ffff11ff1ffff1ffff.caaaf677f1777f17776faaac
    f111ff111f1ff1f111ff111ff.caaaf677f1777f17776faaac
    f1ffff1fff1111ffff1ffff1f.ccaaf667ff777ff7766faacc
    f1f..f1f.f1fffffff1ffff1f.ccaaff667777777766ffaacc
    f1f..f1f.ff111f111ff111ff..caaaf666677776666faaac.
    fff..fff..ffffffffffffff...ccaaff6666666666ffaacc.
    ...........................ccaaaff66666666ffaaacc.
    ............................ccaaafff6666fffaaacc..
    ............................cccaaaaffffffaaaaccc..
    .............................cccaaaaaaaaaaaaccc...
    ..............................ccccaaaaaaaacccc....
    ................................cccccaaccccc......
    ...................................cccccc.........
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
    if (PurPle.overlapsWith(FruIt)) {
        if (fruit == 0) {
            info.changeScoreBy(1)
            info.changeLifeBy(5)
        } else if (fruit == 1) {
            info.changeScoreBy(3)
            info.changeLifeBy(4)
        } else if (fruit == 2) {
            info.changeScoreBy(3)
            info.changeLifeBy(3)
        } else if (fruit == 3) {
            info.changeScoreBy(0)
            info.changeLifeBy(7)
        } else if (fruit == 4) {
            info.changeScoreBy(5)
            info.changeLifeBy(0)
        } else if (fruit == 5) {
            info.changeScoreBy(10)
            info.changeLifeBy(8)
        }
        FruIt.startEffect(effects.ashes)
        PurPle.startEffect(effects.spray)
        yummy = 1
        if (fruit == 0) {
            random = randint(0, 99)
            if (random < 10) {
                fruit = 1
            } else if (random < 20) {
                fruit = 2
            } else if (random < 30) {
                fruit = 3
            } else if (random < 35) {
                fruit = 4
            } else if (random < 36) {
                fruit = 5
            } else {
                fruit = 0
            }
        } else {
            fruit = 0
        }
        FruIt.setPosition(randint(10, scene.screenWidth() - 10), randint(10, scene.screenHeight() - 10))
        pause(200)
        effects.clearParticles(FruIt)
        effects.clearParticles(PurPle)
    }
})
forever(function () {
    if (fruit == 0) {
        // Likely Lemon | Yel-Low
        FruIt.setImage(img`
            .444..44444......
            .435445555544....
            .e455515444554...
            ..e535541fa4154..
            ..e355541ff41154.
            .e43535411145154.
            .e443555444555554
            .ce44455555535154
            .c41fa45553555554
            .c41ff43555553554
            ..c11144335555544
            ..c4444443335554e
            ...cee4444433555e
            ....ceee44444335c
            .....cceeee44444c
            .......ccccccccc.
            .................
            .................
            `)
    } else if (fruit == 1) {
        // Alter Apple (Big) | Re-D
        FruIt.setImage(img`
            ...............c755.............
            ..............c7777.............
            ........ceeee.c777.eeeee........
            ......ceeeeeeec677eeeeeeee......
            .....ceeeeeeeec666eee2222ee.....
            ....ceeeeeeeeeecceee222222ee....
            ...cceeeeee222eeee222222222ee...
            ...ceeee22222222222222242222e...
            ..ccee2222442222222224454422ee..
            ..cce222444442222224445554422e..
            ..ceffffffffff2ff2ffffffffff2e..
            .cffffffb1fffffeefffffb1ffffffe.
            .fcefffffb1fffeeeefffffb1fff22f.
            .cceefffffb1f222eeefffffb1f222e.
            .ceeeffffffff22222effffffff222e.
            .ceeeeffffff2222222effffff2222e.
            cceeeeeeeee2222222222222222222ee
            cceeeeeee2222222222222222222222e
            cceeeee222222ffffff222222224222e
            cceeee222222fffffffff222222422ee
            cceeeeee222222222fffff22222422ee
            .cceeeeee22222222222ff22224422e.
            .cceeeeee22222eeee22222222422ee.
            .cceeeeee2222eeeeee2222224422ee.
            ..cceeeeee222222222222224422ee..
            ..cceeeeee222222222222244222ee..
            ...cceeeeee2222222222244222ee...
            ...cceeeeee222222222244222eee...
            ....cceeeeee2222222442222eee....
            .....ccceeeee22244422222eee.....
            ......cccceeeee2222222eeee......
            ........cccccceeeeeeeeee........
            `)
    } else if (fruit == 2) {
        // Alter Apple (Small) | R-Ed
        FruIt.setImage(img`
            . . . . . . . . c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e e 2 e e . . 
            . c e e e e e c 6 e 2 2 2 2 e . 
            . c e e 2 2 e e e 2 2 4 4 2 e . 
            c e e 2 4 4 2 2 2 2 4 5 5 4 2 e 
            c e f f f 1 f f f f f f 1 f 2 e 
            c e f f d f f 2 e f f d f f 2 e 
            c e e f f f 2 2 2 e f f f 2 2 e 
            c e 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 f f f f 2 2 2 4 2 e 
            . c e e e 2 2 2 2 2 2 2 2 4 e . 
            . c e e e 2 2 e e 2 2 2 4 2 e . 
            . . c e e e 2 2 2 2 4 4 2 e . . 
            . . . c c e e 4 4 4 2 e e . . . 
            . . . . . c c e e e e . . . . . 
            `)
    } else if (fruit == 3) {
        // Opalescent Orange | Ora-Nge 
        FruIt.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . e e e e e e e e . . . . 
            . . c e e e e 7 e e e 4 e e . . 
            . c e e e e e 6 7 e e 4 4 4 e . 
            . c e e e 4 e e e e 4 1 1 4 e . 
            c e e e 4 e 4 4 4 4 4 4 1 4 4 e 
            c e e 4 4 4 4 e 4 4 e 4 4 4 e e 
            c e e 1 1 1 1 4 4 1 1 1 1 4 4 e 
            c e e 1 f b 1 4 4 1 f b 1 e 4 e 
            c e e 1 f f 1 4 e 1 f f 1 4 4 e 
            c e e 1 1 1 1 4 4 1 1 1 1 5 4 e 
            . c e e 4 4 4 4 4 4 4 4 4 5 e . 
            . c e e 4 4 4 f f 4 4 4 5 4 e . 
            . . c e e 4 4 4 4 4 5 5 4 e . . 
            . . . c c e e 5 5 5 4 e e . . . 
            . . . . . c c e e e e . . . . . 
            `)
    } else if (fruit == 4) {
        // Bouncy Blueberry | Bl-Ue
        FruIt.setImage(img`
            . . . c c c c . . . 
            . c c 8 8 8 8 c c . 
            . c 8 a 6 6 9 8 c . 
            c 8 a 6 6 9 1 9 8 c 
            c 8 f a 6 f 9 6 8 c 
            c 8 a a a 6 6 6 8 c 
            c 8 a a 6 a 6 a 8 c 
            . c 8 a a a a 8 c . 
            . c c 8 8 8 8 c c . 
            . . . c c c c . . . 
            `)
    } else if (fruit == 5) {
        // Legendary Lime | Gr-Een
        FruIt.setImage(img`
            .666..66666......
            .697667757766....
            .8675717666776...
            ..877776f916176..
            ..897576f9961176.
            .8697796fff67176.
            .8669777666777776
            .c866677777757176
            .c6f9167795777776
            .c6f9969777775776
            ..6fff66997777766
            ..c66667699977968
            ...c8866666997778
            ....c88867666997c
            .....cc888867666c
            .......ccccccccc.
            .................
            .................
            `)
    }
})
