import React from 'react';

const SpotParams = ({spot}) => {
    console.log(spot);
    return (
        <div>
            <form className='flex flex-column '>
                <fieldset>
                    <label>
                        identifiant : {spot.id}
                    </label>
                    <input c type="text" name="name" />
                </fieldset>
                <fieldset>
                    <label>
                        Tournoi
                <input type="text" name="name" />
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        Tournoi
                <input type="text" name="name" />
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        Niveau courant
                <input type="text" name="name" />
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        Position
                <input type="text" name="name" />
                    </label>
                </fieldset>
            </form>
        </div>
    )
}

export default SpotParams;