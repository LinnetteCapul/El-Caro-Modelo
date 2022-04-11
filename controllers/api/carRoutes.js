const router = require('express').Router();
const { Car } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newCar = await Car.create({
            ...req.body,
            user_id: req.session.user_id,
        })
    } catch (err) {
        res.status(400).json(err);
    }
})