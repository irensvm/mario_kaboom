kaboom({
    global:true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 0, 1]
})

loadRoot('https://imgur.com/')
loadSprite('coin', 'wbKxhcd.png')
loadSprite('evil-shroom', 'KPO3fR9.png')
loadSprite('brick', 'pogC9x5.png') 
loadSprite('block', 'bdrLpi6.png') 
loadSprite('mario', 'Wb1qfhK.png') 
loadSprite('mushroom', '0wMd92p.png') 
loadSprite('surprise', 'gesQ1KP.png') 










screen("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj')



})

start("game")