import React, { Component } from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];

class App extends Component {
  render() {
    return (
      <ul> {tarefas.map(tarefa => Task(tarefa))} </ul> 
    );
  }
}

// 3.2. Create a Complex JSX Element

// const JSX = (
//       <div>
//         <h1>my h1</h1>
//         <p>my p</p>
//         <ul>
//           <li>item1</li>
//           <li>item2</li>
//           <li>item3</li>
//         </ul>
//       </div>
//     );

// 3.3. Add Comments in JSX

//     const JSX = (
//       <div>
//         <h1>This is a block of JSX</h1>
//         <p>Here's a subtitle</p>
//         {/*comment*/}
//       </div>
//     );

// 3.4. Render HTML Elements to the DOM

//     const JSX = (
//       <div>
//         <h1>Hello World</h1>
//         <p>Lets render this to the DOM</p>
//       </div>
//     );
//     // change code below this line

//     ReactDOM.render(JSX, document.getElementById("challenge-node"));

// 3.5. Define an HTML Class in JSX

//     const JSX = (
//       <div className="myDiv">
//         <h1>Add a class to this div</h1>
//       </div>
//     );

// 3.6. Learn About Self-Closing JSX Tags

//       const JSX = (
//         <div>
//           <h2>Welcome to React!</h2> <br />
//           <p>Be sure to close all tags!</p>
//           <hr />
//         </div>
//       );

// 3.7. Create a Stateless Functional Component

//       const MyComponent = () => {
//         // change code below this line
//         return (
//           <div>
//             <p>Some string of text</p>
//           </div>
//         )
//         // change code above this line
//       };

// 3.8. Create a React Component

//       class MyComponent extends React.Component {
//         constructor(props) {
//           super(props);
//         }

//         render() {
//           // change code below this line
//           return(
//             <div>
//               <h1>Hello React!</h1>
//             </div>
//           );
//           // change code above this line
//         }
//       };

// 3.9. Create a Component with Composition

//       const ChildComponent = () => {
//         return (
//           <div>
//             <p>I am the child</p>
//           </div>
//         );
//       };

//       class ParentComponent extends React.Component {
//         constructor(props) {
//           super(props);
//         }

//         render() {
//           return (
//             <div>
//               <h1>I am the parent</h1>
//               <ChildComponent />
//             </div>
//           );
//         }
//       };

export default App;
