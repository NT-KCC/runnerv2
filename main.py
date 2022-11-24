@namespace
class SpriteKind:
    Killer = SpriteKind.create()
    Chase = SpriteKind.create()
    Orb = SpriteKind.create()
    pill = SpriteKind.create()
    pill2 = SpriteKind.create()
    pill3 = SpriteKind.create()
    kill = SpriteKind.create()
    pill4 = SpriteKind.create()
    barrier = SpriteKind.create()
    C2 = SpriteKind.create()
    K2 = SpriteKind.create()
    P2 = SpriteKind.create()
    reward2 = SpriteKind.create()
    God = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    global Runner2, C22, K22, Key, reward22, pill42, barrier2
    Ghost.destroy()
    Runner.destroy()
    reward.destroy()
    Killer2.destroy()
    Chase2.destroy()
    pill1.destroy()
    pill22.destroy()
    pill32.destroy()
    Runner.destroy()
    tiles.set_current_tilemap(tilemap("""
        level2
    """))
    Runner2 = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f f f . . . . 
                    . . . . . f 5 5 5 5 5 f . . . . 
                    . . . . . f 5 8 5 8 5 f . . . . 
                    . . . . . f 5 f f f 5 f . . . . 
                    . . . . . f f f f f f f . . . . 
                    . . . . f f e 9 e 9 e . . . . . 
                    . . . . f f e 9 e 9 e . . . . . 
                    . . . . f f e 9 e 9 e . . . . . 
                    . . . . f f 9 9 9 9 9 . . . . . 
                    . . . . f f 9 9 9 9 9 . . . . . 
                    . . . . . . 9 9 9 9 9 . . . . . 
                    . . . . . . 9 9 . 9 9 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.P2)
    C22 = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 1 1 1 1 . 1 1 1 1 . . . . 
                    . . . 1 2 f 1 . 1 2 f 1 . . . . 
                    . . . 1 f f 1 . 1 f f 1 . . . . 
                    . . . 1 f 2 1 . 1 f 2 1 . . . . 
                    . . . 1 1 1 1 . 1 1 1 1 . . . . 
                    1 1 . . . . . . . . . . . 1 1 . 
                    1 1 1 . . . . . . . . . 1 1 1 1 
                    1 2 1 1 1 . . . . . . 1 1 2 2 1 
                    1 f 2 2 1 1 1 1 1 1 1 1 2 f f 1 
                    1 f f f f f f f f f f f f f 1 1 
                    1 1 1 1 1 2 2 f f f f 2 2 1 1 . 
                    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.C2)
    K22 = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 2 2 2 2 . 2 2 2 2 . . . . 
                    . . . 2 f f 2 . 2 f f 2 . . . . 
                    . . . 2 f f 2 . 2 f f 2 . . . . 
                    . . . 2 2 2 2 . 2 2 2 2 . . . . 
                    2 2 . 2 2 2 2 . 2 2 2 2 . . 2 2 
                    2 2 . . . . . . . . . . . 2 2 2 
                    2 2 2 2 2 . . . . . . . . 2 2 2 
                    2 2 2 2 2 2 . . . . . . 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.K2)
    Key = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f . . . . . . . . . 
                    . . . f 5 5 5 f f f f f f f . . 
                    . . f 5 f f 5 5 5 5 5 5 5 f . . 
                    . . f 5 f f 5 5 5 5 5 5 5 f . . 
                    . . . f 5 5 5 f 5 5 f 5 5 f . . 
                    . . . . f f f . f f . f f . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.kill)
    reward22 = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 4 4 4 4 4 . . . . . . 
                    . . . 4 4 4 5 5 5 d 4 4 4 4 . . 
                    . . 4 d 5 d 5 5 5 d d d 4 4 . . 
                    . . 4 5 5 1 1 1 d d 5 5 5 4 . . 
                    . 4 5 5 5 1 1 1 5 1 1 5 5 4 4 . 
                    . 4 d d 1 1 5 5 5 1 1 5 5 d 4 . 
                    . 4 5 5 1 1 5 1 1 5 5 d d d 4 . 
                    . 2 5 5 5 d 1 1 1 5 1 1 5 5 2 . 
                    . 2 d 5 5 d 1 1 1 5 1 1 5 5 2 . 
                    . . 2 4 d d 5 5 5 5 d d 5 4 . . 
                    . . . 2 2 4 d 5 5 d d 4 4 . . . 
                    . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
                    . . . 2 2 4 4 4 4 4 4 2 2 . . . 
                    . . . . . 2 2 2 2 2 2 . . . . .
        """),
        SpriteKind.reward2)
    pill42 = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 9 7 7 7 7 9 . . . . . 
                    . . . . . 7 9 7 7 9 7 . . . . . 
                    . . . . . 7 7 9 9 7 7 . . . . . 
                    . . . . . 7 7 9 9 7 7 . . . . . 
                    . . . . . 7 9 7 7 9 7 . . . . . 
                    . . . . . 9 7 7 7 7 9 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.pill4)
    barrier2 = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . e . . . . . e . . . . . 
                    . . . . . e . . . e . . . . . . 
                    . . . . . . e . e . . . . . . . 
                    . . . . . . . e . . . . . . . . 
                    . . . . . . e . e . . . . . . . 
                    . . . . . e . . . e . . . . . . 
                    . . . . e . . . . . e . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.barrier)
    tiles.place_on_tile(barrier2, tiles.get_tile_location(8, 9))
    tiles.place_on_tile(reward22, tiles.get_tile_location(10, 9))
    tiles.place_on_random_tile(C22, sprites.dungeon.dark_ground_center)
    tiles.place_on_random_tile(K22, sprites.dungeon.floor_mixed)
    tiles.place_on_random_tile(Runner2, sprites.dungeon.floor_dark_diamond)
    tiles.place_on_random_tile(pill42, sprites.dungeon.collectible_insignia)
    tiles.place_on_random_tile(Key, sprites.dungeon.chest_closed)
    C22.follow(Runner2, 95)
    K22.follow(Runner2, 55)
    controller.move_sprite(Runner2, 110, 110)
    scene.camera_follow_sprite(Runner2)
    info.set_score(0)
sprites.on_overlap(SpriteKind.player, SpriteKind.Orb, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    Runner.say_text("+1 fireball", 500, False)
    info.change_score_by(1)
    pill1.destroy()
sprites.on_overlap(SpriteKind.player, SpriteKind.pill, on_on_overlap2)

def on_b_pressed():
    global projectile
    if 1 <= info.score():
        projectile = sprites.create_projectile_from_sprite(img("""
                . . . . . . . . . . . . . . . . 
                            . . . . . . 3 1 1 . . . . . . . 
                            . . . . . 3 3 . 3 1 . . . . . . 
                            . . 3 2 2 3 . . . 1 . . . . . . 
                            . 3 3 1 2 2 . . . 3 1 . . . . . 
                            . 3 1 1 1 3 2 2 . 3 1 . . . . . 
                            . 3 1 1 1 3 3 3 3 3 1 2 2 2 . . 
                            . 3 1 1 1 1 1 1 1 3 1 1 1 1 . . 
                            . 3 1 1 1 3 3 3 3 3 1 2 2 2 . . 
                            . 3 1 1 1 3 2 2 . 3 1 . . . . . 
                            . 3 3 1 2 2 . . . 3 1 . . . . . 
                            . . 3 2 2 3 . . . 1 . . . . . . 
                            . . . . . 3 3 . 3 1 . . . . . . 
                            . . . . . . 3 1 1 . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . .
            """),
            Runner,
            -100,
            0)
        projectile.start_effect(effects.fire, 5000)
        info.change_score_by(-1)
    else:
        Runner.say_text("Reloading!", 5000, False)
        pause(5000)
        info.set_score(1)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_on_overlap3(sprite3, otherSprite3):
    global Killer2
    Killer2.destroy(effects.fire, 2000)
    pause(2700)
    Killer2 = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 5 5 5 5 . 5 5 5 5 . . . . 
                    . . . 5 5 5 5 . 5 5 5 5 . . . . 
                    . . . 5 5 5 5 . 5 5 5 5 . . . . 
                    . . . 5 5 5 5 . 5 5 5 5 . . . . 
                    5 5 . 5 5 5 5 . 5 5 5 5 . . 5 5 
                    5 5 . . . . . . . . . . . 5 5 5 
                    5 5 5 5 5 . . . . . . . . 5 5 5 
                    5 5 5 5 5 5 . . . . . . 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.Killer)
    tiles.place_on_tile(Killer2, tiles.get_tile_location(14, 14))
    Killer2.follow(Runner, 55)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.Killer, on_on_overlap3)

def on_on_overlap4(sprite4, otherSprite4):
    Runner.say_text("Teleporting...", 500, False)
    tiles.place_on_random_tile(Runner, assets.tile("""
        transparency16
    """))
    pill22.destroy()
sprites.on_overlap(SpriteKind.player, SpriteKind.pill2, on_on_overlap4)

def on_on_overlap5(sprite5, otherSprite5):
    global Ghost, Runner
    Ghost = sprites.create(img("""
            . . . . . . 7 7 7 7 7 . . . . . 
                    . . . . . . 7 1 7 1 7 . . . . . 
                    1 1 . . . . 7 7 7 7 7 . . . 1 1 
                    1 1 1 1 1 1 7 7 7 7 7 1 1 1 1 1 
                    . 1 . 1 . 1 2 9 2 9 2 1 . 1 1 . 
                    . . . . . . 2 9 2 9 2 . . . . . 
                    . . . . . . 2 9 2 9 2 . . . . . 
                    . . . . . . 9 9 9 9 9 . . . . . 
                    . . . . . . 9 9 . 9 9 . . . . . 
                    . . . . . . 9 9 . 9 9 . . . . . 
                    . . . . . . 9 9 . 9 9 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.player)
    controller.move_sprite(Ghost, 200, 200)
    scene.camera_follow_sprite(Ghost)
    tiles.place_on_tile(Ghost, tiles.get_tile_location(8, 0))
    Ghost.say_text("Going ghost!", 1000, False)
    pill32.destroy()
    Runner.destroy()
    pause(2000)
    Ghost.destroy(effects.fire, 2000)
    Runner = sprites.create(img("""
            . . . . . . 5 5 5 5 5 . . . . . 
                    . . . . . . 5 f 5 f 5 . . . . . 
                    . . . . . . 5 5 5 5 5 . . . . . 
                    . . . . . . 5 5 5 5 5 . . . . . 
                    . . . . . . 4 6 4 6 4 . . . . . 
                    . . . . . . 4 6 4 6 4 . . . . . 
                    . . . . . . 4 6 4 6 4 . . . . . 
                    . . . . . . 6 6 6 6 6 . . . . . 
                    . . . . . . 6 6 f 6 6 . . . . . 
                    . . . . . . 6 6 f 6 6 . . . . . 
                    . . . . . . 6 6 . 6 6 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.player)
    controller.move_sprite(Runner, 110, 110)
    scene.camera_follow_sprite(Runner)
    tiles.place_on_random_tile(Runner, assets.tile("""
        transparency16
    """))
    Chase2.follow(Runner)
    Killer2.follow(Runner)
sprites.on_overlap(SpriteKind.player, SpriteKind.pill3, on_on_overlap5)

def on_a_pressed():
    global projectile
    if 1 <= info.score():
        projectile = sprites.create_projectile_from_sprite(img("""
                . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . 1 1 3 . . . . . . 
                            . . . . . . 1 3 . 3 3 . . . . . 
                            . . . . . . 1 . . . 3 2 2 3 . . 
                            . . . . . 1 3 . . . 2 2 1 3 3 . 
                            . . . . . 1 3 . 2 2 3 1 1 1 3 . 
                            . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
                            . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
                            . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
                            . . . . . 1 3 . 2 2 3 1 1 1 3 . 
                            . . . . . 1 3 . . . 2 2 1 3 3 . 
                            . . . . . . 1 . . . 3 2 2 3 . . 
                            . . . . . . 1 3 . 3 3 . . . . . 
                            . . . . . . . 1 1 3 . . . . . . 
                            . . . . . . . . . . . . . . . .
            """),
            Runner,
            100,
            0)
        projectile.start_effect(effects.fire, 5000)
        info.change_score_by(-1)
    else:
        Runner.say_text("Reloading!", 5000, False)
        pause(5000)
        info.set_score(1)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap6(sprite6, otherSprite6):
    game.over(False, effects.smiles)
sprites.on_overlap(SpriteKind.player, SpriteKind.Killer, on_on_overlap6)

def on_on_overlap7(sprite7, otherSprite7):
    global pill42, reward22
    tiles.set_current_tilemap(tilemap("""
        level5
    """))
    scene.camera_shake(6, 5000)
    reward22.destroy(effects.disintegrate, 1000)
    Runner2.say_text("DANGER!", 5000, False)
    pill42.destroy()
    pause(5000)
    tiles.set_current_tilemap(tilemap("""
        level2
    """))
    pill42 = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 9 7 7 7 7 9 . . . . . 
                    . . . . . 7 9 7 7 9 7 . . . . . 
                    . . . . . 7 7 9 9 7 7 . . . . . 
                    . . . . . 7 7 9 9 7 7 . . . . . 
                    . . . . . 7 9 7 7 9 7 . . . . . 
                    . . . . . 9 7 7 7 7 9 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.pill4)
    reward22 = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 4 4 4 4 4 . . . . . . 
                    . . . 4 4 4 5 5 5 d 4 4 4 4 . . 
                    . . 4 d 5 d 5 5 5 d d d 4 4 . . 
                    . . 4 5 5 1 1 1 d d 5 5 5 4 . . 
                    . 4 5 5 5 1 1 1 5 1 1 5 5 4 4 . 
                    . 4 d d 1 1 5 5 5 1 1 5 5 d 4 . 
                    . 4 5 5 1 1 5 1 1 5 5 d d d 4 . 
                    . 2 5 5 5 d 1 1 1 5 1 1 5 5 2 . 
                    . 2 d 5 5 d 1 1 1 5 1 1 5 5 2 . 
                    . . 2 4 d d 5 5 5 5 d d 5 4 . . 
                    . . . 2 2 4 d 5 5 d d 4 4 . . . 
                    . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
                    . . . 2 2 4 4 4 4 4 4 2 2 . . . 
                    . . . . . 2 2 2 2 2 2 . . . . .
        """),
        SpriteKind.reward2)
    tiles.place_on_random_tile(pill42, sprites.dungeon.collectible_insignia)
    tiles.place_on_tile(reward22, tiles.get_tile_location(10, 9))
