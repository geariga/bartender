import React from 'react'
import DrinkInfoSection from './DrinkInfoSection'
import './componentStyles/DrinkInfo.scss'

export default function DrinkInfo(props) {
    const getIngredientsLiContent = () => {
        if (!props.currentDrink) return
        const content = {}
        for (let i = 1; i <= 15; i++) {
            if (props.currentDrink[`strIngredient${i}`]) {
                content[props.currentDrink[`strIngredient${i}`]] = 
                    props.currentDrink[`strMeasure${i}`]
            } else {
                return content
            }
        }
    }

    const getInstructionsLiContent = () => {
        if (!props.currentDrink) return
        const instructions = props.currentDrink.strInstructions
        const instructionsLength = instructions.length
        const separatedInstructions = {}
        let currentLine = ''
        let step = 1
        for (let i = 0; i < instructionsLength; i++) {
            const currentCharacter = instructions[i]
            currentLine += currentCharacter
            if (currentCharacter === '.') {
                separatedInstructions[`${step}`] = currentLine
                currentLine = ''
                step++
            }
        }
        return separatedInstructions
    }

    return (
        <div className="drink-info">
            <h3>Ingredients:</h3>
            <DrinkInfoSection liContent={getIngredientsLiContent()}/>
            <h3>Instructions:</h3>
            <DrinkInfoSection liContent={getInstructionsLiContent()}/>
        </div>
    )
}
