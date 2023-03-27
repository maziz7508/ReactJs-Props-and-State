import React from "react";
// import './App.css';
// import NewComp from "./Components/NewComp";
import ClassProps from './Classprops';

class App extends React.Component {
  // styles = {
  //   fontStyle: "bold",
  //   color:"teal"
  //    };

  render()
  {
    return (
      <div>
        {/* <h1 style ={this.styles}>Welcome</h1>
<NewComp/> */}
<ClassProps name='Learner1' place= 'placeX'/>
<ClassProps name='Learner2' place= 'placeY'/>
<ClassProps name='Learner3' place= 'placeZ'/>
      </div>
    );
  }
}

export default App;