sprites.on_overlap(SpriteKind.P2, SpriteKind.C2, on_on_overlap7)

def on_on_overlap8(sprite8, otherSprite8):
    game.over(False, effects.smiles)
sprites.on_overlap(SpriteKind.P2, SpriteKind.K2, on_on_overlap8)

def on_on_overlap9(sprite9, otherSprite9):
    global KillerKiller
    Runner2.destroy(effects.halo, 5000)
    KillerKiller = sprites.create(img("""
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 f f f f f f f f f f 1 1 1 
                    1 1 1 f f f f f f f f f f 1 1 1 
                    1 1 1 f f 9 9 9 9 9 9 f f 1 1 1 
                    1 1 1 f f 9 9 9 9 9 9 f f 1 1 1 
                    1 1 1 f f 9 9 9 9 9 9 f f 1 1 1 
                    1 1 1 f f 9 9 9 9 9 9 f f 1 1 1 
                    1 1 1 f f 9 9 9 9 9 9 f f 1 1 1 
                    1 1 1 f f 9 9 9 9 9 9 f f 1 1 1 
                    1 1 1 f f f f f f f f f f 1 1 1 
                    1 1 1 f f f f f f f f f f 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        """),
        SpriteKind.God)
    tiles.set_current_tilemap(tilemap("""
        level5
    """))
    Runner2.say_text("You are the killer", 1000, False)
    scene.camera_follow_sprite(KillerKiller)
    controller.move_sprite(KillerKiller, 50, 50)
    pill42.destroy()
    K22.follow(KillerKiller, -10)
    C22.follow(KillerKiller, -10)
    C22.set_bounce_on_wall(True)
    K22.set_bounce_on_wall(True)
    reward22.destroy()
    Key.destroy()
