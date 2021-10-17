const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button')

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['sword', 'chain', 'freezing'],
    attack: function(name) {
        console.log(name + ' ' + 'Fight...');
    },
};

const player2 = {
    player: 2,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['blade', 'fan', 'stick'],
    attack: function(name) {
        console.log(name + ' ' + 'Fight...');
    },
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
};

function createPlayer(playerObj) {
    const $player = createElement('div', 'player' + playerObj.player);
    const progressbar = createElement('div', 'progressbar');
    const character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const img = createElement('img');

    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    img.src = playerObj.img;

    progressbar.appendChild($name);
    progressbar.appendChild($life);

    character.appendChild(img);
    $player.appendChild(progressbar);
    $player.appendChild(character);
    
    return $player;
}

function changeHP(player) {
    const playerLife = document.querySelector('.player'+ player.player +' .life');
    const randomValue = Math.ceil(Math.random() * 20);
    player.hp -= randomValue;
    playerLife.style.width = player.hp + '%';

    if (player.hp < 0) {
        randomButton.disabled = true;
        arenas.appendChild(playerLose(player.name));
    } else if (player.hp === 0) {
        randomButton.disabled = true;
        arenas.appendChild(noBodyWins);
    } 
    
}

function noBodyWins() {
    const noBodyWinsTitle = createElement('div', 'noBodyWinsTitle');
    noBodyWinsTitle.innerText = 'no Body Wins';
    return noBodyWinsTitle;
}

function playerLose(name) {
    const loseTitle = createElement('div', 'loseTitle');
    loseTitle.innerText = name + ' lose';
    return loseTitle;
}

randomButton.addEventListener('click', function () {
    changeHP(player1);
    changeHP(player2);
})

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));


