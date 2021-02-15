import React,{Component} from 'react';
import AddSpot from './AddSpot';
import SpotParams from './SpotParams';

class SoumettreSpot extends Component {
    constructor(props){
        super(props);
    }
    render()
    {
        return (
            <div className="flex">
                <AddSpot />
                <SpotParams />
            </div>
        )
    }
}

export default SoumettreSpot;