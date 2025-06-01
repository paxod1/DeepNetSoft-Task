const router = require('express').Router();
const Item = require('../models/itemSchema');

// Add a new item
router.post('/additem', async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json({ message: 'Item added successfully' });
    } catch (err) {
        console.error('Error adding item:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get items for a specific menu
router.get('/get-item-menu/:id', async (req, res) => {
    console.log("from menu find id", req.params.id);

    try {
        const items = await Item.find({ menuId: req.params.id }).populate('menuId');
        res.status(200).json(items);
    } catch (err) {
        console.error('Error getting items:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
