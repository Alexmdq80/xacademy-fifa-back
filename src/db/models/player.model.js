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
    esSkill: false,
    esNombre: false,
    minVal: 0,
    maxVal: 0,
    minLen: 0,
    maxLen: 0
  },
  fifa_version: {
    type: 'string',
    viewName: 'Versión FIFA',
    esSkill: false,
    esNombre: false,
    minVal: 15,
    maxVal: 23,
    minLen: 0,
    maxLen: 0
  },
  fifa_update: {
    type: 'string',
    viewName: 'Update de FIFA',
    esSkill: false,
    esNombre: false,
    minVal: 1,
    maxVal: 99,
    minLen: 0,
    maxLen: 0
  }, 
  player_face_url: {
    type: 'string',
    viewName: 'URL de la Foto',
    esSkill: false,
    esNombre: false,
    minVal: 0,
    maxVal: 0,
    minLen: 8,
    maxLen: 255
  },
  long_name: {
    type: 'string',
    viewName: 'Nombres y Apellidos',
    esSkill: false,
    esNombre: true,
    minVal: 0,
    maxVal: 0,
    minLen: 4,
    maxLen: 255
  },
  player_positions: {
    type: 'string',
    viewName: 'Posiciones',
    esSkill: false,
    esNombre: false,
    minVal: 0,
    maxVal: 0,
    minLen: 2,
    maxLen: 255
  },
  club_name: {
    type: 'string',
    viewName: 'Club',
    esSkill: false,
    esNombre: true,
    minVal: 0,
    maxVal: 0,
    minLen: 3,
    maxLen: 255
  },
  nationality_name: {
    type: 'string',
    viewName: 'Nacionalidad',
    esSkill: false,
    esNombre: true,
    minVal: 0,
    maxVal: 0,
    minLen: 3,
    maxLen: 255
  },
  overall: {
    type: 'integer',
    viewName: 'Puntuación General',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  potential: {
    type: 'integer',
    viewName: 'Potencial',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  value_eur: {
    type: 'integer',
    viewName: 'Valor en Euros',
    esSkill: false,
    esNombre: false,
    minVal: 0,
    maxVal: 350000000,
    minLen: 0,
    maxLen: 0
  },
  wage_eur: {
    type: 'integer',
    viewName: 'Salario en Euros',
    esSkill: false,
    esNombre: false,
    minVal: 0,
    maxVal: 1000000,
    minLen: 0,
    maxLen: 0
  },
  age: {
    type: 'integer',
    viewName: 'Edad',
    esSkill: false,
    esNombre: false,
    minVal: 16,
    maxVal: 65,
    minLen: 0,
    maxLen: 0
  },
  gender: {
    type: 'string',
    viewName: 'Sexo',
    esSkill: false,
    esNombre: false,
    minVal: 0,
    maxVal: 0,
    minLen: 3,
    maxLen: 255
  },
  height_cm: {
    type: 'integer',
    viewName: 'Altura (cm)',
    esSkill: false,
    esNombre: false,
    minVal: 120,
    maxVal: 235,
    minLen: 0,
    maxLen: 0
  },
  weight_kg: {
    type: 'integer',
    viewName: 'Peso (kg)',
    esSkill: false,
    esNombre: false,
    minVal: 40,
    maxVal: 130,
    minLen: 0,
    maxLen: 0
  },
  preferred_foot: {
    type: 'string',
    viewName: 'Pie Preferido',
    esSkill: false,
    esNombre: false,
    minVal: 0,
    maxVal: 0,
    minLen: 3,
    maxLen: 255
  },
  weak_foot: {
    type: 'integer',
    viewName: 'Debilidad de Pie',
    esSkill: false,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  skill_moves: {
    type: 'integer',
    viewName: 'Habilidades Especiales',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  international_reputation: {
    type: 'integer',
    viewName: 'Reputación Internacional',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  work_rate: {
    type: 'string',
    viewName: 'Ritmo de Trabajo',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  body_type: {
    type: 'string',
    viewName: 'Tipo de Cuerpo',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  pace: {
    type: 'integer',
    viewName: 'Velocidad',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  shooting: {
    type: 'integer',
    viewName: 'Disparo',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  passing: {
    type: 'integer',
    viewName: 'Pase',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  dribbling: {
    type: 'integer',
    viewName: 'Regate',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  defending: {
    type: 'integer',
    viewName: 'Defensa',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  physic: {
    type: 'integer',
    viewName: 'Físico',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  attacking_crossing: {
    type: 'integer',
    viewName: 'Pase en profundidad',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  attacking_finishing: {
    type: 'integer',
    viewName: 'Remate',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  attacking_heading_accuracy: {
    type: 'integer',
    viewName: 'Cabezazo',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  attacking_short_passing: {
    type: 'integer',
    viewName: 'Pase corto',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  attacking_volleys: {
    type: 'integer',
    viewName: 'Voleas',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  skill_dribbling: {
    type: 'integer',
    viewName: 'Regate (Habilidad)',
    esSkill: true,
    esNombre: false,
     minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  skill_curve: {
    type: 'integer',
    viewName: 'Curva de Aprendizaje',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  skill_fk_accuracy: {
    type: 'integer',
    viewName: 'Puntería',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  skill_long_passing: {
    type: 'integer',
    viewName: 'Pase Largo',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  skill_ball_control: {
    type: 'integer',
    viewName: 'Control del Balón',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  movement_acceleration: {
    type: 'integer',
    viewName: 'Aceleración',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  }, 
  movement_sprint_speed: {
    type: 'integer',
    viewName: 'Velocidad de Sprint',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  }, 
  movement_agility: {
    type: 'integer',
    viewName: 'Agilidad',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  movement_reactions: {
    type: 'integer',
    viewName: 'Reacción',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  movement_balance: {
    type: 'integer',
    viewName: 'Equilibrio',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  power_shot_power: {
    type: 'integer',
    viewName: 'Potencia de Tiro',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  power_jumping: {
    type: 'integer',
    viewName: 'Potencia de Salto',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  power_stamina: {
    type: 'integer',
    viewName: 'Resistencia',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  power_strength: {
    type: 'integer',
    viewName: 'Fuerza',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  power_long_shots: {
    type: 'integer',
    viewName: 'Potencia de Tiros Largos',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  mentality_aggression: {
    type: 'integer',
    viewName: 'Agresividad',
    esNombre: false,
    esSkill: true,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  mentality_interceptions: {
    type: 'integer',
    viewName: 'Intercepciones',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  mentality_positioning: {
    type: 'integer',
    viewName: 'Posicionamiento',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  mentality_vision: {
    type: 'integer',
    viewName: 'Visión',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  mentality_penalties: {
    type: 'integer',
    viewName: 'Penales',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  mentality_composure: {
    type: 'integer',
    viewName: 'Comportamiento',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  defending_marking: {
    type: 'integer',
    viewName: 'Marca en Defensa',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  defending_standing_tackle: {
    type: 'integer',
    viewName: 'Defensa sin derribo',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  defending_sliding_tackle: {
    type: 'integer',
    viewName: 'Barrida defensiva',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  goalkeeping_diving: {
    type: 'integer',
    viewName: 'Arquero: Atrapada de Volea',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  goalkeeping_handling: {
    type: 'integer',
    viewName: 'Arquero: Manejo del Balón',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  goalkeeping_kicking: {
    type: 'integer',
    viewName: 'Arquero: Saque',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  goalkeeping_positioning: {
    type: 'integer',
    viewName: 'Arquero: Posicionamiento',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  goalkeeping_reflexes: {
    type: 'integer',
    viewName: 'Arquero: Reflejos',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  goalkeeping_speed: {
    type: 'integer',
    viewName: 'Arquero: Velocidad',
    esSkill: true,
    esNombre: false,
    minVal: 0,
    maxVal: 100,
    minLen: 0,
    maxLen: 0
  },
  player_traits: {
    type: 'string',
    viewName: 'Características',
    esSkill: false,
    esNombre: false,
    minVal: 0,
    maxVal: 0,
    minLen: 3,
    maxLen: 255
  },
};

// // Player.attributeTypes = {
// //   id: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   fifa_version: {
//     type: 'string',
//     viewName: 'id'
//   },
// //   fifa_update: {
//     type: 'string',
//     viewName: 'id'
//   }, 
// //   player_face_url: {
//     type: 'string',
//     viewName: 'id'
//   },
// //   long_name: {
//     type: 'string',
//     viewName: 'id'
//   },
// //   player_positions: {
//     type: 'string',
//     viewName: 'id'
//   },
// //   club_name: {
//     type: 'string',
//     viewName: 'id'
//   },
// //   nationality_name: {
//     type: 'string',
//     viewName: 'id'
//   },
// //   overall: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   potential: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   value_eur: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   wage_eur: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   age: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   gender: {
//     type: 'string',
//     viewName: 'id'
//   },
// //   height_cm: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   weight_kg: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   preferred_foot: {
//     type: 'string',
//     viewName: 'id'
//   },
// //   weak_foot: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   skill_moves: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   international_reputation: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   work_rate: {
//     type: 'string',
//     viewName: 'id'
//   },
// //   body_type: {
//     type: 'string',
//     viewName: 'id'
//   },
// //   pace: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   shooting: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   passing: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   dribbling: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   skill_curve: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   skill_fk_accuracy: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   skill_long_passing: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   skill_ball_control: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   movement_acceleration: {
//     type: 'integer',
//     viewName: 'id'
//   }, 
// //   movement_sprint_speed: {
//     type: 'integer',
//     viewName: 'id'
//   }, 
// //   movement_agility: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   movement_reactions: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   movement_balance: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   power_shot_power: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   power_jumping: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   power_stamina: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   power_strength: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   power_long_shots: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   mentality_aggression: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   mentality_interceptions: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   mentality_positioning: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   mentality_vision: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   mentality_penalties: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   mentality_composure: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   defending_marking: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   defending_standing_tackle: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   defending_sliding_tackle: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   goalkeeping_diving: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   goalkeeping_handling: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   goalkeeping_kicking: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   goalkeeping_positioning: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   goalkeeping_reflexes: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   goalkeeping_speed: {
//     type: 'integer',
//     viewName: 'id'
//   },
// //   player_traits: 'string'
// // };


module.exports = Player;