sprites.on_overlap(SpriteKind.P2, SpriteKind.pill4, on_on_overlap9)

def on_on_overlap10(sprite10, otherSprite10):
    global C22
    C22.destroy(effects.fire, 2000)
    pause(5000)
    C22 = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 1 1 1 1 . 1 1 1 1 . . . . 
                    . . . 1 2 f 1 . 1 2 f 1 . . . . 
                    . . . 1 f f 1 . 1 f f 1 . . . . 
                    . . . 1 f 2 1 . 1 f 2 1 . . . . 
                    . . . 1 1 1 1 . 1 1 1 1 . . . . 
                    1 1 . . . . . . . . . . . 1 1 . 
                    1 1 1 . . . . . . . . . 1 1 1 1 
                    1 2 1 1 1 . . . . . . 1 1 2 2 1 
                    1 f 2 2 1 1 1 1 1 1 1 1 2 f f 1 
                    1 f f f f f f f f f f f f f 1 1 
                    1 1 1 1 1 2 2 f f f f 2 2 1 1 . 
                    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.C2)
    tiles.place_on_random_tile(C22, sprites.dungeon.dark_ground_center)
    C22.follow(Runner2, 95)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.C2, on_on_overlap10)

def on_on_score():
    game.over(True)
info.on_score(100, on_on_score)

