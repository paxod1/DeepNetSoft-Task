import React, { useEffect, useState } from 'react';
import {
    getAllMenus,
    getMenuItems,
    addMenu,
    addItem,
} from '../services/api';
import Header from '../components/Header';
import MenuSection from '../components/MenuSection';
import ItemSection from '../components/ItemSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import AddMenuForm from '../components/AddMenuForm';
import AddItemForm from '../components/AddItemForm';
import '../styles/shared.scss';

function Home() {
    const [addMenuOpen, setAddMenuOpen] = useState(false);
    const [allMenuList, setAllMenuList] = useState([]);
    const [menuButtonClicked, setMenuButtonClicked] = useState(null);
    const [addItemOpen, setAddItemOpen] = useState(false);
    const [itemName, setItemName] = useState('');
    const [itemDes, setItemDes] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [menuId, setMenuId] = useState();
    const [itemList, setItemList] = useState([]);
    const [menu, setMenu] = useState({ name: '', heading: '' });

    useEffect(() => {
        fetchAllMenus();
    }, [addMenuOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMenu((prevMenu) => ({ ...prevMenu, [name]: value }));
    };

    const fetchAllMenus = async () => {
        try {
            console.log("Fetching all menus...");
            const response = await getAllMenus();
            console.log("Menu response:", response);

            if (response.data) {
                setAllMenuList(response.data);
                if (response.data.length > 1) {
                    fetchMenuItems(response.data[1]._id);
                }
            }
        } catch (error) {
            console.error("Error fetching menus:", error);
        }
    };

    const fetchMenuItems = async (id) => {
        try {
            console.log(`Fetching items for menu ${id}...`);
            setMenuButtonClicked(id);
            setMenuId(id);
            const response = await getMenuItems(id);
            console.log("Menu items response:", response);
            setItemList(response.data);
        } catch (error) {
            console.error(`Error fetching items for menu ${id}:`, error);
        }
    };

    const handleSubmit = async () => {
        if (!menu.name || !menu.heading) {
            alert('Please fill in all fields!');
            return;
        }
        await addMenu(menu.name, menu.heading);
        alert('New menu added!');
        setMenu({ name: '', heading: '' });
        setAddMenuOpen(false);
    };

    const handleAddItem = async () => {
        if (!itemName || !itemPrice || !itemDes || !menuId) {
            alert('Please fill in all fields!');
            return;
        }
        await addItem(itemName, itemPrice, itemDes, menuId);
        alert('New item added!');
        setAddItemOpen(false);
        setItemName('');
        setItemPrice('');
        setItemDes('');
        fetchMenuItems(menuId);
        fetchAllMenus();
    };

    return (
        <div>
            <Header />
            <section className="home_poster_main_section">
                <div className="home_poster_inner">
                    <h1 className="home_poster_heading">MENU</h1>
                    <p className="home_poster_content">
                        Please take a look at our menu featuring food, drinks, and brunch. If you'd like
                        to place an order, use the "Order Online" button located below the menu.
                    </p>
                </div>
            </section>

            <MenuSection
                allMenuList={allMenuList}
                menuButtonClicked={menuButtonClicked}
                getOneMenu={fetchMenuItems}
                setAddMenuOpen={setAddMenuOpen}
            />

            {addMenuOpen && (
                <AddMenuForm
                    setAddMenuOpen={setAddMenuOpen}
                    handleSubmit={handleSubmit}
                    menu={menu}
                    handleChange={handleChange}
                />
            )}

            <section className="items_main_section">
                <img
                    width="7%"
                    style={{ opacity: 0.5 }}
                    src="https://res.cloudinary.com/dqgrcovgg/image/upload/v1742993075/deep_net_menus1_mo5uxk.png"
                    alt="sideimage"
                    className="item_image_poster"
                />

                <ItemSection
                    itemList={itemList}
                    setAddItemOpen={setAddItemOpen}
                    menuId={menuId}
                />

                <img
                    width="7%"
                    style={{ opacity: 0.5 }}
                    src="https://res.cloudinary.com/dqgrcovgg/image/upload/v1742993078/deep_net_menu2_uvdvdb.png"
                    alt="side image"
                    className="item_image_poster"
                />
            </section>

            {addItemOpen && (
                <AddItemForm
                    setAddItemOpen={setAddItemOpen}
                    additems={handleAddItem}
                    itemName={itemName}
                    setItemName={setItemName}
                    itemDes={itemDes}
                    setItemDes={setItemDes}
                    itemPrice={itemPrice}
                    setItemPrice={setItemPrice}
                />
            )}

            <ContactSection />
            <Footer />
        </div>
    );
}

export default Home;
