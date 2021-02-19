import React, { useState, useEffect } from 'react';

function CreerCompte(props) {
    const {onRouteChanged} = props;
    const [email, setEmail] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const onPseudoChange = (event) => {
        setPseudo(event.target.value);
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const onSubmitSignIn = () => {
        fetch('http://localhost:4000/api/creation', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password,
                pseudo
            })
        })
            .then(response => response.json())
            .then(user => {
               onRouteChanged("signin");
            })
    }


    return (
        <article class="pa4 black-80">
         
                <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                    <legend class="ph0 mh0 fw6 clip">Créer un compte</legend>
                    <div class="mt3">
                        <label class="db fw4 lh-copy f6" for="email-address">Email</label>
                        <input onChange={onEmailChange} class="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address" id="email-address" />
                    </div>
                    <div class="mt3">
                        <label class="db fw4 lh-copy f6" for="pseudo">Pseudo</label>
                        <input onChange={onPseudoChange} class="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="email-address" id="email-address" />
                    </div>
                    <div class="mt3">
                        <label class="db fw4 lh-copy f6" for="password">Mot de passe</label>
                        <input onChange={onPasswordChange} class="b pa2 input-reset ba bg-transparent" type="password" name="password" id="password" />
                    </div>
                </fieldset>
                <div class="mt3"><input onClick={onSubmitSignIn} class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Créer le compte" /></div>
        </article>
    )
}


export default CreerCompte;