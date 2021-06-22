kaboom({
	global: true,
	fullscreen: true,
	scale: 1.5,
	debug: true,
	clearColor: [ 0, 0, 0, 1 ]
});

const MOVE_SPEED = 120
const JUMP_FORCE = 360

loadRoot('https://i.imgur.com/');
loadSprite('coin', 'wbKxhcd.png');
loadSprite('evil-shroom', 'KPO3fR9.png');
loadSprite('brick', 'pogC9x5.png');
loadSprite('block', 'M6rwarW.png');
loadSprite('mario', 'Wb1qfhK.png');
loadSprite('mushroom', '0wMd92p.png');
loadSprite('surprise', 'gesQ1KP.png');
loadSprite('unboxed', 'bdrLpi6.png');
loadSprite('pipe-top-left', 'hj2GK4n.png');
loadSprite('pipe-top-right', 'nqQ79eI.png');
loadSprite('pipe-bottom-left', 'c1cYSbt.png');
loadSprite('pipe-bottom-right', 'nqQ79eI.png');

scene('game', () => {
	layers([ 'bg', 'obj', 'ui' ], 'obj');

	const map = [
		'                                           ',
		'                                           ',
		'                                           ',
		'                                           ',
		'  % =*=%=                                  ',
		'                                           ',
		'                                           ',
		'                                           ',
		'                          ^ ^            () ',
		'==================================   ======'
	];

	const levelCfg = {
		width: 20,
		height: 20,
		'=': [ sprite('block'), solid() ],
		$: [ sprite('coin') ],
		'%': [ sprite('surprise'), solid(), 'coin-surprise' ],
		'*': [ sprite('surprise'), solid(), 'mushroom-surprise' ],
		'(': [ sprite('pipe-bottom-left'), solid() ],
		')': [ sprite('pipe-bottom-right'), solid(), scale(0.5) ],
		'+': [ sprite('pipe-top-left'), solid() ],
		'-': [ sprite('pipe-top-right'), solid() ],
		'^': [ sprite('evil-shroom'), solid() ],
		'#': [ sprite('mushroom'), solid() ]
	};

    const gameLevel = addLevel(map, levelCfg);
    
    const scoreLabel = add([
        text('test'),
        pos(30,6),
        layer('ui'),
        {
            value: 'test',
        }


    ])

    add([text('level ' + 'test', pos(4,6))])

    const player = add([ sprite('mario'), solid(), pos(30, 0), body(), origin('bot') ]);
	
	



    keyDown('right', () => {
        player.move(MOVE_SPEED, 0)
	})
	keyDown('left', () => {
        player.move(-MOVE_SPEED, 0)
	})


	keyPress('space', () => {
		if (player.grounded()) {
			player.jump(JUMP_FORCE)
		}
	})


	




});

start('game');
