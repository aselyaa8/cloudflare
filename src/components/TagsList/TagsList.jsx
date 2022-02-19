import React, { useState } from 'react';
import Tag from "../Tag/Tag";

function TagsList({tagNames}) {
    return (
        <div className="tags-menu__list">
            {tagNames.map((tagName, index) => {
                return <Tag 
                            key = {index.toString()}
                            name={tagName.name}></Tag>;
            })}
        </div>);
}

export default TagsList;