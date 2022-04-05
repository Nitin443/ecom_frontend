import React, { useState, useEffect, Fragment } from "react";

const Radiobox = ({prices, handlefilters}) => {

 const[value, setValue] = useState(0);

 const handleChange = (event) => {
    handlefilters(event.target.value);
    setValue(event.target.value);
 }

    return (prices && prices.map((p, i) => {
        return (
            <div key={i} className='list-unstyled'>
                <input onChange={handleChange} value={`${p._id}`} type='checkbox' className="mr-2 ml-2" />
                <label style={{marginLeft:'5px'}} className="form-check-label">{p.name}</label>
            </div>
        )
    })
    );
}

export default Radiobox;