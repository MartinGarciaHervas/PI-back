require("dotenv").config();
const { Sequelize } = require("sequelize");
const {pg} = require("pg");
const { POSTGRES_URL_NON_POOLING } = process.env;

//Importo Los Modelos
const CountryModel = require('./models/Country.js');
const ActivityModel = require('./models/Activity.js');
const UserModel = require('./models/User.js')
const RecordModel = require('./models/Record.js')


const sequelize = new Sequelize(
  `${POSTGRES_URL_NON_POOLING}?sslmode=require`,
  { logging: false, native: false, dialect: "postgres", dialectModule: pg });


//Ejecuto la funcion de cada modelo
CountryModel(sequelize);
ActivityModel(sequelize);
UserModel(sequelize);
RecordModel(sequelize);

//Relaciono los modelos

const { Country, Activity } = sequelize.models;

Country.belongsToMany(Activity, {through: 'country_activities'})
Activity.belongsToMany(Country, {through: 'country_activities'})


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  sequelize,     // para importart la conexión { conn } = require('./db.js');
};