const router = require('express').Router();
const withAuth = require('../../utils/auth');
const  { User }  = require('../../models');

// /api/user/login

// /api/user
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] }
        });
        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { user_email: req.body.user_email } });

        if (!userData) {
            res.status(400).json({ 
                message: 
                'Incorrect email or password, please try again' 
            });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ 
                message: 
                'Incorrect email or password, please try again' 
            });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.user_email = userData.user_email;
            req.session.password = userData.password;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

// /api/user/signup

router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.user_email = userData.user_email;
            req.session.logged_in = true;

            res.status(200).json(userData);
            console.log(userData);
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

// /api/user/logout

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      // This method erases all session data thus flipping every setting to its default.
    req.session.destroy(() => {
        res.status(204).end();
    });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
