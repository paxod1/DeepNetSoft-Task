import React, { useState } from 'react';
import '../styles/itemSection.scss';

const ItemSection = ({ itemList, setAddItemOpen, menuId }) => {
    return (
        <div className='item_displaying_section'>
            <img
                src="https://png.pngtree.com/png-clipart/20221106/ourmid/pngtree-lemon-juice-png-image_6420322.png"
                alt="lemonjuice"
                className='item_showing_box_image1'
                style={{ transform: 'rotateY(180deg)' }}
            />

            <div>
                <div className='item_heaiding_main'>
                    <div className='line'></div>
                    <h1 className='item_heading'>
                        {itemList.length !== 0 && itemList[0].menuId.heading}
                    </h1>
                    <div className='line'></div>
                </div>

                <div className='items_displaying_inner_box'>
                    {itemList.map((item) => (
                        <div className="item_onebyone" key={item._id}>
                            <div className="item_details">
                                <h2 className="item_name">{item.itemName} <span className="dotted_line"></span> <span className="item_price">${item.itemPrice}</span></h2>
                                <p className="item_description">{item.itemDes}</p>
                            </div>
                        </div>
                    ))}

                    <button 
                        className='item_showing_button_add_item' 
                        onClick={() => setAddItemOpen(true)}
                    >
                        Add Item
                    </button>
                </div>
            </div>
            
            <img
                src="https://res.cloudinary.com/dqgrcovgg/image/upload/v1742994334/image_deep_net_item_aeqfys.png"
                alt=""
                className='item_showing_box_image2'
            />
        </div>
    );
};

export default ItemSection;