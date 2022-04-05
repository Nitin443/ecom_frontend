import React, { useState, useEffect } from "react";


const Checkbox = ({ categories, handlefilters }) => {

    const [checked, setChecked] = useState([]);

    const handleToggle = (c) => () => {

        //return the first index 0r -1
        const currentCategoryId = checked.indexOf(c);
        const newCheckedCategoryId = [...checked];

        //if current checked was not already in checked state then push
        // else pull 

        if (currentCategoryId === -1) {
            newCheckedCategoryId.push(c);
        } else {
            newCheckedCategoryId.splice(currentCategoryId, 1);
        }

        setChecked(newCheckedCategoryId);
        handlefilters(newCheckedCategoryId);
    };

    return (categories && categories.map((c, i) => {
        return (
            <li key={i} className='list-unstyled'>
                <input onChange={handleToggle((c._id))} value={checked.indexOf(c._id === -1)} type='checkbox' className="form-check-input" />
                <label style={{marginLeft:'5px'}} className="form-check-label">{c.name}</label>
            </li>
        )
    })
    );
}

export default Checkbox;