def on_on_overlap11(sprite11, otherSprite11):
    tiles.place_on_tile(Runner2, tiles.get_tile_location(7, 9))
    barrier2.say_text("You need a key!", 2000, False)
sprites.on_overlap(SpriteKind.barrier, SpriteKind.P2, on_on_overlap11)

def on_on_overlap12(sprite12, otherSprite12):
    info.change_score_by(2)
    C22.destroy(effects.fire, 2000)
sprites.on_overlap(SpriteKind.God, SpriteKind.C2, on_on_overlap12)

def on_on_overlap13(sprite13, otherSprite13):
    Key.destroy(effects.rings, 1000)
    music.ba_ding.play_until_done()
    barrier2.destroy()
sprites.on_overlap(SpriteKind.P2, SpriteKind.kill, on_on_overlap13)

def on_on_overlap14(sprite14, otherSprite14):
    global reward
    tiles.set_current_tilemap(tilemap("""
        level4
    """))
    scene.camera_shake(6, 5000)
    reward.destroy(effects.disintegrate, 1000)
    Runner.say_text("DANGER!", 5000, False)
    pause(5000)
    tiles.set_current_tilemap(tilemap("""
        level1
    """))
    reward = sprites.create(img("""
            . . . . . b b b b b b . . . . . 
                    . . . b b 9 9 9 9 9 9 b b . . . 
                    . . b b 9 9 9 9 9 9 9 9 b b . . 
                    . b b 9 d 9 9 9 9 9 9 9 9 b b . 
                    . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
                    b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
                    b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
                    b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
                    b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
                    b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
                    b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
                    . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
                    . b d 5 3 3 3 3 3 3 3 d 5 b b . 
                    . . b d 5 d 3 3 3 3 5 5 b b . . 
                    . . . b b 5 5 5 5 5 5 b b . . . 
                    . . . . . b b b b b b . . . . .
        """),
        SpriteKind.Orb)
    tiles.place_on_tile(reward, tiles.get_tile_location(14, 14))
