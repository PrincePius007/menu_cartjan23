const MenuItem = require("../Model/menuitemmodel");
const Menu = require("../Model/menumodel");


// Create a new menu item


exports.createMenuItem = async (req, res) => {
  try {
    const { name, description, price, menuId } = req.body;

    // Validate if menuId exists in the database
    const menu = await Menu.findById(menuId);
    if (!menu) {
      return res.status(404).json({ error: 'Menu not found' });
    }

    // Create the new menu item and associate it with the menu
    const newItem = new MenuItem({ 
      name, 
      description, 
      price, 
      menu: menuId 
    });

    await newItem.save();

    // Now associate the new item with the menu
    menu.items.push(newItem._id);  // Assuming 'items' is an array in the menu model
    await menu.save();

    // Return the created menu item
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get all menu items for a specific menu
exports.getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find({ menu: req.params.menuId });
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
