basic.forever(function on_forever() {
    let lightVAL = input.lightLevel()
    if (lightVAL > 210) {
        basic.showIcon(IconNames.Angry)
    } else if (lightVAL < 100) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    
    basic.pause(400)
})
