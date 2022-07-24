import React from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import {NewTopCar, topCars} from './Monday/01/01-map/NewComponents';
// // import {NewComponent, NewTopCar} from './NewComponents';


function App() {
    // const myFirstSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hellow Im Vasia")
    // }
    // const mySecondSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hellow Im Ivan")
    // }

    const onClickHandler =  (name: string) => {
        console.log(name)
    }



    return (
        <div className="App">
            {/*<02-button onClick={(event) => {console.log("Hellow!")} }>MyYouTubeChanel-1</02-button>*/}
            {/*<02-button onClick={myFirstSubscriber}>MyYouTubeChanel-1</02-button>*/}

            <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClickHandler ("Vasia")}>MyYouTubeChanel-1</button>
            <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClickHandler ("Ivan")}>MyYouTubeChanel-2</button>
        </div>
    );
}
//
// export default App;