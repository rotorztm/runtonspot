import React, { useState, useEffect } from 'react';

const Connexion = ({ onRouteChanged, onConnect }) => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');


    const onUserEmailChange = (event) => {
        setUserEmail(event.target.value);
    };
    const onUserPasswordChange = (event) => {
        setUserPassword(event.target.value);
    }

    const userConnect = () => {
        fetch('http://localhost:4000/api/connect',
            {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: userEmail,
                    password: userPassword
                })
            })
            .then(response => response.json())
            .then(data => {
                //Récupération de l'utilisateur
                onConnect(data)
            })
            .catch(console.error)
    };

    return (
        <main class="pa4 black-80">

            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                <legend class="f4 fw6 ph0 mh0">Connexion</legend>
                <div class="mt3">
                    <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                    <input onChange={onUserEmailChange} class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                </div>
                <div class="mv3">
                    <label class="db fw6 lh-copy f6" for="password">Mot de passe</label>
                    <input onChange={onUserPasswordChange} class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                </div>
                <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" />Se rappeler de moi</label>
            </fieldset>
            <div class="">
                <input onClick={userConnect} class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Connexion" />
            </div>
            <div class="lh-copy mt3">
                <a href="#0" onClick={() => {
                    onRouteChanged("signup")
                }}

                    class="f6 link dim black db">Créer un compte</a>
                <a href="#0" class="f6 link dim black db">Mot de passe oublié</a>
            </div>

        </main>
    )
}

export default Connexion;