@namespace
class SpriteKind:
    Map = SpriteKind.create()
@namespace
class StatusBarKind:
    Fuel = StatusBarKind.create()

def on_overlap_tile(sprite, location):
    game.over(False, effects.confetti)
scene.on_overlap_tile(SpriteKind.player,
    sprites.builtin.ocean_depths0,
    on_overlap_tile)

def on_on_zero(status):
    game.over(False, effects.confetti)
statusbars.on_zero(StatusBarKind.Fuel, on_on_zero)

def on_overlap_tile2(sprite2, location2):
    game.over(False, effects.confetti)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava0,
    on_overlap_tile2)

def on_down_released():
    mySprite.ay = GRAVITY
    mySprite.set_image(img("""
        . . . . . . . 5 5 . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . 7 5 5 7 . . . . . . 
                . . . . . . 7 5 5 7 . . . . . . 
                . . . . 7 7 7 7 7 7 7 7 . . . . 
                . . . . 7 1 1 1 1 1 1 7 . . . . 
                . . . . 7 1 9 9 9 9 1 7 . . . . 
                . . . . 7 1 9 9 9 9 1 7 . . . . 
                . . . . 7 1 1 1 1 1 1 7 . . . . 
                . . . . 7 8 8 8 8 8 8 7 . . . . 
                . . . . . 8 . . . . 8 . . . . . 
                . . . . . 8 . . . . 8 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . .
    """))
controller.down.on_event(ControllerButtonEvent.RELEASED, on_down_released)

def on_left_pressed():
    mySprite.ax = THRUST
    mySprite.set_image(img("""
        . . . . . . . . . . . . . . . . 
                4 4 4 . . . . . . . . . . . . . 
                . 4 4 4 . . . . . . . . . . . . 
                . . 4 4 4 . . . . . . . . . . . 
                . . . 4 4 7 7 7 7 7 7 . . . . . 
                2 2 2 8 8 8 1 1 1 1 7 . . . . . 
                . 2 2 2 2 8 1 9 9 1 7 7 7 . . . 
                . . 2 2 2 8 1 9 9 1 7 5 5 5 5 5 
                . . 2 2 2 8 1 9 9 1 7 5 5 5 5 5 
                . 2 2 2 2 8 1 9 9 1 7 7 7 . . . 
                2 2 2 8 8 8 1 1 1 1 7 . . . . . 
                . . . 4 4 7 7 7 7 7 7 . . . . . 
                . . 4 4 4 . . . . . . . . . . . 
                . 4 4 4 . . . . . . . . . . . . 
                4 4 4 . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . .
    """))
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_released():
    mySprite.ax = idle
    mySprite.set_image(img("""
        . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . 7 1 1 1 1 8 8 8 . . . 
                . . . 7 7 7 1 9 9 1 8 . . . . . 
                5 5 5 5 5 7 1 9 9 1 8 . . . . . 
                5 5 5 5 5 7 1 9 9 1 8 . . . . . 
                . . . 7 7 7 1 9 9 1 8 . . . . . 
                . . . . . 7 1 1 1 1 8 8 8 . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . .
    """))
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def score(score_multi: number):
    global end_game_score
    end_game_score = statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10) % 1 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10) % 1 + info.life()) / 5 % 1 * 2 + (Math.sqrt(statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10) % 1 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10) % 1 + info.life()) / 5 % 1 * 2) + 0.61196887468 + ((Math.sqrt(statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10) % 1 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10) % 1 + info.life()) / 5 % 1 * 2) + 0.61196887468) % 2 + (Math.sqrt(statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10) % 1 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10) % 1 + info.life()) / 5 % 1 * 2) + 0.61196887468) % 2 * 10 % 1)) + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10) % 1 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10) % 1 + info.life()) / 5 % 1 * 2 + (Math.sqrt(statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10) % 1 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10) % 1 + info.life()) / 5 % 1 * 2) + 0.61196887468 + ((Math.sqrt(statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10) % 1 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10) % 1 + info.life()) / 5 % 1 * 2) + 0.61196887468) % 2 + (Math.sqrt(statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10) % 1 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25 + Math.sqrt(((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2 % 1 + ((statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25) % 2 + (statusbar.value + 10 * ((statusbar.value * 4 + game.runtime() * 200) / (Math.sqrt(statusbar.value) % (game.runtime() * 100) * 10) / 100 % 5) - 25)) * 2) % 10) % 1 + info.life()) / 5 % 1 * 2) + 0.61196887468) % 2 * 10 % 1))) % 100
    if mySprite.vy > 10:
        game.over(False, effects.confetti)
    else:
        info.set_score(end_game_score * score_multi)
        game.over(True, effects.confetti)

def on_left_released():
    mySprite.ax = idle
    mySprite.set_image(img("""
        . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . 8 8 8 1 1 1 1 7 . . . . . 
                . . . . . 8 1 9 9 1 7 7 7 . . . 
                . . . . . 8 1 9 9 1 7 5 5 5 5 5 
                . . . . . 8 1 9 9 1 7 5 5 5 5 5 
                . . . . . 8 1 9 9 1 7 7 7 . . . 
                . . . 8 8 8 1 1 1 1 7 . . . . . 
                . . . . . 7 7 7 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . .
    """))
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_overlap_tile3(sprite3, location3):
    score(2)
