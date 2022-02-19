import React, { useState } from 'react';
import TagsList from '../TagsList/TagsList';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import {astronauts} from '../../utils/const';
import './TagsMenu.css';

function TagsMenu() {
    const [tagNames, setTagNames] = useState([]);

    const [dropDownNames, setDropDownNames] = useState(astronauts.people);
    const [filtereDropDownNames, setFilteredDropDownNames] = useState([]);
    const [showDropDown, setShowDropDown] = useState(false);

    const [tagEntered, setTagEntered] = useState("");

    function handleInputChange(evt){
        const tagValue = evt.target.value;
        setTagEntered(tagValue);

        const filteredNames = dropDownNames.filter((person) => {
            if (person.name.toLowerCase().includes(tagValue.toLowerCase())) {
                return true;
            }
            return false;
        });
        
        setFilteredDropDownNames(filteredNames);
        setShowDropDown(true);
    }

    function handleDropDownClick(person) {
        const index = dropDownNames.indexOf(person);
        const updatedDropDownNames = dropDownNames.filter((newPerson) => {
            return newPerson.name !== person.name;
        });
        
        setDropDownNames(updatedDropDownNames);
        setTagNames([...tagNames, person]);
        setFilteredDropDownNames([]);  
        setTagEntered("");
    } 
    
    function handleTagDelete(person) {
        const index = tagNames.indexOf(person);
        const updatedTagNames = tagNames.filter((newPerson) => {
            return newPerson.name !== person.name;
        });
        
        setTagNames(updatedTagNames);
        setDropDownNames([...dropDownNames, person]);
        setTagEntered("");
        setFilteredDropDownNames([]); 
    }

    return (
        <section className="tags-menu">
            <TagsList tagNames={tagNames} handleTagDelete={handleTagDelete}/>
            
            <input 
                placeholder="+ Add tag" 
                className="tags-menu__button-add" 
                type="text"
                value={tagEntered}
                onChange={handleInputChange}
                onClick={handleInputChange}
            />
            {showDropDown && <DropDownMenu dropDownNames = {filtereDropDownNames} handleDropDownClick={handleDropDownClick}/>}
        </section>);
}

export default TagsMenu;