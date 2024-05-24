namespace SpriteKind {
    export const Map = SpriteKind.create()
}
namespace StatusBarKind {
    export const Fuel = StatusBarKind.create()
    export const Gravity = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanDepths0, function (sprite, location) {
    game.over(false, effects.confetti)
})
statusbars.onZero(StatusBarKind.Fuel, function (status) {
    game.over(false, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false, effects.confetti)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ay = GRAVITY
    mySprite.setImage(img`
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . 1 f f f f f 1 . . . . . 
        . . . . 1 9 7 2 7 9 1 . . . . . 
        . . . . 1 9 7 2 7 9 1 . . . . . 
        . . . . 1 9 7 2 7 9 1 . . . . . 
        . . . . 1 9 7 2 7 9 1 . . . . . 
        . . . . 1 9 7 2 7 9 1 . . . . . 
        . . . . 1 1 8 8 8 1 1 . . . . . 
        . . . . 1 8 8 8 8 8 1 . . . . . 
        . . . . . 1 f 1 f 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ax = Math.abs(THRUST)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 . . . 1 1 1 1 1 1 1 1 . . . . 
        5 2 . 1 8 1 9 9 9 9 9 f 1 . . . 
        5 4 2 f 8 8 7 7 7 7 7 f f 1 . . 
        2 2 . 1 8 8 2 2 2 2 2 f f 1 1 1 
        5 4 2 f 8 8 7 7 7 7 7 f f 1 . . 
        5 2 . 1 8 1 9 9 9 9 9 f 1 . . . 
        2 . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ax = idle
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 f 9 9 9 9 9 1 8 1 . . . 
        . . 1 f f 7 7 7 7 7 8 8 f . . . 
        1 1 1 f f 2 2 2 2 2 8 8 1 . . . 
        . . 1 f f 7 7 7 7 7 8 8 f . . . 
        . . . 1 f 9 9 9 9 9 1 8 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
function score (score_multi: number) {
    end_game_score = 0
    if (mySprite.vy > 10) {
        game.over(false, effects.confetti)
    } else {
        info.setScore(Math.abs(info.life() - (end_game_score * score_multi + statusbar.value)))
        game.over(true, effects.confetti)
    }
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ax = idle
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 8 1 9 9 9 9 9 f 1 . . . 
        . . . f 8 8 7 7 7 7 7 f f 1 . . 
        . . . 1 8 8 2 2 2 2 2 f f 1 1 1 
        . . . f 8 8 7 7 7 7 7 f f 1 . . 
        . . . 1 8 1 9 9 9 9 9 f 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock0, function (sprite, location) {
    score(2)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ax = -4
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . 2 
        . . . 1 f 9 9 9 9 9 1 8 1 . 2 5 
        . . 1 f f 7 7 7 7 7 8 8 f 2 4 5 
        1 1 1 f f 2 2 2 2 2 8 8 1 . 2 2 
        . . 1 f f 7 7 7 7 7 8 8 f 2 4 5 
        . . . 1 f 9 9 9 9 9 1 8 1 . 2 5 
        . . . . 1 1 1 1 1 1 1 1 . . . 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrangeDepressed, function (sprite, location) {
    score(4)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanSand6, function (sprite, location) {
    score(3)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ay = 0 - (GRAVITY - THRUST)
    mySprite.setImage(img`
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . 1 f f f f f 1 . . . . . 
        . . . . 1 9 7 2 7 9 1 . . . . . 
        . . . . 1 9 7 2 7 9 1 . . . . . 
        . . . . 1 9 7 2 7 9 1 . . . . . 
        . . . . 1 9 7 2 7 9 1 . . . . . 
        . . . . 1 9 7 2 7 9 1 . . . . . 
        . . . . 1 1 8 8 8 1 1 . . . . . 
        . . . . 1 8 8 8 8 8 1 . . . . . 
        . . . . . 1 f 1 f 1 . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . 2 4 2 4 2 . . . . . . 
        . . . . 2 5 5 2 5 5 2 . . . . . 
        `)
})
info.onLifeZero(function () {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanSand5, function (sprite, location) {
    score(3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanSand2, function (sprite, location) {
    score(3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanSand3, function (sprite, location) {
    score(3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    score(10)
})
let end_game_score = 0
let statusbar: StatusBarSprite = null
let THRUST = 0
let mySprite: Sprite = null
let GRAVITY = 0
let idle = 0
idle = 0
GRAVITY = randint(0.03, 19.5)
story.printText("Gravity: " + convertToText(GRAVITY), 75, 0, 15)
mySprite = sprites.create(img`
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 f f f 1 . . . . . . 
    . . . . 1 f f f f f 1 . . . . . 
    . . . . 1 9 7 2 7 9 1 . . . . . 
    . . . . 1 9 7 2 7 9 1 . . . . . 
    . . . . 1 9 7 2 7 9 1 . . . . . 
    . . . . 1 9 7 2 7 9 1 . . . . . 
    . . . . 1 9 7 2 7 9 1 . . . . . 
    . . . . 1 1 8 8 8 1 1 . . . . . 
    . . . . 1 8 8 8 8 8 1 . . . . . 
    . . . . . 1 f 1 f 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
THRUST = GRAVITY * 1.25 - 20
mySprite.ay = GRAVITY
mySprite.setFlag(SpriteFlag.ShowPhysics, true)
tiles.setCurrentTilemap(tilemap`level1`)
effects.starField.startScreenEffect()
scene.cameraFollowSprite(mySprite)
statusbar = statusbars.create(50, 4, StatusBarKind.Fuel)
statusbar.positionDirection(CollisionDirection.Top)
statusbar.setLabel("FUEL")
statusbar.attachToSprite(mySprite)
let myMinimap = minimap.minimap(MinimapScale.Sixteenth, 5, 4)
let mapSprite = sprites.create(minimap.getImage(myMinimap), SpriteKind.Map)
minimap.includeSprite(myMinimap, mySprite)
mapSprite.setPosition(12, 14)
mapSprite.setStayInScreen(true)
let number_of_pressing = 0
info.setLife(number_of_pressing)
game.onUpdate(function () {
    if (controller.left.isPressed() || (controller.right.isPressed() || controller.down.isPressed())) {
        statusbar.value += -0.075
        info.changeLifeBy(1)
    }
})
