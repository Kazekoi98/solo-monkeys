function refreshData() {
    // Aquí se debería llamar a la API de OP.GG para obtener los datos reales
    // Simulando datos de ejemplo
    document.getElementById('matchInfo').innerHTML = `<p>Partida jugada: ${new Date().toLocaleString()}</p>`;
}

// Simulando una llamada inicial al cargar la página
refreshData();