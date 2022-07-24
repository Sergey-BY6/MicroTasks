import React from 'react';


type ButtonTypeProps = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonTypeProps) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}




// import React from 'react';
// import './App.css';
// import {Button} from './components/Button';
//
//
// function App() {
//
//     const Button1Foo = (subscriber: string, age: number, adress: string) => {
//         console.log(subscriber, age, adress)
//     }
//
//     const Button2Foo = (subscriber: string) => {
//         console.log(subscriber)
//     }
//
//     const Button3Foo = () => {
//         console.log("Stupid Button")
//     }
//
//
//     return (
//         <div className="App">
//             {/*<button>MyYouTubeChanel-1</button>*/}
//             {/*<button>MyYouTubeChanel-2</button>*/}
//             <Button name={"MyYouTubeChanel-1"} callBack={()=> Button1Foo("Vasya", 21, "live in Minsk")}/>
//             <Button name={"MyYouTubeChanel-2"} callBack={ () => Button2Foo ("Ivan")}/>
//             <Button name={"Stupid Button"} callBack={Button3Foo }/>
//         </div>
//     );
// }
//
// export default App;
