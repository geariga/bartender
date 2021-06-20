import React, { useState, useEffect } from 'react'
import './componentStyles/DrinkSelect.scss'
import axios from 'axios'

export default function DrinkSelect(props) {
    const [allDrinks, setAllDrinks] = useState([])
    useEffect(() => {
        axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php')
            .then(response => { 
                setAllDrinks(() => {
                    return response.data.drinks.sort((a, b) => {
                        const drinkA = a.strDrink.toUpperCase()
                        const drinkB = b.strDrink.toUpperCase()
                        return (drinkA < drinkB) ? -1 : (drinkA > drinkB) ? 1 : 0
                    })
                })
            })
    }, [])

    return (
        <select
            defaultValue={'DEFAULT'}
            onChange={props.handleChange} 
            variant="peach"
            className="drink-dropdown">
                <option value="DEFAULT" disabled>select drink...</option>
                {
                allDrinks ? allDrinks.map(drink => 
                    <option key={drink.idDrink} value={drink.idDrink}>
                        {drink.strDrink}
                    </option>
                ) : <option key={'defaultKey'}>loading drinks...</option>
                }
        </select>
    )
}
