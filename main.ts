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
input.onGesture(Gesture.ScreenDown, function () {
    questionMark = 0
})
input.onButtonPressed(Button.AB, function () {
    questionMark = 1
})
input.onButtonPressed(Button.B, function () {
    basic.showString("im bored")
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
    }
})
basic.forever(function () {
    while (input.logoIsPressed()) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `,0)
music.playMelody("G A B C5 B A B C5 ", 12050)
    }
    basic.clearScreen()
})
