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
  },
  fifa_version: {
    type: 'string',
    viewName: 'Versión FIFA',
    esSkill: false,
  },
  fifa_update: {
    type: 'string',
    viewName: 'Actualización FIFA',
    esSkill: false,
  }, 
  player_face_url: {
    type: 'string',
    viewName: 'Foto',
    esSkill: false,
  },
  long_name: {
    type: 'string',
    viewName: 'Nombre y Apellido',
    esSkill: false,
  },
  player_positions: {
    type: 'string',
    viewName: 'Posiciones',
    esSkill: false,
  },
  club_name: {
    type: 'string',
    viewName: 'Club',
    esSkill: false,
  },
  nationality_name: {
    type: 'string',
    viewName: 'Nacionalidad',
    esSkill: false,
  },
  overall: {
    type: 'integer',
    viewName: 'Puntuación General',
    esSkill: true,
  },
  potential: {
    type: 'integer',
    viewName: 'Potencial',
    esSkill: true,
  },
  value_eur: {
    type: 'integer',
    viewName: 'Valor en Euros',
    esSkill: false,
  },
  wage_eur: {
    type: 'integer',
    viewName: 'Salario en Euros',
    esSkill: false,
  },
  age: {
    type: 'integer',
    viewName: 'Edad',
    esSkill: false,
  },
  gender: {
    type: 'string',
    viewName: 'Género',
    esSkill: false,
  },
  height_cm: {
    type: 'integer',
    viewName: 'Altura (cm)',
    esSkill: false,
  },
  weight_kg: {
    type: 'integer',
    viewName: 'Peso (kg)',
    esSkill: false,
  },
  preferred_foot: {
    type: 'string',
    viewName: 'Pie Hábil',
    esSkill: false,
  },
  weak_foot: {
    type: 'integer',
    viewName: 'Pie Débil',
    esSkill: false,
  },
  skill_moves: {
    type: 'integer',
    viewName: 'Habilidades Especiales',
    esSkill: true,
  },
  international_reputation: {
    type: 'integer',
    viewName: 'Reputación Internacional',
    esSkill: true,
  },
  work_rate: {
    type: 'string',
    viewName: 'Esfuerzo',
    esSkill: true,
  },
  body_type: {
    type: 'string',
    viewName: 'Físico',
    esSkill: true,
  },
  pace: {
    type: 'integer',
    viewName: 'Velocidad',
    esSkill: true,
  },
  shooting: {
    type: 'integer',
    viewName: 'Tiro',
    esSkill: true,
  },
  passing: {
    type: 'integer',
    viewName: 'Pase',
    esSkill: true,
  },
  dribbling: {
    type: 'integer',
    viewName: 'Regate',
    esSkill: true,
  },
  skill_curve: {
    type: 'integer',
    viewName: 'Curva de Aprendizaje',
    esSkill: true,
  },
  skill_fk_accuracy: {
    type: 'integer',
    viewName: 'Puntería',
    esSkill: true,
  },
  skill_long_passing: {
    type: 'integer',
    viewName: 'Pase Largo',
    esSkill: true,
  },
  skill_ball_control: {
    type: 'integer',
    viewName: 'Control del Balón',
    esSkill: true,
  },
  movement_acceleration: {
    type: 'integer',
    viewName: 'Aceleración',
    esSkill: true,
  }, 
  movement_sprint_speed: {
    type: 'integer',
    viewName: 'Velocidad de Sprint',
    esSkill: true,
  }, 
  movement_agility: {
    type: 'integer',
    viewName: 'Agilidad',
    esSkill: true,
  },
  movement_reactions: {
    type: 'integer',
    viewName: 'Reacción',
    esSkill: true,
  },
  movement_balance: {
    type: 'integer',
    viewName: 'Equilibrio',
    esSkill: true,
  },
  power_shot_power: {
    type: 'integer',
    viewName: 'Potencia de Tiro',
    esSkill: true,
  },
  power_jumping: {
    type: 'integer',
    viewName: 'Potencia de Salto',
    esSkill: true,
  },
  power_stamina: {
    type: 'integer',
    viewName: 'Resistencia',
    esSkill: true,
  },
  power_strength: {
    type: 'integer',
    viewName: 'Fuerza',
    esSkill: true,
  },
  power_long_shots: {
    type: 'integer',
    viewName: 'Potencia de Tiros Largos',
    esSkill: true,
  },
  mentality_aggression: {
    type: 'integer',
    viewName: 'Agresividad',
    esSkill: true,
  },
  mentality_interceptions: {
    type: 'integer',
    viewName: 'Intercepciones',
    esSkill: true,
  },
  mentality_positioning: {
    type: 'integer',
    viewName: 'Posicionamiento',
    esSkill: true,
  },
  mentality_vision: {
    type: 'integer',
    viewName: 'Visión',
    esSkill: true,
  },
  mentality_penalties: {
    type: 'integer',
    viewName: 'Penales',
    esSkill: true,
  },
  mentality_composure: {
    type: 'integer',
    viewName: 'Comportamiento',
    esSkill: true,
  },
  defending_marking: {
    type: 'integer',
    viewName: 'Marca en Defensa',
    esSkill: true,
  },
  defending_standing_tackle: {
    type: 'integer',
    viewName: 'Defensa sin derribo',
    esSkill: true,
  },
  defending_sliding_tackle: {
    type: 'integer',
    viewName: 'Barrida defensiva',
    esSkill: true,
  },
  goalkeeping_diving: {
    type: 'integer',
    viewName: 'Arquero: Atrapada de Volea',
    esSkill: true,
  },
  goalkeeping_handling: {
    type: 'integer',
    viewName: 'Arquero: Manejo del Balón',
    esSkill: true,
  },
  goalkeeping_kicking: {
    type: 'integer',
    viewName: 'Arquero: Saque',
    esSkill: true,
  },
  goalkeeping_positioning: {
    type: 'integer',
    viewName: 'Arquero: Posicionamiento',
    esSkill: true,
  },
  goalkeeping_reflexes: {
    type: 'integer',
    viewName: 'Arquero: Reflejos',
    esSkill: true,
  },
  goalkeeping_speed: {
    type: 'integer',
    viewName: 'Arquero: Velocidad',
    esSkill: true,
  },
  player_traits: {
    type: 'string',
    viewName: 'Características',
    esSkill: false,
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