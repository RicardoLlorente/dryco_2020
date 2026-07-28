const datosDryco2020 = {
  equipo: {
    nombre: "DRYCO",
    liga: "LIGA PALERMO",
    divisional: "SERIE B",
    categoria: "CATEGORÍA 2020",
    temporada: "TEMPORADA 2026",
    instagram: "@dryco_2020" // Cambiar si tienen otro usuario
  },

  resumen: {
    jugadores: 0,
    ganados: 0,
    golesFavor: 0,
    puntos: 0
  },

  practicas: [
    {
      dia: "LUNES",
      horario: "18:30 - 19:30hs",
      lugar: "Cancha Principal / Sede Dryco",
      linkMaps: "https://maps.google.com",
      linkWaze: "https://waze.com"
    },
    {
      dia: "MIÉRCOLES",
      horario: "18:30 - 19:30hs",
      lugar: "Cancha Complejo",
      linkMaps: "https://maps.google.com",
      linkWaze: "https://waze.com"
    }
  ],

  // Plantilla de Fixture para completar a medida que jueguen
  fixture: [
    {
      fecha: 1,
      diaFecha: "15/03/2026",
      hora: "14:00hs",
      local: "Dryco",
      visitante: "Rival 1",
      golesLocal: null,
      golesVisitante: null,
      estado: "PENDIENTE", // "JUGADO", "PENDIENTE", "SUSPENDIDO"
      resultado: "-", // "Victoria", "Derrota", "Empate"
      clima: { temp: "22°", lluvia: "0%" }
    }
    // ... podés ir agregando las demás fechas
  ],

  // Tabla de posiciones Serie B
  tablaPosiciones: [
    { pos: 1, club: "Dryco", pj: 0, g: 0, e: 0, p: 0, gd: 0, pts: 0 },
    { pos: 2, club: "Rival 1", pj: 0, g: 0, e: 0, p: 0, gd: 0, pts: 0 }
  ],

  // Ubicación de canchas de los rivales de la Serie B de Liga Palermo
  canchas: [
    {
      club: "Dryco",
      direccion: "Dirección de la cancha de Dryco"
    }
  ]
};


function cargarFixture() {
  const container = document.getElementById('fixture-container');
  
  datosDryco2020.fixture.forEach(partido => {
    container.innerHTML += `
      <div class="card-fecha">
        <h3>FECHA ${partido.fecha} - ${partido.diaFecha}</h3>
        <p>${partido.local} vs ${partido.visitante}</p>
        <span>${partido.estado}</span>
      </div>
    `;
  });
}

// Ejecutar cuando cargue la página
document.addEventListener('DOMContentLoaded', cargarFixture);