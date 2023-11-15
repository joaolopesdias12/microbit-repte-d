basic.forever(function () {
    if (input.temperature() > 22) {
        basic.showString("Hot!")
    } else {
        basic.showString("Cold!")
    }
    if (input.lightLevel() > 200) {
        music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
    }
    if (input.lightLevel() < 50) {
        music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
    }
})
