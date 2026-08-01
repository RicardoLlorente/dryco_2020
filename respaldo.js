const practicasDryco = [
  {
    dia: "LUNES",
    horario: "19:00 - 20:00hs",
    lugar: "Cancha Plaza N° 12",
    mapsUrl: "https://maps.google.com/?q=Plaza+12",
    wazeUrl: "https://waze.com/ul?q=Plaza+12"
  },
  {
    dia: "VIERNES",
    horario: "19:00 - 20:00hs",
    lugar: "Sede Club Dryco (Fútbol 5)",
    mapsUrl: "https://www.google.com/maps?q=Sede+Club+Dryco",
    wazeUrl: "https://waze.com/ul?q=Sede+Club+Dryco"
  }
];

const canchas = [
  {
    club: "Intermezzo",
    direccion: "Montalvo y Luis Morandi, Villa Colón",
    mapsUrl: "https://maps.google.com/?q=Montalvo+y+Luis+Morandi",
    wazeUrl: "https://waze.com/ul?q=Montalvo+y+Luis+Morandi",
    tips: "  "
  },
  {
    club: "Sur2000",
    direccion: "  ",
    mapsUrl: "https://maps.google.com/?q=Cam+Buffa+y+Surinam",
    wazeUrl: "https://waze.com/ul?q=Cam+Buffa+y+Surinam",
    tips: "  "
  },
   {
    club: "Nuevo América",
    direccion: "  ",
    mapsUrl: "https://maps.google.com/?q=Cam+Buffa+y+Surinam",
    wazeUrl: "https://waze.com/ul?q=Cam+Buffa+y+Surinam",
    tips: "  "
  },
     {
    club: "Uruguay Buceo",
    direccion: "  ",
    mapsUrl: "https://maps.google.com/?q=Cam+Buffa+y+Surinam",
    wazeUrl: "https://waze.com/ul?q=Cam+Buffa+y+Surinam",
    tips: ""
  },
     {
    club: "Stockolmo",
    direccion: "  ",
    mapsUrl: "https://maps.google.com/?q=Cam+Buffa+y+Surinam",
    wazeUrl: "https://waze.com/ul?q=Cam+Buffa+y+Surinam",
    tips: "  "
  },
     {
    club: "Exploradores",
    direccion: "  ",
    mapsUrl: "https://maps.google.com/?q=Cam+Buffa+y+Surinam",
    wazeUrl: "https://waze.com/ul?q=Cam+Buffa+y+Surinam",
    tips: "  "
  },
     {
    club: "Est. de la Union",
    direccion: "  ",
    mapsUrl: "https://maps.google.com/?q=Cam+Buffa+y+Surinam",
    wazeUrl: "https://waze.com/ul?q=Cam+Buffa+y+Surinam",
    tips: "  "
  },
     {
    club: "Terremoto",
    direccion: "  ",
    mapsUrl: "https://maps.google.com/?q=Cam+Buffa+y+Surinam",
    wazeUrl: "https://waze.com/ul?q=Cam+Buffa+y+Surinam",
    tips: "  "
  },
     {
    club: "Alas Rojas",
    direccion: "  ",
    mapsUrl: "https://maps.google.com/?q=Cam+Buffa+y+Surinam",
    wazeUrl: "https://waze.com/ul?q=Cam+Buffa+y+Surinam",
    tips: "  "
  },
     {
    club: "Aebu",
    direccion: "  ",
    mapsUrl: "https://maps.google.com/?q=Cam+Buffa+y+Surinam",
    wazeUrl: "https://waze.com/ul?q=Cam+Buffa+y+Surinam",
    tips: "  "
  },
     {
    club: "Nueva Palmira",
    direccion: "  ",
    mapsUrl: "https://maps.google.com/?q=Cam+Buffa+y+Surinam",
    wazeUrl: "https://waze.com/ul?q=Cam+Buffa+y+Surinam",
    tips: "  "
  },
     {
    club: "Dep. Oriental",
    direccion: "  ",
    mapsUrl: "https://maps.google.com/?q=Cam+Buffa+y+Surinam",
    wazeUrl: "https://waze.com/ul?q=Cam+Buffa+y+Surinam",
    tips: "  "
  },
     {
    club: "Rincon del Reducto",
    direccion: "  ",
    mapsUrl: "https://maps.google.com/?q=Cam+Buffa+y+Surinam",
    wazeUrl: "https://waze.com/ul?q=Cam+Buffa+y+Surinam",
    tips: "  "
  },
];

