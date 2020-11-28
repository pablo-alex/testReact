import React from 'react';

import Card from './Card';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            loading: false
        }
    }

    async loadData(){
        const response = await fetch('http://localhost:3000/data.json');
        const data = await response.json();
        this.setState({ loading: true, locations: data.locations});
    }

    componentDidMount(){
        this.loadData();
    }

    render(){
        return <div className="container">
            <h1 align="center" >Localizaciones</h1>
            <div className="row align-items-start">
            {this.state.locations.map((location, locationIndex)=>
                        <Card
                            location={location}
                            key={locationIndex}
                        />
            )}
            </div>
        </div>
    }
    
}
export default App;
