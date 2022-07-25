import React from "react"
import {FilterType} from '../../../App';




export type MoneyType = {
    banknots: string
    value: number
    number: string
}
type NewComponentPropsType = {
    currentMoneyyyy: Array <MoneyType>
    buttonClick: (nameButton: FilterType) => void
}

export  const NewComponent = (props: NewComponentPropsType) => {

    return (
        <>
            <ul>
                {props.currentMoneyyyy.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.buttonClick('all')}>all</button>
                <button onClick={() => props.buttonClick('RUBLS')}>RUBLS</button>
                <button onClick={() => props.buttonClick('Dollars')}>Dollars</button>
            </div>
        </>
    )
}