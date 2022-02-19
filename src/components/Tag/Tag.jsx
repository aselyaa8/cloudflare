import React, { useState } from 'react';
import "./Tag.css";

function Tag(props) {
    return (
        <section className="tag">
            <h2 className="tag__name">{props.name}</h2>
            <button type="button" className="tag__button-close"></button>
        </section>);
}

export default Tag;