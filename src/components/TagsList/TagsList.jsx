import React, { useState } from 'react';
import Tag from "../Tag/Tag";

function TagsList({tagNames, handleTagDelete}) {
    return (
        <div className="tags-menu__list">
            {tagNames.map((tagName, index) => {
                console.log(tagName);
                return <Tag handleTagDelete={handleTagDelete}
                            key = {index.toString()}
                            tagName={tagName}></Tag>;
            })}
        </div>);
}

export default TagsList;