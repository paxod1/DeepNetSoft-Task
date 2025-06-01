import { useState, useEffect } from 'react';
import { getMenus, addMenu, getMenuItems, addMenuItem } from '../utils/api';

export default function useMenuData() {
  const [state, setState] = useState({
    menus: [],
    items: [],
    selectedMenuId: null,
    loading: true
  });

  const [formData, setFormData] = useState({
    menu: { name: '', heading: '' },
    item: { name: '', description: '', price: '' }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const menus = await getMenus();
        setState(prev => ({
          ...prev,
          menus,
          loading: false,
          selectedMenuId: menus[0]?._id || null
        }));
      } catch (error) {
        console.error("Failed to load menus:", error);
        setState(prev => ({ ...prev, loading: false }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (state.selectedMenuId) {
      const fetchItems = async () => {
        try {
          const items = await getMenuItems(state.selectedMenuId);
          setState(prev => ({ ...prev, items }));
        } catch (error) {
          console.error("Failed to load items:", error);
        }
      };
      fetchItems();
    }
  }, [state.selectedMenuId]);

  const handleInputChange = (formType, e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [formType]: { ...prev[formType], [name]: value }
    }));
  };

  const handleAddMenu = async () => {
    try {
      await addMenu(formData.menu);
      const menus = await getMenus();
      setState(prev => ({
        ...prev,
        menus,
        selectedMenuId: menus[0]?._id || null
      }));
      setFormData(prev => ({ ...prev, menu: { name: '', heading: '' } }));
    } catch (error) {
      console.error("Failed to add menu:", error);
    }
  };

  const handleAddItem = async () => {
    try {
      await addMenuItem({
        ...formData.item,
        menuId: state.selectedMenuId
      });
      const items = await getMenuItems(state.selectedMenuId);
      setState(prev => ({ ...prev, items }));
      setFormData(prev => ({ ...prev, item: { name: '', description: '', price: '' } }));
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  return {
    menus: state.menus,
    items: state.items,
    loading: state.loading,
    selectedMenuId: state.selectedMenuId,
    formData,
    handleInputChange,
    handleAddMenu,
    handleAddItem,
    selectMenu: (menuId) => setState(prev => ({ ...prev, selectedMenuId: menuId }))
  };
}