scene.on_overlap_tile(SpriteKind.player, sprites.castle.rock0, on_overlap_tile3)

def on_right_pressed():
    mySprite.ax = -4
    mySprite.set_image(img("""
        . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . 4 4 4 
                . . . . . . . . . . . . 4 4 4 . 
                . . . . . . . . . . . 4 4 4 . . 
                . . . . . 7 7 7 7 7 7 4 4 . . . 
                . . . . . 7 1 1 1 1 8 8 8 2 2 2 
                . . . 7 7 7 1 9 9 1 8 2 2 2 2 . 
                5 5 5 5 5 7 1 9 9 1 8 2 2 2 . . 
                5 5 5 5 5 7 1 9 9 1 8 2 2 2 . . 
                . . . 7 7 7 1 9 9 1 8 2 2 2 2 . 
                . . . . . 7 1 1 1 1 8 8 8 2 2 2 
                . . . . . 7 7 7 7 7 7 4 4 . . . 
                . . . . . . . . . . . 4 4 4 . . 
                . . . . . . . . . . . . 4 4 4 . 
                . . . . . . . . . . . . . 4 4 4 
                . . . . . . . . . . . . . . . .
    """))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_overlap_tile4(sprite4, location4):
    score(4)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.button_orange_depressed,
    on_overlap_tile4)

def on_overlap_tile5(sprite5, location5):
    game.over(False, effects.confetti)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava1,
    on_overlap_tile5)

def on_overlap_tile6(sprite6, location6):
    score(3)
scene.on_overlap_tile(SpriteKind.player,
    sprites.builtin.ocean_sand6,
    on_overlap_tile6)

def on_down_pressed():
    mySprite.ay = GRAVITY - THRUST
    mySprite.set_image(img("""
        . . . . . . . 5 5 . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . 7 5 5 7 . . . . . . 
                . . . . . . 7 5 5 7 . . . . . . 
                . . . . 7 7 7 7 7 7 7 7 . . . . 
                . . . . 7 1 1 1 1 1 1 7 . . . . 
                . . . . 7 1 9 9 9 9 1 7 . . . . 
                . . . . 7 1 9 9 9 9 1 7 . . . . 
                . . . . 7 1 1 1 1 1 1 7 . . . . 
                . . . . 7 8 8 8 8 8 8 7 . . . . 
                . . . 4 4 8 2 2 2 2 8 4 4 . . . 
                . . 4 4 4 8 2 2 2 2 8 4 4 4 . . 
                . 4 4 4 . 2 2 2 2 2 2 . 4 4 4 . 
                . 4 4 . . 2 2 . . 2 2 . . 4 4 . 
                . 4 . . . 2 . . . . 2 . . . 4 .
    """))
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_life_zero():
    pass
info.on_life_zero(on_life_zero)

def on_overlap_tile7(sprite7, location7):
    score(3)
scene.on_overlap_tile(SpriteKind.player,
    sprites.builtin.ocean_sand5,
    on_overlap_tile7)

def on_overlap_tile8(sprite8, location8):
    score(3)
scene.on_overlap_tile(SpriteKind.player,
    sprites.builtin.ocean_sand2,
    on_overlap_tile8)

def on_overlap_tile9(sprite9, location9):
    score(3)
scene.on_overlap_tile(SpriteKind.player,
    sprites.builtin.ocean_sand3,
    on_overlap_tile9)

def on_overlap_tile10(sprite10, location10):
    score(10)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_insignia,
    on_overlap_tile10)

end_game_score = 0
statusbar: StatusBarSprite = None
mySprite: Sprite = None
GRAVITY = 0
idle = 0
THRUST = 0
THRUST = 20
idle = 0
GRAVITY = 4
mySprite = sprites.create(img("""
        . . . . . . . 5 5 . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . 7 5 5 7 . . . . . . 
            . . . . . . 7 5 5 7 . . . . . . 
            . . . . 7 7 7 7 7 7 7 7 . . . . 
            . . . . 7 1 1 1 1 1 1 7 . . . . 
            . . . . 7 1 9 9 9 9 1 7 . . . . 
            . . . . 7 1 9 9 9 9 1 7 . . . . 
            . . . . 7 1 1 1 1 1 1 7 . . . . 
            . . . . 7 8 8 8 8 8 8 7 . . . . 
            . . . . . 8 . . . . 8 . . . . . 
            . . . . . 8 . . . . 8 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.player)
mySprite.ay = GRAVITY
mySprite.set_flag(SpriteFlag.SHOW_PHYSICS, True)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
scene.camera_follow_sprite(mySprite)
effects.star_field.start_screen_effect()
statusbar = statusbars.create(50, 4, StatusBarKind.Fuel)
statusbar.position_direction(CollisionDirection.TOP)
statusbar.set_label("FUEL")
myMinimap = minimap.minimap(MinimapScale.SIXTEENTH, 5, 4)
mapSprite = sprites.create(minimap.get_image(myMinimap), SpriteKind.Map)
mapSprite.set_position(12, 14)
mapSprite.set_stay_in_screen(True)
number_of_pressing = 0
info.set_life(number_of_pressing)

def on_on_update():
    if controller.left.is_pressed() or (controller.right.is_pressed() or controller.down.is_pressed()):
        statusbar.value += -0.075
        info.change_life_by(1)
game.on_update(on_on_update)
