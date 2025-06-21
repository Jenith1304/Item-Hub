const Item = require('../models/Item');

const addItem = async (req, res) => {
  try {
    const { name, type, description } = req.body;
    const coverImage = req.files['coverImage'][0].filename;
    const additionalImages = req.files['additionalImages'].map(file => file.filename);

    const newItem = new Item({ name, type, description, coverImage, additionalImages });
    await newItem.save();

    res.status(201).json({ message: 'Item successfully added', item: newItem });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

module.exports = { addItem, getItems };
