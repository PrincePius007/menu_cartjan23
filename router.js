const express = require('express');
const router = express.Router();

// Import controllers
const menuController = require('./Controller/menucontroller');
const menuItemController = require('./Controller/menuitemcontroller');

// Menu Routes
router.post('/menus', menuController.createMenu);        
router.get('/menus', menuController.getMenus);         

// Menu Item Routes
router.post('/menu-items', menuItemController.createMenuItem);  
router.get('/menu-items/:menuId', menuItemController.getMenuItems); 

module.exports = router;
