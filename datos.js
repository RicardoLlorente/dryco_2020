const practicasDryco = [
  {
    dia: "LUNES",
    horario: "19:00 - 20:00hs",
    lugar: "Cancha Plaza N° 12",
    mapsUrl: "https://maps.google.com/?q=Plaza+12",
    wazeUrl: "https://waze.com/ul?q=Plaza+12",
  },
  {
    dia: "VIERNES",
    horario: "19:00 - 20:00hs",
    lugar: "Sede Club Dryco (Fútbol 5)",
    mapsUrl: "https://www.google.com/maps?q=Sede+Club+Dryco",
    wazeUrl: "https://waze.com/ul?q=Sede+Club+Dryco",
  },
];

const canchas = [
  {
    club: "Intermezzo",
    direccion: "Frente a platea America Estadio Centenario",
    mapsUrl: "https://maps.google.com/?q=cancha-poco-sitio",
    wazeUrl: "https://waze.com/ul?q=cancha-poco-sitio",
    tips: "Frente a platea America Estadio Centenario",
  },
  {
    club: "Sur2000",
    direccion: "Rambla Gran Bretaña y Raúl Alfonsín",
    mapsUrl:
      "https://www.google.com/maps/place/AEBU+Baby+futbol/@-34.9116565,-56.2007014,17z/data=!4m15!1m8!3m7!1s0x959f81d472d61541:0xfaa8b1fb1da1e421!2sBaby+F%C3%BAtbol+AEBU,+Rbla.+Gran+Breta%C3%B1a,+11000+Montevideo,+Departamento+de+Montevideo!3b1!8m2!3d-34.9116202!4d-56.1985649!16s%2Fg%2F11bvtdh06n!3m5!1s0x959f8100558ce27f:0x350a93c3dcb85db2!8m2!3d-34.9116565!4d-56.1985127!16s%2Fg%2F11xn51fqtj?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D",
    wazeUrl: "https://waze.com/ul?q=Cam+Buffa+y+Surinam",
    tips: "En la zona del dique Mauá de la Rambla",
  },
  {
    club: "Nuevo América",
    direccion: "Dr. José de Freitas 4802",
    mapsUrl: "https://maps.google.com/?q=Nuevo+América+Baby+Fútbol",
    wazeUrl: "https://waze.com/ul?q=Nuevo+América+Baby+Fútbol",
    tips: "  ",
  },
  {
    club: "Uruguay Buceo",
    direccion: "Bulevar Batlle y Ordoñez entre Verdi y Juana Pereyra",
    mapsUrl: "https://maps.google.com/?q=buceo+baby+fútbol",
    wazeUrl: "https://waze.com/ul?q=buceo+baby+fútbol",
    tips: "Por Propios la ultima cuadra antes de llegar a la rambla",
  },
  {
    club: "Stockolmo",
    direccion: "Ramon Caceres 478 ",
    mapsUrl: "https://maps.google.com/?q=club+stockolmo+baby+fútbol",
    wazeUrl: "https://waze.com/ul?q=club+stockolmo+baby+fútbol",
    tips: "Ramon Caceres entre Carlos Maria de Pena y Bernardo Susviela. Frente al Miguelete",
  },
  {
    club: "Exploradores",
    direccion: "Avda. Gral. Rivera 4157",
    mapsUrl: "https://maps.google.com/?q=exploradores+baby+futbol",
    wazeUrl: "https://waze.com/ul?q=exploradores+baby+futbol",
    tips: "Frente al cementerio del Buceo por calle Rivera",
  },
  {
    club: "Est. de la Union",
    direccion: "Jose Antonio Cabrera entre Pernas y Juan de Dios Peza ",
    mapsUrl: "https://maps.google.com/?q=estudiantes+de+la+union",
    wazeUrl: "https://waze.com/ul?q=estudiantes+de+la+union",
    tips: "2 cuadras de 8 de octubre y 3 de Propios",
  },
  {
    club: "Terremoto",
    direccion: "Mataojo entre Samuel Blixen y Avda. Italia",
    mapsUrl: "https://maps.google.com/?q=Club+Social+y+Deportivo+Terremoto",
    wazeUrl: "https://waze.com/ul?q=Club+Social+y+Deportivo+Terremoto",
    tips: "Misma cuadra que Lieco N° 10",
  },
  {
    club: "Alas Rojas",
    direccion: "Juan Lindolfo Cuestas 1271",
    mapsUrl: "https://maps.google.com/?q=club+alas+rojas+river",
    wazeUrl: "https://waze.com/ul?q=club+alas+rojas+river",
    tips: "Rabla de Francia pocos metros antes de llegar a la Escollera Sarandi  ",
  },
  {
    club: "Aebu",
    direccion: "Rambla Gran Bretaña y Raúl Alfonsín",
    mapsUrl:
      "https://www.google.com/maps/place/AEBU+Baby+futbol/@-34.9116565,-56.2007014,17z/data=!4m15!1m8!3m7!1s0x959f81d472d61541:0xfaa8b1fb1da1e421!2sBaby+F%C3%BAtbol+AEBU,+Rbla.+Gran+Breta%C3%B1a,+11000+Montevideo,+Departamento+de+Montevideo!3b1!8m2!3d-34.9116202!4d-56.1985649!16s%2Fg%2F11bvtdh06n!3m5!1s0x959f8100558ce27f:0x350a93c3dcb85db2!8m2!3d-34.9116565!4d-56.1985127!16s%2Fg%2F11xn51fqtj?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D",
    wazeUrl: "https://waze.com/ul?q=",
    tips: " ",
  },
  {
    club: "Nueva Palmira",
    direccion: "Avda. Agraciada 4956",
    mapsUrl:
      "https://maps.google.com/?q=Nueva+Palmira+Fútbol+Infantil+-+Cancha",
    wazeUrl: "https://waze.com/ul?q=Cam+Buffa+y+Surinam",
    tips: "Dentro de Plaza de deportes N° 7, debajo del viaducto del Paso Molino",
  },
  {
    club: "Dep. Oriental",
    direccion: "Valladolid (Jaime Roldo y Pons) pasando Tobas ",
    mapsUrl: "https://maps.google.com/?q=deportivo+oriental",
    wazeUrl: "https://waze.com/ul?q=deportivo+oriental",
    tips: "Dentro del predio del Antel Arena, frente a viviendas COVIADEOM 94",
  },
  {
    club: "Rincon del Reducto",
    direccion: "San Fructuoso entre Abayuba y García Morales",
    mapsUrl: "https://maps.google.com/?q=Cancha+Rincón+de+Reducto",
    wazeUrl: "https://waze.com/ul?q=Cancha+Rincón+de+Reducto",
    tips: "Pasando el club Deportivo Reducto y antes de llegar a Viviendas del Complejo Residencial 'Parque Zapican'",
  },
  {
    club: "Nvo.Amanecer",
    direccion: "Emilio Ravignani 2563 ",
    mapsUrl: "https://maps.google.com/?q=club+nuevo+amanecer",
    wazeUrl: "https://waze.com/ul?q=club+nuevo+amanecer",
    tips: "  ",
  },
{
    club: "Las Flores",
    direccion: "Complejo Liga Prado",
    mapsUrl: "https://maps.google.com/?q=Complejo+liga+prado",
    wazeUrl: "https://waze.com/ul?q=Complejo+liga+prado",
    tips: "Cancha solo para Metro / Amistosos",
    ocultarEnLista: true // <-- CON ESTO LA EXCLUÍS DEL LISTADO GENERAL
  },

  
];