sprites.on_overlap(SpriteKind.player, SpriteKind.Chase, on_on_overlap14)

def on_on_overlap15(sprite15, otherSprite15):
    global K22
    K22.destroy(effects.fire, 2000)
    pause(5000)
    K22 = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 2 2 2 2 . 2 2 2 2 . . . . 
                    . . . 2 f f 2 . 2 f f 2 . . . . 
                    . . . 2 f f 2 . 2 f f 2 . . . . 
                    . . . 2 2 2 2 . 2 2 2 2 . . . . 
                    2 2 . 2 2 2 2 . 2 2 2 2 . . 2 2 
                    2 2 . . . . . . . . . . . 2 2 2 
                    2 2 2 2 2 . . . . . . . . 2 2 2 
                    2 2 2 2 2 2 . . . . . . 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.K2)
    tiles.place_on_random_tile(K22, sprites.dungeon.floor_mixed)
    K22.follow(Runner2, 55)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.K2, on_on_overlap15)

def on_on_overlap16(sprite16, otherSprite16):
    game.over(True)
sprites.on_overlap(SpriteKind.P2, SpriteKind.reward2, on_on_overlap16)

def on_on_overlap17(sprite17, otherSprite17):
    global Chase2
    Chase2.destroy(effects.fire, 2000)
    pause(5000)
    Chase2 = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f f f f . f f f f . . . . 
                    . . . f 2 1 f . f 2 1 f . . . . 
                    . . . f 1 1 f . f 1 1 f . . . . 
                    . . . f 1 2 f . f 1 2 f . . . . 
                    . . . f f f f . f f f f . . . . 
                    f f . . . . . . . . . . . f f . 
                    f f f . . . . . . . . . f f f f 
                    f 2 f f f . . . . . . f f 2 2 f 
                    f 1 2 2 f f f f f f f f 2 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 
                    f f f f f 2 2 1 1 1 1 2 2 f f . 
                    . . . . f f f f f f f f f f . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.Chase)
    tiles.place_on_tile(Chase2, tiles.get_tile_location(8, 10))
    Chase2.follow(Runner, 95)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.Chase, on_on_overlap17)