const datosDryco2020 = {
  equipo: {
    nombre: "DRYCO",
    liga: "LIGA PALERMO",
    divisional: "SERIE B",
    categoria: "CATEGORÍA 2020",
    temporada: "TEMPORADA 2026",
    instagram: "@dryco2020"
  },

  resumen: {
    jugados: 13,
    ganados: 11,
    golesFavor: 33,
    puntos: 20
  },

  // Fixture con partidos y detalles de la fecha
  // Reemplaza la propiedad fixture dentro de datosDryco2020 en datos.js con este array:

fixture: [
  // --- FECHA 1 ---
  {
    fecha: 1,
    diaFecha: "Fecha 1",
    estado: "JUGADO",
    esFechaLibre: true, // Dryco no jugó en esta fecha
    clima: { temp: "--°", lluvia: "--%" },
    todosLosPartidos: [
      { local: "Intermezzo", visitante: "Nvo. Amanecer", gl: null, gv: null },
      { local: "R. del Reducto", visitante: "Sur2000", gl: 2, gv: 0 },
      { local: "Dep. Oriental", visitante: "Nuevo América", gl: 2, gv: 0 },
      { local: "Nueva Palmira", visitante: "Uruguay Buceo", gl: 0, gv: 2 },
      { local: "AEBU", visitante: "Stockolmo", gl: 0, gv: 2 },
      { local: "Alas Rojas", visitante: "Exploradores", gl: 2, gv: 0 },
      { local: "Terremoto", visitante: "Est. de la Unión", gl: 8, gv: 0 }
    ]
  },

  // --- FECHA 2 ---
  {
    fecha: 2,
    diaFecha: "Fecha 2",
    estado: "JUGADO",
    resultado: "Victoria",
    clima: { temp: "--°", lluvia: "--%" },
    miPartido: { local: "Intermezzo", visitante: "Dryco", gl: 0, gv: 2 },
    todosLosPartidos: [
      { local: "Est. de la Unión", visitante: "Alas Rojas", gl: 0, gv: 8 },
      { local: "Exploradores", visitante: "AEBU", gl: 2, gv: 0 },
      { local: "Stockolmo", visitante: "Nueva Palmira", gl: 2, gv: 0 },
      { local: "Uruguay Buceo", visitante: "Dep. Oriental", gl: 0, gv: 2 },
      { local: "Nuevo América", visitante: "R. del Reducto", gl: 0, gv: 2 },
      { local: "Sur2000", visitante: "Nvo. Amanecer", gl: null, gv: null },
      { local: "Intermezzo", visitante: "Dryco", gl: 0, gv: 2, esMiClub: true }
    ]
  },

  // --- FECHA 3 ---
  {
    fecha: 3,
    diaFecha: "Fecha 3",
    estado: "JUGADO",
    resultado: "Victoria",
    clima: { temp: "--°", lluvia: "--%" },
    miPartido: { local: "Dryco", visitante: "Sur2000", gl: 2, gv: 0 },
    todosLosPartidos: [
      { local: "Dryco", visitante: "Sur2000", gl: 2, gv: 0, esMiClub: true },
      { local: "Nvo. Amanecer", visitante: "Nuevo América", gl: null, gv: null },
      { local: "R. del Reducto", visitante: "Uruguay Buceo", gl: 8, gv: 0 },
      { local: "Dep. Oriental", visitante: "Stockolmo", gl: 3, gv: 0 },
      { local: "Nueva Palmira", visitante: "Exploradores", gl: 0, gv: 2 },
      { local: "AEBU", visitante: "Est. de la Unión", gl: 0, gv: 2 },
      { local: "Alas Rojas", visitante: "Terremoto", gl: 3, gv: 0 }
    ]
  },

  // --- FECHA 4 ---
  {
    fecha: 4,
    diaFecha: "Fecha 4",
    estado: "JUGADO",
    resultado: "Victoria",
    clima: { temp: "--°", lluvia: "--%" },
    miPartido: { local: "Nuevo América", visitante: "Dryco", gl: 0, gv: 2 },
    todosLosPartidos: [
      { local: "Terremoto", visitante: "AEBU", gl: 2, gv: 0 },
      { local: "Est. de la Unión", visitante: "Nueva Palmira", gl: 2, gv: 0 },
      { local: "Exploradores", visitante: "Dep. Oriental", gl: 0, gv: 2 },
      { local: "Stockolmo", visitante: "R. del Reducto", gl: 0, gv: 2 },
      { local: "Uruguay Buceo", visitante: "Nvo. Amanecer", gl: 2, gv: 0 },
      { local: "Nuevo América", visitante: "Dryco", gl: 0, gv: 2, esMiClub: true },
      { local: "Sur2000", visitante: "Intermezzo", gl: null, gv: null }
    ]
  },

  // --- FECHA 5 ---
  {
    fecha: 5,
    diaFecha: "Fecha 5",
    estado: "JUGADO",
    resultado: "Victoria",
    clima: { temp: "--°", lluvia: "--%" },
    miPartido: { local: "Dryco", visitante: "Uruguay Buceo", gl: 2, gv: 0 },
    todosLosPartidos: [
      { local: "Intermezzo", visitante: "Nuevo América", gl: null, gv: null },
      { local: "Dryco", visitante: "Uruguay Buceo", gl: 2, gv: 0, esMiClub: true },
      { local: "Nvo. Amanecer", visitante: "Stockolmo", gl: 0, gv: 2 },
      { local: "R. del Reducto", visitante: "Exploradores", gl: 0, gv: 0 },
      { local: "Dep. Oriental", visitante: "Est. de la Unión", gl: 7, gv: 0 },
      { local: "Nueva Palmira", visitante: "Terremoto", gl: 0, gv: 2 },
      { local: "AEBU", visitante: "Alas Rojas", gl: 0, gv: 2 }
    ]
  },

  // --- FECHA 6 ---
  {
    fecha: 6,
    diaFecha: "Fecha 6",
    estado: "JUGADO",
    resultado: "Victoria",
    clima: { temp: "--°", lluvia: "--%" },
    miPartido: { local: "Stockolmo", visitante: "Dryco", gl: 0, gv: 7 },
    todosLosPartidos: [
      { local: "Terremoto", visitante: "Dep. Oriental", gl: 5, gv: 0 },
      { local: "Uruguay Buceo", visitante: "Intermezzo", gl: 2, gv: 0 },
      { local: "Alas Rojas", visitante: "Nueva Palmira", gl: 2, gv: 0 },
      { local: "Est. de la Unión", visitante: "R. del Reducto", gl: 0, gv: 8 },
      { local: "Exploradores", visitante: "Nvo. Amanecer", gl: 2, gv: 0 },
      { local: "Nuevo América", visitante: "Sur2000", gl: 0, gv: 2 },
      { local: "Stockolmo", visitante: "Dryco", gl: 0, gv: 7, esMiClub: true }
    ]
  },

  // --- FECHA 7 ---
  {
    fecha: 7,
    diaFecha: "Fecha 7",
    estado: "JUGADO",
    resultado: "Victoria",
    clima: { temp: "--°", lluvia: "--%" },
    miPartido: { local: "Dryco", visitante: "Exploradores", gl: 2, gv: 0 },
    todosLosPartidos: [
      { local: "Sur2000", visitante: "Uruguay Buceo", gl: 0, gv: 2 },
      { local: "Intermezzo", visitante: "Stockolmo", gl: 0, gv: 2 },
      { local: "Dryco", visitante: "Exploradores", gl: 2, gv: 0, esMiClub: true },
      { local: "Nvo. Amanecer", visitante: "Est. de la Unión", gl: 0, gv: 2 },
      { local: "R. del Reducto", visitante: "Terremoto", gl: 0, gv: 8 },
      { local: "Dep. Oriental", visitante: "Alas Rojas", gl: 0, gv: 6 },
      { local: "Nueva Palmira", visitante: "AEBU", gl: null, gv: null }
    ]
  },

  // --- FECHA 8 ---
  {
    fecha: 8,
    diaFecha: "Fecha 8",
    estado: "JUGADO",
    resultado: "Victoria",
    clima: { temp: "--°", lluvia: "--%" },
    miPartido: { local: "Est. de la Unión", visitante: "Dryco", gl: 0, gv: 8 },
    todosLosPartidos: [
      { local: "AEBU", visitante: "Dep. Oriental", gl: 0, gv: 2 },
      { local: "Alas Rojas", visitante: "R. del Reducto", gl: 7, gv: 1 },
      { local: "Terremoto", visitante: "Nvo. Amanecer", gl: 2, gv: 0 },
      { local: "Est. de la Unión", visitante: "Dryco", gl: 0, gv: 8, esMiClub: true },
      { local: "Exploradores", visitante: "Intermezzo", gl: 2, gv: 0 },
      { local: "Stockolmo", visitante: "Sur2000", gl: 2, gv: 0 },
      { local: "Uruguay Buceo", visitante: "Nuevo América", gl: 2, gv: 0 }
    ]
  },

  // --- FECHA 9 ---
  {
    fecha: 9,
    diaFecha: "Fecha 9",
    estado: "JUGADO",
    resultado: "Derrota",
    clima: { temp: "--°", lluvia: "--%" },
    miPartido: { local: "Dryco", visitante: "Terremoto", gl: 0, gv: 6 },
    todosLosPartidos: [
      { local: "Nuevo América", visitante: "Stockolmo", gl: 0, gv: 2 },
      { local: "Sur2000", visitante: "Exploradores", gl: 0, gv: 2 },
      { local: "Intermezzo", visitante: "Est. de la Unión", gl: 0, gv: 2 },
      { local: "Dryco", visitante: "Terremoto", gl: 0, gv: 6, esMiClub: true },
      { local: "Nvo. Amanecer", visitante: "Alas Rojas", gl: 0, gv: 2 },
      { local: "R. del Reducto", visitante: "AEBU", gl: 2, gv: 0 },
      { local: "Dep. Oriental", visitante: "Nueva Palmira", gl: 2, gv: 0 }
    ]
  },

  // --- FECHA 10 ---
  {
    fecha: 10,
    diaFecha: "Fecha 10",
    estado: "JUGADO",
    resultado: "Derrota",
    clima: { temp: "--°", lluvia: "--%" },
    miPartido: { local: "Alas Rojas", visitante: "Dryco", gl: 5, gv: 1 },
    todosLosPartidos: [
      { local: "Nueva Palmira", visitante: "R. del Reducto", gl: 0, gv: 2 },
      { local: "AEBU", visitante: "Nvo. Amanecer", gl: null, gv: null },
      { local: "Alas Rojas", visitante: "Dryco", gl: 5, gv: 1, esMiClub: true },
      { local: "Terremoto", visitante: "Intermezzo", gl: 2, gv: 0 },
      { local: "Est. de la Unión", visitante: "Sur2000", gl: 2, gv: 0 },
      { local: "Exploradores", visitante: "Nuevo América", gl: 2, gv: 0 },
      { local: "Stockolmo", visitante: "Uruguay Buceo", gl: 1, gv: 1 }
    ]
  },

  // --- FECHA 11 ---
  {
    fecha: 11,
    diaFecha: "Fecha 11",
    estado: "JUGADO",
    resultado: "Victoria",
    clima: { temp: "--°", lluvia: "--%" },
    miPartido: { local: "Dryco", visitante: "AEBU", gl: 2, gv: 0 },
    todosLosPartidos: [
      { local: "Sur2000", visitante: "Terremoto", gl: 0, gv: 2 },
      { local: "Uruguay Buceo", visitante: "Exploradores", gl: 2, gv: 3 },
      { local: "Intermezzo", visitante: "Alas Rojas", gl: 0, gv: 2 },
      { local: "Nvo. Amanecer", visitante: "Nueva Palmira", gl: null, gv: null },
      { local: "Dryco", visitante: "AEBU", gl: 2, gv: 0, esMiClub: true },
      { local: "Nuevo América", visitante: "Est. de la Unión", gl: 0, gv: 2 },
      { local: "Dep. Oriental", visitante: "R. del Reducto", gl: 4, gv: 1 }
    ]
  },

  // --- FECHA 12 ---
  {
    fecha: 12,
    diaFecha: "Fecha 12",
    estado: "JUGADO",
    resultado: "Victoria",
    clima: { temp: "--°", lluvia: "--%" },
    miPartido: { local: "Nueva Palmira", visitante: "Dryco", gl: 0, gv: 2 },
    todosLosPartidos: [
      { local: "Alas Rojas", visitante: "Sur2000", gl: 2, gv: 0 },
      { local: "Exploradores", visitante: "Stockolmo", gl: 4, gv: 0 },
      { local: "Terremoto", visitante: "Nuevo América", gl: 2, gv: 0 },
      { local: "Nueva Palmira", visitante: "Dryco", gl: 0, gv: 2, esMiClub: true },
      { local: "Est. de la Unión", visitante: "Uruguay Buceo", gl: 0, gv: 2 },
      { local: "AEBU", visitante: "Intermezzo", gl: null, gv: null },
      { local: "Dep. Oriental", visitante: "Nvo. Amanecer", gl: 2, gv: 0 }
    ]
  },

  // --- FECHA 13 ---
  {
    fecha: 13,
    diaFecha: "Fecha 13",
    estado: "JUGADO",
    resultado: "Derrota",
    clima: { temp: "--°", lluvia: "--%" },
    miPartido: { local: "Dryco", visitante: "Dep. Oriental", gl: 1, gv: 4 },
    todosLosPartidos: [
      { local: "Nuevo América", visitante: "Alas Rojas", gl: 0, gv: 2 },
      { local: "Uruguay Buceo", visitante: "Terremoto", gl: 0, gv: 7 },
      { local: "Sur2000", visitante: "AEBU", gl: null, gv: null },
      { local: "Stockolmo", visitante: "Est. de la Unión", gl: 6, gv: 0 },
      { local: "Nvo. Amanecer", visitante: "R. del Reducto", gl: 0, gv: 2 },
      { local: "Dryco", visitante: "Dep. Oriental", gl: 1, gv: 4, esMiClub: true },
      { local: "Intermezzo", visitante: "Nueva Palmira", gl: null, gv: null }
    ]
  },

  // --- FECHA 14 ---
  {
    fecha: 14,
    diaFecha: "Fecha 14",
    estado: "JUGADO",
    resultado: "Victoria",
    clima: { temp: "--°", lluvia: "--%" },
    miPartido: { local: "R. del Reducto", visitante: "Dryco", gl: 1, gv: 2 },
    todosLosPartidos: [
      { local: "Terremoto", visitante: "Stockolmo", gl: null, gv: null }, // Partido suspendido/pendiente en planilla
      { local: "R. del Reducto", visitante: "Dryco", gl: 1, gv: 2, esMiClub: true },
      { local: "Alas Rojas", visitante: "Uruguay Buceo", gl: 8, gv: 0 },
      { local: "Nueva Palmira", visitante: "Sur2000", gl: 0, gv: 2 },
      { local: "Est. de la Unión", visitante: "Exploradores", gl: 8, gv: 3 },
      { local: "AEBU", visitante: "Nuevo América", gl: null, gv: null },
      { local: "Dep. Oriental", visitante: "Intermezzo", gl: 2, gv: 0 }
    ]
  }
]
};


