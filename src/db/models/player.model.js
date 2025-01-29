const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");
 
const Player = sequelize.define("players", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    fifa_version: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fifa_update: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    player_face_url: {
      type: DataTypes.STRING,
    },
    long_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    player_positions: {
      type: DataTypes.STRING,
    },
    club_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nationality_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    overall: {
      type: DataTypes.INTEGER,
    },
    potential: {
      type: DataTypes.INTEGER,
    },
    value_eur: {
      type: DataTypes.INTEGER,
    },
    wage_eur: {
      type: DataTypes.INTEGER,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    height_cm: {
      type: DataTypes.INTEGER,
    },
    weight_kg: {
      type: DataTypes.INTEGER,
    },
    preferred_foot: {
      type: DataTypes.STRING,
    },
    weak_foot: {
      type: DataTypes.INTEGER,
    },
    skill_moves: {
      type: DataTypes.INTEGER,
    },
    international_reputation: {
      type: DataTypes.INTEGER,
    },
    work_rate: {
      type: DataTypes.STRING,
    },
    body_type: {
      type: DataTypes.STRING,
    },
    pace: {
      type: DataTypes.INTEGER,
    },
    shooting: {
      type: DataTypes.INTEGER,
    },
    passing: {
      type: DataTypes.INTEGER,
    },
    dribbling: {
      type: DataTypes.INTEGER,
    },
    defending: {
      type: DataTypes.INTEGER,
    },
    physic: {
      type: DataTypes.INTEGER,
    },    
    attacking_crossing: {
      type: DataTypes.INTEGER,
    },
    attacking_finishing: {
      type: DataTypes.INTEGER,
    },
    attacking_heading_accuracy: {
      type: DataTypes.INTEGER,
    },
    attacking_short_passing: {
      type: DataTypes.INTEGER,
    },
    attacking_volleys: {
      type: DataTypes.INTEGER,
    },
    skill_dribbling: {
      type: DataTypes.INTEGER,
    },
    skill_curve: {
      type: DataTypes.INTEGER,
    },
    skill_fk_accuracy: {
      type: DataTypes.INTEGER,
    },
    skill_long_passing: {
      type: DataTypes.INTEGER,
    },
    skill_ball_control: {
      type: DataTypes.INTEGER,
    },
    movement_acceleration: {
      type: DataTypes.INTEGER,
    },
    movement_sprint_speed: {
      type: DataTypes.INTEGER,
    },
    movement_agility: {
      type: DataTypes.INTEGER,
    },
    movement_reactions: {
      type: DataTypes.INTEGER,
    },
    movement_balance: {
      type: DataTypes.INTEGER,
    },
    power_shot_power: {
      type: DataTypes.INTEGER,
    },
    power_jumping: {
      type: DataTypes.INTEGER,
    },
    power_stamina: {
      type: DataTypes.INTEGER,
    },
    power_strength: {
      type: DataTypes.INTEGER,
    },
    power_long_shots: {
      type: DataTypes.INTEGER,
    },
    mentality_aggression: {
      type: DataTypes.INTEGER,
    },
    mentality_interceptions: {
      type: DataTypes.INTEGER,
    },
    mentality_positioning: {
      type: DataTypes.INTEGER,
    },
    mentality_vision: {
      type: DataTypes.INTEGER,
    },
    mentality_penalties: {
      type: DataTypes.INTEGER,
    },
    mentality_composure: {
      type: DataTypes.INTEGER,
    },
    defending_marking: {
      type: DataTypes.INTEGER,
    },
    defending_standing_tackle: {
      type: DataTypes.INTEGER,
    },
    defending_sliding_tackle: {
      type: DataTypes.INTEGER,
    },
    goalkeeping_diving: {
      type: DataTypes.INTEGER,
    },
    goalkeeping_handling: {
      type: DataTypes.INTEGER,
    },
    goalkeeping_kicking: {
      type: DataTypes.INTEGER,
    },
    goalkeeping_positioning: {
      type: DataTypes.INTEGER,
    },
    goalkeeping_reflexes: {
      type: DataTypes.INTEGER,
    },
    goalkeeping_speed: {
      type: DataTypes.INTEGER,
    },
    player_traits: {
      type: DataTypes.STRING,
    }
  }, {
    // Opciones adicionales
    timestamps: false,
    freezeTableName: true
  }

);

  // Agregar propiedad estática para los tipos de datos
