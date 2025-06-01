import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;
// import.meta.env.VITE_BASE_URL
// Get all menu
export const getAllMenus = () => axios.get(`${baseUrl}/menu/getallmenu`);

// Get items of one menu
export const getMenuItems = (id) => axios.get(`${baseUrl}/user/get-item-menu/${id}`);

// Add new menu
export const addMenu = (menuName, heading) =>
  axios.post(`${baseUrl}/menu/addmenu`, { menuName, heading });

// Add new item
export const addItem = (itemName, itemPrice, itemDes, menuId) =>
  axios.post(`${baseUrl}/user/additem`, {
    itemName,
    itemPrice,
    itemDes,
    menuId,
  });
