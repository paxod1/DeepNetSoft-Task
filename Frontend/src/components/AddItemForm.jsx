import React, { useState } from 'react';
import '../styles/forms.scss';

const AddItemForm = ({ 
    setAddItemOpen, 
    additems, 
    itemName, 
    setItemName, 
    itemDes, 
    setItemDes, 
    itemPrice, 
    setItemPrice 
}) => {
    return (
        <div className='home_addmenu_form_main'>
            <div className="close_botton_addmenu" onClick={() => setAddItemOpen(false)}>✖</div>
            <h2>Add New Item</h2>
            <input
                type="text"
                placeholder="Enter Item Name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter Item Description"
                value={itemDes}
                onChange={(e) => setItemDes(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter Item Price"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
            />
            <button onClick={additems}>Save Menu</button>
        </div>
    );
};

export default AddItemForm;