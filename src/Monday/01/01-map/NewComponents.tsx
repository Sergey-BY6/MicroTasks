import React from 'react';


// type StudentPropsType = {
//     id: number
//     name: string
//     age: number
// }
//
// type NewComponentPropsType = {
//     students: Array<StudentPropsType>
// }

export const topCars = [
    {id: 1, manufacturer: 'BMW', model: 'm5cs'},
    {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
    {id: 3, manufacturer: 'Audi', model: 'rs6'}
]
//
type CarsType = {
    id: number
    manufacturer: string
    model: string
}

type TopCarType = {
    car: Array<CarsType>
}


export const NewTopCar = (props: TopCarType) => {

    return (
        <table>
            <thead>
            {props.car.map((cr, index) => {
                return (
                    <tr key={cr.id}>
                        <td >{cr.manufacturer}</td>
                        <td>{cr.model}</td>
                    </tr>

                )
            })}
            </thead>
        </table>
    )
}
// export const NewComponent = (props: NewComponentPropsType) => {
//     return(
//         <ul>
//             {props.students.01-map((objectFromStudentArray, index) => {
//                 return (
//                     <li key={objectFromStudentArray.id}>
//                         <span>{objectFromStudentArray.name} </span>
//                         <span>age {objectFromStudentArray.age} </span>
//                     </li>
//                 )
//             })}
//         </ul>
//     )
// }


// const students = [
//     {id:1, name: "James", age: 25},
//     {id:2, name: "Robert", age: 28},
//     {id:3, name: "John", age: 28},
//     {id:4, name: "Michael", age: 28},
//     {id:5, name: "William", age: 28},
//     {id:6, name: "David", age: 28},
//     {id:7, name: "Richard", age: 28},
//     {id:8, name: "Joseph", age: 28},
//     {id:9, name: "Thomas", age: 28},
//     {id:10, name: "Charles", age: 28},
//     {id:11, name: "Christopher", age: 28},
//
// ]