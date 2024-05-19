// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world"
// ); //{} is used to give attributes to element

// console.log(heading, "heading"); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root, "root");
// root.render(heading);

const heading1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);
console.log(heading1, "heading"); //object
const root1 = ReactDOM.createRoot(document.getElementById("root"));

console.log(root1, "root");
root1.render(heading1);
