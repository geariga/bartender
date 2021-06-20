import React from 'react'
import './componentStyles/DrinkInfoSection.scss'

export default function DrinkInfoSection(props) {
    const ingredients = props.liContent ? Object.keys(props.liContent) : []
    return (
        <div className='drink-info-section'>
            <ul>
                {ingredients.map((ing, i) => {
                    const qty = props.liContent[ing]
                    return <li>{`${ing}: ${qty === null ? '-' : qty}`}</li>
                })}
            </ul>
        </div>
    )
}
