@namespace
class SpriteKind:
    Boss = SpriteKind.create()
    Deadline = SpriteKind.create()

def on_player3_button_b_pressed():
    game.show_long_text("Player 3 gave up", DialogLayout.BOTTOM)
    info.player3.set_life(0)
controller.player3.on_button_event(ControllerButton.B,
    ControllerButtonEvent.PRESSED,
    on_player3_button_b_pressed)

def on_player2_button_b_pressed():
    game.show_long_text("Player 2 gave up", DialogLayout.BOTTOM)
    info.player2.set_life(0)
controller.player2.on_button_event(ControllerButton.B,
    ControllerButtonEvent.PRESSED,
    on_player2_button_b_pressed)

def on_player4_button_b_pressed():
    game.show_long_text("Player 4 gave up", DialogLayout.BOTTOM)
    info.player4.set_life(0)
controller.player4.on_button_event(ControllerButton.B,
    ControllerButtonEvent.PRESSED,
    on_player4_button_b_pressed)

def on_player2_button_a_pressed():
    global dart2
    if info.player2.has_life():
        dart2 = sprites.create_projectile_from_sprite(img("""
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
                """),
            player2,
            200,
            0)
controller.player2.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player2_button_a_pressed)

def on_player4_life_zero():
    game.set_dialog_text_color(1)
    game.set_dialog_frame(img("""
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        """))
    if not (info.player1.has_life()) and (not (info.player2.has_life()) and not (info.player3.has_life())):
        game.show_long_text("Player 4 Wins!", DialogLayout.BOTTOM)
        game.over(True, effects.confetti)
        sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
    else:
        game.show_long_text("Player 4 is out :-(", DialogLayout.BOTTOM)
        player4.destroy(effects.fire, 200)
info.player4.on_life_zero(on_player4_life_zero)

