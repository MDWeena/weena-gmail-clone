import React from 'react'
import "./section.css"

const Section = ( { Icon, title, color, selected }) => {
    return (
        <div className={`section ${selected && "section--selected"}`}
        style={{
            color: `${selected && color}`,
            borderBottom: `2px solid ${color}`
        }}
        >
            <Icon />
            <p>{title}</p>
        </div>
    )
}

export default Section
