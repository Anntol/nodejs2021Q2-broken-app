import express from 'express';
import db from './db.js';

import { router as user } from './controllers/usercontroller.js';
import { router as game } from './controllers/gamecontroller.js';
import { validateSession } from './middleware/validate-session.js';

const app = express();
db.sequelize.sync();
app.use(express.json());
app.use('/api/auth', user);
app.use( validateSession )
app.use('/api/game', game);

const port = 4000;
app.listen(port, function() {
    console.log(`App is listening on port ${port}`);
})