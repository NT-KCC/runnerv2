namespace SpriteKind {
    export const Killer = SpriteKind.create()
    export const Chase = SpriteKind.create()
    export const Orb = SpriteKind.create()
    export const pill = SpriteKind.create()
    export const pill2 = SpriteKind.create()
    export const pill3 = SpriteKind.create()
    export const kill = SpriteKind.create()
    export const pill4 = SpriteKind.create()
    export const barrier = SpriteKind.create()
    export const C2 = SpriteKind.create()
    export const K2 = SpriteKind.create()
    export const P2 = SpriteKind.create()
    export const reward2 = SpriteKind.create()
    export const God = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const TestMode = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Orb, function (sprite, otherSprite) {
    Ghost.destroy()
    Runner.destroy()
    reward.destroy()
    Killer.destroy()
    Chase.destroy()
    pill1.destroy()
    pill2.destroy()
    pill3.destroy()
    Runner.destroy()
    tiles.setCurrentTilemap(tilemap`level2`)
    Runner2 = sprites.create(img`
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
        `, SpriteKind.P2)
    C2 = sprites.create(img`
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
        `, SpriteKind.C2)
    K2 = sprites.create(img`
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
        `, SpriteKind.K2)
    Key = sprites.create(img`
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
        `, SpriteKind.kill)
    reward2 = sprites.create(img`
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
        `, SpriteKind.reward2)
    pill4 = sprites.create(img`
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
        `, SpriteKind.pill4)
    barrier = sprites.create(img`
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
        `, SpriteKind.barrier)
    tiles.placeOnTile(barrier, tiles.getTileLocation(8, 9))
    tiles.placeOnTile(reward2, tiles.getTileLocation(10, 9))
    tiles.placeOnRandomTile(C2, sprites.dungeon.darkGroundCenter)
    tiles.placeOnRandomTile(K2, sprites.dungeon.floorMixed)
    tiles.placeOnRandomTile(Runner2, sprites.dungeon.floorDarkDiamond)
    tiles.placeOnRandomTile(pill4, sprites.dungeon.collectibleInsignia)
    tiles.placeOnRandomTile(Key, sprites.dungeon.chestClosed)
    C2.follow(Runner2, 95)
    K2.follow(Runner2, 55)
    controller.moveSprite(Runner2, 110, 110)
    scene.cameraFollowSprite(Runner2)
    info.setScore(0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.pill, function (sprite, otherSprite) {
    Runner.sayText("+1 fireball", 500, false)
    info.changeScoreBy(1)
    pill1.destroy()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (1 <= info.score()) {
        projectile = sprites.createProjectileFromSprite(img`
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
            `, Runner, -100, 0)
        projectile.startEffect(effects.fire, 5000)
        info.changeScoreBy(-1)
    } else {
        Runner.sayText("Reloading!", 5000, false)
        pause(5000)
        info.setScore(1)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Killer, function (sprite, otherSprite) {
    Killer.destroy(effects.fire, 2000)
    pause(2700)
    Killer = sprites.create(img`
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
        `, SpriteKind.Killer)
    tiles.placeOnTile(Killer, tiles.getTileLocation(14, 14))
    Killer.follow(Runner, 55)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.pill2, function (sprite, otherSprite) {
    Runner.sayText("Teleporting...", 500, false)
    tiles.placeOnRandomTile(Runner, assets.tile`transparency16`)
    pill2.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.pill3, function (sprite, otherSprite) {
    Ghost = sprites.create(img`
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
        `, SpriteKind.Player)
    controller.moveSprite(Ghost, 200, 200)
    scene.cameraFollowSprite(Ghost)
    tiles.placeOnTile(Ghost, tiles.getTileLocation(8, 0))
    Ghost.sayText("Going ghost!", 1000, false)
    pill3.destroy()
    Runner.destroy()
    pause(2000)
    Ghost.destroy(effects.fire, 2000)
    Runner = sprites.create(img`
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
        `, SpriteKind.Player)
    controller.moveSprite(Runner, 110, 110)
    scene.cameraFollowSprite(Runner)
    tiles.placeOnRandomTile(Runner, assets.tile`transparency16`)
    Chase.follow(Runner)
    Killer.follow(Runner)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (1 <= info.score()) {
        projectile = sprites.createProjectileFromSprite(img`
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
            `, Runner, 100, 0)
        projectile.startEffect(effects.fire, 5000)
        info.changeScoreBy(-1)
    } else {
        Runner.sayText("Reloading!", 5000, false)
        pause(5000)
        info.setScore(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Killer, function (sprite, otherSprite) {
    game.over(false, effects.smiles)
})
sprites.onOverlap(SpriteKind.P2, SpriteKind.C2, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`level5`)
    scene.cameraShake(6, 5000)
    reward2.destroy(effects.disintegrate, 1000)
    Runner2.sayText("DANGER!", 5000, false)
    pill4.destroy()
    pause(5000)
    tiles.setCurrentTilemap(tilemap`level2`)
    pill4 = sprites.create(img`
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
        `, SpriteKind.pill4)
    reward2 = sprites.create(img`
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
        `, SpriteKind.reward2)
    tiles.placeOnRandomTile(pill4, sprites.dungeon.collectibleInsignia)
    tiles.placeOnTile(reward2, tiles.getTileLocation(10, 9))
})
sprites.onOverlap(SpriteKind.P2, SpriteKind.K2, function (sprite, otherSprite) {
    game.over(false, effects.smiles)
})
sprites.onOverlap(SpriteKind.P2, SpriteKind.pill4, function (sprite, otherSprite) {
    Runner2.destroy(effects.halo, 5000)
    KillerKiller = sprites.create(img`
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
        `, SpriteKind.God)
    tiles.setCurrentTilemap(tilemap`level5`)
    Runner2.sayText("You are the killer", 1000, false)
    scene.cameraFollowSprite(KillerKiller)
    controller.moveSprite(KillerKiller, 50, 50)
    pill4.destroy()
    K2.follow(KillerKiller, -10)
    C2.follow(KillerKiller, -10)
    C2.setBounceOnWall(true)
    K2.setBounceOnWall(true)
    reward2.destroy()
    Key.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.C2, function (sprite, otherSprite) {
    C2.destroy(effects.fire, 2000)
    pause(5000)
    C2 = sprites.create(img`
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
        `, SpriteKind.C2)
    tiles.placeOnRandomTile(C2, sprites.dungeon.darkGroundCenter)
    C2.follow(Runner2, 95)
})
info.onScore(100, function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.barrier, SpriteKind.P2, function (sprite, otherSprite) {
    tiles.placeOnTile(Runner2, tiles.getTileLocation(7, 9))
    barrier.sayText("You need a key!", 2000, false)
})
sprites.onOverlap(SpriteKind.God, SpriteKind.C2, function (sprite, otherSprite) {
    info.changeScoreBy(2)
    C2.destroy(effects.fire, 2000)
})
sprites.onOverlap(SpriteKind.P2, SpriteKind.kill, function (sprite, otherSprite) {
    Key.destroy(effects.rings, 1000)
    music.baDing.playUntilDone()
    barrier.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Chase, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`level4`)
    scene.cameraShake(6, 5000)
    reward.destroy(effects.disintegrate, 1000)
    Runner.sayText("DANGER!", 5000, false)
    pause(5000)
    tiles.setCurrentTilemap(tilemap`level1`)
    reward = sprites.create(img`
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
        `, SpriteKind.Orb)
    tiles.placeOnTile(reward, tiles.getTileLocation(14, 14))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.K2, function (sprite, otherSprite) {
    K2.destroy(effects.fire, 2000)
    pause(5000)
    K2 = sprites.create(img`
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
        `, SpriteKind.K2)
    tiles.placeOnRandomTile(K2, sprites.dungeon.floorMixed)
    K2.follow(Runner2, 55)
})
sprites.onOverlap(SpriteKind.P2, SpriteKind.reward2, function (sprite, otherSprite) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Chase, function (sprite, otherSprite) {
    Chase.destroy(effects.fire, 2000)
    pause(5000)
    Chase = sprites.create(img`
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
        `, SpriteKind.Chase)
    tiles.placeOnTile(Chase, tiles.getTileLocation(8, 10))
    Chase.follow(Runner, 95)
})
sprites.onOverlap(SpriteKind.God, SpriteKind.K2, function (sprite, otherSprite) {
    K2.destroy(effects.smiles, 2000)
    info.changeScoreBy(98)
})
let KillerKiller: Sprite = null
let projectile: Sprite = null
let barrier: Sprite = null
let pill4: Sprite = null
let reward2: Sprite = null
let Key: Sprite = null
let K2: Sprite = null
let C2: Sprite = null
let Runner2: Sprite = null
let Ghost: Sprite = null
let pill3: Sprite = null
let pill2: Sprite = null
let pill1: Sprite = null
let reward: Sprite = null
let Killer: Sprite = null
let Chase: Sprite = null
let Runner: Sprite = null
Runner = sprites.create(img`
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
    `, SpriteKind.Player)
Chase = sprites.create(img`
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
    `, SpriteKind.Chase)
Killer = sprites.create(img`
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
    `, SpriteKind.Killer)
reward = sprites.create(img`
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
    `, SpriteKind.Orb)
pill1 = sprites.create(img`
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
    `, SpriteKind.pill)
pill2 = sprites.create(img`
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
    `, SpriteKind.pill2)
pill3 = sprites.create(img`
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
    `, SpriteKind.pill3)
let coins = sprites.create(img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `, SpriteKind.coin)
scene.cameraFollowSprite(Runner)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(Runner, tiles.getTileLocation(1, 1))
tiles.placeOnTile(Chase, tiles.getTileLocation(8, 10))
tiles.placeOnTile(Killer, tiles.getTileLocation(14, 14))
tiles.placeOnTile(reward, tiles.getTileLocation(14, 14))
tiles.placeOnRandomTile(pill1, sprites.dungeon.collectibleInsignia)
tiles.placeOnRandomTile(coins, assets.tile`transparency16`)
tiles.placeOnRandomTile(pill2, sprites.dungeon.buttonOrange)
tiles.placeOnRandomTile(pill3, sprites.dungeon.greenOuterNorth2)
info.setScore(1)
Killer.follow(Runner, 45)
Chase.follow(Runner, 95)
controller.moveSprite(Runner, 110, 110)
animation.runImageAnimation(
coins,
[img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `,img`
    . . b b b . . . 
    . b 5 5 5 b . . 
    b 5 d 3 d 5 b . 
    b 5 3 5 1 5 b . 
    c 5 3 5 1 d c . 
    c 5 d 1 d d c . 
    . f d d d f . . 
    . . f f f . . . 
    `,img`
    . . . b b . . . 
    . . b 5 5 b . . 
    . b 5 d 1 5 b . 
    . b 5 3 1 5 b . 
    . c 5 3 1 d c . 
    . c 5 1 d d c . 
    . . f d d f . . 
    . . . f f . . . 
    `,img`
    . . . b b . . . 
    . . b 5 5 b . . 
    . . b 1 1 b . . 
    . . b 5 5 b . . 
    . . b d d b . . 
    . . c d d c . . 
    . . c 3 3 c . . 
    . . . f f . . . 
    `,img`
    . . . b b . . . 
    . . b 5 5 b . . 
    . b 5 1 d 5 b . 
    . b 5 1 3 5 b . 
    . c d 1 3 5 c . 
    . c d d 1 5 c . 
    . . f d d f . . 
    . . . f f . . . 
    `,img`
    . . . b b b . . 
    . . b 5 5 5 b . 
    . b 5 d 3 d 5 b 
    . b 5 1 5 3 5 b 
    . c d 1 5 3 5 c 
    . c d d 1 d 5 c 
    . . f d d d f . 
    . . . f f f . . 
    `],
100,
true
)
