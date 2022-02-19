import React, { useState } from 'react';

function DropDownMenu(props) {
    return (
        <div className="drop-down-menu">
            <ul>
                {props.dropDownNames.map((person, index)=>{
                    return <p onClick={() => {props.handleDropDownClick(person)}} key = {index.toString()}>{person.name}</p>
                    })}
            </ul>
        </div>);
}

export default DropDownMenu;