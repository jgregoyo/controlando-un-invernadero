input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() >= 8 && input.temperature() <= 30) {
        basic.showString("T. estable")
    } else {
        basic.showString("Alerta aumento temperatura")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (pins.analogReadPin(AnalogPin.P0)))
    if (pins.analogReadPin(AnalogPin.P0) >= 200 && pins.analogReadPin(AnalogPin.P0) <= 600) {
        basic.showString("Humedad estable")
    } else {
        basic.showString("Alerta de humedad")
    }
})
