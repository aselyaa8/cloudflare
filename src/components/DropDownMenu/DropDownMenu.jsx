import React, { useState } from 'react';

function DropDownMenu(props) {
    
    return (
        <div className="drop-down-menu">
            <ul>
                {props.dropDownNames.map((person, index)=>{
                    let personName = person.name;
                    if (person.boldIndex !== null) {
                        let beginOfBoldIndex = personName.substring(0, person.boldIndex).lastIndexOf(' ');
                        let endOfBoldIndex = personName.indexOf(' ', person.boldIndex);
                        if (beginOfBoldIndex === -1) {
                            beginOfBoldIndex = 0;
                        }
                        if (endOfBoldIndex === -1) {
                            endOfBoldIndex = personName.length;
                        }
                        const left = personName.substring(0, beginOfBoldIndex);
                        const bold = personName.substring(beginOfBoldIndex, endOfBoldIndex);
                        const right = personName.substring(endOfBoldIndex);
                        personName = <>{left} <b>{bold}</b> {right}</>;
                    }
                    return <p onClick={() => {props.handleDropDownClick(person)}} key = {index.toString()}>{personName}</p>
                    })}
            </ul>
        </div>);
}

export default DropDownMenu;