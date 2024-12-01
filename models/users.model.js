import {DataTypes,Sequelize} from "sequelize";
import { type } from "os";


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/api.sqlite',  // Path to your local SQLite database file
});

// Define the User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,  // Auto incrementing primary key
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,  // Username is required     // Username must be unique
    validate: {
      len: [3, 50],    // Username should be between 3 and 50 characters
    }
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 20],    // Username should be between 3 and 50 characters
    }
  }
}, {
  tableName: 'users', // Specifies the name of the table in the SQLite database
  timestamps: true,   // Automatically adds createdAt and updatedAt fields
});

// Sync the model with the database (creates the table if it doesn't exist)
sequelize.sync()
  .then(() => console.log("DB connection working!"))
  .catch(error => console.log("DB connection failed", error));


export {User};