const datosDryco2020 = {
  equipo: {
    nombre: "DRYCO",
    liga: "LIGA PALERMO",
    divisional: "SERIE B",
    categoria: "CATEGORÍA 2020",
    temporada: "TEMPORADA 2026",
    instagram: "@dryco2020",
  },

  resumen: {
    jugados: 13,
    ganados: 11,
    golesFavor: 33,
    puntos: 20,
  },

  // Fixture con partidos y detalles de la fecha
  // Reemplaza la propiedad fixture dentro de datosDryco2020 en datos.js con este array:

  fixture: [
    // --- FECHA 1 ---
    {
      fecha: 1,
      diaFecha: "",
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
        { local: "Terremoto", visitante: "Est. de la Unión", gl: 8, gv: 0 },
      ],
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
        {
          local: "Intermezzo",
          visitante: "Dryco",
          gl: 0,
          gv: 2,
          esMiClub: true,
        },
      ],
    },

    // --- FECHA 3 ---
    {
      fecha: 3,
      diaFecha: "Dom 21/3 16:00",
      estado: "JUGADO",
      resultado: "Victoria",
      clima: { temp: "--°", lluvia: "--%" },
      miPartido: { local: "Dryco", visitante: "Sur2000", gl: 2, gv: 0 },
      todosLosPartidos: [
        { local: "Dryco", visitante: "Sur2000", gl: 2, gv: 0, esMiClub: true },
        {
          local: "Nvo. Amanecer",
          visitante: "Nuevo América",
          gl: null,
          gv: null,
        },
        { local: "R. del Reducto", visitante: "Uruguay Buceo", gl: 8, gv: 0 },
        { local: "Dep. Oriental", visitante: "Stockolmo", gl: 3, gv: 0 },
        { local: "Nueva Palmira", visitante: "Exploradores", gl: 0, gv: 2 },
        { local: "AEBU", visitante: "Est. de la Unión", gl: 0, gv: 2 },
        { local: "Alas Rojas", visitante: "Terremoto", gl: 3, gv: 0 },
      ],
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
        {
          local: "Nuevo América",
          visitante: "Dryco",
          gl: 0,
          gv: 2,
          esMiClub: true,
        },
        { local: "Sur2000", visitante: "Intermezzo", gl: null, gv: null },
      ],
    },

    // --- FECHA 5 ---
    {
      fecha: 5,
      diaFecha: "Dom 12/4 15:00",
      estado: "JUGADO",
      resultado: "Victoria",
      clima: { temp: "--°", lluvia: "--%" },
      miPartido: { local: "Dryco", visitante: "Uruguay Buceo", gl: 2, gv: 0 },
      todosLosPartidos: [
        { local: "Intermezzo", visitante: "Nuevo América", gl: null, gv: null },
        {
          local: "Dryco",
          visitante: "Uruguay Buceo",
          gl: 2,
          gv: 0,
          esMiClub: true,
        },
        { local: "Nvo. Amanecer", visitante: "Stockolmo", gl: 0, gv: 2 },
        { local: "R. del Reducto", visitante: "Exploradores", gl: 0, gv: 0 },
        { local: "Dep. Oriental", visitante: "Est. de la Unión", gl: 7, gv: 0 },
        { local: "Nueva Palmira", visitante: "Terremoto", gl: 0, gv: 2 },
        { local: "AEBU", visitante: "Alas Rojas", gl: 0, gv: 2 },
      ],
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
        {
          local: "Est. de la Unión",
          visitante: "R. del Reducto",
          gl: 0,
          gv: 8,
        },
        { local: "Exploradores", visitante: "Nvo. Amanecer", gl: 2, gv: 0 },
        { local: "Nuevo América", visitante: "Sur2000", gl: 0, gv: 2 },
        {
          local: "Stockolmo",
          visitante: "Dryco",
          gl: 0,
          gv: 7,
          esMiClub: true,
        },
      ],
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
        {
          local: "Dryco",
          visitante: "Exploradores",
          gl: 2,
          gv: 0,
          esMiClub: true,
        },
        { local: "Nvo. Amanecer", visitante: "Est. de la Unión", gl: 0, gv: 2 },
        { local: "R. del Reducto", visitante: "Terremoto", gl: 0, gv: 8 },
        { local: "Dep. Oriental", visitante: "Alas Rojas", gl: 0, gv: 6 },
        { local: "Nueva Palmira", visitante: "AEBU", gl: null, gv: null },
      ],
    },

    // --- FECHA 8 ---
    {
      fecha: 8,
      diaFecha: "Fecha 8",
      estado: "JUGADO",
      resultado: "Victoria",
      clima: { temp: "--°", lluvia: "--%" },
      miPartido: {
        local: "Est. de la Unión",
        visitante: "Dryco",
        gl: 0,
        gv: 8,
      },
      todosLosPartidos: [
        { local: "AEBU", visitante: "Dep. Oriental", gl: 0, gv: 2 },
        { local: "Alas Rojas", visitante: "R. del Reducto", gl: 7, gv: 1 },
        { local: "Terremoto", visitante: "Nvo. Amanecer", gl: 2, gv: 0 },
        {
          local: "Est. de la Unión",
          visitante: "Dryco",
          gl: 0,
          gv: 8,
          esMiClub: true,
        },
        { local: "Exploradores", visitante: "Intermezzo", gl: 2, gv: 0 },
        { local: "Stockolmo", visitante: "Sur2000", gl: 2, gv: 0 },
        { local: "Uruguay Buceo", visitante: "Nuevo América", gl: 2, gv: 0 },
      ],
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
        {
          local: "Dryco",
          visitante: "Terremoto",
          gl: 0,
          gv: 6,
          esMiClub: true,
        },
        { local: "Nvo. Amanecer", visitante: "Alas Rojas", gl: 0, gv: 2 },
        { local: "R. del Reducto", visitante: "AEBU", gl: 2, gv: 0 },
        { local: "Dep. Oriental", visitante: "Nueva Palmira", gl: 2, gv: 0 },
      ],
    },

    // --- FECHA 10 ---
    {
      fecha: 10,
      diaFecha: "Dom 24/5 15:00",
      estado: "JUGADO",
      resultado: "Derrota",
      clima: { temp: "--°", lluvia: "--%" },
      miPartido: { local: "Alas Rojas", visitante: "Dryco", gl: 5, gv: 1 },
      todosLosPartidos: [
        { local: "Nueva Palmira", visitante: "R. del Reducto", gl: 0, gv: 2 },
        { local: "AEBU", visitante: "Nvo. Amanecer", gl: null, gv: null },
        {
          local: "Alas Rojas",
          visitante: "Dryco",
          gl: 5,
          gv: 1,
          esMiClub: true,
        },
        { local: "Terremoto", visitante: "Intermezzo", gl: 2, gv: 0 },
        { local: "Est. de la Unión", visitante: "Sur2000", gl: 2, gv: 0 },
        { local: "Exploradores", visitante: "Nuevo América", gl: 2, gv: 0 },
        { local: "Stockolmo", visitante: "Uruguay Buceo", gl: 1, gv: 1 },
      ],
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
        {
          local: "Nvo. Amanecer",
          visitante: "Nueva Palmira",
          gl: null,
          gv: null,
        },
        { local: "Dryco", visitante: "AEBU", gl: 2, gv: 0, esMiClub: true },
        { local: "Nuevo América", visitante: "Est. de la Unión", gl: 0, gv: 2 },
        { local: "Dep. Oriental", visitante: "R. del Reducto", gl: 4, gv: 1 },
      ],
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
        {
          local: "Nueva Palmira",
          visitante: "Dryco",
          gl: 0,
          gv: 2,
          esMiClub: true,
        },
        { local: "Est. de la Unión", visitante: "Uruguay Buceo", gl: 0, gv: 2 },
        { local: "AEBU", visitante: "Intermezzo", gl: null, gv: null },
        { local: "Dep. Oriental", visitante: "Nvo. Amanecer", gl: 2, gv: 0 },
      ],
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
        {
          local: "Dryco",
          visitante: "Dep. Oriental",
          gl: 1,
          gv: 4,
          esMiClub: true,
        },
        { local: "Intermezzo", visitante: "Nueva Palmira", gl: null, gv: null },
      ],
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
        {
          local: "R. del Reducto",
          visitante: "Dryco",
          gl: 1,
          gv: 2,
          esMiClub: true,
        },
        { local: "Alas Rojas", visitante: "Uruguay Buceo", gl: 8, gv: 0 },
        { local: "Nueva Palmira", visitante: "Sur2000", gl: null, gv: null },
        { local: "Est. de la Unión", visitante: "Exploradores", gl: 0, gv: 8 },
        { local: "AEBU", visitante: "Nuevo América", gl: null, gv: null },
        { local: "Dep. Oriental", visitante: "Intermezzo", gl: 2, gv: 0 },
      ],
    },
    // --- FECHA 15 ---
    {
      fecha: 15,
      diaFecha: "Fecha 15",
      estado: "POR JUGAR",
      resultado: "",
      clima: { temp: "--°", lluvia: "--%" },
      miPartido: {
        local: "Dryco",
        visitante: "Nvo.Amanecer",
        gl: null,
        gv: null,
      },
      todosLosPartidos: [
        { local: "Terremoto", visitante: "Stockolmo", gl: null, gv: null }, // Partido suspendido/pendiente en planilla
        {
          local: "Dryco",
          visitante: "Nvo.Amanecer",
          gl: null,
          gv: null,
          esMiClub: true,
        },
        { local: "Alas Rojas", visitante: "Uruguay Buceo", gl: null, gv: null },
        { local: "Nueva Palmira", visitante: "Sur2000", gl: null, gv: null },
        {
          local: "Est. de la Unión",
          visitante: "Exploradores",
          gl: null,
          gv: null,
        },
        { local: "AEBU", visitante: "Nuevo América", gl: null, gv: null },
        { local: "Dep. Oriental", visitante: "Intermezzo", gl: null, gv: null },
      ],
    },
  ],
};

