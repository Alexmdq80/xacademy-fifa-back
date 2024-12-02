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

module.exports = Player;