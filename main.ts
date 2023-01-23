input.onButtonPressed(Button.A, function () {
    h_or_t_heads_or_tails = randint(1, 2)
    if (h_or_t_heads_or_tails == 1) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        basic.showString("h")
    } else if (h_or_t_heads_or_tails == 2) {
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        basic.showString("t")
    }
})
input.onButtonPressed(Button.AB, function () {
    questionMark = 1
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        music.playMelody("A B C5 A G F E D ", 1000)
    }
    basic.showString("im bored")
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
	
})
let h_or_t_heads_or_tails = 0
let questionMark = 0
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.showString("hi")
questionMark = 0
basic.forever(function () {
    if (questionMark == 1) {
        basic.showLeds(`
        . # # # .
        # . . . #
        . . # # .
        . . . . .
        . . # . .
        `,10)
basic.pause(100)
        basic.clearScreen()
        for (let index = 0; index < 10; index++) {
            music.playMelody("A B C5 A G F E D ", 1250)
        }
    }
})