const datosMetro2020 = {
  fixture: [
    {
      fecha: 1,
      diaHora: "dia · hs",
      local: "Enrique López",
      visitante: "Dryco",
      gl: 1,
      gv: 5,
      cancha: "Enrique López Baby Fútbol",
      jugado: true
    },
    {
      fecha: 2,
      diaHora: "dia · hs",
      local: "Dryco",
      visitante: "",
      gl: 0,
      gv: 0,
      cancha: "Cancha Complejo Liga Prado",
      jugado: true
    },
    {
      fecha: 3,
      diaHora: "dia · hs",
      local: "Dryco",
      visitante: "Nyagara",
      gl: 4,
      gv: 0,
      cancha: "Plaza 12",
      jugado: true
    }
  ]
};

// Objeto vacío o de muestra para Amistosos
const datosAmistosos2020 = {
  fixture: []
};
// Función principal para renderizar el fixture
function cargarFixture() {
  const container = document.getElementById('fixture-container');
  if (!container) return;

  let htmlContent = '';

  datosDryco2020.fixture.forEach(f => {
    // 1. Filas de partidos del desplegable
    let filasPartidosHTML = '';
    if (f.todosLosPartidos && f.todosLosPartidos.length > 0) {
      filasPartidosHTML = f.todosLosPartidos.map(p => `
        <div class="partido-row ${p.esMiClub ? 'destacado' : ''}">
          <span class="equipos">${p.local} vs ${p.visitante}</span>
          <span class="resultado-mini">${p.gl}-${p.gv}</span>
        </div>
      `).join('');
    } else {
      filasPartidosHTML = `<div class="partido-row"><span>Sin detalles de otros partidos</span></div>`;
    }

    // 2. Determinar la clase CSS del badge de resultado
    let claseBadge = '';
    if (f.resultado === 'Victoria') claseBadge = 'victoria';
    else if (f.resultado === 'Derrota') claseBadge = 'derrota';
    else if (f.resultado === 'Empate') claseBadge = 'empate';

    // 3. Generar la tarjeta HTML
    htmlContent += `
      <div class="match-card">
        <div class="card-header">
          <div>
            <span class="fecha-num">FECHA ${f.fecha}</span>
            <span class="fecha-date">---${f.diaFecha}---</span>
          </div>
          <div style="display: flex; gap: 10px; align-items: center;">
            <span style="color: #aaa; font-size: 0.75rem;">🌧️ ${f.clima.temp} 💧${f.clima.lluvia}</span>
            <span class="status-badge">${f.estado}</span>
          </div>
        </div>

        <div class="card-body">
          ${f.esFechaLibre 
            ? `<div class="teams-info"><strong>Fecha Libre</strong></div><div class="score-box"></div>` 
            : `
              <div class="teams-info">
                <strong>${f.miPartido.local}</strong> 📍 <span class="vs">vs</span> <strong>${f.miPartido.visitante}</strong>
              </div>
              <div class="score-box">
                ${f.resultado ? `<span class="badge-resultado ${claseBadge}">${f.resultado}</span>` : ''}
                <div class="score-numbers">${f.miPartido.gl} : ${f.miPartido.gv}</div>
              </div>
            `
          }
        </div>

        <div class="card-footer">
          <div class="btn-ver-partidos">⚽ VER TODOS LOS PARTIDOS</div>
          <span class="arrow-icon">▼</span>
        </div>

        <div class="lista-partidos-desplegable">
          <div class="titulo-desplegable">TODOS LOS PARTIDOS</div>
          ${filasPartidosHTML}
        </div>
      </div>
    `;
  });

  // Inyectamos todo el HTML generado de una sola vez
  container.innerHTML = htmlContent;

  // Asignamos los clics a las tarjetas recién creadas
  activarEventosDesplegables();
}

