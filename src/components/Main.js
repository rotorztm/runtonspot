import React, { Component } from 'react';
import './Main.css';

import SoumettreSpot from '../components/SoumettreSpot';
import RepondreSpot from '../components/RepondreSpot';

class Main extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        console.log('Mode dans main',this.props.mode)
        return (
            <div className='main'>
                {
                    this.props.mode === 'add' ?
                        <div className='flex'>
                            <SoumettreSpot />
                        </div> :
                        (
                            <div className='flex'>
                                <RepondreSpot />
                            </div>

                        )

                }

            </div>
        )

    }
}


export default Main;