const express = require('express');
const session = require('express-session');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./routes');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

app.use(cors( { origin: 'http://localhost:3000' } ));
app.use(express.static(path.join(__dirname, 'client', 'public')));

const sess = {
    secret: process.env.SECRET,
    cookie: {
        maxAge: 300000, // 5 minutes
        httpOnly: true,
        secure: false, // change to true in production
        sameSite: 'strict',    
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});