const datosMetro2020 = {
  fase: "Divisional I - Liga Metro",

  equiposSerie: [
    "LIBERTAD",
    "ESTUDIANTES UNION",
    "DEP. URUGUAYO",
    "FENIX",
    "LAS FLORES",
    "DRYCO",
    "URUGUAY BUCEO",
    "NIAGARA",
  ],

  fixture: [
    {
      fecha: 1,
      diaHora: "Sáb 26/04 · 17:00",
      local: "Las Flores",
      visitante: "Dryco",
      gl: 0,
      gv: 0,
      cancha: "Cancha Complejo Liga Prado",
      jugado: true,
    },
    {
      fecha: 2,
      diaHora: "Dom 31/05 · 13:00",
      local: "Uruguay Buceo",
      visitante: "Dryco",
      gl: 1,
      gv: 5, // Resultado corregido según la Fecha 1 real disputada
      cancha: "Cancha Uruguay Buceo",
      jugado: true,
    },
    {
      fecha: 3,
      diaHora: "Dom 26/07 · 15:30",
      local: "Dryco",
      visitante: "Niágara",
      gl: 4,
      gv: 0,
      cancha: "Plaza 12",
      jugado: true,
    },
    {
      fecha: 4,
      diaHora: "Sáb · 14:00",
      local: "Dryco",
      visitante: "Libertad",
      gl: null,
      gv: null,
      cancha: "A Confirmar",
      jugado: false,
    },
    {
      fecha: 5,
      diaHora: "Dom · 13:00",
      local: "Estudiantes Unión",
      visitante: "Dryco",
      gl: null,
      gv: null,
      cancha: "A Confirmar",
      jugado: false,
    },
    {
      fecha: 6,
      diaHora: "Sáb · 14:00",
      local: "Dryco",
      visitante: "Deportivo Uruguayo",
      gl: null,
      gv: null,
      cancha: "A Confirmar",
      jugado: false,
    },
    {
      fecha: 7,
      diaHora: "Dom · 13:00",
      local: "Fénix",
      visitante: "Dryco",
      gl: null,
      gv: null,
      cancha: "A Confirmar",
      jugado: false,
    },
  ],
};
// Objeto vacío o de muestra para Amistosos
const datosAmistosos2020 = {
  fixture: [
    {
      fecha: 1,
      diaHora: "dia · hs",
      local: "Dep. Oriental",
      visitante: "Dryco",
      gl: 4,
      gv: 2,
      cancha: "Deportivo Oriental",
      jugado: true,
    },
  ],
};
// Renderizador simplificado para la estructura del fixture de Metro
// Renderizador simplificado para la estructura del fixture de Metro
function cargarFixtureMetro(fixtureData, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!fixtureData || fixtureData.length === 0) {
    container.innerHTML = `<p style="color: #888; text-align: center; padding: 20px;">No hay partidos registrados aún para el Metro.</p>`;
    return;
  }

  let htmlContent = "";

  fixtureData.forEach((f) => {
    let resultado = "";
    if (f.gl > f.gv) resultado = f.local === "Dryco" ? "Victoria" : "Derrota";
    else if (f.gl < f.gv)
      resultado = f.visitante === "Dryco" ? "Victoria" : "Derrota";
    else if (f.gl === f.gv && f.jugado) resultado = "Empate";

    let claseBadge =
      resultado === "Victoria"
        ? "victoria"
        : resultado === "Derrota"
          ? "derrota"
          : "empate";

    // Si Dryco es local usará Dryco (Plaza 12), si no, usa el nombre del rival o de la cancha
    const clubParaModal = f.local || "A Confirmar";

    htmlContent += `
      <div class="match-card">
        <div class="card-header">
          <span class="fecha-num">FECHA ${f.fecha}</span>
          <div class="fecha-date-centered">${f.diaHora}</div>
          <span class="status-badge">${f.jugado ? "JUGADO" : "PENDIENTE"}</span>
        </div>

        <div class="card-body">
          <div class="teams-info">
            <strong>${f.local || "A Confirmar"}</strong> <span class="vs">vs</span> <strong>${f.visitante || "A Confirmar"}</strong>
            
            <!-- SUB-LÍNEA CLICKABLE QUE ABRE EL MODAL DE CANCHA -->
            <div style="font-size: 0.75rem; color: #aaa; margin-top: 4px; cursor: pointer;" onclick="abrirModalCancha('${clubParaModal}')">
              📍 <span style="text-decoration: underline;">${f.cancha || "Ver cancha"}</span>
            </div>
          </div>
          <div class="score-box">
            ${f.jugado ? `<span class="badge-resultado ${claseBadge}">${resultado}</span>` : ""}
            <div class="score-numbers">${f.jugado ? `${f.gl} : ${f.gv}` : "- : -"}</div>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = htmlContent;
}
// Renderizar tabla de posiciones para la Liga Palermo
function renderizarTabla(fixture, miClubNombre) {
  const equipos = {};

  fixture.forEach((f) => {
    if (!f.todosLosPartidos) return;

    f.todosLosPartidos.forEach((p) => {
      if (p.gl === null || p.gv === null) return; // ignora partidos no jugados

      if (!equipos[p.local])
        equipos[p.local] = {
          nombre: p.local,
          pj: 0,
          g: 0,
          e: 0,
          p: 0,
          gf: 0,
          gc: 0,
          gd: 0,
          pts: 0,
        };
      if (!equipos[p.visitante])
        equipos[p.visitante] = {
          nombre: p.visitante,
          pj: 0,
          g: 0,
          e: 0,
          p: 0,
          gf: 0,
          gc: 0,
          gd: 0,
          pts: 0,
        };

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
  });

  const tablaData = Object.values(equipos).sort(
    (a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf,
  );
  inyectarTabla(tablaData, miClubNombre);
}
// Cálculo de tabla para fixture del Metro
function renderizarTablaMetro(fixture, miClubNombre) {
  const equipos = {};

  fixture.forEach((p) => {
    if (!p.jugado || !p.local || !p.visitante) return;

    if (!equipos[p.local])
      equipos[p.local] = {
        nombre: p.local,
        pj: 0,
        g: 0,
        e: 0,
        p: 0,
        gf: 0,
        gc: 0,
        gd: 0,
        pts: 0,
      };
    if (!equipos[p.visitante])
      equipos[p.visitante] = {
        nombre: p.visitante,
        pj: 0,
        g: 0,
        e: 0,
        p: 0,
        gf: 0,
        gc: 0,
        gd: 0,
        pts: 0,
      };

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

  const tablaData = Object.values(equipos).sort(
    (a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf,
  );
  inyectarTabla(tablaData, miClubNombre);
}

// Inyección común en el DOM para el HTML de la tabla
function inyectarTabla(tablaData, miClubNombre) {
  const tbody = document.getElementById("body-tabla");
  if (!tbody) return;

  if (tablaData.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: #888;">Sin datos disponibles para calcular la tabla</td></tr>`;
    return;
  }

  tbody.innerHTML = tablaData
    .map((e, index) => {
      const esMiClub = e.nombre
        .toLowerCase()
        .includes(miClubNombre.toLowerCase());
      const gdSigno = e.gd > 0 ? `+${e.gd}` : e.gd;

      return `
      <tr class="${esMiClub ? "mi-club-row" : ""}">
        <td>${index + 1}</td>
        <td class="club-nombre">${e.nombre}</td>
        <td>${e.pj}</td>
        <td>${e.g}</td>
        <td>${e.e}</td>
        <td>${e.p}</td>
        <td>${e.gf}</td>
        <td>${e.gc}</td>
        <td>${gdSigno}</td>
        <td class="pts-col">${e.pts}</td>
      </tr>
    `;
    })
    .join("");
}

