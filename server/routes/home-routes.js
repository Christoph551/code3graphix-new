const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('home', {
            title: "Home",
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/login', async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/home');
            return;
        }
        res.render('login', {
            title: "Login",
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', async (req, res) => {
    try {
        res.render('user', {
            title: "Create your account!",
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/logout', async (req, res) => {
    try {
        req.session.destroy(() => {
            res.redirect('/home');
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;