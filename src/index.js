import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

ReactDOM.render(
  <div>
    <CoordinatesButton />
    <DelayedButton />
  </div>,
  document.getElementById('root')
);

// export default class App extends React.Component{
//
//   constructor(){
//     super()
//
//     this.state = {
//       coordinates: ["x" , "y"]
//     }
//   }
//
//   onReceiveCoordinates = (coordinatesArray) => {
//       this.setState({coordinates: coordinatesArray})
//   }
//
//
//   render(){
//     return(
//       <div>
//         <CoordinatesButton coordinatesFunction= {this.onReceiveCoordinates}/>
//         <DelayedButton />
//       </div>
//     )
//   }
// }
