const express = require('express');
const session = require('express-session');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./routes');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

// Session configuration
const sess = {
    secret: process.env.SECRET,
    cookie: {
        maxAge: 600000, // 10 minutes
        httpOnly: true,
        secure: false, // change to true in production
        sameSite: 'none',    
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    })
};

// Session middleware
app.use(session(sess));

// CORS middleware
app.use(cors({ origin: 'http://localhost:3000' }));

// Serve static files from the client/public directory
app.use(express.static(path.join(__dirname, 'client', 'public')));

// Parse incoming JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});
