import Sequelize from 'sequelize';
import { userModel } from './models/user.js';
import { gameModel } from './models/game.js';

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

db.users = userModel(sequelize, Sequelize);
db.games = gameModel(sequelize, Sequelize);

export default db;
