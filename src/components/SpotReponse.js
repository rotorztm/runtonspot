import React from 'react';

const SpotReponse = () => {
    return (
        <div>
            <form className='flex flex-column '>
                <fieldset className="flex flex-column">
                    <label>Détails supplémentaires</label>
                    <input type="text">

                    </input>
                </fieldset>
                <a class="f6 link dim ph3 pv2 mb2 dib white bg-black" href="#0">Valider ma réponse</a>
                <a class="f6 link dim ph3 pv2 mb2 dib white bg-black" href="#0">Spot suivant</a>
            </form>
        </div>
    )
}

export default SpotReponse;