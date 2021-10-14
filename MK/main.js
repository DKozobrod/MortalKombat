const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['sword', 'chain', 'freezing'],
    attack: function() {
        console.log(player1.name + ' Fight...')
    },
};

const player2 = {
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['blade', 'fan', 'stick'],
    attack: function() {
        console.log(player2.name + ' Fight...')
    },
}

player1.attack()
player2.attack()

console.log(player1);
console.log(player2);

function createPlayer(player, namePlayer, obj) {
    const div1 = document.createElement('div');
    div1.classList.add(player);

    const div2 = document.createElement('div');
    div2.classList.add(player);

    const life = document.createElement('div');
    life.classList.add('life');
    life.style.width = player.hp + '%';

    const name = document.createElement('div');
    name.classList.add('name');
    name.innerText = namePlayer.name;

    const div3 = document.createElement('div');
    div3.classList.add('character');

    const img = document.createElement('img');
    img.src = namePlayer.img

    div2.appendChild(life);
    div2.appendChild(name);
    div3.appendChild(img);
    div1.appendChild(div2);
    div1.appendChild(div3);

    const arenas = document.querySelector('.arenas');
    arenas.appendChild(div1);
    
}

createPlayer('player1', player1);
createPlayer('player2', player2);

