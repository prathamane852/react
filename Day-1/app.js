const heading= document.createElement("h1");
heading.innerHTML = "Hello World! from Javascript"

const withjs = document.getElementById("WithJS");
withjs.appendChild(heading);



// Hello world using React
// const headingReact = React.createElement("h1",{},"Hello World From React");
// {} = objects nothing there to give attributes to tag/element ex. giving attributes to h1. called Props and children is "Hello world from react".
const headingReact = React.createElement("h1",{id:"headings"},"Hello World From React");

console.log(headingReact); // its nothing but an object

const withReact = ReactDOM.createRoot(document.getElementById("WithReact"));

withReact.render(headingReact); 
// it will take object (react element) and create tag which browser understand 


//// Lets understand the Nested Structure

/**
 
div
    div
        h1
        h2
    div
div

 **/

const reactStructure = React.createElement("div",{id="Parent"},React.createElement("div",{id="Child"},[React.createElement("h1",{id="nesteddiv"},"This Heading in Nested Div"),React.createElement("h2",{},"this is h2 element.")]));



const reactdomroot = ReactDOM.createRoot(document.getElementById("Parent"));

reactdomroot.render(reactStructure);
