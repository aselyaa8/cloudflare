import React, { useState } from 'react';
import "./Tag.css";

function Tag({tagName, handleTagDelete}) {
    return (
        <section className="tag">
            <h2 className="tag__name">{tagName.name}</h2>
            <button type="button" className="tag__button-close" onClick={()=>{handleTagDelete(tagName)}}></button>
        </section>);
}

export default Tag;