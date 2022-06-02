radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    if (receivedString == "A") {
    	
    } else if (receivedString == "B") {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
radio.setGroup(150)
basic.forever(function () {
	
})