function calcularTablaPosiciones(fixture) {
  const equipos = {};

  // 1. Recorrer cada fecha y procesar partidos jugados
  fixture.forEach(f => {
    if (f.todosLosPartidos && Array.isArray(f.todosLosPartidos)) {
      f.todosLosPartidos.forEach(p => {
        // Ignorar si el partido no se jugó o no tiene marcadores
        if (p.gl === null || p.gv === null) return;

        // Inicializar equipo Local si no existe
        if (!equipos[p.local]) {
          equipos[p.local] = { nombre: p.local, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, gd: 0, pts: 0 };
        }
        // Inicializar equipo Visitante si no existe
        if (!equipos[p.visitante]) {
          equipos[p.visitante] = { nombre: p.visitante, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, gd: 0, pts: 0 };
        }

        const loc = equipos[p.local];
        const vis = equipos[p.visitante];

        loc.pj++;
        vis.pj++;
        loc.gf += p.gl;
        loc.gc += p.gv;
        vis.gf += p.gv;
        vis.gc += p.gl;

        if (p.gl > p.gv) {
          loc.g++;
          loc.pts += 2;
          vis.p++;
        } else if (p.gl < p.gv) {
          vis.g++;
          vis.pts += 2;
          loc.p++;
        } else {
          loc.e++;
          loc.pts += 1;
          vis.e++;
          vis.pts += 1;
        }

        loc.gd = loc.gf - loc.gc;
        vis.gd = vis.gf - vis.gc;
      });
    }
  });

  // 2. Convertir a array y ordenar (Puntos > Diferencia de goles > Goles a favor)
  return Object.values(equipos).sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.gd !== a.gd) return b.gd - a.gd;
    return b.gf - a.gf;
  });
}