def on_on_overlap(sprite2, otherSprite2):
    if sprite2 == player1:
        info.player1.change_life_by(-1)
        scene.camera_shake(5, 300)
        scaling.scale_by_percent(player1, -20, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
    elif sprite2 == player2:
        info.player2.change_life_by(-1)
        scene.camera_shake(5, 300)
        scaling.scale_by_percent(player2, -20, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
    elif sprite2 == player3:
        info.player3.change_life_by(-1)
        scene.camera_shake(5, 300)
        scaling.scale_by_percent(player3, -20, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
    else:
        info.player4.change_life_by(-1)
        scene.camera_shake(5, 300)
        scaling.scale_by_percent(player4, -20, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
    otherSprite2.destroy(effects.fire, 200)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

def on_player3_life_zero():
    game.set_dialog_text_color(1)
    game.set_dialog_frame(img("""
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        """))
    if not (info.player1.has_life()) and (not (info.player2.has_life()) and not (info.player4.has_life())):
        game.show_long_text("Player 3 Wins!", DialogLayout.BOTTOM)
        game.over(True, effects.confetti)
        sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
    else:
        game.show_long_text("Player 3 is out :-(", DialogLayout.BOTTOM)
        player3.destroy(effects.fire, 200)
info.player3.on_life_zero(on_player3_life_zero)

def on_player4_button_a_pressed():
    global dart4
    if info.player4.has_life():
        dart4 = sprites.create_projectile_from_sprite(img("""
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
                """),
            player4,
            200,
            0)
controller.player4.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player4_button_a_pressed)

def on_player1_button_a_pressed():
    global dart1
    if info.player1.has_life():
        dart1 = sprites.create_projectile_from_sprite(img("""
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
                """),
            player1,
            200,
            0)
controller.player1.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player1_button_a_pressed)

def on_player1_life_zero():
    game.set_dialog_text_color(1)
    game.set_dialog_frame(img("""
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        """))
    if not (info.player2.has_life()) and (not (info.player3.has_life()) and not (info.player4.has_life())):
        game.show_long_text("Player 1 Wins!", DialogLayout.BOTTOM)
        game.over(True, effects.confetti)
        sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
    else:
        game.show_long_text("Player 1 is out :-(", DialogLayout.BOTTOM)
        player1.destroy(effects.fire, 200)
info.player1.on_life_zero(on_player1_life_zero)

def on_player3_button_a_pressed():
    global dart3
    if info.player3.has_life():
        dart3 = sprites.create_projectile_from_sprite(img("""
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
                """),
            player3,
            200,
            0)
controller.player3.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player3_button_a_pressed)

def on_player2_life_zero():
    game.set_dialog_text_color(1)
    game.set_dialog_frame(img("""
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f
        """))
    if not (info.player1.has_life()) and (not (info.player3.has_life()) and not (info.player4.has_life())):
        game.show_long_text("Player 2 Wins!", DialogLayout.BOTTOM)
        game.over(True, effects.confetti)
        sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
    else:
        game.show_long_text("Player 2 is out :-(", DialogLayout.BOTTOM)
        player2.destroy(effects.fire, 200)
info.player2.on_life_zero(on_player2_life_zero)

def on_player1_button_b_pressed():
    game.show_long_text("Player 1 gave up", DialogLayout.BOTTOM)
    info.player1.set_life(0)
controller.player1.on_button_event(ControllerButton.B,
    ControllerButtonEvent.PRESSED,
    on_player1_button_b_pressed)

def on_on_overlap2(sprite, otherSprite):
    if sprite == dart1:
        info.player1.change_score_by(1)
        scaling.scale_by_percent(player1, 20, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
        scaling.scale_by_percent(dart1, 20, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
        info.player1.change_life_by(1)
        scene.camera_shake(3, 300)
    elif sprite == dart2:
        info.player2.change_score_by(1)
        scaling.scale_by_percent(player2, 20, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
        scaling.scale_by_percent(dart2, 20, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
        info.player2.change_life_by(1)
        scene.camera_shake(3, 300)
    elif sprite == dart3:
        info.player3.change_score_by(1)
        scaling.scale_by_percent(player3, 20, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
        scaling.scale_by_percent(dart3, 20, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
        info.player3.change_life_by(1)
        scene.camera_shake(3, 300)
    else:
        info.player4.change_score_by(1)
        scaling.scale_by_percent(player4, 20, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
        scaling.scale_by_percent(dart4, 20, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
        info.player2.change_life_by(1)
        scene.camera_shake(3, 300)
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap2)

bogey: Sprite = None
dart3: Sprite = None
dart1: Sprite = None
dart4: Sprite = None
dart2: Sprite = None
player4: Sprite = None
player3: Sprite = None
player2: Sprite = None
player1: Sprite = None
game.splash("Ask your friends to join", "Then press A")
effects.star_field.start_screen_effect()
player1 = sprites.create(img("""
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
        """),
    SpriteKind.player)
player1.set_position(20, 15)
player1.set_flag(SpriteFlag.STAY_IN_SCREEN, True)
controller.move_sprite(player1, 200, 200)
info.player1.set_life(3)
info.player1.set_score(0)
player2 = sprites.create(img("""
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
        """),
    SpriteKind.player)
player2.set_position(20, 45)
player2.set_flag(SpriteFlag.STAY_IN_SCREEN, True)
controller.player2.move_sprite(player2, 200, 200)
info.player2.set_life(3)
info.player2.set_score(0)
player3 = sprites.create(img("""
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
        """),
    SpriteKind.player)
player3.set_position(20, 75)
player3.set_flag(SpriteFlag.STAY_IN_SCREEN, True)
controller.player3.move_sprite(player3, 200, 200)
info.player3.set_life(3)
info.player3.set_score(0)
player4 = sprites.create(img("""
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
        """),
    SpriteKind.player)
player4.set_position(20, 105)
player4.set_flag(SpriteFlag.STAY_IN_SCREEN, True)
controller.player4.move_sprite(player4, 200, 200)
info.player4.set_life(3)
info.player4.set_score(0)

def on_update_interval():
    if info.player1.has_life():
        info.player1.change_score_by(1)
game.on_update_interval(0.0001, on_update_interval)

def on_update_interval2():
    if info.player2.has_life():
        info.player2.change_score_by(1)
game.on_update_interval(0.0001, on_update_interval2)

def on_update_interval3():
    if info.player3.has_life():
        info.player3.change_score_by(1)
game.on_update_interval(0.0001, on_update_interval3)

def on_update_interval4():
    if info.player4.has_life():
        info.player4.change_score_by(1)
game.on_update_interval(0.0001, on_update_interval4)

def on_update_interval5():
    global bogey
    bogey = sprites.create(img("""
            ...fffffff.........ccc..
            ...ff22ccff.......cc4f..
            ....fffccccfff...cc44f..
            ....cc24442222cccc442f..
            ...c9b4422222222cc422f..
            ..c999b2222222222222f55.
            .c2b99111b222222222c2254
            c222b111992222ccccccc454
            f222222222222c222ccf555.
            .f2222222222442222f.....
            ..ff2222222cf442222f....
            ....ffffffffff442222c...
            .........f2cfffc2222c...
            .........fcc2ffffffff...
            ..........fc2ffff.......
            ...........fffff........
            """),
        SpriteKind.enemy)
    bogey.set_velocity(-50, 0)
    bogey.set_position(180, randint(0, 120))
game.on_update_interval(500, on_update_interval5)
