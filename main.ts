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
        game.gameOver(false)
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
controller.combos.attachCombo("Down + Left + Right", function () {
    statusbar.value += -1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    score(10)
})
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
    fffffffffffffffffffffffffdb777dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdb777dffffffffffffffffffff
    fffffffffffffffffffffffffd777777777ddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbd777777777dffffffffffffffffffff
    fffffffffffffffffffffffffd7777777777777777dddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbb7777777777777777ffffffffffffffffffff
    fffffffffffffffffffffffffd777fffccb777777777777777dddddffffffffffffffffffffffffffffffffffffffffffffffffffffffddddd7777777777777777bcfffb777dfffffffffffffffffff
    fffffffffffffffffffffffff7777fffffffffcceb77777777777777777777ddddffffffffffffffffffffffffffffffffddddb777777777b777777777bbccffffffffff777bfffffffffffffffffff
    ffffffffffffffffffffffffd777ffffffffffffffffffffcbbd777777777777777777777777777777777777777777777777777777777777bbbcffffffffffffffffffffb777bffffffffffffffffff
    fffffffffffffffffffffffd777b8ffffffffffffffffffffffffffffffffeb777777777777777777777777777777777777777effffffffffffffffffffffffffffffffff7777ffffffffffffffffff
    ffffffffffffffffffffffb7777fffffffffffffffffffffffffffffffffffffffffffffffffffffccccfffffffffffffffffffffffffffffffffffffffffffffffffffffb7b7dfffffffffffffffff
    fffffffffffffffffffffd7777cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd777dffffffffffffffff
    fffffffffffffffffffff7777efffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777dfffffffffffffff
    fffffffffffffffffffd7777cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777dffffffffffffff
    ffffffffffffffffffd7777cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb777dfffffffffffff
    fffffffffffffffffd7777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcb7777dfffffffffff
    fffffffffffffffd7777bfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffc7777dffffffffff
    fffffffffffffd77777cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcc7bb777ddd111dbfffffffffff77777dffffffff
    fffffffffffb77777bfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbb7b777bbbbbbb7b77777777777ddd11111111111111dbfffffffffffffff777777dfffff
    fffffffff777777bfffffffffffffffffffffffffffffffffffffffccc7ffffffffffffffffffffffc7dd11111dd111111111117d11111111111111111111dd77effffffffffffffffffc777777dfff
    fffffffff7777cfffffffffffffffffffffffffffffffffffffffffb774ec77effffffffffffffffbd1111111dd1111111dd7771111111111111111dd777bd11bffffffffffffffffffffff7777bfff
    fffffffffdd777fffffffffffffffffffffffffffffffffffffffff7e7274277dd7bfffffffffffbd1111dbb7777dbdbbd1d7d11ddd777777bbbdd1111111dbcffffffffffffffffffffffc777dffff
    ffffffffffb777cffffffffffffffffffffffffffffffffffffbb77747e72444447f8fffffffff7d111dd7111111111111d7dd111111111111111111111d7fffffffffffffffffffffffff7777fffff
    fffffffffff7777fffffffffffffffffffffffffffffff744222222222477442224447dfffffffd111111d11111111d777b11111111111111111111b77cffffffffffffffffffffffffffc777bfffff
    fffffffffff7777cfffffffffffffffffffffffffffb7774422222222e7ede77774447fffffffb11111dd7d7bb777711d7ddbbbbbbb777777777d111dcfffffffffffffffffffffffffff7777ffffff
    fffffffffffd777bfffffffffffffffffffffffe74222227747777777747727222222224ffffed11dd7711111111111d71111111111111111111111dbffffffffffffffffffffffffffff777dffffff
    ffffffffffff777dffffffffffffffffffffff722222222277744222477774747422244fffffb11111dd1111111db77d1111111111111111111dddbfffffffffffffffffffffffffffffc777dffffff
    ffffffffffffd777ffffffffffffffffffffffc77442222222222224742474222277e2e4ffff711dd77777777dd117777777777777777777dddbfffffc77777bcfffffffffffffffffffb777fffffff
    ffffffffffffd777fffffffffffffffffffffff47222224444e222d427222227422272227ffcd1111dd11111111d7d1111111111111111111dbfffe74e44dd4ee47cffffffffffffffff777bfffffff
    fffffffffffff777bffffffffffffffffffffffb777774444e4724e422742222e72227222bfcd11d7d11111d777bd11111111111111dd7befffff7e4cfffffffc4247fffffffffffffff777dfffffff
    fffffffffffffb777fffffffffffffffffffffffc777bcfffd274724422474222272244224f7d11d7ddddd1111dddddddddddddddd11dbfffffc4e7fffffffffffc42bfffffffffffffc777ffffffff
    fffffffffffffd777fffffffffffffffffffffffff7bffb77427472274222e7222742e4777f7111db1111111d7d11111111111111117effffff4e4ffffffffffffff44effffffffffffb777ffffffff
    fffffffffffffd777fffffffffffffffffffffffffb7777774272242227222272224247e24b71777ddd777d77777777dddd777777efffffffb42dfffffffffffffffb27ffffffffffffb777ffffffff
    ffffffffffffff777ffffffffffffffffffffffffff77fcb427722442227222e422727e722ed11dd1111111dd1111111111111117ffffff72222bfffffffffffffffc24ffffffffffffb777ffffffff
    ffffffffffffff777cfffffffffffffffffffffffffb7447d7274224722242224227772244711db1111117777d11111111dd77bfffffff42422ecffffffffffffffff24ffffffffffffb777ffffffff
    ffffffffffffff777fffffffffffffffffffffffffff722444224e22722272224244272224711b77d7777711111111111117cffffffffd2724ebfffffffffffffffff24ffffffffffff7777ffffffff
    ffffffffffffff777cfffffffffffffffffffffffffff7472442272244227222477e227e2411d7111111d7111111111111dbffffffff7e7e447fffffffffffffffffb2dffffffffffff777dffffffff
    ffffffffffffff777cfffffffffffffffffffffffffff7fbbb7222422422722b7ee4222447177ddd1db7b7d777777777bcffffffffcb7777bbfffffffffffffffffceecffffffffffff777dffffffff
    ffffffffffffff777cffffffffffffffffffffffffffffffff7222424422724742247222bd1dd11111dd11111111111bffffffff8ffcbbcfffffffffffffffffffc42bfffffffffffff777bffffffff
    ffffffffffffff777cffffffffffffffffffffffffffffffff422422422477e2722227e4db77dd11d77d111111111dbcfffffccb444444dbcffffffffffffffffb4ebffffffffffffff777dffffffff
    ffffffffffffff777cfffffffffffffffffffffffffffffffb22442e7244e42227222e7d11711dd77111ddd77774477d7774222222222222247cffffffffffc7427cfffffffffffffff777bffffffff
    ffffffffffffff777cfffffffffffffffffffffffffffffff4244224474227e2227224dd77d111d71111111111d422222222222222222222222e77bbb7d444eedcfffffffffffffffff777bffffffff
    ffffffffffffff777cfffffffffffffffffffffffffffffff427e4722e42227222277d1171dd77d7777dd1ddb72222222222222222222222222224744444bbeffffffffffffffffffff777dffffffff
    ffffffffffffff777cfffffffffffffffffffffffffffffffd27442222422227e224d777d111db1111111d722222222222222222222222222222222bfffffffffffffffffffffffffff777dffffffff
    ffffffffffffff777cfffffffffffffffffffffffffffffffc722422227222227e24ddb1dd77777d11111742222222222222222222222222222222227ffffffffffffffffffffffffff777dffffffff
    ffffffffffffff777cffffffffffffffffffffffffffffffffd22422222722222747777777711111d77442222222222222222222222222222222222224effffffffffffffffffffffff777dffffffff
    ffffffffffffff777cfffffffffb777d7dfffffffffffffffb222242222242222477d11dd177b1111d42222222222222222222222222222222222222424cfffffffffffffffffffffff777dffffffff
    ffffffffffffffd77cfffffffc774477ee77444777cfffff772222742222e722247477771111117442222222222222222222222222222222222222222724fffffffffffffffffffffff777bffffffff
    ffffffffffffffd77cffffffc77422222ee22222222222e2e42222244222244227222222e4dd7d7222222222222222222222222222222222222222222242bffffffffffffffffffffff777dffffffff
    ffffffffffffffd77cffffffffd74244222222222222222222422222442222744222222222222222222222222222222222222222222222222222222222227ffffffffffffffffffffff777dffffffff
    ffffffffffffff777cfffffffb7422222222222222222222224422222e4222742222222222222222222222222222222222222222222222222222222222427ffffffffffffffffffffff777dffffffff
    ffffffffffffff777cfffffffffffb7de24422222222222222244222224e22722222222222222222222222222222222247222224422222222222222222227ffffffffffffffffffffff777fffffffff
    ffffffffffffffd77cffffffc7ffffffffffffb7224e4e244222e72222272422222222222422222222222222222222442222444227422222222222222422bfffffffffffffffb7fffff777fffffffff
    ffffffffffffffd77cffffffc7bfffffffffffff777e222222222272222772222222222224222222222222222222422247e2222222442222222222222224ffffffffffcffff777fffff777fffffffff
    ffffffffffffff777cffffff777bfffcbfffffffd7ddefee244222e422472222222222222424442222222222222224b72222222222244222222222222424fffffffff77fffb77bfffff777fffffffff
    ffffffffffffff777cffffff77d7fffb7ffffffffffffe7bcfbe77bb27e72222222222222422222222222222222defc22222222222227222222222222227fffffffff77ffc717ffffff777fffffffff
    ffffffffffffff777bffffff77177ffb7bfffffffffffffffffffffbfff722222222222224222222222222e4bcffff722222222222222722222222222227fffffffff777f7d17ffffff777fffffffff
    ffffffffffffffd77bffffff77117ffb7bfffffffffffffffffffffffffc2222222222222e747777b77fffffffffff422222222222222472222222222224cffffffff7d7c7117ffffff777fffffffff
    ffffffffffffffb77bffffff7711be7d7cffffffffffffffffffffffffff7222222222222bffffffffffffffffffffd222222222222dbffbe222222222227f8ffffff71b77117ffffff777fffffffff
    ffffffffffffffd77bffffff7d1117717cfffffffffffffffffffffffffff422222242222bffffffffffffffffffffe22222222222dffffffd222222222227fffffff7d17d117fffffc777fffffffff
    ffffffffffffffd777ffffff771117117ffffffffffffffffffffffffffff4222222e224e4fffffffffffffffffffffbe22222222bfffffffff4e2222222227bfffff7d1bd1d7fffffc777fffffffff
    ffffffffffffffd777ffffff7711111d7fffffffffffffffffffffffffffc4222222e22ebfffffffffffffffffffffffe22222222bfffffffffffb42222222424dcff7d1111d7fffff7777fffffffff
    fffffffffffffff777ffffff7711111bbffffffffffffffffffffffffff742222224227bbffffffffffffffffffffffff722222244fffffffffff8fb222222727dbff7d1111d7fffff777dfffffffff
    fffffffffffffff777cfffff77d11117cfffffffffffffffffffffffffc42222244222bffffffffffffffffffffffffff722222244ffffffffffffffe2222422effff7d111177fffff777dfffffffff
    fffffffffffffff777cfffff77711117ffffffffffffffffffffffffff4222224224cfcfffffffffffffffffffffffff742222442bfffffffffffffd2222424dbbfff7d111777fffff777dfffffffff
    fffffffffffffffd77cfffff71771117fffffffffffffffffffffffffe42222224bfffffffffffffffffffffffffcd42222442224fffffffffffff322222224ffffff7d1d77d7fffff777bfffffffff
    fffffffffffffffb77bfffff7dd77d17ffffffffffffffffcfffffffb422222ebffffffffffffffffffffcd7747742222242222777ffffffffffc72222224d7bfffff7db771d7fffff777dfffffffff
    fffffffffffffffd77bfffff7d11d777b7777777fffffffffd7422222222222bffffffffffffffffffffb77244444222224bccbcfffffbb7422222222224ffffffffb7771117bffffc777ffffffffff
    fffffffffffffffb777fffff7711111111111117bffffffb77427ee22222222ffffffffffffffffffff77dd7d222222227ffffffffffb77744ee22222224ffffc7777d111117cffffc777ffffffffff
    ffffffffffffffff7b7fffffc71111111111111d7fffffc7777d42222222224fffffffffffffffffffffbf7bb7bddbbbbfffffffffffb77dd42222ee22ecfff7bd11111111d7fffff777dffffffffff
    ffffffffffffffff7777fffffdd111111111111ddffff77b777e7444774447fffffffffffffffffffffffff8ffffffffffffffffffffff777d777777efff8fb711111111117ffffff777dffffffffff
    ffffffffffffffff7777fffffc71111111111d777ffb7111111dbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77d111dd7cfffbd11111111177ffffff777fffffffffff
    ffffffffffffffffd777ffffff77111117777777dff7d1111111ddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffc771111111d7effd777d11111d7ffffffb777fffffffffff
    fffffffffffffffff777cffffff7d11117d1111d7fc7d11111111bbffffffffffffffffffffffffffffffffffffffffffffffffffffffff7d111111111d7ff7d1d77111d7fffffff777dfffffffffff
    fffffffffffffffff7777fffffff7d1117d1111d7fc77111111117bfffffffffffffffffffffffffffffffffffffffffffffffffffffffc71111111111d7ffbd11d711d7fffffffc777ffffffffffff
    fffffffffffffffffb777fffffffc7d11771111d7ff77b111111d7bfffffffffffffffffffffffffffffffffffffffffffffffffffffffc7111111111d77ffb711d71d7ffffffffb77bffffffffffff
    ffffffffffffffffff777bffffffffb7d777111d7ff777111d7777bfffffffffffffffffffffffffffffffffffffffffffffffffffffffc7d1111111d777ffbd1177d7fffffffff777dffffffffffff
    ffffffffffffffffffd777fffffffffc77777717bff7771177d11dbfffffffffffffffffffffffffffffffffffffffffffffffffffffffc7777d111771b7ffb7d7777fffffffff7777fffffffffffff
    fffffffffffffffffff7777ffffffffff771d77777777b1d7d111dbfffffffffffffffffffffffffffffffffffffffffffffffffffffffc711d771177d77ffb777d7fffffffffc777dfffffffffffff
    fffffffffffffffffffd777cfffffffff7711111d111db1d77111dbfffffffffffffffffffffffffffffffffffffffffffffffffffffffc711177d177777bb77d1d7fffffffffb777ffffffffffffff
    ffffffffffffffffffffd777fffffffff77111111111771777711dbfffffffffffffffffffffffffffffffffffffffffffffffffffffffc711777717d111d11111d7ffffffffb777fffffffffffffff
    ffffffffffffffffffffd777bffffffffb71111111117d77d177d7bfffffffffffffffffffffffffffffffffffffffffffffffffffffffc777b1d717d111111111d7fffffffc777dfffffffffffffff
    fffffffffffffffffffffd777bfffffff771111111117bf7b11d77bfffffffffffffffffffffffffffffffffffffffffffffffffffffff777d11b717d111111111dbfffffff7777bfffffffffffffff
    ffffffffffffffffffffff7777fffffffc71111111117cfbb1b11b7bcfffffffffffffffffffffffffffffffffffffffffffffffffffb77111d1d777d1111111117bffffffb777dffffffffffffffff
    ffffffffffffffffffffffd7777fffffff71111111117ff7d1b2311db77dfffffffffffffffffffffffffffffffffffffffffffffb77d1114221d7fbd1111111117efffff7777bfffffffffffffffff
    fffffffffffffffffffffffd7777ffffff7d111111117ffc711222e111dd777cfffffffffffffffffffffffffffffffffffffcb77d1111e2d1edd7fb7111111111bcffffb777dffffffffffffffffff
    ffffffffffffffffffffffffd7777fffffb7d111111d7fff711d22e22b11111d7777ccfffffffffffffffffffffffffffc7777d111142e111111d7fb711111111d7ffffb777dfffffffffffffffffff
    fffffffffffffffffffffffffd7777fffffc77d111d7efff711d2211142211111111d77777bbcccfffffffffccbd77777dd11111d11222b11111d7fc71111111d7cfffb7777ffffffffffffffffffff
    ffffffffffffffffffffffffffd7777ffffffcb777bfffff711d221111121112ed111111111dddddddb7777ddbdd11111111e22e11111e22e11ed7ff77111dd7bffffb777dfffffffffffffffffffff
    fffffffffffffffffffffffffffd7777cfffffffffffffff711d222e111b1111222b11eebd1111111111111111111b2221111e2b11111122111bdbfff77777cfffffb777dffffffffffffffffffffff
    ffffffffffffffffffffffffffffd7777bffffffffffffff711e221d221111112211111e222d1111b222222d1111122211111d2b1111122111217efffffffffffff7777dfffffffffffffffffffffff
    ffffffffffffffffffffffffffffffd7777fffffffffffffdde222111e11111122111111221111122d1111d2e1111d2211111d2d1111e2d1122d7ffffffffffffc7777bffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffd7d77cffffffffffff7d122b11111111122111111221111221111111d22111d2211111d2d111d2b1e2217bfffffffffffb7777ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffd7777effffffffffffd71d2241111d112211111122111e241b1111e122d11d221111132d1112222e177cfffffffffff7777dfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffb7777cfffffffffff77b11222221112211111122111e2d122ee221e221112211111b211122231b77fffffffffffb7d77dffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffd77b77ffffffffffffb7711de111142d1111122111e2d12ebde21e2e1112211111eb1d2ed177cffffffffffff7777dffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff77777fffffffffffffc7711111112e1111e22111b2e1d11111122b11122d111e21111777cfffffffff8ffb7777bfffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffd77777ffffffffffffffb7d11111b222222d1111223111111b2211111e2222111777bfffffffffffffb77777fffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffd7777bfffffffffffffff77d111111111111111222d11d22e1111111111d777bffffffffffffffcb7777fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff77777bffffffffffffffffb77dd111111111111e2222e11111111d7777cfffffffffffffffcd7777dffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffd77777bfffffffffffffffffccb777dd11111111111111dd7777bcfffffffffffffffffc77777dffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffd77777bfffffffffffffffffffffce777777777777777ccffffffffffffffffffffe77777dffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffd777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffb77777dffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffd77777dcfffffffffffffffffffffffffffffffffffffffffffffffffff777777dffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffdd77777bfffffffffffffffffffffffffffffffffffffffffffffff777777ddfffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffd777777bffffffffffffffffffffffffffffffffffffffffffb777777dffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffdd777777effffffffffffffffffffffffffffffffffffc777777bdffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd777777bffffffffffffffffffffffffffffffffb777777dfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd7777777ffffffffffffffffffffffffffc777777ddfffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd77777defffffffffffffffffffffb77777dbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd777777efffffffffffffff7777777dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd77777bffffffffff7777777dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd777777cfffff7777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd777777bc777777dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb777777777dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd7777ddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
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
