namespace SpriteKind {
    export const Map = SpriteKind.create()
}
namespace StatusBarKind {
    export const Fuel = StatusBarKind.create()
    export const Gravity = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanDepths0, function (sprite, location) {
    game.gameOver(false)
})
statusbars.onZero(StatusBarKind.Fuel, function (status) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false, effects.confetti)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (talks) { }
    else {
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
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (talks) { }
    else {
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
        statusbar.value += -1
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (talks) { }
    else {
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
    }
})
function score (score_multi: number) {
    end_game_score = 0
    if (mySprite.vy > 10) {
        game.gameOver(false)
    } else {
        info.setScore(Math.abs(info.life() - (end_game_score * score_multi + statusbar.value)))
        game.over(true, effects.confetti)
    }
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (talks) { }
    else {
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
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock0, function (sprite, location) {
    score(2)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (talks) { }
    else {
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
        statusbar.value += -1
    }
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
    if (talks) { }
    else {
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
        statusbar.value += -1
    }
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
let talks = true
let end_game_score = 0
let number_of_pressing = 0
let statusbar: StatusBarSprite = null
let THRUST = 0
let mySprite: Sprite = null
let GRAVITY = 0
let idle = 0
scene.setBackgroundImage(img`
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffdb555dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdb555dffffffffffffffffffff
    fffffffffffffffffffffffffd555555555ddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbd555555555dffffffffffffffffffff
    fffffffffffffffffffffffffd5555555555555555dddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbb5555555555555555ffffffffffffffffffff
    fffffffffffffffffffffffffd555888ccb555555555555555dddddffffffffffffffffffffffffffffffffffffffffffffffffffffffddddd5555555555555555bc888b555dfffffffffffffffffff
    fffffffffffffffffffffffff5555888888888cceb55555555555555555555ddddffffffffffffffffffffffffffffffffddddb555555555b555555555bbcc8888888888555bfffffffffffffffffff
    ffffffffffffffffffffffffd55588888888888888888888cbbd555555555555555555555555555555555555555555555555555555555555bbbc88888888888888888888b555bffffffffffffffffff
    fffffffffffffffffffffffd555b888888888888888888888888888888888eb555555555555555555555555555555555555555e88888888888888888888888888888888885555ffffffffffffffffff
    ffffffffffffffffffffffb555588888888888888888888888888888888888888888888888888888cccc88888888888888888888888888888888888888888888888888888b5b5dfffffffffffffffff
    fffffffffffffffffffffd5555c888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888d555dffffffffffffffff
    fffffffffffffffffffff5555e888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555dfffffffffffffff
    fffffffffffffffffffd5555c88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555dffffffffffffff
    ffffffffffffffffffd5555c888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b555dfffffffffffff
    fffffffffffffffffd555588888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888cb5555dfffffffffff
    fffffffffffffffd5555b8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ccc8888888888c5555dffffffffff
    fffffffffffffd55555c88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888cc5bb555ddd111db8888888888855555dffffffff
    fffffffffffb55555b8888888888888888888888888888888888888888888888888888888888888888888cbb5b555bbbbbbb5b55555555555ddd11111111111111db888888888888888555555dfffff
    fffffffff555555b888888888888888888888888888888888888888ccc58888888888888888888888c5dd11111dd111111111115d11111111111111111111dd55e888888888888888888c555555dfff
    fffffffff5555c88888888888888888888888888888888888888888b554ec55e8888888888888888bd1111111dd1111111dd5551111111111111111dd555bd11b88888888888888888888885555bfff
    fffffffffdd555888888888888888888888888888888888888888885e5254255dd5b88888888888bd1111dbb5555dbdbbd1d5d11ddd555555bbbdd1111111dbc8888888888888888888888c555dffff
    ffffffffffb555c888888888888888888888888888888888888bb55545e52444445888888888885d111dd5111111111111d5dd111111111111111111111d588888888888888888888888885555fffff
    fffffffffff55558888888888888888888888888888888544222222222455442224445d8888888d111111d11111111d555b11111111111111111111b55c88888888888888888888888888c555bfffff
    fffffffffff5555c888888888888888888888888888b5554422222222e5ede555544458888888b11111dd5d5bb555511d5ddbbbbbbb555555555d111dc8888888888888888888888888885555ffffff
    fffffffffffd555b88888888888888888888888e542222255455555555455252222222248888ed11dd5511111111111d51111111111111111111111db8888888888888888888888888888555dffffff
    ffffffffffff555d888888888888888888888852222222225554422245555454542224488888b11111dd1111111db55d1111111111111111111dddb88888888888888888888888888888c555dffffff
    ffffffffffffd5558888888888888888888888c55442222222222224542454222255e2e48888511dd55555555dd115555555555555555555dddb88888c55555bc8888888888888888888b555fffffff
    ffffffffffffd5558888888888888888888888845222224444e222d42522222542225222588cd1111dd11111111d5d1111111111111111111db888e54e44dd4ee45c8888888888888888555bfffffff
    fffffffffffff555b8888888888888888888888b555554444e4524e422542222e52225222b8cd11d5d11111d555bd11111111111111dd5be888885e4c8888888c4245888888888888888555dfffffff
    fffffffffffffb55588888888888888888888888c555bc888d25452442245422225224422485d11d5ddddd1111dddddddddddddddd11db88888c4e588888888888c42b8888888888888c555ffffffff
    fffffffffffffd55588888888888888888888888885b88b55425452254222e5222542e455585111db1111111d5d11111111111111115e8888884e48888888888888844e888888888888b555ffffffff
    fffffffffffffd5558888888888888888888888888b5555554252242225222252224245e24b51555ddd555d55555555dddd555555e8888888b42d888888888888888b25888888888888b555ffffffff
    ffffffffffffff55588888888888888888888888888558cb425522442225222e422525e522ed11dd1111111dd111111111111111588888852222b888888888888888c24888888888888b555ffffffff
    ffffffffffffff555c8888888888888888888888888b5445d5254224522242224225552244511db1111115555d11111111dd55b888888842422ec888888888888888824888888888888b555ffffffff
    ffffffffffffff555888888888888888888888888888522444224e22522252224244252224511b55d5555511111111111115c88888888d2524eb88888888888888888248888888888885555ffffffff
    ffffffffffffff555c8888888888888888888888888885452442252244225222455e225e2411d5111111d5111111111111db888888885e5e44588888888888888888b2d888888888888555dffffffff
    ffffffffffffff555c88888888888888888888888888858bbb5222422422522b5ee4222445155ddd1db5b5d555555555bc88888888cb5555bb88888888888888888ceec888888888888555dffffffff
    ffffffffffffff555c888888888888888888888888888888885222424422524542245222bd1dd11111dd11111111111b88888888888cbbc8888888888888888888c42b8888888888888555bffffffff
    ffffffffffffff555c88888888888888888888888888888888422422422455e2522225e4db55dd11d55d111111111dbc88888ccb444444dbc8888888888888888b4eb88888888888888555dffffffff
    ffffffffffffff555c8888888888888888888888888888888b22442e5244e42225222e5d11511dd55111ddd55554455d5554222222222222245c8888888888c5425c888888888888888555bffffffff
    ffffffffffffff555c88888888888888888888888888888884244224454225e2225224dd55d111d51111111111d422222222222222222222222e55bbb5d444eedc88888888888888888555bffffffff
    ffffffffffffff555c8888888888888888888888888888888425e4522e42225222255d1151dd55d5555dd1ddb52222222222222222222222222224544444bbe88888888888888888888555dffffffff
    ffffffffffffff555c8888888888888888888888888888888d25442222422225e224d555d111db1111111d522222222222222222222222222222222b888888888888888888888888888555dffffffff
    ffffffffffffff555c8888888888888888888888888888888c522422225222225e24ddb1dd55555d1111154222222222222222222222222222222222588888888888888888888888888555dffffffff
    ffffffffffffff555c88888888888888888888888888888888d22422222522222545555555511111d55442222222222222222222222222222222222224e888888888888888888888888555dffffffff
    ffffffffffffff555c888888888b555d5d888888888888888b222242222242222455d11dd155b1111d42222222222222222222222222222222222222424c88888888888888888888888555dffffffff
    ffffffffffffffd55c8888888c554455ee55444555c88888552222542222e52224545555111111544222222222222222222222222222222222222222252488888888888888888888888555bffffffff
    ffffffffffffffd55c888888c55422222ee22222222222e2e42222244222244225222222e4dd5d5222222222222222222222222222222222222222222242b8888888888888888888888555dffffffff
    ffffffffffffffd55c88888888d542442222222222222222224222224422225442222222222222222222222222222222222222222222222222222222222258888888888888888888888555dffffffff
    ffffffffffffff555c8888888b5422222222222222222222224422222e42225422222222222222222222222222222222222222222222222222222222224258888888888888888888888555dffffffff
    ffffffffffffff555c88888888888b5de24422222222222222244222224e225222222222222222222222222222222222452222244222222222222222222258888888888888888888888555fffffffff
    ffffffffffffffd55c888888c5888888888888b5224e4e244222e52222252422222222222422222222222222222222442222444225422222222222222422b888888888888888b588888555fffffffff
    ffffffffffffffd55c888888c5b8888888888888555e222222222252222552222222222224222222222222222222422245e22222224422222222222222248888888888c888855588888555fffffffff
    ffffffffffffff555c888888555b888cb8888888d5dde8ee244222e422452222222222222424442222222222222224b5222222222224422222222222242488888888855888b55b88888555fffffffff
    ffffffffffffff555c88888855d5888b5888888888888e5bc8be55bb25e52222222222222422222222222222222de8c222222222222252222222222222258888888885588c515888888555fffffffff
    ffffffffffffff555b8888885515588b5b888888888888888888888b888522222222222224222222222222e4bc888852222222222222252222222222222588888888855585d15888888555fffffffff
    ffffffffffffffd55b8888885511588b5b8888888888888888888888888c2222222222222e545555b5588888888888422222222222222452222222222224c888888885d5c5115888888555fffffffff
    ffffffffffffffb55b8888885511be5d5c888888888888888888888888885222222222222b88888888888888888888d222222222222db88be2222222222258888888851b55115888888555fffffffff
    ffffffffffffffd55b8888885d1115515c888888888888888888888888888422222242222b88888888888888888888e22222222222d888888d22222222222588888885d15d11588888c555fffffffff
    ffffffffffffffd55588888855111511588888888888888888888888888884222222e224e4888888888888888888888be22222222b8888888884e2222222225b888885d1bd1d588888c555fffffffff
    ffffffffffffffd5558888885511111d5888888888888888888888888888c4222222e22eb88888888888888888888888e22222222b88888888888b42222222424dc885d1111d5888885555fffffffff
    fffffffffffffff5558888885511111bb88888888888888888888888888542222224225bb8888888888888888888888885222222448888888888888b222222525db885d1111d588888555dfffffffff
    fffffffffffffff555c8888855d11115c8888888888888888888888888c42222244222b8888888888888888888888888852222224488888888888888e2222422e88885d11115588888555dfffffffff
    fffffffffffffff555c8888855511115888888888888888888888888884222224224c8c8888888888888888888888888542222442b8888888888888d2222424d558885d11155588888555dfffffffff
    fffffffffffffffd55c88888515511158888888888888888888888888e42222224b8888888888888888888888888cd4222244222488888888888883222222248888885d1d55d588888555bfffffffff
    fffffffffffffffb55b888885dd55d158888888888888888c8888888b422222eb88888888888888888888cd55455422222422225558888888888c52222224d5b888885db551d588888555dfffffffff
    fffffffffffffffd55b888885d11d555b5555555888888888d5422222222222b88888888888888888888b55244444222224bccbc88888bb542222222222488888888b5551115b8888c555ffffffffff
    fffffffffffffffb555888885511111111111115b888888b55425ee222222228888888888888888888855dd5d2222222258888888888b55544ee222222248888c5555d111115c8888c555ffffffffff
    ffffffffffffffff5b588888c51111111111111d588888c5555d42222222224888888888888888888888b85bb5bddbbbb88888888888b55dd42222ee22ec8885bd11111111d588888555dffffffffff
    ffffffffffffffff555588888dd111111111111dd888855b555e5444554445888888888888888888888888888888888888888888888888555d555555e88888b511111111115888888555dffffffffff
    ffffffffffffffff555588888c51111111111d55588b5111111db88888888888888888888888888888888888888888888888888888888888855d111dd5c888bd11111111155888888555fffffffffff
    ffffffffffffffffd55588888855111115555555d885d1111111dd888888888888888888888888888888888888888888888888888888888c551111111d5e88d555d11111d5888888b555fffffffffff
    fffffffffffffffff555c8888885d11115d1111d58c5d11111111bb888888888888888888888888888888888888888888888888888888885d111111111d5885d1d55111d58888888555dfffffffffff
    fffffffffffffffff555588888885d1115d1111d58c55111111115b8888888888888888888888888888888888888888888888888888888c51111111111d588bd11d511d58888888c555ffffffffffff
    fffffffffffffffffb5558888888c5d11551111d58855b111111d5b8888888888888888888888888888888888888888888888888888888c5111111111d5588b511d51d588888888b55bffffffffffff
    ffffffffffffffffff555b88888888b5d555111d588555111d5555b8888888888888888888888888888888888888888888888888888888c5d1111111d55588bd1155d5888888888555dffffffffffff
    ffffffffffffffffffd555888888888c55555515b885551155d11db8888888888888888888888888888888888888888888888888888888c5555d111551b588b5d55558888888885555fffffffffffff
    fffffffffffffffffff55558888888888551d55555555b1d5d111db8888888888888888888888888888888888888888888888888888888c511d551155d5588b555d5888888888c555dfffffffffffff
    fffffffffffffffffffd555c8888888885511111d111db1d55111db8888888888888888888888888888888888888888888888888888888c511155d155555bb55d1d5888888888b555ffffffffffffff
    ffffffffffffffffffffd55588888888855111111111551555511db8888888888888888888888888888888888888888888888888888888c511555515d111d11111d588888888b555fffffffffffffff
    ffffffffffffffffffffd555b88888888b51111111115d55d155d5b8888888888888888888888888888888888888888888888888888888c555b1d515d111111111d58888888c555dfffffffffffffff
    fffffffffffffffffffffd555b8888888551111111115b85b11d55b8888888888888888888888888888888888888888888888888888888555d11b515d111111111db88888885555bfffffffffffffff
    ffffffffffffffffffffff55558888888c51111111115c8bb1b11b5bc888888888888888888888888888888888888888888888888888b55111d1d555d1111111115b888888b555dffffffffffffffff
    ffffffffffffffffffffffd5555888888851111111115885d1b2311db55d888888888888888888888888888888888888888888888b55d1114221d58bd1111111115e888885555bfffffffffffffffff
    fffffffffffffffffffffffd55558888885d11111111588c511222e111dd555c8888888888888888888888888888888888888cb55d1111e2d1edd58b5111111111bc8888b555dffffffffffffffffff
    ffffffffffffffffffffffffd555588888b5d111111d5888511d22e22b11111d5555cc888888888888888888888888888c5555d111142e111111d58b511111111d58888b555dfffffffffffffffffff
    fffffffffffffffffffffffffd555588888c55d111d5e888511d2211142211111111d55555bbccc888888888ccbd55555dd11111d11222b11111d58c51111111d5c888b5555ffffffffffffffffffff
    ffffffffffffffffffffffffffd5555888888cb555b88888511d221111121112ed111111111dddddddb5555ddbdd11111111e22e11111e22e11ed58855111dd5b8888b555dfffffffffffffffffffff
    fffffffffffffffffffffffffffd5555c888888888888888511d222e111b1111222b11eebd1111111111111111111b2221111e2b11111122111bdb88855555c88888b555dffffffffffffffffffffff
    ffffffffffffffffffffffffffffd5555b88888888888888511e221d221111112211111e222d1111b222222d1111122211111d2b1111122111215e88888888888885555dfffffffffffffffffffffff
    ffffffffffffffffffffffffffffffd55558888888888888dde222111e11111122111111221111122d1111d2e1111d2211111d2d1111e2d1122d5888888888888c5555bffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffd5d55c8888888888885d122b11111111122111111221111221111111d22111d2211111d2d111d2b1e2215b88888888888b5555ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffd5555e888888888888d51d2241111d112211111122111e241b1111e122d11d221111132d1112222e155c888888888885555dfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffb5555c8888888888855b11222221112211111122111e2d122ee221e221112211111b211122231b5588888888888b5d55dffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffd55b55888888888888b5511de111142d1111122111e2d12ebde21e2e1112211111eb1d2ed155c8888888888885555dffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff555558888888888888c5511111112e1111e22111b2e1d11111122b11122d111e21111555c888888888888b5555bfffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffd5555588888888888888b5d11111b222222d1111223111111b2211111e2222111555b8888888888888b55555fffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffd5555b88888888888888855d111111111111111222d11d22e1111111111d555b88888888888888cb5555fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff55555b8888888888888888b55dd111111111111e2222e11111111d5555c888888888888888cd5555dffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffd55555b88888888888888888ccb555dd11111111111111dd5555bc88888888888888888c55555dffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffd55555b888888888888888888888ce555555555555555cc88888888888888888888e55555dffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffd55555588888888888888888888888888888888888888888888888888888888b55555dffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd55555dc888888888888888888888888888888888888888888888888888555555dffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffdd55555b88888888888888888888888888888888888888888888888555555ddfffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffd555555b888888888888888888888888888888888888888888b555555dffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffdd555555e888888888888888888888888888888888888c555555bdffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd555555b88888888888888888888888888888888b555555dfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd555555588888888888888888888888888c555555ddfffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd55555de888888888888888888888b55555dbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd555555e8888888888888885555555dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd55555b88888888885555555dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd555555c888885555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd555555bc555555dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb555555555dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd5555ddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
story.printText("This is a rocket challenge game", 80, 60)
story.printText("Down button will let the rocket go upwards\\nRight button is turning left\\nLeft button is going right", 80, 60)
story.printText("Remember not to land so fast", 80, 60)
idle = 0
GRAVITY = randint(0.03, 19.5)
story.printText("Gravity: " + convertToText(GRAVITY), 75, 60, 15)
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
minimap.includeSprite(myMinimap, mySprite)
let mapSprite = sprites.create(minimap.getImage(myMinimap), SpriteKind.Player)
mapSprite.setPosition(12, 14)
mapSprite.setStayInScreen(true)
info.setLife(number_of_pressing)
game.onUpdate(function () {
    if (controller.left.isPressed() || (controller.right.isPressed() || controller.down.isPressed())) {
        statusbar.value += -0.075
        info.changeLifeBy(1)
    }
})
