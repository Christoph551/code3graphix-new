const express = require('express');
const session = require('express-session');
const path = require('path');
const sequelize = require('./server/config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./server/routes');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'path/to/index.html'));
// });

const sess = {
    secret: process.env.SECRET,
    cookie: {
        maxAge: 1800000, // 30 minutes
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
app.use('/home', require('./server/routes/home-routes'));
app.use('/api', require('./server/routes/api'));
app.use('/api/user', require('./server/routes/api/user-routes'));

app.use(cors( { origin: 'http://localhost:3000' } ))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use("/public/images", express.static(path.join(__dirname, "/public/images")));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
