import React, { useState } from 'react';
import '../styles/forms.scss';

const AddMenuForm = ({ setAddMenuOpen, handleSubmit, menu, handleChange }) => {
    return (
        <div className='home_addmenu_form_main'>
            <div className="close_botton_addmenu" onClick={() => setAddMenuOpen(false)}>✖</div>
            <h2>Add New Menu</h2>
            <input
                type="text"
                placeholder="Enter Menu Name"
                value={menu.name}
                onChange={handleChange}
                name='name'
            />
            <input
                type="text"
                placeholder="Enter Heading"
                value={menu.heading}
                onChange={handleChange}
                name='heading'
            />
            <button onClick={handleSubmit}>Save Menu</button>
        </div>
    );
};

export default AddMenuForm;