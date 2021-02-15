import React,{Component} from 'react';
import Spot from './Spot';
import SpotReponse from './SpotReponse';

class RepondreSpot extends Component {
    constructor(props){
        super(props);
    }
    render()
    {
        return (
            <div className="flex">
                <Spot />
                <SpotReponse />
            </div>
        )
    }
}

export default RepondreSpot;