// Variable global para seguir el torneo actual
let torneoActual = "palermo";

// Aseguramos que cambiarTorneo mantenga sincronizada la tabla con el torneo visible
function cambiarTorneo(torneo) {
  torneoActual = torneo;

  // 1. Ocultar todos los contenidos de torneos
  document.getElementById("vista-palermo").style.display = "none";
  document.getElementById("seccion-metro").style.display = "none";
  document.getElementById("seccion-amistosos").style.display = "none";

  // 2. Desactivar clases activas de las pestañas de torneos
  document.getElementById("tab-palermo").classList.remove("active");
  document.getElementById("tab-metro").classList.remove("active");
  document.getElementById("tab-amistosos").classList.remove("active");

  // Referencias a la barra inferior de pestañas (Tabla / Canchas) y sus bloques
  const contenedorSubTabsInferior = document.querySelector(
    ".sub-tabs:not(#tabs-torneos)",
  );
  const seccionTabla = document.getElementById("seccion-tabla");
  const seccionCanchas = document.getElementById("seccion-canchas");
  const tituloTabla = document.getElementById("titulo-tabla");

  if (torneo === "palermo") {
    document.getElementById("vista-palermo").style.display = "block";
    document.getElementById("tab-palermo").classList.add("active");

    // Mostrar selector de tabla/canchas
    if (contenedorSubTabsInferior)
      contenedorSubTabsInferior.style.display = "flex";
    cambiarTab("tabla");

    if (tituloTabla)
      tituloTabla.textContent = "📊 TABLA DE POSICIONES - LIGA PALERMO";
    cargarFixtureGenérico(datosDryco2020.fixture, "fixture-container");
    renderizarTabla(datosDryco2020.fixture, "Dryco");
  } else if (torneo === "metro") {
    document.getElementById("seccion-metro").style.display = "block";
    document.getElementById("tab-metro").classList.add("active");

    // METROPOLITANO: Ocultar barra inferior, Tabla y Canchas
    if (contenedorSubTabsInferior)
      contenedorSubTabsInferior.style.display = "none";
    if (seccionTabla) seccionTabla.style.display = "none";
    if (seccionCanchas) seccionCanchas.style.display = "none";

    cargarFixtureMetro(datosMetro2020.fixture, "contenedor-fixture-metro");
    // Mostrar selector de tabla/canchas
    //if (contenedorSubTabsInferior) contenedorSubTabsInferior.style.display = "flex";
    //cambiarTab("tabla");

    //if (tituloTabla)
    //  tituloTabla.textContent = "📊 TABLA DE POSICIONES - METROPOLITANO";
    //cargarFixtureMetro(datosMetro2020.fixture, "contenedor-fixture-metro");
    //renderizarTablaMetro(datosMetro2020.fixture, "Dryco");
  } else if (torneo === "amistosos") {
    document.getElementById("seccion-amistosos").style.display = "block";
    document.getElementById("tab-amistosos").classList.add("active");

    // OCULTAR TABLA Y CANCHAS EN AMISTOSOS
    if (contenedorSubTabsInferior)
      contenedorSubTabsInferior.style.display = "none";
    if (seccionTabla) seccionTabla.style.display = "none";
    if (seccionCanchas) seccionCanchas.style.display = "none";

    // Cargar fixture con la nueva función
    cargarFixtureAmistosos(
      datosAmistosos2020.fixture,
      "contenedor-fixture-amistosos",
    );
  }
}

