input.onSound(DetectedSound.Loud, function () {
    strip.rotate(1)
    basic.pause(100)
    strip.show()
})
input.onSound(DetectedSound.Quiet, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P13, 16, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    if (450 < pins.analogReadPin(AnalogPin.P3)) {
        motorbit.forward(65)
        basic.pause(500)
    } else {
        motorbit.brake()
    }
})
