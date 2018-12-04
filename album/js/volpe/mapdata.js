"use strict";

volpe.mapdata = {
    e1m1: mood.factory.createMap({
        size: 26,
        tilemap: [
            1 , 1 , 1 , 17, 16, 18, 20, 21, 1 , 1 , 1 , 48, 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ,
            1 , 1 , 5 , 0 , 0 , 0 , 0 , 0 , 1 , 1 , 1 , 0 , 0 , 0 , 0 , 0 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ,
            1 , 1 , 6 , 0 , 0 , 0 , 0 , 0 , 4 , 1 , 1 , 0 , 1 , 1 , 1 , 0 , 1 , 1 , 0 , 0 , 0 , 1 , 1 , 1 , 1 , 1 ,
            1 , 1 , 7 , 0 , 0 , 11, 0 , 0 , 1 , 1 , 1 , 0 , 0 , 0 , 1 , 0 , 1 , 1 , 0 , 42, 0 , 1 , 1 , 1 , 1 , 1 ,
            1 , 1 , 1 , 1 , 0 , 8 , 19, 39, 1 , 41, 40, 43, 44, 0 , 1 , 0 , 1 , 0 , 0 , 0 , 0 , 1 , 1 , 1 , 1 , 1 ,
            1 , 1 , 1 , 1 , 0 , 9 , 1 , 23, 1 , 0 , 0 , 0 , 0 , 0 , 1 , 0 , 0 , 0 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ,
            24, 0 , 0 , 0 , 0 , 10, 1 , 0 , 0 , 0 , 0 , 0 , 1 , 53, 1 , 1 , 1 , 0 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ,
            25, 0 , 1 , 1 , 0 , 12, 0 , 0 , 2 , 1 , 38, 1 , 1 , 45, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 , 1 ,
            1 , 0 , 35, 1 , 0 , 0 , 0 , 0 , 27, 1 , 1 , 1 , 1 , 45, 0 , 46, 0 , 1 , 1 , 0 , 1 , 1 , 1 , 0 , 1 , 1 ,
            1 , 0 , 1 , 0 , 0 , 0 , 0 , 0 , 26, 1 , 1 , 1 , 1 , 45, 0 , 0 , 0 , 0 , 1 , 0 , 1 , 1 , 1 , 0 , 1 , 1 ,
            47, 0 , 0 , 0 , 1 , 0 , 0 , 0 , 28, 1 , 1 , 1 , 1 , 45, 45, 0 , 46, 0 , 0 , 0 , 1 , 1 , 1 , 0 , 1 , 1 ,
            1 , 0 , 0 , 30, 36, 0 , 0 , 0 , 2 , 1 , 1 , 1 , 1 , 1 , 45, 0 , 0 , 0 , 1 , 1 , 1 , 1 , 1 , 0 , 1 , 1 ,
            33, 0 , 0 , 1 , 37, 0 , 31, 0 , 1 , 1 , 1 , 1 , 1 , 1 , 45, 45, 45, 45, 1 , 1 , 1 , 1 , 1 , 0 , 1 , 1 ,
            1 , 32, 34, 1 , 1 , 29, 1 , 0 , 52, 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 51, 1 , 1 , 1 , 0 , 1 , 1 ,
            1 , 1 , 1 , 1 , 1 , 1 , 1 , 49, 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 51, 0 , 0 , 0 , 0 , 1 , 1 ,
            1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 51, 0 , 51, 51, 51, 1 , 1 ,
            1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 51, 0 , 51, 51, 51, 1 , 1 ,
            1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 51, 0 , 0 , 0 , 51, 1 , 1 ,
            1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 51, 51, 51, 0 , 51, 1 , 1 ,
            1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 51, 51, 51, 51, 0 , 51, 51, 1 ,
            1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 54, 0 , 0 , 0 , 0 , 0 , 54, 1 ,
            1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 50, 0 , 0 , 0 , 0 , 0 , 50, 1 ,
            1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 54, 0 , 0 , 0 , 0 , 0 , 54, 1 ,
            1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 50, 0 , 0 , 0 , 0 , 0 , 50, 1 ,
            1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 54, 0 , 0 , 0 , 0 , 0 , 54, 1 ,
            1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 50, 51, 51, 51, 51, 51, 50, 1 ],
        skybox: mood.factory.createTexture("assets/twinpeaks02.jpg", 1024, 512),
        tiles: [
            mood.factory.createTile({
                terminal:false,
                height: 0
            }),
            // 1
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/wall_texture_3.jpg", 256, 256),
            }),
            // 2
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/metal_1.jpg", 256, 256),
            }),
            // 3
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/metal_2.jpg", 256, 256),
            }),
            // 4
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/tilecouple.jpg", 256, 256),
            }),
            // 5
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/kiss01.jpg", 512, 512),
            }),
            // 6
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/kiss02.jpg", 512, 512),
            }),
            // 7
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/kiss03.jpg", 512, 512),
            }),
            // 8
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/milka01.jpg", 256, 256),
            }),
            // 9
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/milka02.jpg", 256, 256),
            }),
            // 10
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/milka03.jpg", 256, 256),
            }),
            // 11
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/scapelanzo01.jpg", 256, 256),
            }),
            // 12
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/scapelanzo02.jpg", 256, 256),
            }),
            // 13
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/artwork01.jpg", 256, 256),
            }),
            // 14
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/artwork02.jpg", 256, 256),
            }),
            // 15
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/artwork03.jpg", 256, 256),
            }),
            // 16
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/bed01.jpg", 256, 256),
            }),
            // 17
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/bed02.jpg", 256, 256),
            }),
            // 18
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/artwork04.jpg", 256, 256),
            }),
            // 19
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/lanzohill.jpg", 256, 256),
            }),
            // 20
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/cat.jpg", 256, 256),
            }),
            // 21
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/artwork05.jpg", 256, 256),
            }),
            // 22
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/2018.jpg", 256, 256),
            }),
            // 23
            mood.factory.createTile({
                texture: mood.factory.createTexture("assets/catfeet.jpg", 256, 256),
            }),
            // 24
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/house01.jpg", 256, 256),
            }),
            // 25
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/house02.jpg", 256, 256),
            }),
            // 26
            mood.factory.createTile({
            texture: mood.factory.createTexture("assets/2019.jpg", 256, 256),
            }),
            // 27
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/door01.jpg", 256, 256),
            }),
            // 28
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/door03.jpg", 256, 256),
            }),
            // 29
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/bdaycard.jpg", 256, 256),
            }),
            // 30
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/pool.jpg", 256, 256),
            }),
            // 31
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/skull.jpg", 256, 256),
            }),
            // 32
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/badge.jpg", 256, 256),
            }),
            // 33
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/gum.jpg", 256, 256),
            }),
            // 34
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/bojack.jpg", 256, 256),
            }),
            // 35
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/oven.jpg", 256, 256),
            }),
            // 36
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/sceneste01.jpg", 256, 256),
            }),
            // 37
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/sceneryste02.jpg", 256, 256),
            }),
            // 38
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/golf.jpg", 256, 256),
            }),
            // 39
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/arcade.jpg", 256, 256),
            }),
            // 40
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/grindleford.jpg", 256, 256),
            }),
            // 41
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/20p.jpg", 256, 256),
            }),
            // 42
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/coin.png", 256, 256),
            }),
            // 43
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/grin02.jpg", 256, 256),
            }),
            // 44
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/grin01.jpg", 256, 256),
            }),
            // 45
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/shining.jpg", 256, 256),
            }),
            // 46
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/door42.png", 256, 256),
            }),
            // 47
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/ballpool.jpg", 256, 256),
            }),
            // 48
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/loocat.jpg", 256, 256),
            }),
            // 49
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/firepit.jpg", 256, 256),
            }),
            // 50
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/png.png", 256, 256),
            }),
            // 51
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/curtain.png", 256, 256),
            }),
            // 52
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/pokemon.jpg", 256, 256),
            }),
            // 53
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/milk.jpg", 256, 256),
            }),
            // 54
            mood.factory.createTile({
              texture: mood.factory.createTexture("assets/candles.png", 256, 256),
            })
        ],
        light: 0,
        fogThickness: 0,
        player: volpe.factory.createPlayer({
            x: 4,
            y: 2,
            rotation: 0
        })
    })
}

// x: 4,
// y: 2,