// Event listener para abrir / cerrar desplegables
function activarEventosDesplegables() {
  const botonesVerPartidos = document.querySelectorAll('.card-footer');

  botonesVerPartidos.forEach(footer => {
    footer.addEventListener('click', () => {
      const tarjeta = footer.closest('.match-card');
      const lista = tarjeta.querySelector('.lista-partidos-desplegable');
      
      lista.classList.toggle('activa');
      footer.classList.toggle('abierto');
    });
  });
}


// Renderizar la tabla dinámica y pintarla en el DOM
function renderizarTabla(miClubNombre) {
  const tablaData = calcularTablaPosiciones(datosDryco2020.fixture);
  const tbody = document.getElementById('body-tabla');
  if (!tbody) return;
  
  tbody.innerHTML = tablaData.map((e, index) => {
    const esMiClub = e.nombre.toLowerCase().includes(miClubNombre.toLowerCase());
    const gdSigno = e.gd > 0 ? `+${e.gd}` : e.gd;
    
    return `
      <tr class="${esMiClub ? 'mi-club-row' : ''}">
        <td>${index + 1}</td>
        <td class="club-nombre">${e.nombre}</td>
        <td>${e.pj}</td>
        <td>${e.g}</td>
        <td>${e.e}</td>
        <td>${e.p}</td>
        <td>${gdSigno}</td>
        <td class="pts-col">${e.pts}</td>
      </tr>
    `;
  }).join('');
}

