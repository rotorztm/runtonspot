import React from 'react';

const SpotReponse = ({onReponseChange,soumettreReponse,reponse}) => {
    return (
                <div>
                    <label for="comment" className="f6 b db mb2">Réponse </label>
                    <textarea onChange={onReponseChange} id="comment" name="comment" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc">{reponse.details}</textarea>
                    <a onClick= {soumettreReponse} className=" tc w-100 f6 link dim ph3 pv2 mb2 dib white bg-black" href="#0">Soumettre ma réponse</a>

                </div>
    )
}

export default SpotReponse;