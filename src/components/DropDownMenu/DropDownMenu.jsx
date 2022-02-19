import React, { useState } from 'react';

function DropDownMenu(props) {
    
    return (
        <div className="drop-down-menu">
            <ul>
                {props.dropDownNames.map((person, i)=>{
                    return <li key = {i.toString()}>{person.name}</li>
                    })}
            </ul>
        </div>);
}

export default DropDownMenu;