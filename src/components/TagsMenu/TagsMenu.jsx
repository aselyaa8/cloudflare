import React, { useState } from 'react';
import TagsList from '../TagsList/TagsList';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import {astronauts} from '../../utils/const';
import './TagsMenu.css';

function TagsMenu() {
    const [tagNames, setTagNames] = useState([]);
    const [dropDownNames, setDropDownNames] = useState(astronauts.people);
    const [showDropDown, setShowDropDown] = useState(false);
    const [tagEntered, setTagEntered] = useState("");
    function handleInputChange(evt){
        const tagValue = evt.target.value;

        setShowDropDown(true);
    }
    return (
        <section className="tags-menu">
            <TagsList/>
            
            <input 
                placeholder="+ Add tag" 
                className="tags-menu__button-add" 
                type="text"
                onChange={handleInputChange}
                onClick={handleInputChange}
            />
            {showDropDown && <DropDownMenu dropDownNames = {dropDownNames}/>}
        </section>);
}

export default TagsMenu;