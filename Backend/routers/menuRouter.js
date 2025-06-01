const router = require('express').Router();
const Menu = require('../models/menuSchema');

// Add a new menu
router.post('/addmenu', async (req, res) => {
    try {
        const newMenu = new Menu(req.body);
        await newMenu.save();
        res.status(201).json({ message: 'Menu added successfully' });
    } catch (err) {
        console.error('Error adding menu:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get all menus
router.get('/getallmenu', async (req, res) => {
    try {
        const menus = await Menu.find();
        res.status(200).json(menus);
    } catch (err) {
        console.error('Error getting menus:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
