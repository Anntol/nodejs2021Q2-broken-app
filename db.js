const Sequelize = require('sequelize');
                                //database username   password
const sequelize = new Sequelize('gamedb', 'postgres', 'ghastb0i', {
    host: 'localhost',
    port: '5433',
    dialect: 'postgres'
})

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
)

sequelize.sync().then(() => {
    console.log(`Database is synchronized!`);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./models/user")(sequelize, Sequelize);
db.games = require("./models/game")(sequelize, Sequelize);

module.exports = db;