def on_on_overlap18(sprite18, otherSprite18):
    K22.destroy(effects.smiles, 2000)
    info.change_score_by(98)
sprites.on_overlap(SpriteKind.God, SpriteKind.K2, on_on_overlap18)

KillerKiller: Sprite = None
projectile: Sprite = None
barrier2: Sprite = None
pill42: Sprite = None
reward22: Sprite = None
Key: Sprite = None
K22: Sprite = None
C22: Sprite = None
Runner2: Sprite = None
Ghost: Sprite = None
pill32: Sprite = None
pill22: Sprite = None
pill1: Sprite = None
reward: Sprite = None
Killer2: Sprite = None
Chase2: Sprite = None
Runner: Sprite = None
Runner = sprites.create(img("""
        . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . . 5 f 5 f 5 . . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . . 4 6 4 6 4 . . . . . 
            . . . . . . 4 6 4 6 4 . . . . . 
            . . . . . . 4 6 4 6 4 . . . . . 
            . . . . . . 6 6 6 6 6 . . . . . 
            . . . . . . 6 6 f 6 6 . . . . . 
            . . . . . . 6 6 f 6 6 . . . . . 
            . . . . . . 6 6 . 6 6 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.player)
Chase2 = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f . f f f f . . . . 
            . . . f 2 1 f . f 2 1 f . . . . 
            . . . f 1 1 f . f 1 1 f . . . . 
            . . . f 1 2 f . f 1 2 f . . . . 
            . . . f f f f . f f f f . . . . 
            f f . . . . . . . . . . . f f . 
            f f f . . . . . . . . . f f f f 
            f 2 f f f . . . . . . f f 2 2 f 
            f 1 2 2 f f f f f f f f 2 1 1 f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 
            f f f f f 2 2 1 1 1 1 2 2 f f . 
            . . . . f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.Chase)
Killer2 = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 5 5 5 5 . 5 5 5 5 . . . . 
            . . . 5 5 5 5 . 5 5 5 5 . . . . 
            . . . 5 5 5 5 . 5 5 5 5 . . . . 
            . . . 5 5 5 5 . 5 5 5 5 . . . . 
            5 5 . 5 5 5 5 . 5 5 5 5 . . 5 5 
            5 5 . . . . . . . . . . . 5 5 5 
            5 5 5 5 5 . . . . . . . . 5 5 5 
            5 5 5 5 5 5 . . . . . . 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.Killer)
reward = sprites.create(img("""
        . . . . . b b b b b b . . . . . 
            . . . b b 9 9 9 9 9 9 b b . . . 
            . . b b 9 9 9 9 9 9 9 9 b b . . 
            . b b 9 d 9 9 9 9 9 9 9 9 b b . 
            . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
            b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
            b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
            b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
            b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
            b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
            b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
            . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
            . b d 5 3 3 3 3 3 3 3 d 5 b b . 
            . . b d 5 d 3 3 3 3 5 5 b b . . 
            . . . b b 5 5 5 5 5 5 b b . . . 
            . . . . . b b b b b b . . . . .
    """),
    SpriteKind.Orb)
pill1 = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f . . . . 
            . . . . . . f f 2 2 2 f . . . . 
            . . . . . f f 2 2 2 2 f . . . . 
            . . . . f f f 2 2 2 2 f . . . . 
            . . . f f 1 f f 2 2 f f . . . . 
            . . . f 1 1 1 f f f f . . . . . 
            . . . f 1 1 1 1 f f . . . . . . 
            . . . f 1 1 1 f f . . . . . . . 
            . . . f f 1 f f . . . . . . . . 
            . . . . f f f . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.pill)
pill22 = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f . . . . 
            . . . . . . f f 5 5 5 f . . . . 
            . . . . . f f 5 5 5 5 f . . . . 
            . . . . f f f 5 5 5 5 f . . . . 
            . . . f f 1 f f 5 5 f f . . . . 
            . . . f 1 1 1 f f f f . . . . . 
            . . . f 1 1 1 1 f f . . . . . . 
            . . . f 1 1 1 f f . . . . . . . 
            . . . f f 1 f f . . . . . . . . 
            . . . . f f f . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.pill2)
pill32 = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f . . . . 
            . . . . . . f f 7 7 7 f . . . . 
            . . . . . f f 7 7 7 7 f . . . . 
            . . . . f f f 7 7 7 7 f . . . . 
            . . . f f 1 f f 7 7 f f . . . . 
            . . . f 1 1 1 f f f f . . . . . 
            . . . f 1 1 1 1 f f . . . . . . 
            . . . f 1 1 1 f f . . . . . . . 
            . . . f f 1 f f . . . . . . . . 
            . . . . f f f . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.pill3)
scene.camera_follow_sprite(Runner)
scene.set_background_color(9)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
tiles.place_on_tile(Runner, tiles.get_tile_location(1, 1))
tiles.place_on_tile(Chase2, tiles.get_tile_location(8, 10))
tiles.place_on_tile(Killer2, tiles.get_tile_location(14, 14))
tiles.place_on_tile(reward, tiles.get_tile_location(14, 14))
tiles.place_on_random_tile(pill1, sprites.dungeon.collectible_insignia)
tiles.place_on_random_tile(pill22, sprites.dungeon.button_orange)
tiles.place_on_random_tile(pill32, sprites.dungeon.green_outer_north2)
info.set_score(1)
controller.move_sprite(Runner, 110, 110)
Killer2.follow(Runner, 45)
Chase2.follow(Runner, 95)