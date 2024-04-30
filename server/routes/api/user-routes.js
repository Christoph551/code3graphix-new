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
        const timeRemaining = req.session.cookie.maxAge / 1000; // Convert milliseconds to seconds
        const minutesRemaining = Math.floor(timeRemaining / 60);

        const cookieExpiry = `${minutesRemaining} minutes`;
        
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
            req.session.user_email = userData.id;
            req.session.password = userData.id;
            req.session.logged_in = true;
            
            
            res.json({ user: userData, message: `You are logged in! Session Cookie Expires In: ${cookieExpiry}` });
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
            req.session.username = userData.id;
            req.session.user_email = userData.id;
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
