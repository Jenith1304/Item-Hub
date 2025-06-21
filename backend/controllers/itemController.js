const Item = require('../models/Item');

const addItem = async (req, res) => {
  try {
    console.log('FILES:', req.files); // 🧪 Add this line

    const { name, type, description } = req.body;

    if (!req.files || !req.files.coverImage) {
      return res.status(400).json({ message: 'Cover image is required' });
    }

    const coverImage = req.files.coverImage[0].path; // should be Cloudinary URL
    const additionalImages = req.files.additionalImages?.map(img => img.path) || [];

    const newItem = new Item({
      name,
      type,
      description,
      coverImage,
      additionalImages,
    });

    await newItem.save();
    res.status(201).json({ message: 'Item successfully added' });
  } catch (error) {
    console.error('Upload Error:', error);
    res.status(500).json({ message: 'Failed to add item' });
  }
};

const getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching items' });
  }
};


module.exports = { addItem, getItems };
