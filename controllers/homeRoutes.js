const router = require('express').Router();
const { Car, User } = require('../models');
const withAuth = require('../utils/auth');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
    try {
        const carData = await Car.findAll({
            include: [
                {
                    model: User, 
                    attributes: ["name"]
                }
            ]
        })

        const cars = carData.map((cars) => cars.get({ plain: true}));
        console.log(cars);
        res.render('homepage', { 
            cars,
            logged_in : req.session.logged_in
        });
        // res.json(car)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/cars/:id', async (req, res) => {
    try {
        const carData = await Car.findByPk(req.params.id)
        
        const car = carData.get({ plain: true});

        res.render('singlecarpage', { 
            car, 
            logged_in : req.session.logged_in
        });
        // res.json(car)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/search/:term', async (req, res) => {
    try {
        const carData = await Car.findAll({
            where: {
              [Op.or]: [
               {make_name: { [Op.like]: '%' + req.params.term + '%' }},
               {car_model: { [Op.like]: '%' + req.params.term + '%' }}
              ]
            }
          });

        const cars = carData.map((cars) => cars.get({ plain: true}));

        res.render('carpage', { 
            cars, 
            logged_in : req.session.logged_in
        });
        // res.json(cars)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/new/car', withAuth, async (req, res) => {
    try {
        res.render('newcarformpage', { 
            logged_in : req.session.logged_in
        });
        // res.json(car)
    } catch (err) {
        res.status(500).json(err)
    }
})


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.render('/');
        return;
    }

    res.render('login');
});

module.exports = router;