// Renderizar el listado de canchas
function renderizarCanchas() {
  const contenedor = document.getElementById('contenedor-canchas');
  if (!contenedor || typeof canchas === 'undefined') return;
  
  contenedor.innerHTML = canchas.map((c, i) => `
    <div class="cancha-card">
      <div class="cancha-header" onclick="toggleCancha(${i})">
        <div>
          <h3>${c.club}</h3>
          <p>${c.direccion}</p>
        </div>
        <span class="arrow-icon" id="arrow-${i}">▼</span>
      </div>
      <div class="cancha-body" id="cancha-body-${i}" style="display: none;">
        <div class="cancha-actions">
          <a href="${c.mapsUrl}" target="_blank" class="btn-map">📍 MAPS</a>
          <a href="${c.wazeUrl}" target="_blank" class="btn-waze">🚗 WAZE</a>
        </div>
        ${c.tips ? `<p class="cancha-tip">📍 ${c.tips}</p>` : ''}
      </div>
    </div>
  `).join('');
}

function toggleCancha(index) {
  const body = document.getElementById(`cancha-body-${index}`);
  const arrow = document.getElementById(`arrow-${index}`);
  const estaAbierto = body.style.display === 'block';
  
  body.style.display = estaAbierto ? 'none' : 'block';
  arrow.textContent = estaAbierto ? '▼' : '▲';
}

