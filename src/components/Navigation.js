import React from 'react';
import './Navigation.css';
const Navigation = ({ changeMode, isSignedIn, user }) => {
  const welcome = user ? `Bienvenue ${user.pseudo}` : "Bienvenue";
  return (

    //Si l'utilisateur est connecté
    //Déconnexion

    //Sinon 
    //Connexion créer compte



    <nav className=" mainnav flex justify-between bb b--white-10">
      <a className="link white-70 hover-white no-underline flex items-center pa3" href="">
        runTonspot
      </a>
      { isSignedIn ?
         <a className="link white-70 hover-white no-underline flex items-center pa3" href="">
         {welcome}
         </a>   
         : ""
      }
       
      
      <div className="flex-grow pa3 flex items-center">
        {
          isSignedIn ?
            <div>
              <a onClick={() => {
                changeMode()
              }} className="f6 link dib white dim mr3 mr4-ns" href="#0">Changer mode</a>
              <a className="f6 link dib white dim mr3 mr4-ns" href="#0">A propos</a>
              <a className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="#0">Déconnexion</a>

            </div> :
            <div>
              <a className="f6 link dib white dim mr3 mr4-ns" href="#0">Créer un compte</a>
              <a className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="#0">Connexion</a>

            </div>
        }


      </div>
    </nav>

  )

}

export default Navigation;