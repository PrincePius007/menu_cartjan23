const Menu = require("../Model/menumodel");

// Create a new menu
exports.createMenu = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newMenu = new Menu({ name, description });
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all menus
exports.getMenus = async (req, res) => {
  try {
    const menus = await Menu.find().populate('items');
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
