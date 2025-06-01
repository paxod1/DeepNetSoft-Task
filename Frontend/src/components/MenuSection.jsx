import React, { useState } from 'react';
import '../styles/menuSection.scss';

const MenuSection = ({ allMenuList, menuButtonClicked, getOneMenu, setAddMenuOpen }) => {
    return (
        <section className='home_poster_menu_slect_section'>
            {allMenuList.length === 0 ? (
                <div className="loading-spinner">
                    <div className="spinner"></div>
                </div>
            ) : (
                <div className='home_menu_inner_div'>
                    {allMenuList.map((item) => (
                        <div className='home_menu_list_button_section' key={item._id}>
                            <button
                                className={menuButtonClicked === item._id ? 'clicked_menu_button' : 'home_menu_button'}
                                onClick={() => { getOneMenu(item._id, item.heading) }}
                            >
                                {item.menuName}
                            </button>
                        </div>
                    ))}
                    <button className='home_menu_add_button' onClick={() => setAddMenuOpen(true)}>
                        Add Menu
                    </button>
                </div>
            )}
        </section>
    );
};

export default MenuSection;