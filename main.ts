let Y = 0
let dx3 = 0
let dx2 = 0
let dx = 0
let x = 2
dx += 1
let x2 = 1
dx2 += 1
let x3 = 0
dx3 += 1
basic.forever(function () {
    basic.clearScreen()
    Y = 0
    if (x >= 4) {
        dx = -1
    } else if (x <= 0) {
        dx = 1
    }
    if (x2 >= 4) {
        dx2 = -1
    } else if (x <= 0) {
        dx2 = 1
    }
    if (x3 >= 4) {
        dx3 = -1
    } else if (x <= 0) {
        dx3 = 1
    }
    x += dx
    x2 += dx2
    x3 += dx3
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(x3, Y, 20)
        led.plotBrightness(x2, Y, 20)
        led.plot(x, Y)
        Y += 1
    }
    basic.pause(100)
})
