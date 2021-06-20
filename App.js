import React, { useState } from 'react'
import MainNavbar from './components/MainNavbar'
import DrinkSelect from './components/DrinkSelect'
import DrinkInfo from './components/DrinkInfo'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.scss'
import axios from 'axios'

export default function App() {
    const [currentDrink, setCurrentDrink] = useState(null)

    const getDrinkInfo = ( e ) => {
        axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${e.target.value}`)
            .then(response => setCurrentDrink(() => response.data.drinks[0]))
    }

    return <>
        <MainNavbar/>
        <main>
            <div className="column">
                <DrinkSelect handleChange={getDrinkInfo}/>
                <DrinkInfo currentDrink={currentDrink}/>
            </div>
            <div className="column">
                <img 
                  src={currentDrink ? currentDrink.strDrinkThumb : ''} 
                  alt={currentDrink ? `The drink called ${currentDrink.strDrink}` : ''} 
                  crossOrigin="true"/>
            </div>
        </main>
    </>
}