// Variable global auxiliar para saber qué fecha se está editando
let fechaEdicionActual = null;

function cargarFixtureGenérico(fixtureData, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!fixtureData || fixtureData.length === 0) {
    container.innerHTML = `<p style="color: #888; text-align: center; padding: 20px;">No hay partidos registrados aún.</p>`;
    return;
  }

  let htmlContent = "";

  fixtureData.forEach((f) => {
    // Generar filas desplegables con Locales en negrita
    let filasPartidosHTML = "";
    if (f.todosLosPartidos && f.todosLosPartidos.length > 0) {
      filasPartidosHTML = f.todosLosPartidos
        .map((p) => {
          const esMiClub = p.esMiClub || p.local.toLowerCase().includes("dryco") || p.visitante.toLowerCase().includes("dryco");
          const glTexto = p.gl !== null ? p.gl : "-";
          const gvTexto = p.gv !== null ? p.gv : "-";

          return `
            <div class="partido-row ${esMiClub ? "destacado" : ""}">
              <span class="equipos">
                <span class="local-team">${p.local}</span> <span class="vs-mini">vs</span> <span class="visit-team">${p.visitante}</span>
              </span>
              <div class="resultado-box-mini">
                ${p.wo ? `<span class="badge-wo">W/O</span>` : ""}
                <span class="resultado-mini">${glTexto}-${gvTexto}</span>
              </div>
            </div>
          `;
        })
        .join("");
    } else {
      filasPartidosHTML = `<div class="partido-row"><span>Sin detalles de otros partidos</span></div>`;
    }

    // Clase para el badge del partido principal (incluye W/O)
    let claseBadge = "";
    if (f.resultado === "Victoria") claseBadge = "victoria";
    else if (f.resultado === "Derrota") claseBadge = "derrota";
    else if (f.resultado === "Empate") claseBadge = "empate";
    else if (f.resultado === "W/O" || f.wo) claseBadge = "wo";

    const clubLocal = f.miPartido ? f.miPartido.local : "";

    htmlContent += `
      <div class="match-card">
        <div class="card-header">
          <span class="fecha-num">FECHA ${f.fecha}</span>
          <div class="fecha-date-centered">${f.diaFecha || ""}</div>
          <span class="status-badge">${f.estado || "PROGRAMADO"}</span>
        </div>

        <div class="card-body">
          ${
            f.esFechaLibre
              ? `<div class="teams-info"><strong>Fecha Libre</strong></div><div class="score-box"></div>`
              : `
              <div class="teams-info">
                <strong class="local-team">${f.miPartido.local}</strong>
                <span class="pin-cancha" onclick="abrirModalCancha('${clubLocal}')" title="Ver cancha">📍</span>
                <span class="vs">vs</span> 
                <span class="visit-team">${f.miPartido.visitante}</span>
              </div>
              <div class="score-box">
                ${f.resultado ? `<span class="badge-resultado ${claseBadge}">${f.resultado}</span>` : ""}
                <div class="score-numbers">${f.miPartido.gl !== null ? f.miPartido.gl : "-"} : ${f.miPartido.gv !== null ? f.miPartido.gv : "-"}</div>
                <button class="btn-edit-match" onclick="abrirModalResultado(${f.fecha})" title="Cargar / Editar resultado">•••</button>
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

  container.innerHTML = htmlContent;
  activarEventosDesplegables();
}

// --- LÓGICA DEL MODAL DE CARGAR RESULTADO ---
function abrirModalResultado(numFecha) {
  const f = datosDryco2020.fixture.find((item) => item.fecha === numFecha);
  if (!f || !f.miPartido) return;

  fechaEdicionActual = numFecha;

  document.getElementById("modal-res-subtitulo").textContent = `Fecha ${f.fecha} · ${f.miPartido.local} vs ${f.miPartido.visitante}`;
  document.getElementById("lbl-local").textContent = f.miPartido.local;
  document.getElementById("lbl-visitante").textContent = f.miPartido.visitante;

  document.getElementById("input-gl").value = f.miPartido.gl !== null ? f.miPartido.gl : 0;
  document.getElementById("input-gv").value = f.miPartido.gv !== null ? f.miPartido.gv : 0;
  document.getElementById("chk-wo").checked = f.resultado === "W/O" || f.wo === true;

  document.getElementById("modal-resultado").classList.add("activo");
}

function cerrarModalResultado(event) {
  if (event.target.id === "modal-resultado") cerrarModalResultadoDirecto();
}

function cerrarModalResultadoDirecto() {
  document.getElementById("modal-resultado").classList.remove("activo");
  fechaEdicionActual = null;
}

// Función para auto-completar 3-0 cuando se marca/desmarca W/O
function aplicarReglaWO() {
  const chkWO = document.getElementById("chk-wo");
  if (!chkWO || fechaEdicionActual === null) return;

  if (chkWO.checked) {
    const f = datosDryco2020.fixture.find((item) => item.fecha === fechaEdicionActual);
    if (!f || !f.miPartido) return;

    const esDrycoLocal = f.miPartido.local.toLowerCase().includes("dryco");
    
    // Si Dryco es Local: 3 a 0. Si Dryco es Visitante: 0 a 3.
    if (esDrycoLocal) {
      document.getElementById("input-gl").value = 3;
      document.getElementById("input-gv").value = 0;
    } else {
      document.getElementById("input-gl").value = 0;
      document.getElementById("input-gv").value = 3;
    }
  }
}


function guardarResultado() {
  if (fechaEdicionActual === null) return;

  const f = datosDryco2020.fixture.find((item) => item.fecha === fechaEdicionActual);
  if (!f || !f.miPartido) return;

  const gl = parseInt(document.getElementById("input-gl").value) || 0;
  const gv = parseInt(document.getElementById("input-gv").value) || 0;
  const esWO = document.getElementById("chk-wo").checked;

  f.miPartido.gl = gl;
  f.miPartido.gv = gv;
  f.estado = "JUGADO";

  const esDrycoLocal = f.miPartido.local.toLowerCase().includes("dryco");
  const golesDryco = esDrycoLocal ? gl : gv;
  const golesRival = esDrycoLocal ? gv : gl;

  if (esWO) {
    f.resultado = "W/O";
    f.wo = true;
  } else {
    f.wo = false;
    if (golesDryco > golesRival) f.resultado = "Victoria";
    else if (golesDryco < golesRival) f.resultado = "Derrota";
    else f.resultado = "Empate";
  }

  // Actualizar en cascada
  cargarFixtureGenérico(datosDryco2020.fixture, "fixture-container");
  renderizarTabla(datosDryco2020.fixture, "Dryco");
  actualizarEstadisticasGlobales();

  cerrarModalResultadoDirecto();
}

// Función combinada para activar torneo y navegar con scroll
function cambiarTorneoYScroll(torneo, idSeccion) {
  cambiarTorneo(torneo);
  setTimeout(() => {
    irA(idSeccion);
  }, 50);
}

// Renderizador simplificado para la estructura del fixture de Metro

// Event listener para abrir / cerrar desplegables
function activarEventosDesplegables() {
  const botonesVerPartidos = document.querySelectorAll(".card-footer");

  botonesVerPartidos.forEach((footer) => {
    footer.addEventListener("click", () => {
      const tarjeta = footer.closest(".match-card");
      const lista = tarjeta.querySelector(".lista-partidos-desplegable");

      lista.classList.toggle("activa");
      footer.classList.toggle("abierto");
    });
  });
}

// Renderizar el listado de canchas
// Renderizar el listado de canchas
function renderizarCanchas() {
  const contenedor = document.getElementById("contenedor-canchas");
  if (!contenedor || typeof canchas === "undefined") return;

  // Filtrar solo las canchas que NO estén marcadas para ocultar
  const canchasAMostrar = canchas.filter(c => !c.ocultarEnLista);

  contenedor.innerHTML = canchasAMostrar
    .map(
      (c, i) => `
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
        ${c.tips ? `<p class="cancha-tip">📍 ${c.tips}</p>` : ""}
      </div>
    </div>
  `,
    )
    .join("");
}

function toggleCancha(index) {
  const body = document.getElementById(`cancha-body-${index}`);
  const arrow = document.getElementById(`arrow-${index}`);
  const estaAbierto = body.style.display === "block";

  body.style.display = estaAbierto ? "none" : "block";
  arrow.textContent = estaAbierto ? "▼" : "▲";
}

// Función para cambiar de pestañas
function cambiarTab(tab) {
  const seccionTabla = document.getElementById("seccion-tabla");
  const seccionCanchas = document.getElementById("seccion-canchas");
  const btnTabla = document.getElementById("btn-tab-tabla");
  const btnCanchas = document.getElementById("btn-tab-canchas");

  if (tab === "tabla") {
    seccionTabla.style.display = "block";
    seccionCanchas.style.display = "none";
    btnTabla.classList.add("active");
    btnCanchas.classList.remove("active");
  } else {
    seccionTabla.style.display = "none";
    seccionCanchas.style.display = "block";
    btnCanchas.classList.add("active");
    btnTabla.classList.remove("active");
  }
}

function renderizarPracticas() {
  const contenedor = document.getElementById("contenedor-practicas");
  if (!contenedor || typeof practicasDryco === "undefined") return;

  contenedor.innerHTML = practicasDryco
    .map(
      (p) => `
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
        <a href="${p.mapsUrl}" target="_blank" class="btn-practica btn-maps">
          <svg width="14" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          Maps
        </a>
        <a href="${p.wazeUrl}" target="_blank" class="btn-practica btn-waze-cyan">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10A10 10 0 0 0 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
          </svg>
          Waze
        </a>
      </div>
    </div>
  `,
    )
    .join("");
}

// Función para ir a secciones generales (Fixture, Prácticas)
function irA(idElemento) {
  const el = document.getElementById(idElemento);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Función inteligente para ir a Tabla o Canchas
function irATab(nombreTab, idSeccion) {
  // 1. Cambia automáticamente el torneo activo a Palermo (que es el que tiene la Tabla y Canchas)
  cambiarTorneo("palermo");

  // 2. Activa la sub-pestaña correspondiente ('tabla' o 'canchas')
  cambiarTab(nombreTab);
  // 3. Espera a que el DOM se actualice y hace el scroll suave
  setTimeout(() => {
    const el = document.getElementById(idSeccion);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 50);
}

// Función para procesar un fixture individual y extraer los datos de Dryco
// Función para procesar un fixture individual adaptada a la estructura real de tus datos
function obtenerStatsEquipo(fixture, nombreEquipo = "Dryco") {
  let stats = { pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, pts: 0 };

  if (!fixture || !Array.isArray(fixture)) return stats;

  fixture.forEach((fecha) => {
    // 1. Caso Liga Palermo / Amistosos (usan array todosLosPartidos)
    if (fecha.todosLosPartidos) {
      fecha.todosLosPartidos.forEach((p) => {
        if (p.gl !== null && p.gv !== null) {
          const esLocal = p.local
            .toLowerCase()
            .includes(nombreEquipo.toLowerCase());
          const esVisita = p.visitante
            .toLowerCase()
            .includes(nombreEquipo.toLowerCase());

          if (esLocal || esVisita) {
            stats.pj++;
            const gf = esLocal ? p.gl : p.gv;
            const gc = esLocal ? p.gv : p.gl;

            stats.gf += gf;
            stats.gc += gc;

            if (gf > gc) {
              stats.pg++;
              stats.pts += 2; // En Baby Fútbol la victoria otorga 2 pts
            } else if (gf === gc) {
              stats.pe++;
              stats.pts += 1;
            } else if (gf < gc) {
              stats.pp++;
            }
          }
        }
      });
    }
    // 2. Caso Metro (partidos directos en el array con propiedad .jugado)
    else if (fecha.jugado && fecha.gl !== null && fecha.gv !== null) {
      const esLocal = fecha.local
        .toLowerCase()
        .includes(nombreEquipo.toLowerCase());
      const esVisita = fecha.visitante
        .toLowerCase()
        .includes(nombreEquipo.toLowerCase());

      if (esLocal || esVisita) {
        stats.pj++;
        const gf = esLocal ? fecha.gl : fecha.gv;
        const gc = esLocal ? fecha.gv : fecha.gl;

        stats.gf += gf;
        stats.gc += gc;

        if (gf > gc) {
          stats.pg++;
          stats.pts += 2; // En Baby Fútbol la victoria otorga 2 pts
        } else if (gf === gc) {
          stats.pe++;
          stats.pts += 1;
        } else if (gf < gc) {
          stats.pp++;
        }
      }
    }
  });

  return stats;
}

// Función principal que calcula la suma total e inyecta en el HTML
function actualizarEstadisticasGlobales() {
  const statsPalermo = obtenerStatsEquipo(datosDryco2020.fixture, "Dryco");
  const statsMetro = obtenerStatsEquipo(datosMetro2020.fixture, "Dryco");
  const statsAmistosos = obtenerStatsEquipo(
    datosAmistosos2020.fixture,
    "Dryco",
  );

  // Suma total
  const totalPJ = statsPalermo.pj + statsMetro.pj + statsAmistosos.pj;
  const totalPG = statsPalermo.pg + statsMetro.pg + statsAmistosos.pg;
  const totalPE = statsPalermo.pe + statsMetro.pe + statsAmistosos.pe;
  const totalPP = statsPalermo.pp + statsMetro.pp + statsAmistosos.pp;
  const totalGF = statsPalermo.gf + statsMetro.gf + statsAmistosos.gf;
  const totalGC = statsPalermo.gc + statsMetro.gc + statsAmistosos.gc;

  const totalPts = statsPalermo.pts + statsMetro.pts + statsAmistosos.pts;

  // Inyección en DOM
  const elPJ = document.getElementById("stat-pj");
  const elPG = document.getElementById("stat-pg");
  const elPE = document.getElementById("stat-pe");
  const elPP = document.getElementById("stat-pp");
  const elGF = document.getElementById("stat-gf");
  const elGC = document.getElementById("stat-gc");
  const elPts = document.getElementById("stat-pts");

  if (elPJ) elPJ.textContent = totalPJ;
  if (elPG) elPG.textContent = totalPG;
  if (elPE) elPE.textContent = totalPE;
  if (elPP) elPP.textContent = totalPP;
  if (elGF) elGF.textContent = totalGF;
  if (elGC) elGC.textContent = totalGC;
  if (elPts) elPts.textContent = totalPts;
}

// Renderizador específico para Amistosos
// Renderizador específico para Amistosos
function cargarFixtureAmistosos(fixtureData, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!fixtureData || fixtureData.length === 0) {
    container.innerHTML = `<p style="color: #888; text-align: center; padding: 20px;">No hay partidos amistosos registrados aún.</p>`;
    return;
  }

  let htmlContent = "";

  fixtureData.forEach((f) => {
    let resultado = "";
    if (f.gl > f.gv)
      resultado = f.local.toLowerCase().includes("dryco")
        ? "Victoria"
        : "Derrota";
    else if (f.gl < f.gv)
      resultado = f.visitante.toLowerCase().includes("dryco")
        ? "Victoria"
        : "Derrota";
    else if (f.gl === f.gv && f.jugado) resultado = "Empate";

    let claseBadge =
      resultado === "Victoria"
        ? "victoria"
        : resultado === "Derrota"
          ? "derrota"
          : "empate";

    const clubParaModal = f.local || "A Confirmar";

    htmlContent += `
      <div class="match-card">
        <div class="card-header">
          <span class="fecha-num">AMISTOSO ${f.fecha}</span>
          <div class="fecha-date-centered">${f.diaHora || ""}</div>
          <span class="status-badge">${f.jugado ? "JUGADO" : "PENDIENTE"}</span>
        </div>

        <div class="card-body">
          <div class="teams-info">
            <strong>${f.local || "A Confirmar"}</strong> <span class="vs">vs</span> <strong>${f.visitante || "A Confirmar"}</strong>
            
            <!-- SUB-LÍNEA CLICKABLE QUE ABRE EL MODAL DE CANCHA -->
            <div style="font-size: 0.75rem; color: #aaa; margin-top: 4px; cursor: pointer;" onclick="abrirModalCancha('${clubParaModal}')">
              📍 <span style="text-decoration: underline;">${f.cancha || "Ver cancha"}</span>
            </div>
          </div>
          <div class="score-box">
            ${f.jugado ? `<span class="badge-resultado ${claseBadge}">${resultado}</span>` : ""}
            <div class="score-numbers">${f.jugado ? `${f.gl} : ${f.gv}` : "- : -"}</div>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = htmlContent;
}





// --- FUNCIONES PARA EL MODAL DE CANCHA Y WHATSAPP ---
function abrirModalCancha(nombreClub) {
  let clubNombre = nombreClub;
  let direccion = "Dirección a confirmar";
  let maps = "";
  let waze = "";

  // Caso 1: Si jugamos de locales (Dryco), tomamos los datos de la práctica en Plaza 12
  if (nombreClub.toLowerCase().includes("dryco")) {
    const practicaPlaza12 = typeof practicasDryco !== "undefined"
      ? practicasDryco.find(p => p.lugar.toLowerCase().includes("plaza"))
      : null;

    clubNombre = "DRYCO (PLAZA N° 12)";
    direccion = practicaPlaza12 ? practicaPlaza12.lugar : "Cancha Plaza N° 12";
    maps = practicaPlaza12 ? practicaPlaza12.mapsUrl : "https://maps.google.com/?q=Plaza+12";
    waze = practicaPlaza12 ? practicaPlaza12.wazeUrl : "https://waze.com/ul?q=Plaza+12";
  } 
  // Caso 2: Para los demás clubes rivales, buscamos en el listado de canchas
  else {
    const datosCancha = typeof canchas !== "undefined"
      ? canchas.find(c => c.club.toLowerCase().trim() === nombreClub.toLowerCase().trim())
      : null;

    direccion = (datosCancha && datosCancha.direccion && datosCancha.direccion.trim() !== "") 
      ? datosCancha.direccion 
      : "Dirección a confirmar";

    maps = (datosCancha && datosCancha.mapsUrl) 
      ? datosCancha.mapsUrl 
      : `https://maps.google.com/?q=${encodeURIComponent(clubNombre + " Baby Futbol Montevideo")}`;

    waze = (datosCancha && datosCancha.wazeUrl) 
      ? datosCancha.wazeUrl 
      : `https://waze.com/ul?q=${encodeURIComponent(clubNombre + " Baby Futbol Montevideo")}`;
  }

  // Cargar datos en los elementos HTML del modal
  document.getElementById("modal-titulo-club").textContent = clubNombre.toUpperCase();
  document.getElementById("modal-direccion-cancha").textContent = direccion;

  document.getElementById("btn-modal-maps").href = maps;
  document.getElementById("btn-modal-waze").href = waze;

  // Texto para compartir la ubicación exacta por WhatsApp
  const textoWsp = `⚽ *Ubicación Cancha - ${clubNombre}*\n📍 *Dirección:* ${direccion}\n🗺️ *Google Maps:* ${maps}\n🚗 *Waze:* ${waze}`;
  document.getElementById("btn-modal-wsp").href = `https://api.whatsapp.com/send?text=${encodeURIComponent(textoWsp)}`;

  // Mostrar modal
  document.getElementById("modal-cancha").classList.add("activo");
}
function cerrarModalCancha(event) {
  if (event.target.id === "modal-cancha") {
    cerrarModalCanchaDirecto();
  }
}

function cerrarModalCanchaDirecto() {
  document.getElementById("modal-cancha").classList.remove("activo");
}

// Evento inicialización al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  cambiarTorneo("palermo"); // Carga la Liga Palermo por defecto
  actualizarEstadisticasGlobales(); // <--- Agregalo acá para calcular la suma de los 3 torneos
  renderizarCanchas();
  renderizarPracticas();
  // Escuchar el cambio en el checkbox de W/O del modal
  const chkWO = document.getElementById("chk-wo");
  if (chkWO) {
    chkWO.addEventListener("change", aplicarReglaWO);
  }
});
