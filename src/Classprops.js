import React from 'react';
class App extends React.Component {
render()
{
    return <div>
        <h1>Hello {this.props.name} from {this.props.place} Welcome to my channel!</h1>
    </div>;
    
}
}
export default App;

