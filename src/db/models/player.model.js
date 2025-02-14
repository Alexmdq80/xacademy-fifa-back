const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");
 
const Player = sequelize.define("players", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
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
      allowNull: false
    },
    long_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    player_positions: {
      type: DataTypes.STRING,
      allowNull: false
    },
    club_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nationality_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    overall: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    potential: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    value_eur: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wage_eur: {
      type: DataTypes.INTEGER,
      allowNull: true
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
      allowNull: true
    },
    weight_kg: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    preferred_foot: {
      type: DataTypes.STRING,
      allowNull: true
    },
    weak_foot: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    skill_moves: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    international_reputation: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    work_rate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    body_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pace: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shooting: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    passing: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dribbling: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    defending: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    physic: {
      type: DataTypes.INTEGER,
      allowNull: true
    },    
    attacking_crossing: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    attacking_finishing: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    attacking_heading_accuracy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    attacking_short_passing: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    attacking_volleys: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    skill_dribbling: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    skill_curve: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    skill_fk_accuracy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    skill_long_passing: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    skill_ball_control: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    movement_acceleration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    movement_sprint_speed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    movement_agility: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    movement_reactions: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    movement_balance: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    power_shot_power: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    power_jumping: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    power_stamina: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    power_strength: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    power_long_shots: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mentality_aggression: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mentality_interceptions: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mentality_positioning: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mentality_vision: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mentality_penalties: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mentality_composure: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    defending_marking: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    defending_standing_tackle: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    defending_sliding_tackle: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    goalkeeping_diving: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    goalkeeping_handling: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    goalkeeping_kicking: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    goalkeeping_positioning: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    goalkeeping_reflexes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    goalkeeping_speed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    player_traits: {
      type: DataTypes.STRING,
      allowNull: true
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
    required: '',
    contenido: ['número_mediano','número'],
    group: ['personal','key'],
    minVal: -1,
    maxVal: -1,
    minLen: -1,
    maxLen: -1
  },
  fifa_version: {
    type: 'string',
    viewName: 'Versión FIFA',
    required: '',
    contenido: ['número_pequeño'],
    group: ['general'],
    minVal: 15,
    maxVal: 23,
    minLen: -1,
    maxLen: -1
  },
  fifa_update: {
    type: 'string',
    viewName: 'Update de FIFA',
    required: '',
    contenido: ['número_mediano'],
    group: ['general'],
    minVal: 1,
    maxVal: 99,
    minLen: -1,
    maxLen: -1
  }, 
  player_face_url: {
    type: 'string',
    viewName: 'URL de la Foto',
    required: '',
    contenido: ['cadena','url'],
    group: ['general'],
    minVal: -1,
    maxVal: -1,
    minLen: 0,
    maxLen: 255
  },
  long_name: {
    type: 'string',
    viewName: 'Nombres y Apellidos',
    required: '',
    contenido: ['cadena','nombre'],
    group: ['personal'],
    minVal: -1,
    maxVal: -1,
    minLen: 4,
    maxLen: 255
  },
  player_positions: {
    type: 'string',
    viewName: 'Posiciones',
    required: '',
    contenido: ['múltiple'],
    group: ['general','juego'],
    minVal: -1,
    maxVal: -1,
    minLen: -1,
    maxLen: -1
  },
  club_name: {
    type: 'string',
    viewName: 'Club',
    required: '',
    contenido: ['cadena','alfanumérico'],
    group: ['general'],
    minVal: -1,
    maxVal: -1,
    minLen: 3,
    maxLen: 255
  },
  nationality_name: {
    type: 'string',
    viewName: 'Nacionalidad',
    required: '',
    contenido: ['cadena','nombre'],
    group: ['personal'],
    minVal: -1,
    maxVal: -1,
    minLen: 3,
    maxLen: 255
  },
  overall: {
    type: 'integer',
    viewName: 'Puntuación General',
    required: '',
    contenido: ['número_mediano'],
    group: ['habilidad_global','juego','habilidad'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  potential: {
    type: 'integer',
    viewName: 'Potencial',
    required: '',
    contenido: ['número_mediano'],
    group: ['habilidad_global','juego','habilidad'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  value_eur: {
    type: 'integer',
    viewName: 'Valor en Euros',
    required: '',
    contenido: ['moneda'],
    group: ['general'],
    minVal: 0,
    maxVal: 350000000,
    minLen: -1,
    maxLen: -1
  },
  wage_eur: {
    type: 'integer',
    viewName: 'Salario en Euros',
    required: '',
    contenido: ['moneda'],
    group: ['general'],
    minVal: 0,
    maxVal: 1000000,
    minLen: -1,
    maxLen: -1
  },
  age: {
    type: 'integer',
    viewName: 'Edad',
    required: '',
    contenido: ['número_mediano'],
    group: ['personal'],
    minVal: 16,
    maxVal: 65,
    minLen: -1,
    maxLen: -1
  },  
  gender: {
    type: 'string',
    viewName: 'Sexo',
    required: '',
    contenido: ['único'],
    group: ['personal'],
    minVal: -1,
    maxVal: -1,
    minLen: -1,
    maxLen: -1
  },
  height_cm: {
    type: 'integer',
    viewName: 'Altura (cm)',
    required: '',
    contenido: ['número_mediano'],
    group: ['personal'],
    minVal: 120,
    maxVal: 235,
    minLen: -1,
    maxLen: -1
  },
  weight_kg: {
    type: 'integer',
    viewName: 'Peso (kg)',
    required: '',
    contenido: ['número_mediano'],
    group: ['personal'],
    minVal: 40,
    maxVal: 130,
    minLen: -1,
    maxLen: -1
  },
  preferred_foot: {
    type: 'string',
    viewName: 'Pie Preferido',
    required: '',
    contenido: ['único'],
    group: ['habilidad_global','juego'],
    minVal: -1,
    maxVal: -1,
    minLen: -1,
    maxLen: -1
  },
  weak_foot: {
    type: 'integer',
    viewName: 'Debilidad de Pie',
    required: '',
    contenido: ['número_pequeño'],
    group: ['habilidad_global','juego'],
    minVal: 1,
    maxVal: 5,
    minLen: -1,
    maxLen: -1
  },
  skill_moves: {
    type: 'integer',
    viewName: 'Habilidades Especiales',
    required: '',
    contenido: ['número_pequeño'],
    group: ['habilidad_global','juego'],
    minVal: 1,
    maxVal: 5,
    minLen: -1,
    maxLen: -1
  },
  international_reputation: {
    type: 'integer',
    viewName: 'Reputación Internacional',
    required: '',
    contenido: ['número_pequeño'],
    group: ['habilidad_global','juego'],
    minVal: 1,
    maxVal: 5,
    minLen: -1,
    maxLen: -1
  },
  work_rate: {
    type: 'string',
    viewName: 'Ritmo de Trabajo',
    required: '',
    contenido: ['rango_categorías'],
    group: ['habilidad_global','juego'],
    minVal: 0,
    maxVal: 2,
    minLen: -1,
    maxLen: -1
  },
  body_type: {
    type: 'string',
    viewName: 'Tipo de Cuerpo',
    required: '',
    contenido: ['único'],
    group: ['personal','juego'],
    minVal: -1,
    maxVal: -1,
    minLen: -1,
    maxLen: -1
  },
  pace: {
    type: 'integer',
    viewName: 'Velocidad',
    required: '',
    contenido: ['número_mediano'],
    group: ['habilidad_global','juego','habilidad'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  shooting: {
    type: 'integer',
    viewName: 'Disparo',
    required: '',
    contenido: ['número_mediano'],
    group: ['habilidad_global','juego','habilidad'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  passing: {
    type: 'integer',
    viewName: 'Pase',
    required: '',
    contenido: ['número_mediano'],
    group: ['habilidad_global','juego','habilidad'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  dribbling: {
    type: 'integer',
    viewName: 'Regate',
    required: '',
    contenido: ['número_mediano'],
    group: ['habilidad_global','juego','habilidad'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  defending: {
    type: 'integer',
    viewName: 'Defensa',
    required: '',
    contenido: ['número_mediano'],
    group: ['habilidad_global','juego','habilidad'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  physic: {
    type: 'integer',
    viewName: 'Físico',
    required: '',
    contenido: ['número_mediano'],
    group: ['habilidad_global','juego','habilidad'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  attacking_crossing: {
    type: 'integer',
    viewName: 'Pase en profundidad',
    required: '',
    contenido: ['número_mediano'],
    group: ['ataque','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  attacking_finishing: {
    type: 'integer',
    viewName: 'Remate',
    required: '',
    contenido: ['número_mediano'],
    group: ['ataque','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  attacking_heading_accuracy: {
    type: 'integer',
    viewName: 'Cabezazo',
    required: '',
    contenido: ['número_mediano'],
    group: ['ataque','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  attacking_short_passing: {
    type: 'integer',
    viewName: 'Pase corto',
    required: '',
    contenido: ['número_mediano'],
    group: ['ataque','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  attacking_volleys: {
    type: 'integer',
    viewName: 'Voleas',
    required: '',
    contenido: ['número_mediano'],
    group: ['ataque','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  skill_dribbling: {
    type: 'integer',
    viewName: 'Regate (Habilidad)',
    required: '',
    contenido: ['número_mediano'],
    group: ['skill','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  skill_curve: {
    type: 'integer',
    viewName: 'Curva de Aprendizaje',
    required: '',
    contenido: ['número_mediano'],
    group: ['skill','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  skill_fk_accuracy: {
    type: 'integer',
    viewName: 'Puntería',
    required: '',
    contenido: ['número_mediano'],
    group: ['skill','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  skill_long_passing: {
    type: 'integer',
    viewName: 'Pase Largo',
    required: '',
    contenido: ['número_mediano'],
    group: ['skill','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  skill_ball_control: {
    type: 'integer',
    viewName: 'Control del Balón',
    required: '',
    contenido: ['número_mediano'],
    group: ['skill','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  movement_acceleration: {
    type: 'integer',
    viewName: 'Aceleración',
    required: '',
    contenido: ['número_mediano'],
    group: ['movement','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  }, 
  movement_sprint_speed: {
    type: 'integer',
    viewName: 'Velocidad de Sprint',
    required: '',
    contenido: ['número_mediano'],
    group: ['movement','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  }, 
  movement_agility: {
    type: 'integer',
    viewName: 'Agilidad',
    required: '',
    contenido: ['número_mediano'],
    group: ['movement','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  movement_reactions: {
    type: 'integer',
    viewName: 'Reacción',
    required: '',
    contenido: ['número_mediano'],
    group: ['movement','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  movement_balance: {
    type: 'integer',
    viewName: 'Equilibrio',
    required: '',
    contenido: ['número_mediano'],
    group: ['movement','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  power_shot_power: {
    type: 'integer',
    viewName: 'Potencia de Tiro',
    required: '',
    contenido: ['número_mediano'],
    group: ['power','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  power_jumping: {
    type: 'integer',
    viewName: 'Potencia de Salto',
    required: '',
    contenido: ['número_mediano'],
    group: ['power','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  power_stamina: {
    type: 'integer',
    viewName: 'Resistencia',
    required: '',
    contenido: ['número_mediano'],
    group: ['power','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  power_strength: {
    type: 'integer',
    viewName: 'Fuerza',
    required: '',
    contenido: ['número_mediano'],
    group: ['power','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  power_long_shots: {
    type: 'integer',
    viewName: 'Potencia de Tiros Largos',
    required: '',
    contenido: ['número_mediano'],
    group: ['power','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  mentality_aggression: {
    type: 'integer',
    viewName: 'Agresividad',
    required: '',
    contenido: ['número_mediano'],
    group: ['habilidad_mental','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  mentality_interceptions: {
    type: 'integer',
    viewName: 'Intercepciones',
    required: '',
    contenido: ['número_mediano'],
    group: ['habilidad_mental','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  mentality_positioning: {
    type: 'integer',
    viewName: 'Posicionamiento',
    required: '',
    contenido: ['número_mediano'],
    group: ['habilidad_mental','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  mentality_vision: {
    type: 'integer',
    viewName: 'Visión',
    required: '',
    contenido: ['número_mediano'],
    group: ['habilidad_mental','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  mentality_penalties: {
    type: 'integer',
    viewName: 'Penales',
    required: '',
    contenido: ['número_mediano'],
    group: ['habilidad_mental','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  mentality_composure: {
    type: 'integer',
    viewName: 'Comportamiento',
    required: '',
    contenido: ['número_mediano'],
    group: ['habilidad_mental','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  defending_marking: {
    type: 'integer',
    viewName: 'Marca en Defensa',
    required: '',
    contenido: ['número_mediano'],
    group: ['defensa','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  defending_standing_tackle: {
    type: 'integer',
    viewName: 'Defensa sin derribo',
    required: '',
    contenido: ['número_mediano'],
    group: ['defensa','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  defending_sliding_tackle: {
    type: 'integer',
    viewName: 'Barrida defensiva',
    required: '',
    contenido: ['número_mediano'],
    group: ['defensa','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  goalkeeping_diving: {
    type: 'integer',
    viewName: 'Arquero: Atrapada de Volea',
    required: '',
    contenido: ['número_mediano'],
    group: ['arco','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  goalkeeping_handling: {
    type: 'integer',
    viewName: 'Arquero: Manejo del Balón',
    required: '',
    contenido: ['número_mediano'],
    group: ['arco','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  goalkeeping_kicking: {
    type: 'integer',
    viewName: 'Arquero: Saque',
    required: '',
    contenido: ['número_mediano'],
    group: ['arco','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  goalkeeping_positioning: {
    type: 'integer',
    viewName: 'Arquero: Posicionamiento',
    required: '',
    contenido: ['número_mediano'],
    group: ['arco','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  goalkeeping_reflexes: {
    type: 'integer',
    viewName: 'Arquero: Reflejos',
    required: '',
    contenido: ['número_mediano'],
    group: ['arco','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  goalkeeping_speed: {
    type: 'integer',
    viewName: 'Arquero: Velocidad',
    required: '',
    contenido: ['número_mediano'],
    group: ['arco','juego','habilidad','habilidad_específica'],
    minVal: 0,
    maxVal: 100,
    minLen: -1,
    maxLen: -1
  },
  player_traits: {
    type: 'string',
    viewName: 'Características',
    required: '',
    contenido: ['múltiple'],
    group: ['general','juego'],
    minVal: -1,
    maxVal: -1,
    minLen: -1,
    maxLen: -1
  },
};


module.exports = Player;