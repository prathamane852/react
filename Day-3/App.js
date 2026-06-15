import React from "react";

import ReactDOM from "react-dom/client"

// This is React Element 
const heading = <h1 id="heading" className="this is classname">This is Heading now I wanna Understand</h1> // its a JSX (Bazel (JS compiler) which convert this to React Element)

console.log(heading) // its an object 


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(heading);


const MyThirdComponent = function () {
    return <h1>This is third Component</h1>
}

const MySecondComponent = () => (
    <h1>This is Second Component</h1>
)


// Lets Write JS in component using {}

const Interest = 10000000;




// this is Arrow function
const MyFirstComponent = () => (
    // This component Composition
    <div id="Heading">
        < MySecondComponent/>
        { Interest + Interest } 
        {/* // This is JS variable */}
        { heading } 
        {/* // this is JS object / React Element */}
        <h2>{ Interest }</h2>
        <h1>This is Functional Component</h1>
        < MySecondComponent/>
        < MyThirdComponent />
        <MyThirdComponent></MyThirdComponent>
        {MyThirdComponent()}
    </div>
)

root.render(<MyFirstComponent/>);