Player.attributeTypes = {
  id: {
    type: 'integer',
    viewName: 'ID',
    required: true,
    contenido: ['número'],
    sugerencia: '',
    group: ['key'],
    minVal: -1,
    maxVal: -1,
    minLen: -1,
    maxLen: -1
  },
  fifa_version: {
    type: 'string',
    viewName: 'Versión FIFA',
    required: false,
    contenido: ['número_pequeño'],
    sugerencia: '20',
    group: ['general'],
    minVal: 15,
    maxVal: 23,
    minLen: -1,
    maxLen: -1
  },
  fifa_update: {
    type: 'string',
    viewName: 'Update de FIFA',
    required: false,
    contenido: ['número_mediano'],
    sugerencia: '1',
    group: ['general'],
    minVal: 1,
    maxVal: 99,
    minLen: -1,
    maxLen: -1
  }, 
  player_face_url: {
    type: 'string',
    viewName: 'URL de la Foto',
    required: false,
    contenido: ['cadena','url'],
    sugerencia: 'https://',
    group: ['general'],
    minVal: -1,
    maxVal: -1,
    minLen: 8,
    maxLen: 255
  },
  long_name: {
    type: 'string',
    viewName: 'Nombres y Apellidos',
    required: true,
    contenido: ['cadena','nombre'],
    sugerencia: 'Alexander Xavier Lobactis',
    group: ['personal'],
    minVal: -1,
    maxVal: -1,
    minLen: 4,
    maxLen: 255
  },
  player_positions: {
    type: 'string',
    viewName: 'Posiciones',
    required: true,
    contenido: ['múltiple'],
    sugerencia: '',
    group: ['general','juego'],
    minVal: -1,
    maxVal: -1,
    minLen: -1,
    maxLen: -1
  },
  club_name: {
    type: 'string',
    viewName: 'Club',
    required: true,
    contenido: ['cadena','alfanumérico'],
    sugerencia: 'Los Lobactis Fútbol Club',
    group: ['general'],
    minVal: -1,
    maxVal: -1,
    minLen: 3,
    maxLen: 255
  },
  nationality_name: {
    type: 'string',
    viewName: 'Nacionalidad',
    required: true,
    contenido: ['cadena','nombre'],
    sugerencia: 'Argentina',
    group: ['personal'],
    minVal: -1,
    maxVal: -1,
    minLen: 3,
    maxLen: 255
  },
  overall: {
    type: 'integer',
    viewName: 'Puntuación General',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  potential: {
    type: 'integer',
    viewName: 'Potencial',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  value_eur: {
    type: 'integer',
    viewName: 'Valor en Euros',
    required: true,
    contenido: ['moneda'],
    sugerencia: '1000000',
    group: ['general'],
    minVal: 0,
    maxVal: 350000000,
    minLen: -1,
    maxLen: -1
  },
  wage_eur: {
    type: 'integer',
    viewName: 'Salario en Euros',
    required: true,
    contenido: ['moneda'],
    sugerencia: '100000',
    group: ['general'],
    minVal: 0,
    maxVal: 1000000,
    minLen: -1,
    maxLen: -1
  },
  age: {
    type: 'integer',
    viewName: 'Edad',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '25',
    group: ['personal'],
    minVal: 16,
    maxVal: 65,
    minLen: -1,
    maxLen: -1
  },  
  gender: {
    type: 'string',
    viewName: 'Sexo',
    required: true,
    contenido: ['único'],
    sugerencia: '',
    group: ['personal'],
    minVal: -1,
    maxVal: -1,
    minLen: 3,
    maxLen: 255
  },
  height_cm: {
    type: 'integer',
    viewName: 'Altura (cm)',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '175',
    group: ['personal'],
    minVal: 120,
    maxVal: 235,
    minLen: -1,
    maxLen: -1
  },
  weight_kg: {
    type: 'integer',
    viewName: 'Peso (kg)',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '75',
    group: ['personal'],
    minVal: 40,
    maxVal: 130,
    minLen: -1,
    maxLen: -1
  },
  preferred_foot: {
    type: 'string',
    viewName: 'Pie Preferido',
    required: true,
    contenido: ['único'],
    sugerencia: '',
    group: ['juego','habilidad_global'],
    minVal: -1,
    maxVal: -1,
    minLen: -1,
    maxLen: -1
  },
  weak_foot: {
    type: 'integer',
    viewName: 'Debilidad de Pie',
    required: true,
    contenido: ['número_pequeño'],
    sugerencia: '',
    group: ['juego','habilidad_global'],
    minVal: 1,
    maxVal: 5,
    minLen: -1,
    maxLen: -1
  },
  skill_moves: {
    type: 'integer',
    viewName: 'Habilidades Especiales',
    required: true,
    contenido: ['número_pequeño'],
    sugerencia: '',
    group: ['juego','habilidad_global'],
    minVal: 1,
    maxVal: 5,
    minLen: -1,
    maxLen: -1
  },
  international_reputation: {
    type: 'integer',
    viewName: 'Reputación Internacional',
    required: true,
    contenido: ['número_pequeño'],
    sugerencia: '',
    group: ['juego','habilidad_global'],
    minVal: 1,
    maxVal: 5,
    minLen: -1,
    maxLen: -1
  },
  work_rate: {
    type: 'string',
    viewName: 'Ritmo de Trabajo',
    required: true,
    contenido: ['rango_categorías'],
    sugerencia: '',
    group: ['juego','habilidad_global'],
    minVal: 0,
    maxVal: 2,
    minLen: -1,
    maxLen: -1
  },
  body_type: {
    type: 'string',
    viewName: 'Tipo de Cuerpo',
    required: true,
    contenido: ['único'],
    sugerencia: '',
    group: ['juego','habilidad_global'],
    minVal: -1,
    maxVal: -1,
    minLen: -1,
    maxLen: -1
  },
  pace: {
    type: 'integer',
    viewName: 'Velocidad',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  shooting: {
    type: 'integer',
    viewName: 'Disparo',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  passing: {
    type: 'integer',
    viewName: 'Pase',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  dribbling: {
    type: 'integer',
    viewName: 'Regate',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  defending: {
    type: 'integer',
    viewName: 'Defensa',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  physic: {
    type: 'integer',
    viewName: 'Físico',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  attacking_crossing: {
    type: 'integer',
    viewName: 'Pase en profundidad',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_específica','ataque'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  attacking_finishing: {
    type: 'integer',
    viewName: 'Remate',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_específica','ataque'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  attacking_heading_accuracy: {
    type: 'integer',
    viewName: 'Cabezazo',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_específica','ataque'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  attacking_short_passing: {
    type: 'integer',
    viewName: 'Pase corto',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_específica','ataque'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  attacking_volleys: {
    type: 'integer',
    viewName: 'Voleas',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_específica','ataque'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  skill_dribbling: {
    type: 'integer',
    viewName: 'Regate (Habilidad)',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  skill_curve: {
    type: 'integer',
    viewName: 'Curva de Aprendizaje',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  skill_fk_accuracy: {
    type: 'integer',
    viewName: 'Puntería',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  skill_long_passing: {
    type: 'integer',
    viewName: 'Pase Largo',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  skill_ball_control: {
    type: 'integer',
    viewName: 'Control del Balón',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  movement_acceleration: {
    type: 'integer',
    viewName: 'Aceleración',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  }, 
  movement_sprint_speed: {
    type: 'integer',
    viewName: 'Velocidad de Sprint',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  }, 
  movement_agility: {
    type: 'integer',
    viewName: 'Agilidad',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  movement_reactions: {
    type: 'integer',
    viewName: 'Reacción',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  movement_balance: {
    type: 'integer',
    viewName: 'Equilibrio',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  power_shot_power: {
    type: 'integer',
    viewName: 'Potencia de Tiro',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  power_jumping: {
    type: 'integer',
    viewName: 'Potencia de Salto',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  power_stamina: {
    type: 'integer',
    viewName: 'Resistencia',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  power_strength: {
    type: 'integer',
    viewName: 'Fuerza',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  power_long_shots: {
    type: 'integer',
    viewName: 'Potencia de Tiros Largos',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_global'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  mentality_aggression: {
    type: 'integer',
    viewName: 'Agresividad',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_actitud'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  mentality_interceptions: {
    type: 'integer',
    viewName: 'Intercepciones',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_actitud'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  mentality_positioning: {
    type: 'integer',
    viewName: 'Posicionamiento',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_actitud'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  mentality_vision: {
    type: 'integer',
    viewName: 'Visión',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_actitud'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  mentality_penalties: {
    type: 'integer',
    viewName: 'Penales',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_actitud'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  mentality_composure: {
    type: 'integer',
    viewName: 'Comportamiento',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_actitud'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  defending_marking: {
    type: 'integer',
    viewName: 'Marca en Defensa',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_específica','defensa'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  defending_standing_tackle: {
    type: 'integer',
    viewName: 'Defensa sin derribo',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_específica','defensa'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  defending_sliding_tackle: {
    type: 'integer',
    viewName: 'Barrida defensiva',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_específica','defensa'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  goalkeeping_diving: {
    type: 'integer',
    viewName: 'Arquero: Atrapada de Volea',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_específica','arco'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  goalkeeping_handling: {
    type: 'integer',
    viewName: 'Arquero: Manejo del Balón',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_específica','arco'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  goalkeeping_kicking: {
    type: 'integer',
    viewName: 'Arquero: Saque',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_específica','arco'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  goalkeeping_positioning: {
    type: 'integer',
    viewName: 'Arquero: Posicionamiento',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_específica','arco'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  goalkeeping_reflexes: {
    type: 'integer',
    viewName: 'Arquero: Reflejos',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_específica','arco'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  goalkeeping_speed: {
    type: 'integer',
    viewName: 'Arquero: Velocidad',
    required: true,
    contenido: ['número_mediano'],
    sugerencia: '50',
    group: ['juego','habilidad','habilidad_específica','arco'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  player_traits: {
    type: 'string',
    viewName: 'Características',
    required: true,
    contenido: ['múltiple'],
    sugerencia: '',
    group: ['juego','habilidad_global'],
    minVal: -1,
    maxVal: -1,
    minLen: -1,
    maxLen: -1
  },
};


module.exports = Player;