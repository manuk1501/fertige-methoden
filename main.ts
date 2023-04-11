function WarteAnimationSchlange (Dauer: number, Schlangenlänge: number, tickspeed: number) {
    for (let DownCount3 = 0; DownCount3 <= Dauer; DownCount3++) {
        for (let DownCount = 0; DownCount <= 15; DownCount++) {
            Pixel = DownCount
            if (Pixel < 0) {
                Pixel = Pixel + 16
            }
            for (let DownCount2 = 0; DownCount2 <= Schlangenlänge; DownCount2++) {
                PixelBack = Pixel - Math.abs(DownCount2 - Schlangenlänge)
                if (PixelBack < 0) {
                    PixelBack = PixelBack + 16
                }
                if (PixelBack <= 4 && PixelBack >= 0) {
                    led.plotBrightness(PixelBack, 0, DownCount2 * (255 / Schlangenlänge))
                }
                if (PixelBack <= 8 && PixelBack >= 5) {
                    led.plotBrightness(4, PixelBack - 4, DownCount2 * (255 / Schlangenlänge))
                }
                if (PixelBack <= 12 && PixelBack >= 9) {
                    led.plotBrightness(Math.abs(PixelBack - 12), 4, DownCount2 * (255 / Schlangenlänge))
                }
                if (PixelBack <= 15 && PixelBack >= 13) {
                    led.plotBrightness(0, Math.abs(PixelBack - 16), DownCount2 * (255 / Schlangenlänge))
                }
            }
            basic.pause(tickspeed)
        }
    }
    basic.clearScreen()
}
let PixelBack = 0
let Pixel = 0
WarteAnimationSchlange(10, 12, 20)
basic.forever(function () {
	
})