// Función para cambiar de pestañas
function cambiarTab(tab) {
  const seccionTabla = document.getElementById('seccion-tabla');
  const seccionCanchas = document.getElementById('seccion-canchas');
  const btnTabla = document.getElementById('btn-tab-tabla');
  const btnCanchas = document.getElementById('btn-tab-canchas');

  if (tab === 'tabla') {
    seccionTabla.style.display = 'block';
    seccionCanchas.style.display = 'none';
    btnTabla.classList.add('active');
    btnCanchas.classList.remove('active');
  } else {
    seccionTabla.style.display = 'none';
    seccionCanchas.style.display = 'block';
    btnCanchas.classList.add('active');
    btnTabla.classList.remove('active');
  }
}

function renderizarPracticas() {
  const contenedor = document.getElementById('contenedor-practicas');
  if (!contenedor || typeof practicasDryco === 'undefined') return;

  contenedor.innerHTML = practicasDryco.map(p => `
    <div class="practica-card">
      <h3 class="practica-dia">${p.dia}</h3>
      <div class="practica-info">
        <span class="icon">⏱️</span>
        <strong>${p.horario}</strong>
      </div>
      <div class="practica-info">
        <span class="icon">📍</span>
        <span class="lugar-texto">${p.lugar}</span>
      </div>
      <div class="practica-actions">
        <a href="${p.mapsUrl}" target="_blank" class="btn-practica btn-maps">📍 Maps</a>
        <a href="${p.wazeUrl}" target="_blank" class="btn-practica btn-waze-cyan">🗣️ Waze</a>
      </div>
    </div>
  `).join('');
}


// Función para ir a secciones generales (Fixture, Prácticas)
function irA(idElemento) {
  const el = document.getElementById(idElemento);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Función inteligente para ir a Tabla o Canchas
function irATab(nombreTab, idSeccion) {
  // 1. Activa la pestaña (hace el display: block y ajusta el botón activo)
  cambiarTab(nombreTab);

  // 2. Espera un microsegundo a que el navegador dibuje el cambio y hace scroll
  setTimeout(() => {
    const el = document.getElementById(idSeccion);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 50);
}
// Cargar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  cargarFixture();
  renderizarTabla('Dryco');
  renderizarCanchas();
  renderizarPracticas();
});

