const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./routes');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Session configuration
const sess = {
    secret: process.env.SECRET,
    cookie: {
        maxAge: 300000, // 5 minutes
        httpOnly: true,
        secure: true, // change to true in production
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
const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};


app.use(cors(corsOptions));

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
