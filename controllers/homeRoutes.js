const router = require('express').Router();
const { Car, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const carData = await Car.findAll()

        const car = carData.map((cars) => cars.get({ plain: true}));

        res.render('homepage', { 
            ...car, 
            logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/cars/:id', async (req, res) => {
    try {
        const carData = await Car.findByPk(req.params.id)

        const car = carData.get({ plain: true});

        res.render('carpage', { 
            ...car, 
            logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.replace('/');
        return;
    }

    res.render('login');
});

module.exports = router;