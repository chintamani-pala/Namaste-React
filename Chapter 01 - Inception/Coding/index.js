// Manipulate the HTML DOM using Javscript
// const heading=document.createElement("h1")
// heading.innerHTML="Hello World"
// const root=document.getElementById("root")
// root.appendChild(h1)

// Manipulate the HTML DOM using React

//render a single element
// const heading=React.createElement("h1",{},"Hello World");
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(h1)


// Create nested React Elements
//structure

//         <div id="container">
//             <h1 id="title" style="background:red" class="title">heading</h1>
//             <h1 id="title">heading1</h1>
//         </div->


const heading = React.createElement(
  "h1",
  {
    id: "title",
    style: {
      background: "red",
    },
    className: "title",
  },
  "heading"
);

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading1"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1]
);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(container);
