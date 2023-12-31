// const axios = require("axios");
const server = require("./src/server.js");
const { sequelize } = require('./src/db.js');
const PORT = 3001


const startServer = async () => {
  try {
    await sequelize.sync({ force: false }); // Espera a que la DB se actualice
    server.listen(PORT, () => {
      console.log(`Server raised in port: ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();