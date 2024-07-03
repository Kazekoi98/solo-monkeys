const api_key = 'TU_CLAVE_DE_API_DE_OP.GG';

const usernames = ['dislexico#EUW', 'marcos306#EUW', 'Kayleadentro pto#Kayle', 'CocoBoymrs#9537', 'kuzanero#EUW'];

function fetchGameData(username) {
    fetch(`https://tuurldeapi.com/summoner/${username}?api_key=${api_key}`)
        .then(response => response.json())
        .then(data => {
            const matchData = data.matchHistory[0]; // Aquí deberías ajustar para obtener los datos relevantes
            document.getElementById('matchInfo').innerHTML += `<p>${username}: Última partida - ${matchData.result}</p>`;
        })
        .catch(error => console.error('Error al obtener datos:', error));
}

function refreshData() {
    document.getElementById('matchInfo').innerHTML = ''; // Limpiar la información anterior
    usernames.forEach(username => {
        fetchGameData(username);
    });
}

// Simulando una llamada inicial al cargar la página
refreshData();
