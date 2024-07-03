const players = [
    { name: 'dislexico#EUW', twitch: 'link_de_twitch_jugador1' },
    { name: 'marcos306#EUW', twitch: 'link_de_twitch_jugador2' },
    { name: 'Kayleadentro pto#Kayle', twitch: 'link_de_twitch_jugador3' },
    { name: 'CocoBoymrs#9537', twitch: 'link_de_twitch_jugador4' },
    { name: 'kuzanero#EUW', twitch: 'link_de_twitch_jugador5' }
];

function fetchPlayerData(player) {
    // Lógica para obtener datos de League of Graphs del jugador y actualizar la página
    console.log(`Obteniendo datos de League of Graphs para ${player.name}`);
}

function createTwitchLink(player) {
    const linkElement = document.createElement('a');
    linkElement.href = player.twitch;
    linkElement.target = '_blank';
    linkElement.innerText = `Streaming de ${player.name} en Twitch`;
    return linkElement;
}

// Simular el reinicio de la página al iniciar una partida
players.forEach(player => {
    fetchPlayerData(player);
    const playerElement = document.getElementById(player.name.split(' ').join('-'));
    playerElement.appendChild(createTwitchLink(player));
});
