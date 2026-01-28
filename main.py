def on_forever():
    lightVAL = input.light_level()
    if lightVAL > 210:
        basic.show_icon(IconNames.ANGRY)
    elif lightVAL < 100:
        basic.show_icon(IconNames.HEART)
    else:
        basic.show_icon(IconNames.HAPPY)
    basic.pause(400)
basic.forever(on_forever)
