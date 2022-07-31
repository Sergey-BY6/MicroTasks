import React from "react"
// import {FilterType} from '../../../App';




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



//
// import React, {useState} from 'react';
// import './App.css';
// import {NewComponent} from './Monday/01/04-filter/NewComponent';
//
//
export type FilterType = 'all' | 'RUBLS' | 'Dollars' | any
//
// function App() {
//     let money = [
//         {banknots: 'Dollars', value: 100, number: ' a1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' z1234567890'},
//         {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
//         {banknots: 'Dollars', value: 100, number: ' e1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' c1234567890'},
//         {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' x1234567890'},
//         {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
//     ]
//
//     const [filter, setFilter] = useState<FilterType>('all')
//
//     let currentMoney = money
//     if (filter === 'Dollars') {
//         currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
//     }
//     if (filter === 'RUBLS') {
//         currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
//     }
//
//     const onClickFilterHandler = (nameButton: FilterType) => {
//         setFilter(nameButton)
//     }
//
//     return (
//         <>
//             <NewComponent currentMoneyyyy={currentMoney}  buttonClick={onClickFilterHandler}/>
//
//         </>
//     );
// }
//
// export default App