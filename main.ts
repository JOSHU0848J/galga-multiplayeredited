enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const Boss = SpriteKind.create()
    export const Deadline = SpriteKind.create()
}
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (info.player3.hasLife()) {
        game.showLongText("Player 3 gave up", DialogLayout.Bottom)
        info.player3.setLife(0)
    }
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (info.player2.hasLife()) {
        game.showLongText("Player 2 gave up", DialogLayout.Bottom)
        info.player2.setLife(0)
    }
})
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (info.player4.hasLife()) {
        game.showLongText("Player 4 gave up", DialogLayout.Bottom)
        info.player4.setLife(0)
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (info.player2.hasLife()) {
        dart2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . 4 4 . . . . . . . . . . . . . 
            4 9 9 9 9 . . . . . . . . . . . 
            9 2 2 2 2 9 9 9 9 9 . . . . . . 
            2 7 7 7 7 2 2 2 2 2 9 9 . . . . 
            7 8 8 8 8 7 7 7 7 7 2 2 9 9 . . 
            8 5 a a 6 8 8 8 8 8 7 7 2 2 9 9 
            8 5 a 6 6 6 6 4 4 4 8 8 7 7 2 2 
            8 5 a a 6 8 8 8 8 8 7 7 2 2 9 9 
            7 8 8 8 8 7 7 7 7 7 2 2 9 9 . . 
            2 7 7 7 7 2 2 2 2 2 9 9 . . . . 
            9 2 2 2 2 9 9 9 9 9 . . . . . . 
            4 9 9 9 9 . . . . . . . . . . . 
            . 4 4 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player2, 200, 0)
    }
})
info.player4.onLifeZero(function () {
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        `)
    if (!(info.player1.hasLife()) && (!(info.player2.hasLife()) && !(info.player3.hasLife()))) {
        game.showLongText("Player 4 Wins!", DialogLayout.Bottom)
        game.over(true, effects.confetti)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    } else {
        game.showLongText("Player 4 is out :-(", DialogLayout.Bottom)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        player4.destroy(effects.fire, 200)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite2, otherSprite2) {
    if (sprite2 == player1) {
        info.player1.changeLifeBy(-1)
        scene.cameraShake(5, 300)
    } else if (sprite2 == player2) {
        info.player2.changeLifeBy(-1)
        scene.cameraShake(5, 300)
    } else if (sprite2 == player3) {
        info.player3.changeLifeBy(-1)
        scene.cameraShake(5, 300)
    } else {
        info.player4.changeLifeBy(-1)
        scene.cameraShake(5, 300)
    }
    otherSprite2.destroy(effects.fire, 200)
})
info.player3.onLifeZero(function () {
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        `)
    if (!(info.player1.hasLife()) && (!(info.player2.hasLife()) && !(info.player4.hasLife()))) {
        game.showLongText("Player 3 Wins!", DialogLayout.Bottom)
        game.over(true, effects.confetti)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    } else {
        game.showLongText("Player 3 is out :-(", DialogLayout.Bottom)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        player3.destroy(effects.fire, 200)
    }
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (info.player4.hasLife()) {
        dart4 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . 4 4 . . . . . . . . . . . . . 
            4 9 9 9 9 . . . . . . . . . . . 
            9 2 2 2 2 9 9 9 9 9 . . . . . . 
            2 7 7 7 7 2 2 2 2 2 9 9 . . . . 
            7 8 8 8 8 7 7 7 7 7 2 2 9 9 . . 
            8 5 a a 6 8 8 8 8 8 7 7 2 2 9 9 
            8 5 a 6 6 6 6 4 4 4 8 8 7 7 2 2 
            8 5 a a 6 8 8 8 8 8 7 7 2 2 9 9 
            7 8 8 8 8 7 7 7 7 7 2 2 9 9 . . 
            2 7 7 7 7 2 2 2 2 2 9 9 . . . . 
            9 2 2 2 2 9 9 9 9 9 . . . . . . 
            4 9 9 9 9 . . . . . . . . . . . 
            . 4 4 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player4, 200, 0)
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (info.player1.hasLife()) {
        dart1 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . 4 4 . . . . . . . . . . . . . 
            4 9 9 9 9 . . . . . . . . . . . 
            9 2 2 2 2 9 9 9 9 9 . . . . . . 
            2 7 7 7 7 2 2 2 2 2 9 9 . . . . 
            7 8 8 8 8 7 7 7 7 7 2 2 9 9 . . 
            8 5 a a 6 8 8 8 8 8 7 7 2 2 9 9 
            8 5 a 6 6 6 6 4 4 4 8 8 7 7 2 2 
            8 5 a a 6 8 8 8 8 8 7 7 2 2 9 9 
            7 8 8 8 8 7 7 7 7 7 2 2 9 9 . . 
            2 7 7 7 7 2 2 2 2 2 9 9 . . . . 
            9 2 2 2 2 9 9 9 9 9 . . . . . . 
            4 9 9 9 9 . . . . . . . . . . . 
            . 4 4 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player1, 200, 0)
    }
})
info.player1.onLifeZero(function () {
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        `)
    if (!(info.player2.hasLife()) && (!(info.player3.hasLife()) && !(info.player4.hasLife()))) {
        game.showLongText("Player 1 Wins!", DialogLayout.Bottom)
        game.over(true, effects.confetti)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    } else {
        game.showLongText("Player 1 is out :-(", DialogLayout.Bottom)
        player1.destroy(effects.fire, 200)
    }
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (info.player3.hasLife()) {
        dart3 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . 4 4 . . . . . . . . . . . . . 
            4 9 9 9 9 . . . . . . . . . . . 
            9 2 2 2 2 9 9 9 9 9 . . . . . . 
            2 7 7 7 7 2 2 2 2 2 9 9 . . . . 
            7 8 8 8 8 7 7 7 7 7 2 2 9 9 . . 
            8 5 a a 6 8 8 8 8 8 7 7 2 2 9 9 
            8 5 a 6 6 6 6 4 4 4 8 8 7 7 2 2 
            8 5 a a 6 8 8 8 8 8 7 7 2 2 9 9 
            7 8 8 8 8 7 7 7 7 7 2 2 9 9 . . 
            2 7 7 7 7 2 2 2 2 2 9 9 . . . . 
            9 2 2 2 2 9 9 9 9 9 . . . . . . 
            4 9 9 9 9 . . . . . . . . . . . 
            . 4 4 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player3, 200, 0)
    }
})
info.player2.onLifeZero(function () {
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        ffffffffffffffffffffffff
        `)
    if (!(info.player1.hasLife()) && (!(info.player3.hasLife()) && !(info.player4.hasLife()))) {
        game.showLongText("Player 2 Wins!", DialogLayout.Bottom)
        game.over(true, effects.confetti)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    } else {
        game.showLongText("Player 2 is out :-(", DialogLayout.Bottom)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        player2.destroy(effects.fire, 200)
    }
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (info.player1.hasLife()) {
        game.showLongText("Player 1 gave up", DialogLayout.Bottom)
        info.player1.setLife(0)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == dart1) {
        info.player1.changeScoreBy(1000)
        scene.cameraShake(3, 300)
    } else if (sprite == dart2) {
        info.player2.changeScoreBy(1000)
        scene.cameraShake(3, 300)
    } else if (sprite == dart3) {
        info.player3.changeScoreBy(1000)
        scene.cameraShake(3, 300)
    } else {
        info.player4.changeScoreBy(1000)
        scene.cameraShake(3, 300)
    }
    otherSprite.destroy(effects.fire, 500)
})
let bogey: Sprite = null
let dart3: Sprite = null
let dart1: Sprite = null
let dart4: Sprite = null
let dart2: Sprite = null
let player4: Sprite = null
let player3: Sprite = null
let player2: Sprite = null
let player1: Sprite = null
game.splash("Ask your friends to join", "Then press A")
effects.starField.startScreenEffect()
player1 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ....82..........................
    ....111.....999999..............
    ...42222...99999999.............
    .444.8222222999999222...........
    422.22222222222222222222........
    .44.288822222222222222222.......
    ..44.88.....222222222222........
    ...........22222228.............
    ...........2222228..............
    ..........2222228...............
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
player1.setPosition(20, 15)
player1.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(player1, 200, 200)
info.player1.setLife(3)
info.player1.setScore(0)
player2 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ....8a..........................
    ....111.....999999..............
    ....aaaa...99999999.............
    .aaa.c888888999999888...........
    a88.88888888888888888888........
    .aa.8ccc88888888888888888.......
    ..aa.cc.....888888888888........
    ...........88888885.............
    ...........8888885..............
    ..........8888885...............
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
player2.setPosition(20, 45)
player2.setFlag(SpriteFlag.StayInScreen, true)
controller.player2.moveSprite(player2, 200, 200)
info.player2.setLife(3)
info.player2.setScore(0)
player3 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ....4a..........................
    ....111.....999999..............
    ....aaaa...99999999.............
    .aaa.7444444999999444...........
    a44.44444444444444444444........
    .aa.477444444444444444444.......
    ..aa.77.....444444444444........
    ...........44444445.............
    ...........4444445..............
    ..........4444445...............
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
player3.setPosition(20, 75)
player3.setFlag(SpriteFlag.StayInScreen, true)
controller.player3.moveSprite(player3, 200, 200)
info.player3.setLife(3)
info.player3.setScore(0)
player4 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ....74..........................
    ....111.....999999..............
    ....4444...99999999.............
    .444.7777777999999777...........
    477.77777777777777777777........
    .44.777777777777777777777.......
    ..44.77.....777777777777........
    ...........77777777.............
    ...........7777775..............
    ..........7777775...............
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
player4.setPosition(20, 105)
player4.setFlag(SpriteFlag.StayInScreen, true)
controller.player4.moveSprite(player4, 200, 200)
info.player4.setLife(3)
info.player4.setScore(0)
music.play(pianoRoll.createSong(hex`00ec000408180601001c000f05001202c102c20100040500280000006400280003140006020004080100010401011904010801011808010c0101190c011001011b10011401011918011d01011820012801011928012c0101143001400101104001490101154c014d01011550015501011558015c01011460017101011580018401011384018801011288018c0101138c019001011490019501011398019d010112a001a8010113a801ac01010fb001c0010113c001c8010114cc01ce010114d001d4010114d801dc010113e001f0010114f001f101010f00020b02011910021902011420022a02011030023b02010d40025402010e6002630201156402680201156c027102011574027602011578027e02011580028c02011990029a020114a002aa020110b002bb02010dc002de02010802001c00100500640000041e000004000000000000000000000000000a040005d40100000400011904000800011808000c0001190c001000011b10001400011918001d00011820002800011928002c0001143000400001104000490001154c004d00011550005500011558005c00011460007100011580008400011384008800011288008c0001138c009000011490009500011398009d000112a000a8000113a800ac00010fb000c0000107c000c8000114cc00ce000114d000d4000114d800dc000113e000f0000114f000f100010f00010401011904010801011808010c0101190c011001011b10011301011918011d01011820012801011928012b0101143001400101104001490101154c014d01011550015501011558015b01011460017101011580018401011384018801011288018b0101138c019001011490019401011398019d010112a001a8010113a801ac01010fb001c0010113c001c8010114cc01cd010114d001d4010114d801dc010113e001f0010114f001f101010f00020b02011910021902011420022a02011030023b02010d40025402010e6002630201156402680201156c027102011574027602011578027e02011580028c02011990029a020114a002aa020110b002bb02010dc002de020108e002e3020115e402e9020114ec02f2020114f402f7020114f802ff02011803001c000f0a006400f4010a0000040000000000000000000000000000000004f80100000700010d08001000010d18001c00010d20003100010d38003d00010d40004500010948005000010958005c00010960006c00011070007400011078007c0001157c008000011480008600011388008f00011398009b000113a000ad000113b800bb000113c000c3000114c800d1000114d800db000114e000eb000114f000f4000114f400f7000112f800fc000110fc000001010f00010501010d08011101010d18011b01010d20012501010d28012c01010830013401010d38013a01010d48015001011058015a01011060016b01011070017401010f74017801011078017b0101127c018001011480018401011388019101011398019b010113a001ab010113b001b7010113b801bb010115c001c4010114c801d0010114d801db010114e001e4010114e401e7010118e801ec010119ec01f001011bf001f301011cf401f801011ef801fc01011ffc010002012000020802011937023902010239023b0201073b023c02010d3c023d02010e3d023e0201133e023f0201143f024002011940024f02011a76027802010278027a0201077a027b02010d7b027c02010e7b027c0201137c027d0201187d027e02011e7e027f02011e7e027f02011f7f028f020124c002d9020120e002e4020120e402e802011ee802ec02011cec02f002011bf002f1020119f402f6020118f802fc020114fc02fe02011304001c00020a006400f401640000040000000000000000000000000000000003100800000200010d00000200011000000200011400000200011904000600010d04000600011004000600011404000600011908001200010d08001200011008001200011408001200011918001d00010d18001d00011018001d00011418001d00011920002900010d2000290001102000290001142000290001192c002e00010d2c002e0001102c002e0001142c002e00011930003200010d30003200011030003200011430003200011934003600010d34003600011034003600011434003600011938003e00010d38003e00011038003e00011438003e00011940004200010940004200010d40004200011040004200011544004600010944004600011044004600011544004600010d48005100010948005100010d48005100011548005100011058005d00010958005d00010d58005d00011558005d00011960006900010960006900010d6000690001156000690001196c006f0001096c006f00010d6c006f0001156c006f00011970007200010970007200010d70007200011570007200011974007600010974007600010d74007600011574007600011978007d00010978007d00010d78007d00011978007d00011580008200010780008200010d80008200011380008200011984008600010784008600010d84008600011384008600011988009100010788009100010d88009100011388009100011998009d00010798009d00010d98009d00011998009d000113a000a9000107a000a900010da000a9000113a000a9000119ac00ae000107ac00ae00010dac00ae000113ac00ae000119b000b3000107b000b300010db000b3000113b000b3000119b400b6000107b400b600010db400b6000113b400b6000119b800be000107b800be00010db800be000113b800be000119c000c2000108c000c200010cc000c2000118c000c2000114c400c6000108c400c600010cc400c6000114c400c6000118c800d1000108c800d100010cc800d1000118c800d1000114d800dc000108d800dc00010cd800dc000114d800dc000118d800dc00011be000e8000108e000e800010ce000e800011be000e8000114e000e8000118ec00ee000108ec00ee000114ec00ee000118ec00ee00011bec00ee00010cf000f3000108f000f300010cf000f3000114f000f3000118f000f300011bf400f6000108f400f600010cf400f6000114f400f6000118f400f600011bf800ff000108f800ff00010cf800ff00011bf800ff000114f800ff00011800010201010d00010201011400010201011900010201011c04010601010d04010601011404010601011904010601011c08011201010d08011201011408011201011908011201011c18011c01010d18011c01011418011c01011918011c01011c20012901010d20012901011420012901011920012901011c2c012e01010d2c012e0101142c012e0101192c012e01011c30013201010d30013201011430013201011930013201011c34013601010d34013601011434013601011934013601011c38013e01010d38013e01011438013e01011938013e01011c40014201010940014201010d40014201011040014201011c40014201011544014601010944014601011044014601011544014601011c44014601010d48015101010948015101010d48015101011548015101011048015101011c58015d01010958015d01010d58015d01011558015d01011958015d01011c60016901010960016901010d60016901011560016901011c6001690101196c016e0101096c016e01010d6c016e01011c6c016e0101156c016e01011970017201010970017201010d70017201011570017201011c70017201011974017601010974017601010d74017601011574017601011974017601011c78017e01010978017e01010d78017e01011978017e01011578017e01011c80018401010780018401010d80018401011380018401011980018401011f84018601010784018601010d84018601011384018601011988018c01010788018c01010d88018c01011388018c0101198c018e01011f90019201011f94019601011f98019d01010798019d01010d98019d01011998019d01011398019d01011fa001a9010107a001a901010da001a9010113a001a9010119a001a901011fac01ae010107ac01ae01010dac01ae010113ac01ae010119ac01ae01011fb001b2010107b001b201010db001b201011fb001b2010113b001b2010119b401b6010107b401b601010db401b6010113b401b6010119b401b601011fb801be010107b801be01010db801be010113b801be010119b801be01011fc001c4010108c001c401010cc001c4010118c001c4010114c001c4010120c401c6010108c401c601010cc401c6010114c401c6010118c801cc010108c801cc01010cc801cc010118c801cc010114cc01ce010120d001d2010120d401d6010120d801dd010108d801dd01010cd801dd010114d801dd010118d801dd01011bd801dd010120e001e9010108e001e901010ce001e901011be001e9010114e001e9010118e001e9010120ec01ee010108ec01ee010114ec01ee010118ec01ee01011bec01ee010120ec01ee01010cf001f2010108f001f201010cf001f2010114f001f2010118f001f2010119f001f201011bf001f2010120f401f6010108f401f601010cf401f6010114f401f6010118f401f601011bf401f601011ef801ff010108f801ff01010cf801ff010114f801ff01011bf801ff01011800020b02010d00020b02011900020b02011440024e02010e40024e02011a40024e02011580028c02010d80028c02011980028c020114c002e0020103c002e0020108c002e002010fc002e0020114e002fe020118e002fe02011b05001c000e050046006603320000040a002d0000006400140001320002010004d20000000100010f00000100010a0100020001056000680001096c006e00010970007400010978007d000108800091000107e000e8000114ec00ef000112f000f4000110f800fd00010f00011101010d6001690101156c016d01011570017601011578017c010114800190010113b901ba010113c001c8010114cc01cd010114d001d4010114e001e7010114ec01ef010114f001f5010114f801fb01011800020e02011940025a02011a5a025c0201155c025d0201105d025e02010b5e0260020106800293020119bf02ff020114ff020003010f06010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800420600000200010a00000200011300000200010300000200010900000200011104000800010304000800011108000b00010908000b0001110c000e00010910001600010710001600010918001a00010918001a0001111c00200001031c002000010920002500010920002500011128002b00010328002b0001092c002e0001092c002e00011130003400010730003400010930003400011134003600011138003a00010938003a00010a3b003c00010a3c003d0001093d003f00010a40004400010340004400011140004400010940004400010a44004800010344004800011148004c00010948004c0001114c004e00010950005600010750005600010958005a00010958005a0001115c00600001035c006000010960006500010960006500011168006c00010368006c0001096c006e0001096c006e00011170007400010770007400010970007400011174007600011178007b00010978007b0001117c007e00010980008300010380008300010980008300010a80008300011184008800010384008800011188008b00010988008b0001118c008e00010990009500010790009500010998009a00010998009a0001119c00a00001039c00a0000109a000a5000109a000a5000111a800ab000103a800ab000109ac00ae000109ac00ae000111b000b4000107b000b4000109b000b4000111b400b6000111b800ba00010ab800ba000109b800ba000111ba00bb00010abc00bd000109bd00bf00010ac000c400010ac000c4000103c000c4000111c000c4000109c400c8000103c400c8000111c800cb000109c800cb000111cc00ce000109d000d5000107d000d5000109d800db000109d800db000111dc00df000103dc00df000109e000e5000109e000e5000111e800eb000107e800eb000109ec00ee000109ec00ee000111f000f4000107f000f4000109f000f4000111f400f6000111f800fb000109f800fb000111fc000001010900010201010300010201010900010201011104010801010304010801011108010c01010908010c01011108010c0101160c010e01010910011501010710011501010918011a01010918011a01011118011a0101161c011f0101031c011f01010920012501010920012501011128012c01010328012c01010928012c0101162c012e0101092c012e01011130013401010730013401010930013401011134013601011138013c01010938013c0101163c013e01010940014201010340014201011140014201010944014801010344014801011148014c01010948014c01011148014c0101164c014e01010950015601010750015601010958015c01010958015c01011158015c0101165c015f0101035c015f01010960016501010960016501011168016c01010368016c01010968016c0101166c016e0101096c016e01011170017401010770017401010970017401011174017601011178017c01010978017c01011178017c0101167c017e01010980018201010380018201010980018201011184018801010384018801011188018c01010988018c01011188018c0101168c018e01010990019601010790019601010998019c01010998019c01011198019c0101169c019f0101039c019f010109a001a5010109a001a5010111a801ac010103a801ac010109a801ac010116ac01ae010109ac01ae010111b001b4010107b001b4010109b001b4010111b401b6010111b801bc010109b801bc010111b801bc010116bc01be010109c001c2010103c001c2010109c001c2010111c401c6010111c801cc010107c801cc010109c801cc010111c801cc010116cc01cf010103cc01cf010109d001d3010109d401d8010107d401d8010111d401d8010116d801dc010103d801dc010109dc01de010109e001e7010111e801ec010103e801ec010109e801ec010116ec01ee010109ec01ee010111f001f3010107f001f3010109f001f3010111f401f7010108f401f7010111f801fb010108f801fb010109f801fb010111f801fb010116fc0100020108fc01000201090002050201030002050201140002050201164002440201034002440201134002440201156002610201076402680201076c026f02010774027602010778027c020107800285020103800285020113800285020114800285020116c002c6020103c002c6020113c002c6020115e002e2020107e402e7020107ec02ef020107f402f6020107f802fc0201070159494c28493545493a2c2e3e3939484a433b4e43493c163c2c373a3516444233355576585e594650483c55590259494c28493545493a2c2e3e3939484a433b4e43493c163c2c373a351659494c28493545493a2c2e3e3939484a433b4e43493c163c2c373a3516444233355576585e594650483c55597f47413e4e03524552613749473a4030335057534e4755494b4047505a3f475e5358513e52465e4b544940434e5252595e464c57532d474d53354c42372e262e3335323a3933330e363f2a2a39384343415f523c374d2e3d464904404040403a3a3a3a535353537171717146464646383838384343434347474747727272724b4b4b4b464646464c4c4c4c535353534f4f4f4f444444444040404032323232343434345b5b5b5b6f6f6f6f555555556a6a6a6a696969693c3c3c3c61616161404040403f3f3f3f666666664a4a4a4a494949494d4d4d4d4d45454545454f4f4f4f4f434343434332323232324545454545404040403a3a3a3a5353535371717171636363633838383843434343474747474c4c4c4c4b4b4b4b4b4646464646535353535353535353534f4f4f4f4f4444444444404040404032323232323f3f3f3f3f5b5b5b5b5b6f6f6f6f5555555543454a6a6a6a6a6a69696969693c3c3c3c3c616161616140404040403f3f3f3f3f66666666664a4a4a4a4949494943454a4d4d4d4d4d4d4545454545454f4f4f4f4f4f4343434343434332323232323252525252524444444848484646464343434335350551512e4237313f3e452c46393447302e37441e4a2834323b463c3e423f3d4242577f51066f6f6f6f6f7f7f5c5c437f7f6b6b7f7f5c5c7f7f5c5c7f7f7f5c616124414b7f7f7f7f7f7f5c5c477f7f6a6a7f7f5c5c7f7f5c5c7f7f7f5c6e6e4f7f7f7f7f7f7f6464467f7f63637f7f5c5c7f7f5c5c7f7f7f5c5c5c5c2a4d437f7f7f7f7f7f5c5c3e7f7f5c5c7f7f5c5c7f7f4c4c7f7f7f5c5c5c3b7f7f7f7f7f5c5c5c437f7f6b6b6b7f7f5c5c7f7f7f5c5c7f7f7f5c6161417f7f7f7f7f5c5c5c477f7f6a6a6a7f7f5c5c7f7f7f5c5c7f7f7f5c6e6e6e4f7f7f7f7f7f646464467f7f6363637f7f5c5c7f7f7f5c5c7f7f7f5c6363634d7f7f7f5c7f7f7f7f7f7f497f7f7f7f7f4f5c7f7f7f5c5c7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f`), music.PlaybackMode.LoopingInBackground)
game.onUpdateInterval(1, function () {
    if (info.player1.hasLife()) {
        info.player1.changeScoreBy(1)
    }
})
game.onUpdateInterval(1, function () {
    if (info.player2.hasLife()) {
        info.player2.changeScoreBy(1)
    }
})
game.onUpdateInterval(1, function () {
    if (info.player3.hasLife()) {
        info.player3.changeScoreBy(1)
    }
})
game.onUpdateInterval(1, function () {
    if (info.player4.hasLife()) {
        info.player4.changeScoreBy(1)
    }
})
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        ....ffffff.........ccc..
        ....ff22ccf.......cc4f..
        .....ffccccfff...cc44f..
        ....cc24442222cccc442f..
        ...c9b4422222222cc422f..
        ..c9999b222222222222f44.
        .c2b991119222222222c2544
        c2222b11992222ccccccc554
        f222222222222c222ccfff44
        .f2222222222444222f.....
        ..ff2222222cf444222f....
        ....ffffffffff444222c...
        .........f2cfffc2222c...
        .........fcc2ffffffff...
        ..........fc2ffff.......
        ...........fffff........
        `, SpriteKind.Enemy)
    bogey.setVelocity(-50, 0)
    bogey.setPosition(180, randint(0, 120))
})
