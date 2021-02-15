import React from 'react';

const SpotParams = () => {
    return (
        <div>
            <form className='flex flex-column '>
                <fieldset>
                    <label>
                        Date
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
                <a class="f6 link dim ph3 pv2 mb2 dib white bg-black" href="#0">Soumettre ce spot</a>
            </form>
        </div>
    )
}

export default SpotParams;