import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import axios from "axios";
import photo from "../img/nourriture.jpg";

import SvgRight from "../Svg/SvgRight"; 
import SvgLeft from "../Svg/SvgLeft";

import SvgVirtualNumber from "../Svg/SvgVirtualNumber";
import SvgPhoneNumber from "../Svg/SvgPhoneNumber";
import SvgValidate3 from "../Svg/SvgValidate3";

/* convertir une date au format local (on convertit en fonction des parametres de l'horaire 
du téléphone de l'utilisateur) */
// ici c'est dateParser qui est en chiffres uniquement (ex: 10/02/2000)
const dateParser = (date) => {
  let newDate = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return newDate;
};



// ChildApi activer le Badge de certification FAC
// ChildApi activer le Badge de certification FAC
function ChildApiActivateBadgeFAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    const id = api._id; //id
    if (id) { 
      localStorage.setItem("idAccount", id); 
      localStorage.setItem("idAccountAAC", id); 
    }

    const nameAccount = api.nameAccount; //nameAccount
    if (nameAccount) { 
      localStorage.setItem("nameAccount", nameAccount); 
      localStorage.setItem("nameAccountAAC", nameAccount); 
    }
  }

  return (
    <>
      <div onClick={Checked} className="post">
        <div className="block-one">
          <div className="a">
            <p>{api.badge} Badge</p>
            <p>{api.subscriptionDonazia} Abonnement annuel</p>
            <p>{api.freeDonazia} Gratuité</p>
            <button>{api.donazia} Donazia App</button>
            <p>{api.virtualNumber} virtualNumber</p>
            <p>{api._id} _id</p>
            <p>{api.idUser} idUser</p>
            <p>{dateParser(api.online)} (dernière connexion)</p>
          </div>
        </div>
        {/* block-one */}

        <div className="block-two">
          <img src={api.photoProfile} alt="" />
          <p>{api.nameAccount}</p>
        </div>
        {/* block-two */}

        <hr />
      </div>
      {/* post */}
    </>
  );
}
// ChildApi activer le Badge de certification FAC


// ChildApi retirer le Badge de certification FAC
// ChildApi retirer le Badge de certification FAC
function ChildApiRemoveBadgeFAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    const id = api._id; //id
    if (id) { 
      localStorage.setItem("idAccount", id); 
      localStorage.setItem("idAccountAAC", id); 
    }

    const nameAccount = api.nameAccount; //nameAccount
    if (nameAccount) { 
      localStorage.setItem("nameAccount", nameAccount); 
      localStorage.setItem("nameAccountAAC", nameAccount); 
    }
  }

  return (
    <>
      <div onClick={Checked} className="post">
        <div className="block-one">
          <div className="a">
            <p>{api.badge} Badge</p>
            <p>{api.subscriptionDonazia} Abonnement annuel</p>
            <p>{api.freeDonazia} Gratuité</p>
            <button>{api.donazia} Donazia App</button>
            <p>{api.virtualNumber} virtualNumber</p>
            <p>{api._id} _id</p>
            <p>{api.idUser} idUser</p>
            <p>{dateParser(api.online)} (dernière connexion)</p>
          </div>
        </div>
        {/* block-one */}

        <div className="block-two">
          <img src={api.photoProfile} alt="" />
          <p>{api.nameAccount}</p>
        </div>
        {/* block-two */}

        <hr />
      </div>
      {/* post */}
    </>
  );
}
// ChildApi retirer le Badge de certification FAC


// ChildApi activer donazia app
// ChildApi activer donazia app
function ChildApiActivateDonaziaDAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    const id = api._id; //id
    if (id) { 
      localStorage.setItem("idAccount", id); 
      localStorage.setItem("idAccountAAC", id); 
    }

    const nameAccount = api.nameAccount; //nameAccount
    if (nameAccount) { 
      localStorage.setItem("nameAccount", nameAccount); 
      localStorage.setItem("nameAccountAAC", nameAccount); 
    }
  }

  return (
    <>
      <div onClick={Checked} className="post">
        <div className="block-one">
          <div className="a">
            <p>{api.subscriptionDonazia} Abonnement annuel</p>
            <p>{api.freeDonazia} Gratuité</p>
            <button>{api.donazia} Donazia App</button>
            <p>{api.virtualNumber} virtualNumber</p>
            <p>{api.badge} badge</p>
            <p>{api._id} _id</p>
            <p>{api.idUser} idUser</p>
            <p>{dateParser(api.online)} (dernière connexion)</p>
          </div>
        </div>
        {/* block-one */}

        <div className="block-two">
          <img src={api.photoProfile} alt="" />
          <p>{api.nameAccount}</p>
        </div>
        {/* block-two */}

        <hr />
      </div>
      {/* post */}
    </>
  );
}
// ChildApi activer donazia app


// ChildApi desactiver donazia app
// ChildApi desactiver donazia app
function ChildApiDeactivateDonaziaDAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    const id = api._id; //id
    if (id) { 
      localStorage.setItem("idAccount", id); 
      localStorage.setItem("idAccountAAC", id); 
    }

    const nameAccount = api.nameAccount; //nameAccount
    if (nameAccount) { 
      localStorage.setItem("nameAccount", nameAccount); 
      localStorage.setItem("nameAccountAAC", nameAccount); 
    }
  }

  return (
    <>
      <div onClick={Checked} className="post">
        <div className="block-one">
          <div className="a">
            <p>{api.subscriptionDonazia} Abonnement annuel</p>
            <p>{api.freeDonazia} Gratuité</p>
            <button>{api.donazia} Donazia App</button>
            <p>{api.virtualNumber} virtualNumber</p>
            <p>{api.badge} badge</p>
            <p>{api._id} _id</p>
            <p>{api.idUser} idUser</p>
            <p>{dateParser(api.online)} (dernière connexion)</p>
          </div>
        </div>
        {/* block-one */}

        <div className="block-two">
          <img src={api.photoProfile} alt="" />
          <p>{api.nameAccount}</p>
        </div>
        {/* block-two */}

        <hr />
      </div>
      {/* post */}
    </>
  );
}
// ChildApi desactiver donazia app


// ChildApi activer la gratuité
// ChildApi activer la gratuité
function ChildApiActivateFreeDAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    const id = api._id; //id
    if (id) { 
      localStorage.setItem("idAccount", id); 
      localStorage.setItem("idAccountAAC", id); 
    }

    const nameAccount = api.nameAccount; //nameAccount
    if (nameAccount) { 
      localStorage.setItem("nameAccount", nameAccount); 
      localStorage.setItem("nameAccountAAC", nameAccount); 
    }
  }

  return (
    <>
      <div onClick={Checked} className="post">
        <div className="block-one">
          <div className="a">
            <p>{api.subscriptionDonazia} Abonnement annuel</p>
            <p>{api.freeDonazia} Gratuité</p>
            <button>{api.donazia} Donazia App</button>
            <p>{api.virtualNumber} virtualNumber</p>
            <p>{api.badge} badge</p>
            <p>{api._id} _id</p>
            <p>{api.idUser} idUser</p>
            <p>{dateParser(api.online)} (dernière connexion)</p>
          </div>
        </div>
        {/* block-one */}

        <div className="block-two">
          <img src={api.photoProfile} alt="" />
          <p>{api.nameAccount}</p>
        </div>
        {/* block-two */}

        <hr />
      </div>
      {/* post */}
    </>
  );
}
// ChildApi activer la gratuité


// ChildApi desactiver la gratuité
// ChildApi desactiver la gratuité
function ChildApiDeactivateFreeDAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    const id = api._id; //id
    if (id) { 
      localStorage.setItem("idAccount", id); 
      localStorage.setItem("idAccountAAC", id); 
    }

    const nameAccount = api.nameAccount; //nameAccount
    if (nameAccount) { 
      localStorage.setItem("nameAccount", nameAccount); 
      localStorage.setItem("nameAccountAAC", nameAccount); 
    }
  }

  return (
    <>
      <div onClick={Checked} className="post">
        <div className="block-one">
          <div className="a">
            <p>{api.subscriptionDonazia} Abonnement annuel</p>
            <p>{api.freeDonazia} Gratuité</p>
            <button>{api.donazia} Donazia App</button>
            <p>{api.virtualNumber} virtualNumber</p>
            <p>{api.badge} badge</p>
            <p>{api._id} _id</p>
            <p>{api.idUser} idUser</p>
            <p>{dateParser(api.online)} (dernière connexion)</p>
          </div>
        </div>
        {/* block-one */}

        <div className="block-two">
          <img src={api.photoProfile} alt="" />
          <p>{api.nameAccount}</p>
        </div>
        {/* block-two */}

        <hr />
      </div>
      {/* post */}
    </>
  );
}
// ChildApi desactiver la gratuité


// ChildApi activer l'abonnement annuel
// ChildApi activer l'abonnement annuel
function ChildApiActivateSubscriptionDAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    const id = api._id; //id
    if (id) { 
      localStorage.setItem("idAccount", id); 
      localStorage.setItem("idAccountAAC", id); 
    }

    const nameAccount = api.nameAccount; //nameAccount
    if (nameAccount) { 
      localStorage.setItem("nameAccount", nameAccount); 
      localStorage.setItem("nameAccountAAC", nameAccount); 
    }
  }

  return (
    <>
      <div onClick={Checked} className="post">
        <div className="block-one">
          <div className="a">
            <p>{api.subscriptionDonazia} Abonnement annuel</p>
            <p>{api.freeDonazia} Gratuité</p>
            <button>{api.donazia} Donazia App</button>
            <p>{api.virtualNumber} virtualNumber</p>
            <p>{api.badge} badge</p>
            <p>{api._id} _id</p>
            <p>{api.idUser} idUser</p>
            <p>{dateParser(api.online)} (dernière connexion)</p>
          </div>
        </div>
        {/* block-one */}

        <div className="block-two">
          <img src={api.photoProfile} alt="" />
          <p>{api.nameAccount}</p>
        </div>
        {/* block-two */}

        <hr />
      </div>
      {/* post */}
    </>
  );
}
// ChildApi activer l'abonnement annuel


// ChildApi desactiver l'abonnement annuel
// ChildApi desactiver l'abonnement annuel
function ChildApiDeactivateSubscriptionDAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    const id = api._id; //id
    if (id) { 
      localStorage.setItem("idAccount", id); 
      localStorage.setItem("idAccountAAC", id); 
    }

    const nameAccount = api.nameAccount; //nameAccount
    if (nameAccount) { 
      localStorage.setItem("nameAccount", nameAccount); 
      localStorage.setItem("nameAccountAAC", nameAccount); 
    }
  }

  return (
    <>
      <div onClick={Checked} className="post">
        <div className="block-one">
          <div className="a">
            <p>{api.subscriptionDonazia} Abonnement annuel</p>
            <p>{api.freeDonazia} Gratuité</p>
            <button>{api.donazia} Donazia App</button>
            <p>{api.virtualNumber} virtualNumber</p>
            <p>{api.badge} badge</p>
            <p>{api._id} _id</p>
            <p>{api.idUser} idUser</p>
            <p>{dateParser(api.online)} (dernière connexion)</p>
          </div>
        </div>
        {/* block-one */}

        <div className="block-two">
          <img src={api.photoProfile} alt="" />
          <p>{api.nameAccount}</p>
        </div>
        {/* block-two */}

        <hr />
      </div>
      {/* post */}
    </>
  );
}
// ChildApi desactiver l'abonnement annuel


// mettre un utilisateur sous silencieux
// mettre un utilisateur sous silencieux
function ChildApiSilentUserAAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    const id = api._id; //id
    if (id) { 
      localStorage.setItem("idUser", id); 
      localStorage.setItem("idUserAAC", id); 
    }

    const nameUser = api.nameUser; //nameUser
    if (nameUser) { 
      localStorage.setItem("nameUser", nameUser); 
      localStorage.setItem("nameUserAAC", nameUser); 
    }
  }

  return (
    <>
      <div onClick={Checked} className="post">
        <div className="block-one">
          <div className="a">
            <button>{api.displayOther} displayOther</button>
            <p>{api.block} block</p>
            <p>{api.home} home</p>
            <p>{api.homeVideo} homeVideo</p>
            <p>{api.newMessage} newMessage</p>
            <p>{api.newNotification} newNotification</p>
            <p>{api.balanceAlraniPay} balanceAlraniPay</p>
            <p>{api._id} _id</p>
            <p>{api.virtualNumber} virtualNumber</p>
          </div>
        </div>
        {/* block-one */}

        <div className="block-two"> <p>{api.nameUser}</p> </div>
        {/* block-two */}

        <hr />
      </div>
      {/* post */}
    </>
  );
}


function ChildApiAccountAAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    const id = api._id; //id
    if (id) { 
      localStorage.setItem("idAccount", id); 
      localStorage.setItem("idAccountAAC", id); 
    }

    const nameAccount = api.nameAccount; //nameAccount
    if (nameAccount) { 
      localStorage.setItem("nameAccount", nameAccount); 
      localStorage.setItem("nameAccountAAC", nameAccount); 
    }
  }

  return (
    <>
      <div onClick={Checked} className="post">
        <div className="block-one">
          <div className="a">
            <button>{api.myAccount} myAccount</button>
            <p>{api.monetization} monetization</p>
            <p>{api.monetizationBalance} monetizationBalance</p>
            <p>{api.monetizationCommission} monetizationCommission</p>
            <p>{api.virtualNumber} virtualNumber</p>
            <p>{api.badge} badge</p>
            <p>{api._id} _id</p>
            <p>{api.idUser} idUser</p>
            <p>{dateParser(api.online)} (dernière connexion)</p>
          </div>
        </div>
        {/* block-one */}

        <div className="block-two">
          <img src={api.photoProfile} alt="" />
          <p>{api.nameAccount}</p>
        </div>
        {/* block-two */}

        <hr />
      </div>
      {/* post */}
    </>
  );
}


function ChildApiSilentPost({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);

    //on enregistre:
    const id = api._id; //id
    localStorage.setItem("idPost", id);
  }

  return (
    <>
      <div onClick={Checked} className="post">
        <p style={{ paddingLeft: "3px", paddingRight: "3px", paddingTop: "10px", paddingBottom: "1px" }}>{api.description}</p>

        <div className="block-one">
          <div className="a"> <p>{dateParser(api.createdAt)}</p> </div>
          <div className="b"> <img src={api.urlPhoto} alt="" /> </div>
        </div>
        {/* block-one */}

        <div className="block-two">
          <img src={api.photoOwner} alt="" />
          <p>{api.nameOwner}</p>
        </div>
        {/* block-two */}

        <hr />
      </div>
      {/* post */}
    </>
  );
}


function ChildApiCorrectPost({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);

    //on enregistre:
    const id = api._id; //id
    localStorage.setItem("idPost", id);
  }

  return (
    <>
      <div onClick={Checked} className="post">
        <div className="block-one">
          <div className="a">
            <button>{api.home} home</button>
            <p>{api.view} views</p>
            <p>{api.clic} clics</p>
            <p>{api.reaction} reactions</p>
            <p>{api.comment} comment</p>
            <p>{api.share} share</p>

            <p>{api.displayOther} displayOther</p>
            <p>{api.display} display</p>
            <p>{api.approved} approved</p>
            <p>{api.id} id</p>
            <p>{api._id} _id</p>
            <p>{api.visible} visible</p>
            <p>{api.ad} ad</p>
          </div>

          <div className="b"> <img src={api.urlPhoto} alt="" /> </div>
        </div>
        {/* block-one */}

        <div className="block-two">
          <img src={api.photoOwner} alt="" />
          <p>{api.nameOwner}</p>
        </div>
        {/* block-two */}

        <hr />
      </div>
      {/* post */}
    </>
  );
}


//ChildApi CorrectConversationAA
function ChildApiConversationAAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    const id = api._id; //id
    localStorage.setItem("idConversationAAC", id);

    const idOwner = api.idOwner; //idOwner
    if (idOwner) { localStorage.setItem("idOwnerAAC", idOwner); }
    
    const idOther = api.idOther; //idOther
    if (idOther) { localStorage.setItem("idOtherAAC", idOther); }

    const nameOwner = api.nameOwner; //nameOwner
    if (nameOwner) { localStorage.setItem("nameOwnerAAC", nameOwner); }

    const nameOther = api.nameOther; //nameOther
    if (nameOther) { localStorage.setItem("nameOtherAAC", nameOther); }
  }

  return (
    <>
    <div onClick={Checked} className="post">
        <div className="block-one">
          <p>{api.hide} hide</p>
          <p>{api.deleted} deleted</p>
          <p>{api.visible} visible</p>
          <p>id {api.id}</p>
          <p>_id: {api._id}</p>

          <p>{api.nameOwner} nameOwner</p>
          <p>{api.idOwner} idOwner</p>
          <p>{api.idUserOwner} idUserOwner</p>

          <p>{api.nameOther} nameOther</p>
          <p>{api.idOther} idOther</p>
          <p>{api.idUserOther} idUserOther</p>
          <p>{api.lastMessage} lastMessage</p>
        </div>
        {/* block-one */}

        <div className="block-two"> <img src={api.photoOwner} alt="" /> <p>{api.nameOwner}</p> </div>
        <div className="block-two"> <img src={api.photoOther} alt="" /> <p>{api.nameOther}</p> </div>
        
        <hr />
      </div>
      {/* post */}
    </>
  );
}

//ChildApi AddDisplayOtherToPost
function ChildApiAddDisplayOtherToPost({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);

    //on enregistre:
    const id = api._id; //id
    localStorage.setItem("idPost", id);
    localStorage.setItem("idPostAAC", id);
  }

  return (
    <>
      <div onClick={Checked} className="post">
        <div className="block-one">
          <div className="a">
            <pre>{api.description}</pre>
            <button>{api.displayOther} displayOther</button>
            <p>{api.home} home</p>
            <p>{api.best} best</p>
            <p>id {api.id}</p>
            <p>{api.hide} hide</p>
            <p>{api.deleted} deleted</p>
            <p>{api.display} display</p>
            <p>{api.approved} approved</p>
            <p>{api.visible} visible</p>
          </div>

          <div className="b"> <img src={api.urlPhoto} alt="" /> </div>
        </div>
        {/* block-one */}

        <div className="block-two">
          <img src={api.photoOwner} alt="" />
          <p>{api.nameOwner}</p>
        </div>
        {/* block-two */}

        <hr />
      </div>
      {/* post */}
    </>
  );
}



//ChildApiCorrectMonetization
function ChildApiCorrectMonetization({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);

    //on enregistre:
    const id = api._id; //id
    localStorage.setItem("idAccount", id);
  }

  return (
    <>
      <div onClick={Checked}>
        <button>{api.monetization} monetization</button>
        <p>{api.nameAccount} nameAccount</p>
        <hr />
      </div>
    </>
  );
}


// on affiche les videos a valider
function ChildApiValidateVideoVBC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    // on enregistre:

    const id = api._id; // idInfosValidate
    if (id) { localStorage.setItem("idVideoVBC", id); }

    const title = api.title; // title
    if (title) { localStorage.setItem("title", title); }

    const duration = api.duration; // duration
    if (duration) { localStorage.setItem("duration", duration); }

    const view = api.view; // view
    if (view) { localStorage.setItem("view", view); }

    const urlVideo = api.urlVideo; // urlVideo
    if (urlVideo) { localStorage.setItem("urlVideo", urlVideo); }

    const coverVideo = api.coverVideo; // coverVideo
    if (coverVideo) { localStorage.setItem("coverVideo", coverVideo); }

    const idOwner = api.idOwner; // idOwner
    if (idOwner) { localStorage.setItem("idOwner", idOwner); }

    const nameOwner = api.nameOwner; // nameOwner
    if (nameOwner) { localStorage.setItem("nameOwner", nameOwner); }

    const photoOwner = api.photoOwner; // photoOwner
    if (photoOwner) { localStorage.setItem("photoOwner", photoOwner); }

    const badgeOwner = api.badgeOwner; // badgeOwner
    if (badgeOwner) { localStorage.setItem("badgeOwner", badgeOwner); }
  }

  // Button - valider la video et ses infos
  async function GoToButtonValidateVideoAndInfos() {
    const buttonValidate = "1";
    localStorage.setItem("ButtonValidateVideoAndInfos", buttonValidate);
  }

  return (
    <>
      <div onClick={Checked} className="validateVideo">
        <div className="block-one"> <p>Vérification</p> </div>
        {/* block-one */}

        <div className="block-two">
          <p>{api.home} home</p>
          <p>{api.visible} visible</p>
          <p>{api.title}</p>
          <p>{api.duration}</p>
          <p>{api.view}</p>
          <video muted loop controls> <source src={api.urlVideo} type="video/mp4" /> </video>
          <img src={api.coverVideo} alt="" />
        </div>
        {/* block-two */}

        <div className="block-three">
          <p>{api.nameOwner}</p>
          <img src={api.photoOwner} alt="" />
          <p>{api.badgeOwner}</p>
        </div>
        {/* block-three */}

        <div className="block-four">
          <button onClick={GoToButtonValidateVideoAndInfos}>Valider la vidéo</button>
        </div>
        {/* block-four */}
      </div>
      {/* infosValidate */}
    </>)
  }

  
//on affiche la liste des numeros virtuels offerts - IAC
function EnfantApiNumeroVirtuelOffert({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    // on enregistre:
    // id numero virtuel
    const idNumero = api._id;
    localStorage.setItem(
      "https://alrani.com/idNumeroVirtuelOffertIAC",
      idNumero
    );

    // numero
    const numero = api.numeroVirtuel;
    localStorage.setItem("https://alrani.com/numeroVirtuelOffertIAC", numero);

    // nom
    const nomBeneficiaire = api.nomProprietaireNumeroVirtuel;
    localStorage.setItem(
      "https://alrani.com/nomBeneficiaireNumeroVirtuelOffertIAC",
      nomBeneficiaire
    );
    // pays
    const paysBeneficiaire = api.pays;
    localStorage.setItem(
      "https://alrani.com/paysBeneficiaireNumeroVirtuelOffertIAC",
      paysBeneficiaire
    );

    // nom Collaborateur
    const nomCollaborateur = api.nomCollaborateur;
    localStorage.setItem(
      "https://alrani.com/nomCollaborateurOffertNumeroVirtuelIAC",
      nomCollaborateur
    );

    // numero Offert
    const numeroOffert = api.numeroOffert;
    localStorage.setItem("https://alrani.com/numeroOffertIAC", numeroOffert);
  }

  return (
    <>
      <div onClick={Checked} className="numero">
        <button>
          <p>{api.numeroVirtuel}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            viewBox="0 0 32 32"
          >
            <path
              fill="#00cc00"
              fillRule="evenodd"
              d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-4.973 13.403a1 1 0 10-1.414 1.414l5.657 5.657c.18.18.412.277.648.291h.161a.996.996 0 00.648-.291l5.657-5.657a1 1 0 00-1.414-1.414l-4.972 4.971z"
            ></path>
          </svg>
        </button>
      </div>
      {/* numero */}
    </>
  );
}


/* on affiche les futurs points retraits, c'est ici qu'on va saisir l'adresse renommer et d'autres informations 
concernant le point retrait */
function ChildApiFuturWithdrawalPointIAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    //on enregistre:
    const id = api._id; // id
    if (id) { localStorage.setItem("id", id); }

    const idAccount = api.idAccount; // idAccount
    if (idAccount) { localStorage.setItem("idAccount", idAccount); }
  }

  return (
    <>
      <div onClick={Checked} className="futurPoint">
        <div className="block-one"> <p>Futur Point Retrait</p> </div>
        {/* block-one */}

        <div className="block-two">
          <div className="a"> <img src={api.photo} alt="" /> </div>
          {/* a */}

          <div className="b">
            <div className="aa"> <p>{api.name}</p> </div>
            <div className="bb"> <p>{api.quarter}</p> </div>
          </div>
          {/* b */}
        </div>
        {/* block-two */}

        <div className="block-three"> <hr /> </div>
        {/* block-three */}
      </div>
      {/* futurPoint */}
    </>
  );
}

// verify, toutes les demandes envoyer vont s'afficher ici - IAC
function ChildApiVerifyIAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    //on enregistre:
    const id = api._id; // id
    if (id) { localStorage.setItem("id", id); }
  }

  // Button - ajouter Nouveau Point Retrait et Envoyer dans Localisation
  async function NewWithdrawalPoint() {
    const newPoint = "1";
    localStorage.setItem("ButtonNewWithdrawalPoint", newPoint);
  }

  return (
    <>
      <div onClick={Checked} className="verify">
        <div className="block-one"> <p>Vérification</p> </div>
        {/* block-one */}

        <div className="block-two">
          <div className="a"> <p>{api.name}</p> </div>
          {/* a*/}

          <div className="b">
            <p>{api.address}</p>
            <p>{api.country}</p>
            <p>{api.city}</p>
            <p>{api.quarter}</p>
            <p>{api.zone}</p>
          </div>
          {/* b */}
        </div>
        {/* block-two */}

        <div className="block-three"> <img src={api.photo} alt="" /> </div>
        {/* block-three */}

        <div className="block-four"> <button onClick={NewWithdrawalPoint}>Ajouter comme Point Retrait et Envoyer dans Localisation</button> </div>
        {/* block-four */}
      </div>
      {/* verify */}
    </>
  );
}


/* on affiche les montants a offrir (et le collaborateur va choisir le montant 
  qu'il veut offrir) - IAC */
function EnfantApiMontantAoffrirIAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    //on enregistre:
    // l'id
    const idMontant = api._id;
    localStorage.setItem("https://alrani.com/idMontantAoffrirIAC", idMontant);

    // le montant
    const montant = api.montant;
    localStorage.setItem("https://alrani.com/montantAoffrirIAC", montant);

    // la valeur du Montant a offrir
    const valeurMontant = api.valeurMontant;
    localStorage.setItem(
      "https://alrani.com/valeurMontantAoffrirIAC",
      valeurMontant
    );
  }

  return (
    <>
      <div onClick={Checked} className="montant">
        <div className="a">
          <button>{api.montant}</button>
        </div>
        {/* a */}
      </div>
      {/* montant */}
    </>
  );
}

//on affiche la liste des zones - IAC
function EnfantApiListeDesZonesIAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    //on enregistre:
    //id
    const idZone = api._id;
    localStorage.setItem("idZone", idZone);

    //nom
    const nomZone = api.zone;
    localStorage.setItem("nameZone", nomZone);
  }

  // recapitulatif localisation
  // route pour aller vers la page qui contient le recapitulatif de la localisation - IAC
  function GoToPageRecapitulatifLocalisationIAC() {
    const recapitulatif = "1";
    localStorage.setItem("GoToPageRecapitulatifLocalisationIAC", recapitulatif);
    //
    const masquer = "0";
    localStorage.setItem("GoToPageHideZoneIAC", masquer);
  }

  // masquer une zone
  // route pour aller vers la page qui va permettre au collaborateur de masquer une zone - IAC
  function GoToPageMasquerZonesIAC() {
    const masquer = "1";
    localStorage.setItem("GoToPageHideZoneIAC", masquer);
    //
    const recapitulatif = "0";
    localStorage.setItem("GoToPageRecapitulatifLocalisationIAC", recapitulatif);
  }

  //on met cette petite verification pour dire qu'il affiche uniquement les zones non masquer
  const masquer = api.visible;
  const zoneNonMasquer = masquer === "1";

  return (
    <>
      {/* ce bout de code affiche la liste des zones - IAC */}
      {zoneNonMasquer && (
        <>
          <div onClick={Checked} className="liste">
            <button onClick={GoToPageRecapitulatifLocalisationIAC}>{api.zone}</button>
            <svg
              onClick={GoToPageMasquerZonesIAC}
              width="20px"
              cursor="pointer"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 30 30"
            >
              <g transform="translate(0 -289.063)">
                <path
                  fill="#ccc"
                  fillOpacity="1"
                  stroke="none"
                  strokeDasharray="none"
                  strokeMiterlimit="4"
                  strokeOpacity="1"
                  strokeWidth="2"
                  d="M22.824 296.239a11.986 11.986 0 00-1.542-1.287l-2.665 2.665 2.828 2.828 2.666-2.665a11.986 11.986 0 00-1.287-1.541zm-5.621 2.792L6.596 309.638l-.707 3.535 3.536-.707L20.03 301.86z"
                  opacity="0.93"
                ></path>
              </g>
            </svg>
          </div>
          {/* liste */}
        </>
      )}
      {/* liste des zones - IAC */}
    </>
  );
}

//on affiche la liste des quartiers - IAC
function EnfantApiListeDesQuartiersIAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    //on enregistre:
    //id
    const idQuartier = api._id;
    localStorage.setItem("idQuarter", idQuartier);

    //nom
    const nomQuartier = api.quarter;
    localStorage.setItem("nameQuarter", nomQuartier);
  }

  // liste des zones
  // route pour aller vers la page qui contient la liste des zones - IAC
  function GoToPageListeZonesIAC() {
    const liste = "1";
    localStorage.setItem("GoToPageListZonesIAC", liste);
    //
    const masquer = "0";
    localStorage.setItem("GoToPageHideQuarterIAC", masquer);
  }

  // masquer un quartier
  // route pour aller vers la page qui va permettre au collaborateur de masquer une zone - IAC
  function GoToPageMasquerQuartierIAC() {
    const masquer = "1";
    localStorage.setItem("GoToPageHideQuarterIAC", masquer);
    //
    const liste = "0";
    localStorage.setItem("GoToPageListZonesIAC", liste);
  }

  //on met cette petite verification pour dire qu'il affiche uniquement les quartiers non masquer
  const masquer = api.visible;
  const quartierNonMasquer = masquer === "1";

  return (
    <>
      {/* ce bout de code affiche la liste des quartiers - IAC */}
      {quartierNonMasquer && (
        <>
          <div onClick={Checked} className="liste">
            <button onClick={GoToPageListeZonesIAC}>{api.quarter}</button>
            <svg
              onClick={GoToPageMasquerQuartierIAC}
              width="20px"
              cursor="pointer"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 30 30"
            >
              <g transform="translate(0 -289.063)">
                <path
                  fill="#ccc"
                  fillOpacity="1"
                  stroke="none"
                  strokeDasharray="none"
                  strokeMiterlimit="4"
                  strokeOpacity="1"
                  strokeWidth="2"
                  d="M22.824 296.239a11.986 11.986 0 00-1.542-1.287l-2.665 2.665 2.828 2.828 2.666-2.665a11.986 11.986 0 00-1.287-1.541zm-5.621 2.792L6.596 309.638l-.707 3.535 3.536-.707L20.03 301.86z"
                  opacity="0.93"
                ></path>
              </g>
            </svg>
          </div>
          {/* liste */}
        </>
      )}
      {/* liste des quartiers - IAC */}
    </>
  );
}

//on affiche la liste des villes - IAC
function EnfantApiListeDesVillesIAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    //on enregistre:
    
    const idVille = api._id; //id
    localStorage.setItem("idCity", idVille);

    const nomVille = api.city; //nom
    localStorage.setItem("nameCity", nomVille);
  }

  // liste des quartiers
  // route pour aller vers la page qui contient la liste des quartiers - IAC
  function GoToPageListeQuartiersIAC() {
    const liste = "1";
    localStorage.setItem("GoToPageListQuartersIAC", liste);
    //
    const masquer = "0";
    localStorage.setItem("GoToPageHideCityIAC", masquer);
  }

  // masquer une ville
  // route pour aller vers la page qui va permettre au collaborateur de masquer une ville - IAC
  function GoToPageMasquerVilleIAC() {
    const masquer = "1";
    localStorage.setItem("GoToPageHideCityIAC", masquer);
    //
    const liste = "0";
    localStorage.setItem("GoToPageListQuartersIAC", liste);
  }

  //on met cette petite verification pour dire qu'il affiche uniquement les villes non masquer
  const masquer = api.visible;
  const villeNonMasquer = masquer === "1";

  return (
    <>
      {/* ce bout de code affiche la liste des villes - IAC */}
      {villeNonMasquer && (
        <>
          <div onClick={Checked} className="liste">
            <button onClick={GoToPageListeQuartiersIAC}>{api.city}</button>
            <svg
              onClick={GoToPageMasquerVilleIAC}
              width="20px"
              cursor="pointer"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 30 30"
            >
              <g transform="translate(0 -289.063)">
                <path
                  fill="#ccc"
                  fillOpacity="1"
                  stroke="none"
                  strokeDasharray="none"
                  strokeMiterlimit="4"
                  strokeOpacity="1"
                  strokeWidth="2"
                  d="M22.824 296.239a11.986 11.986 0 00-1.542-1.287l-2.665 2.665 2.828 2.828 2.666-2.665a11.986 11.986 0 00-1.287-1.541zm-5.621 2.792L6.596 309.638l-.707 3.535 3.536-.707L20.03 301.86z"
                  opacity="0.93"
                ></path>
              </g>
            </svg>
          </div>
          {/* liste */}
        </>
      )}
      {/* liste des villes - IAC */}
    </>
  );
}

//on affiche la liste des pays - IAC
function EnfantApiListeDesPaysIAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    //on enregistre:
    //id du pays
    const idPays = api._id;
    localStorage.setItem("idCountry", idPays);

    //nom du pays
    const nomPays = api.country;
    localStorage.setItem("nameCountry", nomPays);
  }

  // liste des villes
  //pour aller vers la page qui contient la liste des villes - IAC
  function GoToPageListeVillesIAC() {
    const liste = "1";
    localStorage.setItem("GoToPageListCitiesIAC", liste);
    //
    const masquer = "0";
    localStorage.setItem("GoToPageHideCountryIAC", masquer);
  }

  // masquer un pays
  //pour aller vers la page qui va permettre au collaborateur de masquer un pays - IAC
  function GoToPageMasquerPaysIAC() {
    const masquer = "1";
    localStorage.setItem("GoToPageHideCountryIAC", masquer);
    //
    const liste = "0";
    localStorage.setItem("GoToPageListCitiesIAC", liste);
  }

  //on met cette petite verification pour dire qu'il affiche uniquement les pays non masquer
  const masquer = api.visible;
  const paysNonMasquer = masquer === "1";

  return (
    <>
      {/* ce bout de code affiche la liste des pays - IAC */}
      {paysNonMasquer && (
        <>
          <div onClick={Checked} className="liste">
            <button onClick={GoToPageListeVillesIAC}>{api.country}</button>
            <svg
              onClick={GoToPageMasquerPaysIAC}
              width="20px"
              cursor="pointer"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 30 30"
            >
              <g transform="translate(0 -289.063)">
                <path
                  fill="#ccc"
                  fillOpacity="1"
                  stroke="none"
                  strokeDasharray="none"
                  strokeMiterlimit="4"
                  strokeOpacity="1"
                  strokeWidth="2"
                  d="M22.824 296.239a11.986 11.986 0 00-1.542-1.287l-2.665 2.665 2.828 2.828 2.666-2.665a11.986 11.986 0 00-1.287-1.541zm-5.621 2.792L6.596 309.638l-.707 3.535 3.536-.707L20.03 301.86z"
                  opacity="0.93"
                ></path>
              </g>
            </svg>
          </div>
          {/* liste */}
        </>
      )}
      {/* liste des pays - IAC */}
    </>
  );
}

//on affiche la liste des langues - IAC
function EnfantApiListeDesLanguesIAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    // on enregistre:
    
    const idLangue = api._id; // id
    if (idLangue) { localStorage.setItem("idLanguage", idLangue); }
    
    const nameLanguage = api.language; // nom
    if (nameLanguage) { localStorage.setItem("nameLanguage", nameLanguage);}

    const nameLanguageInEnglish = api.inEnglish; // inEnglish
    if (nameLanguageInEnglish) { localStorage.setItem("nameLanguageInEnglish", nameLanguageInEnglish);}
  }

  // liste des pays
  //pour aller vers la page qui contient la liste des pays - IAC
  function GoToPageListePaysIAC() {
    const liste = "1";
    localStorage.setItem("GoToPageListCountriesIAC", liste);
    //
    const masquer = "0";
    localStorage.setItem("GoToPageHideLanguageIAC", masquer);
  }

  // masquer langue
  //pour aller vers la page qui va permettre au collaborateur de masquer une langue - IAC
  function GoToPageMasquerLangueIAC() {
    const masquer = "1";
    localStorage.setItem("GoToPageHideLanguageIAC", masquer);
    //
    const liste = "0";
    localStorage.setItem("GoToPageListCountriesIAC", liste);
  }

  //on met cette petite verification pour dire qu'il affiche uniquement les langues visible
  const masquer = api.visible;
  const langueNonMasquer = masquer === "1";

  return (
    <>
      {/* ce bout de code affiche la liste des langues - IAC */}
      {langueNonMasquer && (
        <>
          <div onClick={Checked} className="liste">
            <button onClick={GoToPageListePaysIAC}>{api.language}</button>
            <svg
              onClick={GoToPageMasquerLangueIAC}
              width="20px"
              cursor="pointer"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 30 30"
            >
              <g transform="translate(0 -289.063)">
                <path
                  fill="#ccc"
                  fillOpacity="1"
                  stroke="none"
                  strokeDasharray="none"
                  strokeMiterlimit="4"
                  strokeOpacity="1"
                  strokeWidth="2"
                  d="M22.824 296.239a11.986 11.986 0 00-1.542-1.287l-2.665 2.665 2.828 2.828 2.666-2.665a11.986 11.986 0 00-1.287-1.541zm-5.621 2.792L6.596 309.638l-.707 3.535 3.536-.707L20.03 301.86z"
                  opacity="0.93"
                ></path>
              </g>
            </svg>
          </div>
          {/* liste */}
        </>
      )}
      {/* liste des langues - IAC */}
    </>
  );
}

//on affiche les donnees de la recherche dans l'enfant api - IAC
function EnfantApiRechercheIAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    // on enregistre l'id du compte dans le localStorage
    const idCompte = api._id;
    localStorage.setItem("idCompteIAC", idCompte);
  }

  return (
    <>
      <div className="api" onClick={Checked}>
        {/*<div className="block-un">
          <img src={photo} alt="" />
          <p>Sarah Amelie</p>
        </div>
         block-un */}
      </div>
      {/* api */}
    </>
  );
}

//on affiche les tout comptes izocash - IA
function EnfantApiToutLesComptesIAC({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);

    const idAccount = api._id; //idAccount
    if (idAccount) { localStorage.setItem("idAccount", idAccount); }

    const nameAccount = api.nameAccount; //nameAccount
    if (nameAccount) { localStorage.setItem("nameAccount", nameAccount); }

    const photoProfile = api.photoProfile; //photoProfile
    if (photoProfile) { localStorage.setItem("photoProfile", photoProfile); }

    const virtualNumber = api.virtualNumber; //virtualNumber
    if (virtualNumber) { localStorage.setItem("virtualNumber", virtualNumber); }
  }

  return (
    <>
      <div className="api" onClick={Checked}>
        <div className="block-un">
          <img src={api.photoProfile} alt="" />
          <p>{api.nameAccount}</p>
          <h6>Pourcentages des Commissions et Pourcentage du Stock Nécessaire (Pour Délivrer un Numéro virtuel)</h6>
          <p>Pourcentage Commission {api.deliverVirtualNumberCommission}%</p>
          <p>Pourcentage Stock Nécessaire {api.deliverVirtualNumberStock}%</p>

          <h6>Pourcentages des Commissions et Pourcentage du Stock Nécessaire (Pour Identifier un Numéro virtuel)</h6>
          <p>Pourcentage Commission {api.identificationCommission}%</p>
          <p>Pourcentage Stock Nécessaire {api.identificationStock}%</p>

          <h6>Pourcentages des Commissions et Pourcentage du Stock Nécessaire (Pour Faire un Versement National)</h6>
          <p>Pourcentage Commission {api.depositNationalCommission}%</p>
          <p>Pourcentage Stock Nécessaire {api.depositNationalStock}%</p>
        </div>
        {/* block-un */}
      </div>
    </>
  );
}

//on affiche tout les posts - AAC
function EnfantApiPosts({ api }) {
  const [checked, setChecked] = useState(false);
  function Checked() {
    setChecked(!checked);
    // on enregistre l'id du post dans le localStorage
    const idPost = api._id;
    localStorage.setItem("https://alrani.com/idPost", idPost);
    /* on enregistre l'idAuteur/idPage, cet id va nous permettre de savoir 
    le nom du proprietaire de la page lorsqu'on va filtrer avec l'apiAuteur */
    const idAuteur = api.idAuteur;
    localStorage.setItem("https://alrani.com/idPage", idAuteur);
  }

  return (
    <>
      {/* avec cette div, on met un peu d'espace en haut */}
      <div style={{ paddingTop: "50px" }}></div>

      <div onClick={Checked} className="post-page">
        {/* 1ere partie - postStyle 3 */}
        <div className="post">
          <div className="image">
            <p
              style={{
                paddingTop: "3px",
                paddingBottom: "5px",
                paddingLeft: "3px",
                color: "#000",
              }}
            >
              {api.descriptionPost}
            </p>

            <img src={api.urlImagePost} alt="" />

            {api.buttonActiver > 0 && (
              <>
                <div className="section-btn">
                  <p>Envoyer un message</p>
                </div>
                <p style={{ paddingBottom: "5px" }}></p>
              </>
            )}
            {/* button activer */}
          </div>
          {/* image */}
        </div>
        {/* post */}

        {/* 2e partie - postStyle 3 */}
        <div className="post">
          <div className="image">
            <div className="nbre-de-vue">
              {api.nbreDeVue > 1 ? (
                <>
                  <p>{api.nbreDeVue} personnes ont vues cette publication</p>
                </>
              ) : (
                <>
                  <p>{api.nbreDeVue} personne a vue cette publication</p>
                </>
              )}

              {api.roleAdmin === "2" && (
                <>
                  <p>Publier par {api.nomAdmin}</p>
                </>
              )}

              {api.roleAdmin === "3" && (
                <>
                  <p>Publier par {api.nomAdmin}</p>
                </>
              )}
            </div>
            {/* nbre-de-vue */}
          </div>
          {/* image */}
        </div>
        {/* post */}

        {/* si le post est approuver c'est vert sinon c'est rouge */}
        {/* si le post est approuver c'est vert sinon c'est rouge */}
        {api.postApprouver === "1" ? (
          <>
            <div className="post-approuver-vert">
              <button></button>
            </div>
          </>
        ) : (
          <>
            <div className="post-non-approuver-rouge">
              <button>.</button>
            </div>
          </>
        )}
        {/* si le post est approuver c'est vert sinon c'est rouge */}
      </div>
    </>
  );
}

export default function Control() {
  /*
  const apiNumeroVirtuelOffert = [
    {
      _id: "014",
      numeroVirtuel: "242_serfin",
      nomProprietaireNumeroVirtuel: "Serfin SA",
      pays: "Congo",
      idCollaborateur: "1100",
      nomCollaborateur: "Sarah Sanchez",
    },

    {
      _id: "015",
      numeroVirtuel: "242_maouene",
      nomProprietaireNumeroVirtuel: "Maouene",
      pays: "Congo",
      idCollaborateur: "1200",
      nomCollaborateur: "izocash Business",
    },

    {
      _id: "016",
      numeroVirtuel: "241_DGC",
      nomProprietaireNumeroVirtuel: "DGC Gabon",
      pays: "Gabon",
      idCollaborateur: "1300",
      nomCollaborateur: "Le P Brezianni",
    },

    {
      _id: "017",
      numeroVirtuel: "226_DGC",
      nomProprietaireNumeroVirtuel: "DGC Burkina",
      pays: "Burkina",
      idCollaborateur: "1300",
      nomCollaborateur: "Le P Brezianni",
    },
  ];
  */

  /*
  const apiAgenceIAC = [
    {
      _id: "0101",
      nomAgence: "Serfin SA",
      idAgence: "02236",
      compteAgenceValider: "1",
      pays: "Congo",
      ville: "Pointe-Noire",
      quartier: "Tchimbamba",
      zone: "Arrêt FLM, non loin de la pharnacie Médina",
      adresse: "106 Avenue de la frontiere, Tchimbamba",
    },

    {
      _id: "0202",
      nomAgence: "LCB Bank",
      idAgence: "41404",
      compteAgenceValider: "0",
      pays: "Congo",
      ville: "Pointe-Noire",
      quartier: "Centre-Ville",
      zone: "Grande Gare",
      adresse: "388 rue du tribunal, Centre-Ville",
    },

    {
      _id: "0303",
      nomAgence: "Maouene Express",
      idAgence: "02874",
      compteAgenceValider: "0",
      pays: "Congo",
      ville: "Pointe-Noire",
      quartier: "Fond Tié-Tié",
      zone: "Marché du Fond de Tié-Tié",
      adresse: "092 Arrondissement 3, non loin de la gare",
    },
  ];
  */

  const apiMontantAoffrirIAC = [
    {
      _id: "111IAC",
      montant: "100 000 FCFA",
      valeurMontant: "100000",
      idCompte: "55551",
      nomCompte: "Rinabel Group Control",
    },

    {
      _id: "222IAC",
      montant: "200 000 FCFA",
      valeurMontant: "200000",
      idCompte: "55552",
      nomCompte: "izocash control",
    },

    {
      _id: "222IAC",
      montant: "30 000 FCFA",
      valeurMontant: "30 000",
      idCompte: "55552",
      nomCompte: "izocash control",
    },
  ];

  /*
  const apiListeDesLanguesIACC = [
    {
      _id: "123",
      langue: "Francais",
    },

    {
      _id: "124",
      langue: "English",
    },
  ];*/

  const [opacity, setOpacity] = useState(false);
  const [erreur, setErreur] = useState(false);
  function CloseErreur() {
    setErreur(false);
  }

  // control Page
  // control Page
  //quand on arrive sur alrani.com/control, c'est cette page qui va s'afficher en premier
  /* si la personne a les fonctionnalités control au niveau de son compte izocash alors on va
  l'afficher le card pour entrer son mot de passe IA
  sinon on va l'afficher le card ou s'est écrit Erreur */
  const [controlPage, setControlPage] = useState(true);

  
  // application A controller
  // application A controller
  // on affiche la liste des applications a controller
  const [applicationAcontroller, setApplicationAcontroller] = useState(false);
  function ApplicationAcontroller() {
    setApplicationAcontroller(true);

    console.log(setControlPage);
  }

  // Alrani control Page - AAC
  // Alrani control Page - AAC
  // la page ci nous permet de controler l'application Alrani
  const [alraniControlPage, setAlraniControlPage] = useState(false);
  function AlraniControlPage() {
    setAlraniControlPage(true);
  }
  //fermer
  function CloseAlraniControlPage() {
    setAlraniControlPage(false);
  }


  // veil brillant control Page (gestion de l'application veil brillant) - VBC
  // veil brillant control Page (gestion de l'application veil brillant) - VBC
  const [veilBrillantControlPage, setVeilBrillantControlPage] = useState(false);
  function VeilBrillantControlPage() {
    setVeilBrillantControlPage(true);
  }
  function CloseVeilBrillantControlPage() { //fermer
    setVeilBrillantControlPage(false);
  }

  // requete pour obtenir toutes les videos
  const [apiVideoVBC, setApiVideoVBC] = useState([]);
  useEffect(() => {
    async function get() {
      await axios
      .get(`${process.env.REACT_APP_BACKEND}/api/postVB`)
      .then((res) => {
        setApiVideoVBC(res.data);
      });
    }
    get(); 
  }, []);

  //creer un id pour chaque video valider - VBC
  const numberVideoVBC = apiVideoVBC.filter((api) => api.urlVideo);
  const totalVideoVBC = numberVideoVBC.length;

  const createIdVideoVBC = totalVideoVBC + 1;
  if (createIdVideoVBC) { localStorage.setItem("createIdVideoVBC", createIdVideoVBC) }

              
  // Page Redirection (666 ChildApiValidateVideoVBC)
  async function PageRedirection666ChildApiValidateVideoVBC() {
    
    // Button - logique pour valider la video et les informations liées a la video - VBC
    const ButtonValidateVideoAndInfos = localStorage.getItem("ButtonValidateVideoAndInfos");
    if (ButtonValidateVideoAndInfos === "1") {

    //1ere requete
    //1ere requete
    // on valide la video (on le rend visible sur le fil d'actualité de Veil Brillant)
    async function premiereReq() {
      setOpacity(true);
      const home = "1";
      const visible = "1";
      const id = localStorage.getItem("idVideoVBC");
   
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/postVB/update/${id}`,
        data: {
          home,
          visible,
        },
      })
      .then((res) => {
        //console.log(res.data);
        //console.log("la video a ete valider et present sur le fil d'actualité de Veil Brillant");

      //2e requete
      //2e requete
      // on obtient de nouvelles donnees
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/postVB`)
        .then((res) => {
          setApiVideoVBC(res.data);
          setOpacity(false);
        })
        .catch((err) => {
          setOpacity(false);
        });
        }
        deuxiemeReq();
        // 2e requete
        })
        .catch((err) => {
          setOpacity(false);
        });
      }
      premiereReq();
      // 1ere requete
    } // if (ButtonValidateVideoAndInfos === "1") {
  }


  // izocash control Page - IAC
  // izocash control Page - IAC
  // la page ci nous permet de controler l'application izocash
  const [izocashControlPage, setIzocashControlPage] = useState(false);
  async function IzocashControlPage() {
    setIzocashControlPage(true);

    //logique pour obtenir les donnees depuis l'api - IAC
    /* on fait la requete ici pour que tout les donnees soit disponible dès l'entrer dans 
    l'application.
    l'avantage avec ca est que l'utilisateur ne sera plus obliger d'attendre que
    les donnees puissent d'abord arriver, car les donnees seront deja disponible. */
    //1ere requete
    //api - ListeDesLangues - IAC
    await axios
      .get(`${process.env.REACT_APP_BACKEND}/api/languageIA/`)
      .then((res) => {
        setApiListeDesLanguesIAC(res.data);

        //2e requete
        //2e requete
        //api - listeDesPays - IAC
        async function requete2() {
          await axios
            .get(`${process.env.REACT_APP_BACKEND}/api/countryIA/`)
            .then((res) => {
              setApiListeDesPaysIAC(res.data);

              //3e requete
              //3e requete
              //api - listeDesVilles - IAC
              async function requete3() {
                await axios
                  .get(
                    `${process.env.REACT_APP_BACKEND}/api/cityIA/`
                  )
                  .then((res) => {
                    setApiListeDesVillesIAC(res.data);

                    //4e requete
                    //4e requete
                    //api - listeDesQuartiers - IAC
                    async function requete4() {
                      await axios
                        .get(
                          `${process.env.REACT_APP_BACKEND}/api/quarterIA/`
                        )
                        .then((res) => {
                          setApiListeDesQuartiersIAC(res.data);

                          //5e requete
                          //5e requete
                          //api - listeDesZones - IAC
                          async function requete5() {
                            await axios
                              .get(
                                `${process.env.REACT_APP_BACKEND}/api/zoneIA/`
                              )
                              .then((res) => {
                                setApiListeDesZonesIAC(res.data);

                                //6e requete
                                //6e requete
                                //api - numeroVirtuel - IAC
                                async function requete6() {
                                  await axios
                                    .get(
                                      `${process.env.REACT_APP_BACKEND}/api/virtualNumberIA/`
                                    )
                                    .then((res) => {
                                      setApiNumeroVirtuelIAC(res.data);
                                    });
                                }
                                requete6();
                                //6e requete
                              });
                          }
                          requete5();
                          //5e requete
                        });
                    }
                    requete4();
                    //4e requete
                  });
              }
              requete3();
              //3e requete
            });
        }
        requete2();
        //2e requete
      });
    //1ere requete
  }
  //fermer
  function CloseIzocashControlPage() {
    setIzocashControlPage(false);
  }

  //Menu - IAC
  //ca c'est le menu au niveau de l'application IAC
  const [menuIAC, setMenuIAC] = useState(false);
  function MenuIAC() {
    setMenuIAC(true);
  }
  //fermer
  function CloseMenuIAC() {
    setMenuIAC(false);
  }

  /* on injecte ca pour pouvoir faire apparaitre les fonctionnaliter qui sont en cours developpement, plus tard on va
  retirer ca car ce n'est pas la meilleure methode. la meilleure methode c'est quand lier a la bdd */
  function Dev() {
    const dev = "1";
    localStorage.setItem("dev", dev);
  }

  function IA() {
    const user = "1";
    const name = "Kilendo Test";
    localStorage.setItem("idPersonConnectedIA", user);
    localStorage.setItem("namePersonConnectedIA", name);
  }


  // corriger un numero virtuel - IAC
  const [fixVirtualNumberIAC, setFixVirtualNumberIAC] = useState(false);
  function FixVirtualNumberIAC() {
    setFixVirtualNumberIAC(true);
  }
  function CloseFixVirtualNumberIAC() { //fermer
    setFixVirtualNumberIAC(false);
  }
  
  const [writeOldVirtualNumber, setWriteOldVirtualNumber] = useState("");
  if (writeOldVirtualNumber) { localStorage.setItem("writeOldVirtualNumber", writeOldVirtualNumber) }
  
  const [writeNewVirtualNumber, setWriteNewVirtualNumber] = useState("");
  if (writeNewVirtualNumber) { localStorage.setItem("writeNewVirtualNumber", writeNewVirtualNumber) }
  
  const [writeNameOwnerVirtualNumber, setWriteNameOwnerVirtualNumber] = useState("");
  if (writeNameOwnerVirtualNumber) { localStorage.setItem("writeNameOwnerVirtualNumber", writeNameOwnerVirtualNumber) }

  // logique pour corriger un numero virtuel
  async function NewVirtualNumberIAC() {
    setOpacity(true);
    
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/virtualNumberIA/`)
    .then((res) => {
        const oldVirtualNumber = localStorage.getItem("writeOldVirtualNumber");

        // on filtre en fonction du numero virtuel a retirer
        const api = res.data;
        const filterVirtualNumber = api.filter((api) => api.virtualNumber === oldVirtualNumber);

        const idVirtualNumber = filterVirtualNumber.map((api) => api._id); //idVirtualNumber
        if (idVirtualNumber) { localStorage.setItem("idVirtualNumber", idVirtualNumber); }

        console.log("/api/virtualNumberIA");
        console.log(res.data);

        //2e requete
        //2e requete
        // on remplace le nouveau numero virtuel
        async function deuxiemeReq() {
          const idVirtualNumber = localStorage.getItem("idVirtualNumber");
          const newVirtualNumber = localStorage.getItem("writeNewVirtualNumber");
          const nameOwnerVirtualNumber = localStorage.getItem("writeNameOwnerVirtualNumber");

          await axios({
            method: "put",
            url: `${process.env.REACT_APP_BACKEND}/api/virtualNumberIA/update/${idVirtualNumber}`,
            data: {
              virtualNumber: newVirtualNumber,
              nameOwner: nameOwnerVirtualNumber,
            },
          })
          .then((res) => {
            console.log("/api/virtualNumberIA/update/idVirtualNumber");
            console.log(res.data);
            setOpacity(false);
          })
        }
        deuxiemeReq()
        //2e requete
      })
      .catch((err) => {
        setOpacity(false);
      })
      //1ere requete
  }


  // page pour ajouter myAccount - AAC
  const [addMyAccountPageAAC, setAddMyAccountPageAAC] = useState(false);
  async function AddMyAccountPageAAC() {
    setAddMyAccountPageAAC(true);
    
    await axios //obtenir de nouvelles donnees
    .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
    .then((res) => {
      setApiAccountAA(res.data);
    })
  }
  async function CloseAddMyAccountPageAAC() { //fermer
    setAddMyAccountPageAAC(false);
  }
  
  // confirmation - ajouter myAccount
  const [confirmationAddMyAccountAAC, setConfirmationAddMyAccountAAC] = useState(false);
  async function ConfirmationAddMyAccountAAC() {
    setConfirmationAddMyAccountAAC(true);
  }
  async function CloseConfirmationAddMyAccountAAC() { //fermer
    setConfirmationAddMyAccountAAC(false);
  }

  // logique pour ajouter myAccount à un compte Alrani
  async function AddMyAccountAAC() {
    //1ere requete
    //1ere requete
    // on ajoute myAccount
    async function premiereReq() {
      const idAccount = localStorage.getItem("idAccount");
      const myAccount = "1";
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/accountAA/update/${idAccount}`,
        data: {
          myAccount,
        },
      })
      .then((res) => {

      //2e requete
      //2e requete
      // on obtiens de nouvelles donnees
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
        .then((res) => {
          setApiAccountAA(res.data);
        })
        }
        deuxiemeReq();
        //2e requete
      })
    }
    premiereReq();
    //1ere requete
  }


  // page pour retirer myAccount - AAC
  const [removeMyAccountPageAAC, setRemoveMyAccountPageAAC] = useState(false);
  async function RemoveMyAccountPageAAC() {
    setRemoveMyAccountPageAAC(true);
    
    await axios //obtenir de nouvelles donnees
    .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
    .then((res) => {
      setApiAccountAA(res.data);
    })
  }
  async function CloseRemoveMyAccountPageAAC() { //fermer
    setRemoveMyAccountPageAAC(false);
  }
  
  // confirmation - retirer myAccount
  const [confirmationRemoveMyAccountAAC, setConfirmationRemoveMyAccountAAC] = useState(false);
  async function ConfirmationRemoveMyAccountAAC() {
    setConfirmationRemoveMyAccountAAC(true);
  }
  async function CloseConfirmationRemoveMyAccountAAC() { //fermer
    setConfirmationRemoveMyAccountAAC(false);
  }

  // logique pour retirer myAccount à un compte Alrani
  async function RemoveMyAccountAAC() {
    //1ere requete
    //1ere requete
    // on retire myAccount
    async function premiereReq() {
      const idAccount = localStorage.getItem("idAccount");
      const myAccount = "0";
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/accountAA/update/${idAccount}`,
        data: {
          myAccount,
        },
      })
      .then((res) => {

      //2e requete
      //2e requete
      // on obtiens de nouvelles donnees
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
        .then((res) => {
          setApiAccountAA(res.data);
        })
        }
        deuxiemeReq();
        //2e requete
      })
    }
    premiereReq();
    //1ere requete
  }


  // page pour valider les posts silencieux
  const [silentPostPageAAC, setSilentPostPageAAC] = useState(false);
  async function SilentPostPageAAC() {
    setSilentPostPageAAC(true);
    //obtenir de nouvelles donnees
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/postAA`)
    .then((res) => {
      setApiPostAA(res.data);
    })
  }
  async function CloseSilentPostPageAAC() { //fermer
    setSilentPostPageAAC(false);
  }

  // page pour confirmer le post silencieux à valider
  const [confirmationSilentPostPageAAC, setConfirmationSilentPostPageAAC] = useState(false);
  async function ConfirmationSilentPostPageAAC() {
    setConfirmationSilentPostPageAAC(true);
  }
  async function CloseConfirmationSilentPostPageAAC() { //fermer
    setConfirmationSilentPostPageAAC(false);
  }


  // logique pour valider un post silencieux
  async function ValidateSilentPostAAC() {
    //1ere requete
    //1ere requete
    async function premiereReq() {
      const idPost = localStorage.getItem("idPost");
      const displayOther = "1";
      const home = "1";
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/postAA/update/${idPost}`,
        data: {
          displayOther,
          home,
        },
      })
      .then((res) => {

      //2e requete
      //2e requete
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/postAA`)
        .then((res) => {
          setApiPostAA(res.data);
        })
        }
        deuxiemeReq();
        //2e requete
      })
    }
    premiereReq();
    //1ere requete
  }


  // page pour faire disparaitre un post (Général)
  const [hidePostPageGeneralAA, setHidePostPageGeneralAA] = useState(false);
  async function HidePostPageGeneralAA() {
    setHidePostPageGeneralAA(true);
    //obtenir de nouvelles donnees
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/postAA`)
    .then((res) => {
      setApiPostAA(res.data);
    })
  }
  async function CloseHidePostPageGeneralAA() { //fermer
    setHidePostPageGeneralAA(false);
  }

  // page pour confirmer le post a faire disparaitre (Général)
  const [confirmationHidePostPageGeneralAA, setConfirmationHidePostPageGeneralAA] = useState(false);
  async function ConfirmationHidePostPageGeneralAA() {
    setConfirmationHidePostPageGeneralAA(true);
  }
  async function CloseConfirmationHidePostPageGeneralAA() { //fermer
    setConfirmationHidePostPageGeneralAA(false);
  }


  // page pour faire disparaitre un post (fil d'actualité)
  const [hidePostPageOnhomeAA, setHidePostPageOnhomeAA] = useState(false);
  async function HidePostPageOnhomeAA() {
    setHidePostPageOnhomeAA(true);
    //obtenir de nouvelles donnees
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/postAA`)
    .then((res) => {
      setApiPostAA(res.data);
    })
  }
  async function CloseHidePostPageOnhomeAA() { //fermer
    setHidePostPageOnhomeAA(false);
  }

  // page pour confirmer le post a faire disparaitre (fil d'actualité)
  const [confirmationHidePostPageOnhomeAA, setConfirmationHidePostPageOnhomeAA] = useState(false);
  async function ConfirmationHidePostPageOnhomeAA() {
    setConfirmationHidePostPageOnhomeAA(true);
  }
  async function CloseConfirmationHidePostPageOnhomeAA() { //fermer
    setConfirmationHidePostPageOnhomeAA(false);
  }

  // logique pour faire disparaitre un post auprès des utilisateurs d'Alrani
  async function HidePostAAC() {
    //1ere requete
    //1ere requete
    async function premiereReq() {
      const idPost = localStorage.getItem("idPost");
      const visible = "0";
      const home = "0";
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/postAA/update/${idPost}`,
        data: {
          visible,
          home,
        },
      })
      .then((res) => {

      //2e requete
      //2e requete
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/postAA`)
        .then((res) => {
          setApiPostAA(res.data);
        })
        }
        deuxiemeReq();
        //2e requete
      })
    }
    premiereReq();
    //1ere requete
  }


  //reinitialiser la monetisation - AAC
  const [reinitializeMonetizationPageAAC, setReinitializeMonetizationPageAAC] = useState(false);
  async function ReinitializeMonetizationPageAAC() {
    setReinitializeMonetizationPageAAC(true);
    //obtenir de nouvelles donnees
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
    .then((res) => {
      setApiAccountAA(res.data);
    })
  }
  async function CloseReinitializeMonetizationPageAAC() {
    setReinitializeMonetizationPageAAC(false);
  }

  //confirmation (confirmer la page a reinitialiser la monetisation)
  const [confirmationReinitializeMonetizationPageAAC, setConfirmationReinitializeMonetizationPageAAC] = useState(false);
  async function ConfirmationReinitializeMonetizationPageAAC() {
    setConfirmationReinitializeMonetizationPageAAC(true);
  }
  async function CloseConfirmationReinitializeMonetizationPageAAC() {
    setConfirmationReinitializeMonetizationPageAAC(false);
  }

  // logique pour reinitialiser la monetisation d'une page Alrani
  async function ReinitializeMonetizationAAC() {
    //1ere requete
    //1ere requete
    // on reinitialise la monetisation
    async function premiereReq() {
      const id = localStorage.getItem("idAccountAAC");
      const monetization = "0";

      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/accountAA/update/${id}`,
        data: {
          monetization,
        },
      })
      .then((res) => {

      //2e requete
      //2e requete
      // on obtiens de nouvelle donnees
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
        .then((res) => {
          setApiAccountAA(res.data);
        })
        }
        deuxiemeReq();
        //2e requete
      })
    }
    premiereReq();
    //1ere requete
  }


  //faire disparaitre une conversation
  const [hideConversationPageAAC, setHideConversationPageAAC] = useState(false);
  async function HideConversationPageAAC() {
    setHideConversationPageAAC(true);
    //obtenir de nouvelles donnees
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/conversationAA`)
    .then((res) => {
      setApiConversationAA(res.data);
    })
  }
  async function CloseHideConversationPageAAC() {
    setHideConversationPageAAC(false);
  }

  //confirmation (confirmer la conversation à faire disparaitre)
  const [confirmationHideConversationPageAAC, setConfirmationHideConversationPageAAC] = useState(false);
  async function ConfirmationHideConversationPageAAC() {
    setConfirmationHideConversationPageAAC(true);
  }
  async function CloseConfirmationHideConversationPageAAC() {
    setConfirmationHideConversationPageAAC(false);
  }

  // logique pour faire disparaitre une conversation
  async function HideConversationAAC() {
    //1ere requete
    //1ere requete
    // on fait disparaitre la conversation
    async function premiereReq() {
      const id = localStorage.getItem("idConversationAAC");
      const visible = "0";

      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/conversationAA/update/${id}`,
        data: {
          visible,
        },
      })
      .then((res) => {

      //2e requete
      //2e requete
      // on obtiens de nouvelle donnees
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/conversationAA`)
        .then((res) => {
          setApiConversationAA(res.data);
        })
        }
        deuxiemeReq();
        //2e requete
      })
    }
    premiereReq();
    //1ere requete
  }


  //bloquer un utilisateur
  const [blockUserPageAAC, setBlockUserPageAAC] = useState(false);
  async function BlockUserPageAAC() {
    setBlockUserPageAAC(true);
    //obtenir de nouvelles donnees
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/userAA`)
    .then((res) => {
      setApiUserAA(res.data);
    })
  }
  async function CloseBlockUserPageAAC() {
    setBlockUserPageAAC(false);
  }

  //confirmation (confirmer l'utilisateur à bloquer)
  const [confirmationBlockUserPageAAC, setConfirmationBlockUserPageAAC] = useState(false);
  async function ConfirmationBlockUserPageAAC() {
    setConfirmationBlockUserPageAAC(true);
  }
  async function CloseConfirmationBlockUserPageAAC() {
    setConfirmationBlockUserPageAAC(false);
  }

  // logique pour bloquer un utilisateur
  async function BlockUserAAC() {
    //1ere requete
    //1ere requete
    // on bloque l'utilisateur
    async function premiereReq() {
      const id = localStorage.getItem("idUserAAC");
      const block = "1";

      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/userAA/update/${id}`,
        data: {
          block,
        },
      })
      .then((res) => {

      //2e requete
      //2e requete
      // on obtiens de nouvelle donnees
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/userAA`)
        .then((res) => {
          setApiUserAA(res.data);
        })
        }
        deuxiemeReq();
        //2e requete
      })
    }
    premiereReq();
    //1ere requete
  }


  //débloquer un utilisateur
  const [disblockUserPageAAC, setDisblockUserPageAAC] = useState(false);
  async function DisblockUserPageAAC() {
    setDisblockUserPageAAC(true);
    //obtenir de nouvelles donnees
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/userAA`)
    .then((res) => {
      setApiUserAA(res.data);
    })
  }
  async function CloseDisblockUserPageAAC() { 
    setDisblockUserPageAAC(false);
  }

  //confirmation (confirmer l'utilisateur à débloquer)
  const [confirmationDisblockUserPageAAC, setConfirmationDisblockUserPageAAC] = useState(false);
  async function ConfirmationDisblockUserPageAAC() {
    setConfirmationDisblockUserPageAAC(true);
  }
  async function CloseConfirmationDisblockUserPageAAC() {
    setConfirmationDisblockUserPageAAC(false);
  }

  // logique pour débloquer un utilisateur
  async function DisblockUserAAC() {
    //1ere requete
    //1ere requete
    // on débloque l'utilisateur
    async function premiereReq() {
      const id = localStorage.getItem("idUserAAC");
      const block = "0";

      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/userAA/update/${id}`,
        data: {
          block,
        },
      })
      .then((res) => {

      //2e requete
      //2e requete
      // on obtiens de nouvelle donnees
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/userAA`)
        .then((res) => {
          setApiUserAA(res.data);
        })
        }
        deuxiemeReq();
        //2e requete
      })
    }
    premiereReq();
    //1ere requete
  }


  //page pour changer le mot de passe - AAC
  const [changePasswordPageAAC, setChangePasswordPageAAC] = useState(false);
  async function ChangePasswordPageAAC() {
    setChangePasswordPageAAC(true);
    //obtenir de nouvelles donnees
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/userAA`)
    .then((res) => {
      setApiUserAA(res.data);
    })
  }
  async function CloseChangePasswordPageAAC() { //fermer
    setChangePasswordPageAAC(false);
  }

  // confirmation (page pour confirmer le mot de passe a changer)
  const [confirmationChangePasswordAAC, setConfirmationChangePasswordAAC] = useState(false);
  async function ConfirmationChangePasswordAAC() {
    setConfirmationChangePasswordAAC(true);
  }
  async function CloseConfirmationChangePasswordAAC() { //fermer
    setConfirmationChangePasswordAAC(false);   
  }


  // message d'erreur (page)
  const [errorAAC, setErrorAAC] = useState(false);
  async function CloseErrorAAC() {
    setErrorAAC(false);
  }
  
  const [isLoadingAAC, setIsLoadingAAC] = useState(false);
  // logique pour changer le mot de passe - AAC
  const [writePasswordAAC, setWritePasswordAAC] = useState(""); // saisir le nouveau mot de passe
  if (writePasswordAAC) { localStorage.setItem("writePasswordAAC", writePasswordAAC); } 
  
  async function ChangePasswordAAC() {
    setIsLoadingAAC(true);

    //1ere requete
    //1ere requete
    // on change le mot de passe de l'utilisateur
    async function premiereReq() {
      const id = localStorage.getItem("idUserAAC");
      const password = localStorage.getItem("writePasswordAAC");

      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/userAA/changePassword/${id}`,
        data: {
          password,
        },
      })
      .then((res) => {
        setIsLoadingAAC(false);
      })
      .catch((err) => {
        setIsLoadingAAC(false);
        setErrorAAC(true);
      })
    }
    premiereReq();
    //1ere requete
  }

  
  // publicité en pause (sur cette page on affiche les publicités en pause ou terminé)
  const [adOnPauseAAC, setAdOnPauseAAC] = useState(false);
  async function AdOnPauseAAC() {
    setAdOnPauseAAC(true);
    //obtenir de nouvelles donnees
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/postAA`)
    .then((res) => {
      setApiPostAA(res.data);
    })
  }
  async function CloseAdOnPauseAAC() { //fermer
    setAdOnPauseAAC(false);
  }

  // page pour confirmer la publicité à continuer
  const [confirmationAdOnPauseAAC, setConfirmationAdOnPauseAAC] = useState(false);
  async function ConfirmationAdOnPauseAAC() {
    setConfirmationAdOnPauseAAC(true);
  }
  async function CloseConfirmationAdOnPauseAAC() { //fermer
    setConfirmationAdOnPauseAAC(false);
  }


  // logique pour continuer une publicité qui était en pause
  async function ContinueAdAAC() {
    //1ere requete
    //1ere requete
    async function premiereReq() {
      const idPost = localStorage.getItem("idPost");
      const home = "1";
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/postAA/update/${idPost}`,
        data: {
          home,
        },
      })
      .then((res) => {

      //2e requete
      //2e requete
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/postAA`)
        .then((res) => {
          setApiPostAA(res.data);
        })
        }
        deuxiemeReq();
        //2e requete
      })
    }
    premiereReq();
    //1ere requete
  }


  // publicité en cours (sur cette page on affiche les publicités en cours)
  const [adProgressAAC, setAdProgressAAC] = useState(false);
  async function AdProgressAAC() {
    setAdProgressAAC(true);
    //obtenir de nouvelles donnees
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/postAA`)
    .then((res) => {
      setApiPostAA(res.data);
    })
  }
  async function CloseAdProgressAAC() { //fermer
    setAdProgressAAC(false);
  }

  // confirmation - page pour confirmer la publicité à stopper
  const [confirmationAdProgressAAC, setConfirmationAdProgressAAC] = useState(false);
  async function ConfirmationAdProgressAAC() {
    setConfirmationAdProgressAAC(true);
  }
  async function CloseConfirmationAdProgressAAC() { //fermer
    setConfirmationAdProgressAAC(false);
  }

  // logique pour mettre en pause une publicité
  async function StopAdAAC() {
    //1ere requete
    //1ere requete
    async function premiereReq() {
      const idPost = localStorage.getItem("idPost");
      const home = "0";
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/postAA/update/${idPost}`,
        data: {
          home,
        },
      })
      .then((res) => {

      //2e requete
      //2e requete
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/postAA`)
        .then((res) => {
          setApiPostAA(res.data);
        })
        }
        deuxiemeReq();
        //2e requete
      })
    }
    premiereReq();
    //1ere requete
  }


  // jolies posts (sur cette page, on remet les plus belles publications de la journée sur le fil d'actualité d'Alrani)
  const [bestPostPageAAC, setBestPostPageAAC] = useState(false);
  async function BestPostPageAAC() {
    setBestPostPageAAC(true);
    //obtenir de nouvelles donnees
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/postAA`)
    .then((res) => {
      setApiPostAA(res.data);
    })
  }
  async function CloseBestPostPageAAC() { //fermer
    setBestPostPageAAC(false);
  }

  //logique pour remettre les plus jolies posts de la journée sur le fil d'actualités d'alrani
  async function BestPostAAC() {
    //1ere requete
    //1ere requete
    async function premiereReq() {
      const idPost = localStorage.getItem("idPost");
      const home = "1";
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/postAA/update/${idPost}`,
        data: {
          home,
        },
      })
      .then((res) => {

      //2e requete
      //2e requete
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/postAA`)
        .then((res) => {
          setApiPostAA(res.data);
        })
        }
        deuxiemeReq();
        //2e requete
      })
    }
    premiereReq();
    //1ere requete
  }

  const [correctionGeneral, setCorrectionGeneral] = useState(false);
  async function CorrectionGeneral() {
    setCorrectionGeneral(true);
    //obtenir de nouvelles donnees
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/postAA`)
    .then((res) => {
      setApiPostAA(res.data);
    })
  }
  async function CloseCorrectionGeneral() { //fermer
    setCorrectionGeneral(false);
  }


  //refresh generale (pour actualiser les donnees au niveau de la page Correction Generale)
  async function RefreshGeneralAA() {

    //1ere requete
    //1ere requete
    async function premiereReq() {
      await axios
      .get(`${process.env.REACT_APP_BACKEND}/api/postAA`)
      .then((res) => {
        setApiPostAA(res.data);
      })
    }
    premiereReq();
    //1ere requete
  }
  

  // fil d'actualité d'Alrani
  const [homeAAC, setHomeAAC] = useState(false);
  async function HomeAAC() {
    setHomeAAC(true);
    //obtenir de nouvelles donnees
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/postAA`)
    .then((res) => {
      setApiPostAA(res.data);
    })
  }
  async function CloseHomeAAC() { //fermer
    setHomeAAC(false);
  }

  //logique pour retirer les anciens posts du fil d'actualités d'alrani
  async function RemovePostAAC() {
    //1ere requete
    //1ere requete
    async function premiereReq() {
      const idPost = localStorage.getItem("idPost");
      const home = "0";
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/postAA/update/${idPost}`,
        data: {
          home,
        },
      })
      .then((res) => {

      //2e requete
      //2e requete
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/postAA`)
        .then((res) => {
          setApiPostAA(res.data);
        })
        }
        deuxiemeReq();
        //2e requete
      })
    }
    premiereReq();
    //1ere requete
  }


  // requete pour obtenir toutes les conversations
  const [apiConversationAA, setApiConversationAA] = useState([]);
  useEffect(() => {
    async function get() {
      await axios
      .get(`${process.env.REACT_APP_BACKEND}/api/conversationAA`)
      .then((res) => {
        setApiConversationAA(res.data);
      });
    }
    get();
  }, []);


  // obtenir les conversations qui sont visibles
  const filterVisibleConversationAA = apiConversationAA.filter((api) => api.visible === "1");
  const visibleConversationAA = filterVisibleConversationAA.sort((a, b) => b.id - a.id);
  

  const nameAccount = localStorage.getItem("nameAccount"); 
  const nameAccountAAC = localStorage.getItem("nameAccount"); 
  const nameUserAAC = localStorage.getItem("nameUser"); 
  const nameOwnerAAC = localStorage.getItem("nameOwnerAAC"); 
  const nameOtherAAC = localStorage.getItem("nameOtherAAC"); 
  const idConversationAAC = localStorage.getItem("idConversationAAC"); 

  // requete pour obtenir tout les comptes Alrani
  const [apiAccountAA, setApiAccountAA] = useState([]);
  useEffect(() => {
    async function get() {
      await axios
      .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
      .then((res) => {
        setApiAccountAA(res.data);
      });
    }
    get();
  }, []);
  
  // on affiche tout les comptes 
  const filterAllAccountAA = apiAccountAA.filter((api) => api._id);
  const allAccountAA = filterAllAccountAA.sort((a, b) => b.id - a.id);

  // obtenir les comptes qui ont la variable myAccount=1
  const filterMyAccountAA = apiAccountAA.filter((api) => api.myAccount === "1");
  const myAccountAA = filterMyAccountAA.sort((a, b) => b.id - a.id);
  
  
  // logique pour corriger une conversation (ajouter hide 0, deleted 0 a chaque conversation)
  async function CorrectConversationAA() {
    //1ere requete
    //1ere requete
    // on filtre dans l'apiAccount puis on met idUserOwner et idUserOther
    async function premiereReq() {
      const id = localStorage.getItem("idConversationAAC");
      /*const idOwner = localStorage.getItem("idOwner");
      const idOther = localStorage.getItem("idOther");

      const filterOwner = apiAccountAA.filter((api) => api._id === idOwner);
      const getIdUserOwner = filterOwner.map((api) => api.idUser);
      if (getIdUserOwner) { localStorage.setItem("idUserOwner", getIdUserOwner); }

      const filterOther = apiAccountAA.filter((api) => api._id === idOther);
      const getIdUserOther = filterOther.map((api) => api.idUser);
      if (getIdUserOther) { localStorage.setItem("idUserOther", getIdUserOther); }

      const idUserOwner = localStorage.getItem("idUserOwner");
      const idUserOther = localStorage.getItem("idUserOther");*/

      const hide = "0";
      const deleted = "0";
     
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/conversationAA/update/${id}`,
        data: {
          hide,
          deleted,
        },
      })
      .then((res) => {

      //2e requete
      //2e requete
      // on obtiens de nouvelles donnees
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/conversationAA`)
        .then((res) => {
          setApiConversationAA(res.data);
        })
        }
        deuxiemeReq();
        //2e requete
      })
    }
    premiereReq();
    //1ere requete
  }


  // requete pour obtenir tout les utilisateurs d'Alrani
  const [apiUserAA, setApiUserAA] = useState([]);
  useEffect(() => {
    async function get() {
      await axios
      .get(`${process.env.REACT_APP_BACKEND}/api/userAA`)
      .then((res) => {
        setApiUserAA(res.data);
      });
    }
    get();
  }, []);
  
  // on affiche tout les utilisateurs 
  const allUserAA = apiUserAA.filter((api) => api.displayOther === "1");
  //const filterUserAA = apiUserAA.filter((api) => api._id);
  //const allUserAA = filterUserAA.sort((a, b) => b.id - a.id);

  // obtenir les utilisateurs qui sont sous Silencieux
  const allUserSilentAA = apiUserAA.filter((api) => api.displayOther === "0");
  //const filterUserSilentAA = apiUserAA.filter((api) => api.displayOther === "0");
  //const allUserSilentAA = filterUserSilentAA.sort((a, b) => b.id - a.id);
  

 // RefreshUserAA - obtenir de nouvelles donnees
 async function RefreshUserAA() {
  await axios
  .get(`${process.env.REACT_APP_BACKEND}/api/userAA`)
  .then((res) => {
    setApiUserAA(res.data);
  });
}

// RefreshConversationAA - obtenir de nouvelles donnees
async function RefreshConversationAA() {
  await axios
  .get(`${process.env.REACT_APP_BACKEND}/api/conversationAA`)
  .then((res) => {
    setApiConversationAA(res.data);
  });
}


// logique pour corriger un utilisateur (on ajoute les variables qui manquent)
async function CorrectUserAA() {
  //1ere requete
  //1ere requete
  // on corrige l'utilisateur 
  async function premiereReq() {
    const id = localStorage.getItem("idUserAAC");
    const block = "0";
    const home = "0";
    const homeVideo = "0";

    await axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND}/api/userAA/update/${id}`,
      data: {
        block,
        home,
        homeVideo,
      },
    })
    .then((res) => {

    //2e requete
    //2e requete
    // on obtiens de nouvelle donnees
    async function deuxiemeReq() {
      await axios
      .get(`${process.env.REACT_APP_BACKEND}/api/userAA`)
      .then((res) => {
        setApiUserAA(res.data);
      })
      }
      deuxiemeReq();
      //2e requete
    })
    }
    premiereReq();
    //1ere requete
  }


  //logique pour corriger monetization au niveau de chaque compte
  async function CorrectMonetization() {
    
    //1ere requete
    //1ere requete
    async function premiereReq() {
      const id = localStorage.getItem("idAccount");
      const monetization = "0";
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/accountAA/update/${id}`,
        data: {
          monetization,
        },
      })
      .then((res) => {

        //2e requete
        //2e requete
        async function deuxiemeReq() {
          await axios
          .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
          .then((res) => {
            setApiAccountAA(res.data);
          })
          }
          deuxiemeReq();
          //2e requete
        })
      }
      premiereReq();
      //1ere requete
  }
    

  
  // requete pour obtenir tout les posts
  const [apiPostAA, setApiPostAA] = useState([]);
  useEffect(() => {
    async function get() {
      await axios
      .get(`${process.env.REACT_APP_BACKEND}/api/postAA`)
      .then((res) => {
        setApiPostAA(res.data);
      });
    }
    get();
  }, []);

  // on affiche tout les posts  
  const filterAllPostAA = apiPostAA.filter((api) => api.visible === "1");
  const allPostAA = filterAllPostAA.sort((a, b) => b.id - a.id);

  // obtenir les posts qui sont actuellement visible sur le fil d'actualité d'Alrani
  const post666homeAAC = apiPostAA.filter((api) => api.home === "1" && api.displayOther === "1" && api.visible === "1");
  const filterPost666homeAAC = post666homeAAC.sort((a, b) => b.id - a.id);

  //on affiche tout les Posts Silencieux
  const filterAllSilentPostAA = apiPostAA.filter((api) => api.displayOther === "0" && api.visible === "1");
  const allSilentPostAA = filterAllSilentPostAA.sort((a, b) => b.id - a.id);

  // obtenir tout les meilleurs posts 
  const filterBestPostAA = apiPostAA.filter((api) => api.best === "1" && api.displayOther === "1" && api.visible === "1");
  const bestPostAA = filterBestPostAA.sort((a, b) => b.id - a.id); 


  // faire disparaitre (fil d'actualité)
  const filterPostOnhomeAA = apiPostAA.filter((api) => api.home === "1"); 
  const hidePostOnhomeAA = filterPostOnhomeAA.sort((a, b) => b.id - a.id);

  // faire disparaitre (Général)
  const filterPostGeneralAA = apiPostAA.filter((api) => api.visible === "1");
  const hidePostGeneralAA = filterPostGeneralAA.sort((a, b) => b.id - a.id);

  // afficher toutes les publicités qui sont sur le fil d'actualité
  const filterAdOnhomeAA = apiPostAA.filter((api) => api.home === "1" && api.ad === "1" && api.displayOther === "1" && api.visible === "1");
  const adOnhomeAA = filterAdOnhomeAA.sort((a, b) => b.id - a.id);

  // afficher toutes les publicités qui sont en pause
  const filterAdGeneralAA = apiPostAA.filter((api) => api._id && api.home === "0" && api.ad && api.displayOther === "1" && api.visible === "1");
  const adGeneralAA = filterAdGeneralAA.sort((a, b) => b.id - a.id);


// RefreshAccountAA - obtenir de nouvelles donnees
async function RefreshAccountAA() {
  await axios
  .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
  .then((res) => {
    setApiAccountAA(res.data);
  });
}

// RefreshPostAA - obtenir de nouvelles donnees
async function RefreshPostAA() {
  await axios
  .get(`${process.env.REACT_APP_BACKEND}/api/postAA`)
  .then((res) => {
    setApiPostAA(res.data);
  });
}
  
 
  //logique pour ajouter displayOther a chaque post
  async function AddDisplayOtherToPost() {
    
    //1ere requete
    //1ere requete
    async function premiereReq() {
      const idPost = localStorage.getItem("idPost");
      const displayOther = "1";
      const home = "0";
      const best = "1";
      const deleted = "0";
      const hide = "0";

      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/postAA/update/${idPost}`,
        data: {
          displayOther,
          home,
          best,
          deleted,
          hide,
        },
      })
      .then((res) => {

        //2e requete
        //2e requete
        async function deuxiemeReq() {
          await axios
          .get(`${process.env.REACT_APP_BACKEND}/api/postAA`)
          .then((res) => {
            setApiPostAA(res.data);
          })
          }
          deuxiemeReq();
          //2e requete
        })
      }
      premiereReq();
      //1ere requete
  }


  //numero Virtuel Offert (Page) - IAC
  // sur cette page on affiche la liste des numeros virtuels qu'on a offert
  const [numeroVirtuelOffertPageIAC, setNumeroVirtuelOffertPageIAC] = useState(false);
  function NumeroVirtuelOffertPageIAC() {
    setNumeroVirtuelOffertPageIAC(true);
  }
  //fermer
  function CloseNumeroVirtuelOffertPageIAC() {
    setNumeroVirtuelOffertPageIAC(false);
  }

  //logique pour afficher la liste des numeros virtuels en fonction des donnees obtenues dans l'api - IAC
  const [apiNumeroVirtuelIAC, setApiNumeroVirtuelIAC] = useState([]);

  // detail Numero Virtuel Offert - IAC
  // on affiche les details concernant le numero virtuel offert
  const [detailNumeroVirtuelOffertIAC, setDetailNumeroVirtuelOffertIAC] = useState(false);
  function DetailNumeroVirtuelOffertIAC() {
    setDetailNumeroVirtuelOffertIAC(true);
  }
  //fermer
  function CloseDetailNumeroVirtuelOffertIAC() {
    setDetailNumeroVirtuelOffertIAC(false);
  }


  //on recupere les infos - IAC
  const writeVirtualNumberIAC = localStorage.getItem("writeVirtualNumber"); //virtualNumber
  const writeNameOwnerIAC = localStorage.getItem("writeNameOwner"); //nameOwner


  //pays
  const paysBeneficiaireNumeroVirtuelOffertIAC = localStorage.getItem(
    "https://alrani.com/paysBeneficiaireNumeroVirtuelOffertIAC"
  );
  //nomCollaborateur (collaborateur qui a offert le numero virtuel)
  const nomCollaborateurOffertNumeroVirtuelIAC = localStorage.getItem(
    "https://alrani.com/nomCollaborateurOffertNumeroVirtuelIAC"
  );
  // statut Numero Virtuel (Acheter ou Offert)
  const getStatutNumeroVirtuelIAC = localStorage.getItem(
    "https://alrani.com/numeroOffertIAC"
  );
  //si c'est 1, cela veut dire que le numero est offert
  //si c'est 0, cela veut dire que le numero est Acheter
  const statutNumeroVirtuelIAC = getStatutNumeroVirtuelIAC === "1";

  //offrir Choice - IAC
  //quand on clique sur Offrir, ici c'est pour choisir
  const [offrirChoiceIAC, setOffrirChoiceIAC] = useState(false);
  function OffrirChoiceIAC() {
    setOffrirChoiceIAC(true);
  }
  //fermer
  function CloseOffrirChoiceIAC() {
    setOffrirChoiceIAC(false);
  }

  //Saisir Nom Beneficiaire Numero Virtuel Gratuit - IAC
  //Saisir Nom Beneficiaire Numero Virtuel Gratuit - IAC
  //ca c'est la page qui nous permet de Saisir le Nom du Beneficiaire du Numero Virtuel Gratuit
  const [
    saisirNomBeneficiaireNumeroVirtuelGratuitPageIAC,
    setSaisirNomBeneficiaireNumeroVirtuelGratuitPageIAC,
  ] = useState(false);
  function SaisirNomBeneficiaireNumeroVirtuelGratuitPageIAC() {
    setSaisirNomBeneficiaireNumeroVirtuelGratuitPageIAC(true);
  }
  //fermer
  function CloseSaisirNomBeneficiaireNumeroVirtuelGratuitPageIAC() {
    setSaisirNomBeneficiaireNumeroVirtuelGratuitPageIAC(false);
  }

  //ici on saisi le nom du beneficiaire du numero virtuel gratuit - IAC
  const [writeNameOwner, setWriteNameOwner] = useState("");

  //on enregistre le nom du beneficiaire du numero virtuel saisi
  function EnregistrerNomBeneficiaireNumeroVirtuelGratuitIAC() {
    localStorage.setItem("writeNameOwner", writeNameOwner);

    /* apres avoir enregistrer le nom, on ouvre la page qui va permettre au collaborateur de
    saisir le numero virtuel à offrir */
    setOffrirNumeroVirtuelPageIAC(true);

    /* la variable paysSelectionner c'est pour eviter que le collaborateur commette l'erreur 
    d'offrir le numero sans selectionner le pays ou encore c'est pour eviter qu'il fasse telle
    ou telle chose sans selectionner le pays */
    //donc ici on le mets a zero 0, et quand il va selectionner le pays ca va passer a un 1
    const paysSelectionnerIAC = "0";
    localStorage.setItem("countrySelected", paysSelectionnerIAC);
    /* au moment ou on mets paysSelectionnerIAC = 0, on retire aussi le nom du pays car 
    peut etre qu'il y'avait un ancien nom qui etait enregistrer dans le localStorage et ca va 
    creer confusion, car l'ancien nom va s'afficher alors que le collaborateur n'a pas encore
    selectionner le pays. Donc faut le retirer . */
    localStorage.removeItem("nameCountrySelected");
  }

  //offrir Numero Virtuel (Page) - IAC
  //offrir Numero Virtuel (Page) - IAC
  //ca c'est la page qui permet d'offrir un numero virtuel
  const [offrirNumeroVirtuelPageIAC, setOffrirNumeroVirtuelPageIAC] = useState(false);
  function CloseOffrirNumeroVirtuelPageIAC() {
    setOffrirNumeroVirtuelPageIAC(false);
  }


  //ici on saisi le numero virtuel a offrir - IAC
  const [writeVirtualNumber, setWriteVirtualNumber] = useState(""); // saisir le numero virtuel
  if (writeVirtualNumber) { localStorage.setItem("writeVirtualNumber", writeVirtualNumber); }

  const [writeCountryCode, setWriteCountryCode] = useState(""); //saisir le code du pays
  if (writeCountryCode) { localStorage.setItem("writeCountryCode", writeCountryCode); }

  const [writeIndicativeOne, setWriteIndicativeOne] = useState(""); //indicativeOne
  if (writeIndicativeOne) { localStorage.setItem("indicativeOne", writeIndicativeOne); }

  const [writeIndicativeTwo, setWriteIndicativeTwo] = useState(""); //indicativeTwo
  if (writeIndicativeTwo) { localStorage.setItem("indicativeTwo", writeIndicativeTwo); }

  const [writeIndicativeThree, setWriteIndicativeThree] = useState(""); //indicativeThree
  if (writeIndicativeThree) { localStorage.setItem("indicativeThree", writeIndicativeThree); }


  // License 2 (on enregistre le type de License a offrir) - IAC
  function FreeLicense2() {
    const license = "+";
    localStorage.setItem("freeLicense", license);

    const type = "2";
    localStorage.setItem("typeLicense", type);
    setConfirmFreeVirtualNumberIAC(true);
  }

  // License 3 (on enregistre le type de License a offrir) - IAC
  function FreeLicense3() {
    const license = "++";
    localStorage.setItem("freeLicense", license);

    const type = "3";
    localStorage.setItem("typeLicense", type);
    setConfirmFreeVirtualNumberIAC(true);
  }


  const freeLicenseIAC = localStorage.getItem("freeLicense"); //free License
  const typeLicenseIAC = localStorage.getItem("typeLicense"); //type de license
  const countryCodeIAC = localStorage.getItem("writeCountryCode"); //code pays
  
  // offrir numero viruel avec Licence - IAC 
  const [confirmFreeVirtualNumberIAC, setConfirmFreeVirtualNumberIAC] = useState(false);
  function CloseConfirmFreeVirtualNumberIAC() {
    setConfirmFreeVirtualNumberIAC(false);
  }

  //logique pour offrir un numero virtuel avec License - IAC 
  async function FreeVirtualNumberIAC() {
    setOpacity(true);
    const paymentMethod = "1";
    const identification = "1";
    const visible = "1";
    const connection = "1";
    const indicativeOne = localStorage.getItem("indicativeOne");
    const indicativeTwo = localStorage.getItem("indicativeTwo");
    const indicativeThree = localStorage.getItem("indicativeThree");

    //on enregistre le numero virtuel dans la bdd
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND}/api/virtualNumberIA/new`,
      data: {
        virtualNumber: writeVirtualNumberIAC,
        nameOwner: writeNameOwnerIAC,
        identification,
        countryCode: countryCodeIAC,
        paymentMethod,
        indicativeOne,
        indicativeTwo,
        indicativeThree,
        visible,
        connection,
        type: typeLicenseIAC,
      },
    })
    .then((res) => {
      setOpacity(false);
      setNumeroOffertSuccessIAC(true);
    })
    .catch((err) => {
      setOpacity(false);
      setErreurIAC(true);
    });
  }


  //offrir Numero Confirmation - IAC
  //offrir Numero Confirmation - IAC
  /* ca c'est la page de confirmation, pour que le collaborateur confirme s'il
  veut vraiment offrir un numero virtuel gratuit */
  const [offrirNumeroConfirmationIAC, setOffrirNumeroConfirmationIAC] = useState(false);
  function OffrirNumeroConfirmationIAC() {
    setOffrirNumeroConfirmationIAC(true);
  }
  function CloseOffrirNumeroConfirmationIAC() { //fermer
    setOffrirNumeroConfirmationIAC(false);
  }

  //on recupere les infos - IAC
  //nom
  //const nomBeneficiaireNumeroVirtuel = localStorage.getItem("nomBeneficiaireNumeroVirtuelSaisiIAC");
  //numero offert
  //const numeroOffert = "1";
  //idPaysIAC
  //const idPaysIAC = localStorage.getItem("idPaysIAC");
  //nomPaysIAC
  //const nomPaysIAC = localStorage.getItem("nomPaysIAC");

  //la logique ci enregistre le numero virtuel offert dans la bdd
  async function DeliverVirtualNumberIAC() {
    /*on met une petite securiter pour dire que si le collaborateur n'a pas selectionner le pays
    alors ca ne sert a rien de continuer */
    //const countrySelected = localStorage.getItem("countrySelected");

    //if (countrySelected === "1") {
      //dans ce cas le pays est selectionner

      setOpacity(true);
      const virtualNumber = localStorage.getItem("writeVirtualNumber");
      const nameOwner = localStorage.getItem("writeNameOwner");
      const paymentMethod = "1";
      const identification = "1";
      const connection = "1";
      const visible = "1";
      const type = "1";

      //1ere requete
      //on enregistre le numero virtuel dans la bdd
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_BACKEND}/api/virtualNumberIA/new`,
        data: {
          virtualNumber,
          nameOwner,
          countryCode: countryCodeIAC,
          paymentMethod,
          identification,
          connection,
          visible,
          type,
        },
      })
        .then((res) => {
          setOpacity(false);
          setNumeroOffertSuccessIAC(true);
          
          //2e requete
          //2e requete
          /*apres avoir enregistrer le numero, on fait une 2e requete pour obtenir les nouvelles 
          donnees */
          /*
          async function deuxiemeReq() {
            await axios
              .get(`${process.env.REACT_APP_BACKEND}/api/numeroVirtuel/`)
              .then((res) => {
                setApiNumeroVirtuelIAC(res.data);
                //on affiche ce message de succes si le numero a pu etre enregistrer dans la bdd
                setOpacity(false);
                setNumeroOffertSuccessIAC(true);
              });
          }
          deuxiemeReq(); */
          //2e requete
        })
        .catch((err) => {
          setOpacity(false);
          //on affiche ce message d'erreur si le numero n'a pas pu etre enregistrer dans la bdd
          setErreurIAC(true);
        });
      //1ere requete

    /*} else {
      //dans ce cas le pays n'est pas selectionner
      setErreurPaysNonSelectionnerIAC(true);
    }*/
    //le if de paysSelectionner se ferme ici

  }

  //Numero Offert Success - IAC
  //Numero Offert Success - IAC
  //ca c'est la page de success, lorsque le numero a ete offert, on va afficher cette page
  const [numeroOffertSuccessIAC, setNumeroOffertSuccessIAC] = useState(false);
  function CloseNumeroOffertSuccessIAC() {
    setNumeroOffertSuccessIAC(false);
  }

  //Erreur (PaysNonSelectionner) - IAC
  /* on affiche cette page si le collaborateur n'a pas selectionner de pays et qu'il
  veut par exemple offrir le numero virtuel sans sélectionner le pays */
  const [erreurPaysNonSelectionnerIAC, setErreurPaysNonSelectionnerIAC] = useState(false);
  function CloseErreurPaysNonSelectionnerIAC() {
    setErreurPaysNonSelectionnerIAC(false);
  }

  //on recupere les informations liées a la localisation
  const nomPaysSelectionnerIAC = localStorage.getItem(
    "https://alrani.com/nomPaysSelectionnerIAC"
  );

  //infos collaborateur
  //const idCollaboratorIAC = localStorage.getItem("https://alrani.com/idCollaboratorIAC");
  //const nameCollaboratorIAC = localStorage.getItem("https://alrani.com/nameCollaboratorIAC");


  /* ici ce sont les options, alors on affiche en fonction de ce qui est true, 
  quand on clique sur une option ca devient true, et les donnees de cette option s'affiche */
  // tout les comptes - IAC
  //quand on clique sur le body 1 , tout ce qui concerne le body 1 va s'afficher
  //on affiche les comptes de tout les utilisateurs
  const [toutLesComptesbody1IAC, setToutLesComptesbody1IAC] = useState(true);
  function ToutLesComptesbody1IAC() {
    setToutLesComptesbody1IAC(true);
    setVerify666izocashControlPage(false);
  }

  // Nouvelle Agence - IAC
  //quand on clique sur le body 2 , tout ce qui concerne le body 2 va s'afficher
  /*ici on affiche les nouvelles agences qui ont envoyer leur informations pour qu'on puisse 
  les enregistrées et leur offrir la licence de distribution izocash */
  
  // verify, toutes les demandes envoyer vont s'afficher ici - IAC
  const [verify666izocashControlPage, setVerify666izocashControlPage] = useState(false);
  function Verify666izocashControlPage() {
    setVerify666izocashControlPage(true);
    setToutLesComptesbody1IAC(false);
  }

  // cette requete c'est pour afficher toutes les notifications - IA
  /*const [apiNotificationIA, setApiNotificationIA] = useState([]);

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/notificationIA/`)
        .then((res) => {
          setApiNotificationIA(res.data);
        });
    }
    get(); 
  }, []);*/


  // erreur - IAC
  /* on affiche ce message d'erreur si une erreur est rencontrer par exemple lorsque 
  le collaborateur ajoute un pays, une langue,... et que ca ne fonctionne pas pour telle ou 
  telle raison alors ce message d'erreur s'affichera */
  const [erreurIAC, setErreurIAC] = useState(false);
  function CloseErreurIAC() {
    setErreurIAC(false);
  }

  //logique pour afficher la liste des langues depuis les donnees obtenues
  const [apiListeDesLanguesIAC, setApiListeDesLanguesIAC] = useState([]);

  // infos Utilisateur (Page) - IAC
  //on affiche les infos de chaque utilisateur
  const [infosUtilisateurPageIAC, setInfosUtilisateurPageIAC] = useState(false);
  async function InfosUtilisateurPageIAC() {
    setInfosUtilisateurPageIAC(true);
  }
  async function CloseInfosUtilisateurPageIAC() { //fermer
    setInfosUtilisateurPageIAC(false);
  }

  // requete pour obtenir tout les points retraits- IAC
  const [apiWithdrawalPointIAC, setApiWithdrawalPointIAC] = useState([]);
  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/withdrawalPointIA/`)
        .then((res) => {
          setApiWithdrawalPointIAC(res.data);
        });
    }
    get(); 
  }, []);

  // on veut afficher les informations du futur Point Retrait
  const idPointIAC = localStorage.getItem("id")
  const filterInfosIAC = apiWithdrawalPointIAC.filter((api) => api._id === idPointIAC);
  
  const nameIAC = filterInfosIAC.map((api) => api.name); //name
  const photoIAC = filterInfosIAC.map((api) => api.photo); //photo
  const countryIAC = filterInfosIAC.map((api) => api.country); //country
  const cityIAC = filterInfosIAC.map((api) => api.city); //city
  const quarterIAC = filterInfosIAC.map((api) => api.quarter); //quarter
  const zoneIAC = filterInfosIAC.map((api) => api.zone); //zone
  const addressIAC = filterInfosIAC.map((api) => api.address); //address
  const virtualNumberIAC = filterInfosIAC.map((api) => api.virtualNumber); //virtualNumber
  const phoneNumberIAC = filterInfosIAC.map((api) => api.phoneNumber); //phoneNumber
  const addressPointIAC = filterInfosIAC.map((api) => api.addressPoint); //addressPoint (addressPoint c'est l'adresse rennomer)
  
  //on veut dire que si le point retrait est visible alors au niveau du panneau de controle tu m'affiches un message pour me le faire savoir
  const visibleIAC = filterInfosIAC.filter((api) => api.visible); //visible=1 point retrait visible, visible=0 point retrait invisible
  const verifyVisibleIAC = visibleIAC.length > 0;


  // on affiche les infos du futur point retrait - IAC
  const [infosFuturWithdrawalPointIAC, setInfosFuturWithdrawalPointIAC] = useState(false);
  async function InfosFuturWithdrawalPointIAC() {
    setInfosFuturWithdrawalPointIAC(true);
  }
  async function CloseInfosFuturWithdrawalPointIAC() { //fermer
    setInfosFuturWithdrawalPointIAC(false);
  }


  //saisir
  const [writeAmount, setWriteAmount] = useState(""); //saisir le montant a recharger
  const [writeAddress, setWriteAddress] = useState(""); //saisir l'adresse a renommer

  if (writeAmount) { localStorage.setItem("writeAmount", writeAmount) }
  if (writeAddress) { localStorage.setItem("writeAddress", writeAddress) }


  //logique pour ajouter l'adresse renommer du Point Retrait - IAC
  async function SaveAddressPointIAC() {
    const address = localStorage.getItem("writeAddress");
    setOpacity(true);

    //1ere requete
    //1ere requete
    // mettre a jour l'adresse renommer
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND}/api/withdrawalPointIA/update/${idPointIAC}`,
      data: {
        addressPoint: address,
      },
    })
    .then((res) => {

      //2e requete
      //2e requete
      // obtenir de nouvelles donnees
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/withdrawalPointIA/`)
        .then((res) => {
          setApiWithdrawalPointIAC(res.data);
          setOpacity(false);
        })
        .catch((err) => {
          setOpacity(false);
          setErreurIAC(true);
        })
      }
      deuxiemeReq(); 
      //2e requete
    })
    .catch((err) => {
      setOpacity(false);
      setErreurIAC(true);
    })
    //1ere requete
  }


  //logique pour afficher un Point Retrait 
  async function DisplayWithdrawalPointIAC() {
    setOpacity(true);
    const display = "1";

    //1ere requete
    //1ere requete
    // afficher le Point Retrait au Public
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND}/api/withdrawalPointIA/update/${idPointIAC}`,
      data: {
        visible: display,
      },
    })
    .then((res) => {

      //2e requete
      //2e requete
      // obtenir de nouvelles donnees
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/withdrawalPointIA/`)
        .then((res) => {
          setApiWithdrawalPointIAC(res.data);
          setOpacity(false);
        })
        .catch((err) => {
          setOpacity(false);
          setErreurIAC(true);
        })
      }
      deuxiemeReq(); 
      //2e requete
    })
    .catch((err) => {
      setOpacity(false);
      setErreurIAC(true);
    })
    //1ere requete
  }


  //logique pour masquer un Point Retrait 
  async function HideWithdrawalPointIAC() {
    setOpacity(true);
    const hide = "0";

    //1ere requete
    //1ere requete
    // masquer le point retrait
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND}/api/withdrawalPointIA/update/${idPointIAC}`,
      data: {
        visible: hide,
      },
    })
    .then((res) => {

      //2e requete
      //2e requete
      // obtenir de nouvelles donnees
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/withdrawalPointIA/`)
        .then((res) => {
          setApiWithdrawalPointIAC(res.data);
          setOpacity(false);
        })
        .catch((err) => {
          setOpacity(false);
          setErreurIAC(true);
        })
      }
      deuxiemeReq(); 
      //2e requete
    })
    .catch((err) => {
      setOpacity(false);
      setErreurIAC(true);
    })
    //1ere requete
  }

  //logique pour Recharger le Stock National de celui qui a une license++ 
  async function RechargeStockNationalIAC() {
    setOpacity(true);
    
    //1ere requete
    //1ere requete
    //on recupere l'ancien stock pour faire le calcul
    async function premiereReq() {
      await axios
      .get(`${process.env.REACT_APP_BACKEND}/api/accountIA/`)
      .then((res) => {
        const idAccount = localStorage.getItem("idAccount"); //cet idAccount on l'avait recuperer lorsqu'on avait cliquer sur le Futur Point Retrait
        const amount = localStorage.getItem("writeAmount");
        // on filtre en fonction de l'idAccount - IA
        const api = res.data;
        const filterAccount = api.filter((api) => api._id === idAccount);

        console.log("/api/accountIA/");
        console.log(res.data);
        
        // ancien stock
        const stock = filterAccount.map((api) => api.stockNational);
        if (stock) { localStorage.setItem("oldStock", stock) }
        
        const oldStock = localStorage.getItem("oldStock");

        console.log(amount, "montant a recharger");
        console.log(oldStock, "ancien stock");

        // new stock
        const saveNewStock = parseInt(oldStock) + parseInt(amount);
        if (saveNewStock) { localStorage.setItem("newStock", saveNewStock) }

        console.log(saveNewStock, "nouveau stock");

        //2e requete
        //2e requete
      async function deuxiemeReq() {
        const newStock = localStorage.getItem("newStock");
        await axios({
          method: "put",
          url: `${process.env.REACT_APP_BACKEND}/api/accountIA/update/${idAccount}`,
          data: {
            stockNational: newStock,
          },
        })
        .then((res) => {
          console.log("/api/accountIA/update/idAccount");
          console.log(res.data);
          console.log("stock recharger !");
          
      // 3e requete
      // 3e requete
      //on l'envoie la notification pour l'informer qu'il a recu un stock gratuit
      async function troisiemeReq() {
        const notification = "11"; // stock national gratuit
        const idAccount = localStorage.getItem("idAccount");
        const oldStock = localStorage.getItem("oldStock");
        const newStock = localStorage.getItem("newStock");
        const amount = localStorage.getItem("writeAmount");

        await axios({
          method: "post",
          url: `${process.env.REACT_APP_BACKEND}/api/notificationIA/create`,
          data: {
            idOther: idAccount,
            oldStockOther: oldStock,
            newStockOther: newStock,
            amount,
            notification: notification,
          },
        }).then((res) => {
          setOpacity(false);
        })
        .catch((err) => {
          setOpacity(false);
          setErreurIAC(true);
        })
        }
        troisiemeReq();
        // 3e requete
      })
      .catch((err) => {
        setOpacity(false);
        setErreurIAC(true);
      })
      }
      deuxiemeReq();
      //2e requete
    })
    .catch((err) => {
      setOpacity(false);
      setErreurIAC(true);
    })
    }
    premiereReq();
    //1ere requete
  }

    //logique pour faire une recharge national payante - IAC
    async function PaidNationalRechargeIAC() {
      setOpacity(true);
      
      //1ere requete
      //1ere requete
      //on recupere l'ancien stock pour faire le calcul
      async function premiereReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/accountIA/`)
        .then((res) => {
          const idAccount = localStorage.getItem("idAccount"); //cet idAccount on l'avait recuperer lorsqu'on avait cliquer sur le Futur Point Retrait
          const amount = localStorage.getItem("writeAmount");
          // on filtre en fonction de l'idAccount - IA
          const api = res.data;
          const filterAccount = api.filter((api) => api._id === idAccount);
  
          console.log("/api/accountIA/");
          console.log(res.data);
          
          // ancien stock
          const stock = filterAccount.map((api) => api.stockNational);
          if (stock) { localStorage.setItem("oldStock", stock) }
          
          const oldStock = localStorage.getItem("oldStock");
  
          console.log(amount, "montant a recharger");
          console.log(oldStock, "ancien stock");
  
          // new stock
          const saveNewStock = parseInt(oldStock) + parseInt(amount);
          if (saveNewStock) { localStorage.setItem("newStock", saveNewStock) }
  
          console.log(saveNewStock, "nouveau stock");
  
          //2e requete
          //2e requete
        async function deuxiemeReq() {
          const newStock = localStorage.getItem("newStock");
          await axios({
            method: "put",
            url: `${process.env.REACT_APP_BACKEND}/api/accountIA/update/${idAccount}`,
            data: {
              stockNational: newStock,
            },
          })
          .then((res) => {
            console.log("/api/accountIA/update/idAccount");
            console.log(res.data);
            console.log("stock recharger !");
            
        // 3e requete
        // 3e requete
        //on l'envoie la notification pour l'informer qu'il a recu un stock gratuit
        async function troisiemeReq() {
          const notification = "15"; // stock national gratuit
          const idAccount = localStorage.getItem("idAccount");
          const oldStock = localStorage.getItem("oldStock");
          const newStock = localStorage.getItem("newStock");
          const amount = localStorage.getItem("writeAmount");
  
          await axios({
            method: "post",
            url: `${process.env.REACT_APP_BACKEND}/api/notificationIA/create`,
            data: {
              idOther: idAccount,
              oldStockOther: oldStock,
              newStockOther: newStock,
              amount,
              notification: notification,
            },
          }).then((res) => {
            console.log(res.data);
            console.log("stock rechargé !");
  
            setOpacity(false);
          })
          .catch((err) => {
            setOpacity(false);
            setErreurIAC(true);
          })
          }
          troisiemeReq();
          // 3e requete
        })
        .catch((err) => {
          setOpacity(false);
          setErreurIAC(true);
        })
        }
        deuxiemeReq();
        //2e requete
      })
      .catch((err) => {
        setOpacity(false);
        setErreurIAC(true);
      })
      }
      premiereReq();
      //1ere requete
    }


  // ajouter un outil 
  const [correct, setCorrect] = useState("");
  if (correct) { localStorage.setItem("correct", correct) }

  async function CorrectIAC() { // 
    setOpacity(true);
    const id = "657c93dea1cdf934ae6d14c1";
    const identificationDealsCode = "Lord by izocash";

    await axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND}/api/toolIA/update/${id}`,
      //url: `${process.env.REACT_APP_BACKEND}/api/toolIA/activate`,
      data: {
        identificationDealsCode
      },
    })
    .then((res) => {
      setOpacity(false);
      console.log(res);
      console.log(res.data);
    })
    .catch((err) => {
      setOpacity(false);
      setErreurIAC(true);
    })
  }


  // requete pour obtenir tout les comptes IA
  const [apiAccountIAC, setApiAccountIAC] = useState([]);
  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/accountIA/`)
        .then((res) => {
          setApiAccountIAC(res.data);
        })
      }
      get();
    }, [])


  // requete pour obtenir toutes les infos à valider - IA
  const [apiInfosValidateIAC, setApiInfosValidateIAC] = useState([]);
  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/infosValidateIA/`)
        .then((res) => {
          setApiInfosValidateIAC(res.data);
        })
      }
      get();
    }, [])
  

  // s'il a commis des erreurs de saisie lors de l'envoie des infos de son entreprise alors au niveau du panneau de controle on va l'aider en corrigeant - IA
  const [verificationInfosCompanyIAC, setVerificationInfosCompanyIAC] = useState(false);
  async function VerificationInfosCompanyIAC() {
    setVerificationInfosCompanyIAC(true);
  }
  async function CloseVerificationInfosCompanyIAC() { //fermer
    setVerificationInfosCompanyIAC(false);
  }

  const [sendInfosSuccessIAC, setSendInfosSuccessIAC] = useState(false);
  async function CloseSendInfosSuccessIAC() {
    setSendInfosSuccessIAC(false);
  }

  // saisir nom, adresse, zone,... de l'entreprise - IA
  const [nameCompanyIAC, setNameCompanyIAC] = useState("");
  const [domainCompanyIAC, setDomainCompanyIAC] = useState("");
  const [phoneNumberCompanyIAC, setPhoneNumberCompanyIAC] = useState("");
  const [addressCompanyIAC, setAddressCompanyIAC] = useState("");
  const [countryCompanyIAC, setCountryCompanyIAC] = useState("");
  const [cityCompanyIAC, setCityCompanyIAC] = useState("");
  const [quarterCompanyIAC, setQuarterCompanyIAC] = useState("");
  const [zoneCompanyIAC, setZoneCompanyIAC] = useState("");
  const [busStopCompanyIAC, setBusStopCompanyIAC] = useState("");

  // logique pour envoyer les informations de l'entreprise à vérifier - IA
  async function VerificationInfosIAC() {
    setOpacity(true);

    // 1ere requete
    // 1ere requete
    /* on verifie si la personne avait deja envoyer les infos de son entreprise, s'il avait deja envoyer alors on ne fait
    pas un 2e post, on fait directement un put pour modifier les infos qu'il avait envoyer */
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/infosValidateIA`)
    .then((res) => {
      const idAccount = localStorage.getItem("idAccount");

      const api = res.data;
      const filterInfos = api.filter((api) => api.idAccount === idAccount);
      const idInfos = filterInfos.map((api) => api._id);

      const verify = filterInfos.length > 0;
      if (verify) {
      // dans ce cas: infos deja envoyer, alors on fait un put pour modifier les infos

    // 2e requete 
    // 2e requete 
    // modifier les informations de l'entreprise
    async function deuxiemeReq() {
      const idAccount = localStorage.getItem("idAccount");
      const virtualNumber = localStorage.getItem("virtualNumber");
      const infosValidate = "0";
      const connection = "1";
      const visible = "1";
      const type = "1";

      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/infosValidateIA/update/${idInfos}`,
        data: {
          name: nameCompanyIAC,
          domain: domainCompanyIAC,
          phoneNumber: phoneNumberCompanyIAC,
          address: addressCompanyIAC,
          country: countryCompanyIAC,
          city: cityCompanyIAC,
          quarter: quarterCompanyIAC,
          zone: zoneCompanyIAC,
          busStop: busStopCompanyIAC,

          idAccount,
          virtualNumber,
          infosValidate,
          connection,
          visible,
          type,
        },
      }).then((res) => {
        
        //3e requete
        //3e requete
        // obtenir de nouvelles donnees
        async function troisiemeReq() {
          await axios
          .get(`${process.env.REACT_APP_BACKEND}/api/infosValidateIA/`)
          .then((res) => {
            setApiInfosValidateIAC(res.data);

            setSendInfosSuccessIAC(true);
            setOpacity(false);
          });
        }
        troisiemeReq(); 
        //3e requete
      }).catch((err) => {
        setOpacity(false);
        setErreurIAC(true);
      });
    }
    deuxiemeReq();
    //2e requete
    } else {
    // dans ce cas: infos non envoyer, alors on fait un post pour envoyer les infos

    // 2e requete 
    // 2e requete 
    // envoyer les informations de l'entreprise
    async function deuxiemeReq() {
      const idAccount = localStorage.getItem("idAccount");
      const virtualNumber = localStorage.getItem("virtualNumber");
      const infosValidate = "0";
      const photo = "0";
      const connection = "1";
      const visible = "1";
      const type = "1";

      await axios({
        method: "post",
        url: `${process.env.REACT_APP_BACKEND}/api/infosValidateIA/save`,
        data: {
          name: nameCompanyIAC,
          domain: domainCompanyIAC,
          phoneNumber: phoneNumberCompanyIAC,
          address: addressCompanyIAC,
          country: countryCompanyIAC,
          city: cityCompanyIAC,
          quarter: quarterCompanyIAC,
          zone: zoneCompanyIAC,
          busStop: busStopCompanyIAC,
          photo,

          idAccount,
          virtualNumber,
          infosValidate,
          connection,
          visible,
          type,
        },
      }).then((res) => {
          setSendInfosSuccessIAC(true);
          setOpacity(false);
          })
          .catch((err) => {
            setOpacity(false);
            setErreurIAC(true);
          });
        }
        deuxiemeReq();
        //2e requete
      } 
      //if (verify) {
    })
    .catch((err) => {
      setOpacity(false);
      setErreurIAC(true);
    });
    //1ere requete
  }

  //nameAccount
  const nameAccountIAC = localStorage.getItem("nameAccount"); 


  // confirmer l'ajout des Pourcentage de Commission et Pourcentage du Stock Nécessaire (Pour Délivrer un Numéro virtuel) - IAC
  const [confirmAddPercentageForDeliverVirtualNumberIAC, setConfirmAddPercentageForDeliverVirtualNumberIAC] = useState(false);
  async function ConfirmAddPercentageForDeliverVirtualNumberIAC() {
    setConfirmAddPercentageForDeliverVirtualNumberIAC(true);
  }
  async function CloseConfirmAddPercentageForDeliverVirtualNumberIAC() { //fermer
    setConfirmAddPercentageForDeliverVirtualNumberIAC(false);
  }

  // logique pour ajouter les Pourcentage de Commission et Pourcentage du Stock Nécessaire (Pour Délivrer un Numéro virtuel) - IAC
  async function AddPercentageForDeliverVirtualNumberIAC() {
    setOpacity(true);

     //1ere requete
     //1ere requete
     // ajout des pourcentages
     async function premiereReq() {
      const idAccount = localStorage.getItem("idAccount"); 
      const deliverVirtualNumberStock = "76"; // deliver virtual number
      const deliverVirtualNumberCommission = "24";
      
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/accountIA/update/${idAccount}`,
        data: {
          deliverVirtualNumberStock,
          deliverVirtualNumberCommission,
        },
      })
      .then((res) => {

        //2e requete
        //2e requete
        // obtenir les nouvelles donnees
        async function deuxiemeReq() {
          await axios
          .get(`${process.env.REACT_APP_BACKEND}/api/accountIA/`)
          .then((res) => {
            setApiAccountIAC(res.data);
            setOpacity(false);
          })
          .catch((err) => {
            setErreurIAC(true);
            setOpacity(false);
          })
        }
        deuxiemeReq();
        //2e requete
      })
      .catch((err) => {
        setErreurIAC(true);
        setOpacity(false);
      })
    }
    premiereReq();
    //1ere requete
  }


  // confirmer l'ajout des Pourcentage de Commission et Pourcentage du Stock Nécessaire (Pour Identifier un Numéro virtuel) - IAC
  const [confirmAddPercentageForIdentificationVirtualNumberIAC, setConfirmAddPercentageForIdentificationVirtualNumberIAC] = useState(false);
  async function ConfirmAddPercentageForIdentificationVirtualNumberIAC() {
    setConfirmAddPercentageForIdentificationVirtualNumberIAC(true);
  }
  async function CloseConfirmAddPercentageForIdentificationVirtualNumberIAC() { //fermer
    setConfirmAddPercentageForIdentificationVirtualNumberIAC(false);
  }

  // logique pour ajouter les Pourcentage de Commission et Pourcentage du Stock Nécessaire (Pour Identifier un Numéro virtuel) - IAC
  async function AddPercentageForIdentificationVirtualNumberIAC() {
    setOpacity(true);

     //1ere requete
     //1ere requete
     // ajout des pourcentages
     async function premiereReq() {
      const idAccount = localStorage.getItem("idAccount"); 
      const identificationStock = "80"; // identification virtual number
      const identificationCommission = "20";
      
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/accountIA/update/${idAccount}`,
        data: {
          identificationStock,
          identificationCommission,
        },
      })
      .then((res) => {

        //2e requete
        //2e requete
        // obtenir les nouvelles donnees
        async function deuxiemeReq() {
          await axios
          .get(`${process.env.REACT_APP_BACKEND}/api/accountIA/`)
          .then((res) => {
            setApiAccountIAC(res.data);
            setOpacity(false);
          })
          .catch((err) => {
            setErreurIAC(true);
            setOpacity(false);
          })
        }
        deuxiemeReq();
        //2e requete
      })
      .catch((err) => {
        setErreurIAC(true);
        setOpacity(false);
      })
    }
    premiereReq();
    //1ere requete
  }


  // confirmer l'ajout des Pourcentage de Commission et Pourcentage du Stock Nécessaire (Pour faire Versement National) - IAC
  const [confirmAddPercentageForDepositNationalIAC, setConfirmAddPercentageForDepositNationalIAC] = useState(false);
  async function ConfirmAddPercentageForDepositNationalIAC() {
    setConfirmAddPercentageForDepositNationalIAC(true);
  }
  async function CloseConfirmAddPercentageForDepositNationalIAC() { //fermer
    setConfirmAddPercentageForDepositNationalIAC(false);
  }

  // logique pour ajouter les Pourcentage de Commission et Pourcentage du Stock Nécessaire (Pour faire Versement National) - IAC
  async function AddPercentageForDepositNationalIAC() {
    setOpacity(true);

     //1ere requete
     //1ere requete
     // ajout des pourcentages
     async function premiereReq() {
      const idAccount = localStorage.getItem("idAccount"); 
      const depositNationalStock = "86"; // versement National
      const depositNationalCommission = "14";
      
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/accountIA/update/${idAccount}`,
        data: {
          depositNationalStock,
          depositNationalCommission,
        },
      })
      .then((res) => {

        //2e requete
        //2e requete
        // obtenir les nouvelles donnees
        async function deuxiemeReq() {
          await axios
          .get(`${process.env.REACT_APP_BACKEND}/api/accountIA/`)
          .then((res) => {
            setApiAccountIAC(res.data);
            setOpacity(false);
          })
          .catch((err) => {
            setErreurIAC(true);
            setOpacity(false);
          })
        }
        deuxiemeReq();
        //2e requete
      })
      .catch((err) => {
        setErreurIAC(true);
        setOpacity(false);
      })
    }
    premiereReq();
    //1ere requete
  }


  // Page Redirection (666 ChildApiVerifyIAC)
  async function PageRedirection666ChildApiVerifyIAC() {

    // Button - ajouter Nouveau Point Retrait et Envoyer dans Localisation
    const ButtonNewWithdrawalPoint = localStorage.getItem("ButtonNewWithdrawalPoint");
    if (ButtonNewWithdrawalPoint === "1") {

    //1ere requete
    //1ere requete
    // logique pour enregistrer un nouveau point retrait, et envoyer dans localisation pour enregistrer les infos de localisation - IAC
    async function premiereReq() {
      setOpacity(true);
      // etant donner qu'on l'ajoute comme Point Retrait, ca veut dire qu'on valide l'infos alors on fait un put pour mettre infosValidate=1
      const id = localStorage.getItem("id");
      const infosValidate = "1";
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/infosValidateIA/update/${id}`,
        data: {
          infosValidate,
        },
      })
      .then((res) => {

      //2e requete
      //2e requete
      // on recupere les infos sur son profil, c'est ce qu'on va ajouter au niveau du point retrait
      async function deuxiemeReq() {
        const idInfos = localStorage.getItem("id");
        await axios
          .get(`${process.env.REACT_APP_BACKEND}/api/infosValidateIA/`)
          .then((res) => {
            const api = res.data;
            const filterUser = api.filter((api) => api._id === idInfos);

            const idAccount = filterUser.map((api) => api.idAccount); // idAccount
            if (idAccount) { localStorage.setItem("idAccount", idAccount); }

            const name = filterUser.map((api) => api.name); // name
            if (name) { localStorage.setItem("name", name); }

            const virtualNumber = filterUser.map((api) => api.virtualNumber); // virtualNumber
            if (virtualNumber) { localStorage.setItem("virtualNumber", virtualNumber); }

            const phoneNumber = filterUser.map((api) => api.phoneNumber); // phoneNumber
            if (phoneNumber) { localStorage.setItem("phoneNumber", phoneNumber); }

            const domain = filterUser.map((api) => api.domain); // domain
            if (domain) { localStorage.setItem("domain", domain); }

            const photo = filterUser.map((api) => api.photo); // photo
            if (photo) { localStorage.setItem("photo", photo); }

            const country = filterUser.map((api) => api.country); // country
            if (country) { localStorage.setItem("country", country); }

            const city = filterUser.map((api) => api.city); // city
            if (city) { localStorage.setItem("city", city); }

            const quarter = filterUser.map((api) => api.quarter); // quarter
            if (quarter) { localStorage.setItem("quarter", quarter); }

            const zone = filterUser.map((api) => api.zone); // zone
            if (zone) { localStorage.setItem("zone", zone); }

            const busStop = filterUser.map((api) => api.busStop); // busStop
            if (busStop) { localStorage.setItem("busStop", busStop); }

            const address = filterUser.map((api) => api.address); // address
            if (address) { localStorage.setItem("address", address); }

        //3e requete
        //3e requete
        // on enregistre le point retrait - IA
        async function troisiemeReq() {
          const getIdAccount = localStorage.getItem("idAccount");
          const name = localStorage.getItem("name");
          const virtualNumber = localStorage.getItem("virtualNumber");
          const phoneNumber = localStorage.getItem("phoneNumber");
          const domain = localStorage.getItem("domain");
          const photo = localStorage.getItem("photo");
          const country = localStorage.getItem("country");
          const city = localStorage.getItem("city");
          const quarter = localStorage.getItem("quarter");
          const zone = localStorage.getItem("zone");
          const busStop = localStorage.getItem("busStop");
          const address = localStorage.getItem("address");
          const updateLocalization = "1";
          const visible = "0";
          const connection = "1";
          const type = "1";

          await axios({
            method: "post",
            url: `${process.env.REACT_APP_BACKEND}/api/withdrawalPointIA/new`,
            data: {
              idAccount: getIdAccount,
              name,
              virtualNumber,
              phoneNumber,
              domain,
              photo,
              country,
              city,
              quarter,
              zone,
              busStop,
              address,
              updateLocalization,
              visible,
              connection,
              type,
            },
          }).then((res) => {
            
        //4e requete
        //4e requete
        // obtenir les nouvelles donnees - Infos Validate
        async function quatriemeReq() {
          await axios
            .get(`${process.env.REACT_APP_BACKEND}/api/infosValidateIA/`)
            .then((res) => {
              setApiInfosValidateIAC(res.data);
           
        //5e requete
        //5e requete
        // obtenir les nouvelles donnees - Points Retraits
        async function cinquiemeReq() {
          await axios
            .get(`${process.env.REACT_APP_BACKEND}/api/withdrawalPointIA/`)
            .then((res) => {
              setApiWithdrawalPointIAC(res.data);
              setOpacity(false);
            });
          }
          cinquiemeReq();
          //5e requete
          })
        }
        quatriemeReq();
        //4e requete
          })
          .catch((err) => {
            setOpacity(false);
          });
        }
        troisiemeReq();
        //3e requete
      }).catch((err) => {
        setOpacity(false);
      })
    }
    deuxiemeReq(); 
    //2e requete
    }).catch((err) => {
      setOpacity(false);
    })
  }
  premiereReq();
  //1ere requete
 }//if (newPoint === "1") {

}
                

  // langue
  // langue
  // langue
  // listes des langues (page) - IAC
  //on affiche la liste des langues
  const [listeDesLanguesPageIAC, setListeDesLanguesPageIAC] = useState(false);
  async function ListeDesLanguesPageIAC() {
    setListeDesLanguesPageIAC(true);
  }
  //fermer
  function CloseListeDesLanguesPageIAC() {
    setListeDesLanguesPageIAC(false);
  }

  // ajouter une langue - IAC
  // la page ci permet au collaborateur d'ajouter une langue
  const [ajouterLangueIAC, setAjouterLangueIAC] = useState(false);
  function AjouterLangueIAC() {
    setAjouterLangueIAC(true);
  }
  //fermer
  function CloseAjouterLangueIAC() {
    setAjouterLangueIAC(false);
  }

  // ajout langue Success - IAC
  // si le collaborateur a pu ajouter une langue on affiche ce message de success
  const [ajoutLangueSuccessIAC, setAjoutLangueSuccessIAC] = useState(false);
  function CloseAjoutLangueSuccessIAC() {
    setAjoutLangueSuccessIAC(false);
    setAjouterLangueIAC(false);
  }

  // saisir la langue a ajouter - IAC
  const [writeLanguage, setWriteLanguage] = useState("");  
  const [inEnglish, setInEnglish] = useState("");
  if (inEnglish) { localStorage.setItem("inEnglish", inEnglish) }

  //la logique pour enregistrer la langue dans la bdd 
  async function SaveLanguageIAC() {
    setOpacity(true);
    const visible = "1";
    const connection = "1";
    const type = "1";

    // 1ere requete
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND}/api/languageIA/save`,
      data: {
        language: writeLanguage,
        inEnglish: inEnglish,
        visible,
        connection,
        type,
        //idCollaborateur: idCollaboratorIAC,
        //nomCollaborateur: nameCollaboratorIAC,
      },
    })
      .then((res) => {

        //2e requete
        //2e requete
        // requete pour obtenir de nouvelles donnees
        async function deuxiemeReq() {
          await axios
            .get(`${process.env.REACT_APP_BACKEND}/api/languageIA/`)
            .then((res) => {
              setApiListeDesLanguesIAC(res.data);
              //on termine en lui affichant un message de succes disant que ca a reussi
              setOpacity(false);
              setAjoutLangueSuccessIAC(true);
            });
        }
        deuxiemeReq();
        //2e requete
      })
      .catch((err) => {
        setOpacity(false);
        //on affiche ce message d'erreur si la langue n'a pas pu etre enregistrer dans la bdd
        setErreurIAC(true);
      });
      // 1ere requete
  }

  // Page Redirection (666 ListeDesLanguesIAC)
  // Page Redirection (666 ListeDesLanguesIAC)
  // au niveau de la liste des langues, la logique ci nous dira quel page ouvrir
  async function PageRedirection666ListeDesLanguesIAC() {
    // liste des pays (pour aller vers la page qui contient la liste des pays) - IAC
    const liste = localStorage.getItem("GoToPageListCountriesIAC");
    if (liste === "1") {
      setListeDesPaysPageIAC(true);
    }

    // masquer une langue (pour aller vers la page qui va permettre au collaborateur de masquer une langue) - IAC
    const masquer = localStorage.getItem("GoToPageHideLanguageIAC");
    if (masquer === "1") {
      setMasquerLanguePageIAC(true);
    }
  }

  // masquer langue (page) - IAC
  //ca c'est la page qui va permetre au collaborateur de confirmer la langue a masquer
  const [masquerLanguePageIAC, setMasquerLanguePageIAC] = useState(false);
  function CloseMasquerLanguePageIAC() {
    setMasquerLanguePageIAC(false);
  }

  // masquer langue Success - IAC
  //on affiche ca lorsque la langue a bien ete masquer
  const [masquerLangueSuccessIAC, setMasquerLangueSuccessIAC] = useState(false);
  function CloseMasquerLangueSuccessIAC() {
    setMasquerLanguePageIAC(false);
    setMasquerLangueSuccessIAC(false);
  }

  // on recupere les infos
  const idLanguageIAC = localStorage.getItem("idLanguage");
  const nameLanguageIAC = localStorage.getItem("nameLanguage");
  const nameLanguageInEnglishIAC = localStorage.getItem("nameLanguageInEnglish");

  // logique pour rendre une langue non visible - IAC
  async function MasquerLangueIAC() {
    setOpacity(true);
    const visible = "0";

    // 1ere requete
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND}/api/languageIA/update/${idLanguageIAC}`,
      data: {
        visible,
      },
    })
      .then((res) => {

        //2e requete
        //2e requete
        // obtenir de nouvelles donnees
        async function deuxiemeReq() {
          await axios
            .get(`${process.env.REACT_APP_BACKEND}/api/languageIA/`)
            .then((res) => {
              setApiListeDesLanguesIAC(res.data);
              //on termine en lui affichant un message de succes disant que ca a reussi
              setOpacity(false);
              setMasquerLangueSuccessIAC(true);
            });
        }
        deuxiemeReq();
        //2e requete
      })
      .catch((err) => {
        setOpacity(false);
        setErreurIAC(true);
      });
  }


  //pays
  //pays
  //pays
  // listes des Pays (page) - IAC
  // on affiche la liste des Pays
  const [listeDesPaysPageIAC, setListeDesPaysPageIAC] = useState(false);
  function CloseListeDesPaysPageIAC() {
    setListeDesPaysPageIAC(false);
  }

  // on recupere les infos
  const idCountryIAC = localStorage.getItem("idCountry");
  const nameCountryIAC = localStorage.getItem("nameCountry");

  // ajouter un pays - IAC
  // la page ci permet au collaborateur d'ajouter un pays
  const [ajouterPaysIAC, setAjouterPaysIAC] = useState(false);
  function AjouterPaysIAC() {
    setAjouterPaysIAC(true);
  }
  //fermer
  function CloseAjouterPaysIAC() {
    setAjouterPaysIAC(false);
  }

  // ajout pays Success - IAC
  // si le collaborateur a pu ajouter un pays on affiche ce message de success
  const [ajoutPaysSuccessIAC, setAjoutPaysSuccessIAC] = useState(false);
  function CloseAjoutPaysSuccessIAC() {
    setAjoutPaysSuccessIAC(false);
    setAjouterPaysIAC(false);
  }

  // saisir le pays - IAC
  const [writeCountry, setWriteCountry] = useState("");
  
  // logique pour enregistrer le pays
  async function SaveCountryIAC() {
    setOpacity(true);
    const inEnglish = localStorage.getItem("inEnglish");
    const visible = "1";
    const connection = "1";
    const type = "1";

    await axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND}/api/countryIA/save`,
      data: {
        country: writeCountry,
        idLanguage: idLanguageIAC,
        inEnglish,
        visible,
        connection,
        type,
        //idCollaborateur: idCollaboratorIAC,
        //nomCollaborateur: nameCollaboratorIAC,
      },
    })
    .then((res) => {

        //2e requete
        //2e requete
        /* si le pays a pu etre enregistrer dans la bdd, alors on fait une 2e requete pour 
        pouvoir afficher le pays enregistrer */
        async function deuxiemeReq() {
          await axios
            .get(`${process.env.REACT_APP_BACKEND}/api/countryIA/`)
            .then((res) => {
              setApiListeDesPaysIAC(res.data);
              //on termine en lui affichant un message de succes disant que ca a reussi
              setOpacity(false);
              setAjoutPaysSuccessIAC(true);
            });
        }
        deuxiemeReq();
        //2e requete
      })
      .catch((err) => {
        setOpacity(false);
        //on affiche ce message d'erreur si le pays n'a pas pu etre enregistrer dans la bdd
        setErreurIAC(true);
      });
  }

  
  // page pour mettre un utilisateur sous silencieux - AAC
  const [silentUserPageAAC, setSilentUserPageAAC] = useState(false);
  async function SilentUserPageAAC() {
    setSilentUserPageAAC(true);
    //obtenir de nouvelles donnees
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/userAA`)
    .then((res) => {
      setApiUserAA(res.data);
    })
  }
  function CloseSilentUserPageAAC() { //fermer
    setSilentUserPageAAC(false);
  }

  // page pour confirmer l'utilisateur a mettre sous silencieux - AAC
  const [confirmationSilentUserPageAAC, setConfirmationSilentUserPageAAC] = useState(false);
  function ConfirmationSilentUserPageAAC() {
    setConfirmationSilentUserPageAAC(true);
  }
  function CloseConfirmationSilentUserPageAAC() { //fermer
    setConfirmationSilentUserPageAAC(false);
  }

  //mettre un compte sous controle generale
  //ejection / changement de mot de passe *
  //logique pour creer un compte Alrani, izocash, Veil Brillant
  //supprimer conversation
  //reinitialiser monetisation *
  //nouveau message (savoir si tu as recu un nouveau message)
  //corriger le solde monetization


  // logique pour mettre un utilisateur sous silencieux - AA
  async function SilentUserAAC() {
    //1ere requete
    //1ere requete
    // on met l'utilisateur sous silence
    async function premiereReq() {
      const id = localStorage.getItem("idUser");
      const displayOther = "0";
      const home = "0";
      const homeVideo = "0";

      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/userAA/update/${id}`,
        data: {
          displayOther,
          home,
          homeVideo,
        },
      })
      .then((res) => {

      //2e requete
      //2e requete
      // on obtiens de nouvelles donnees
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/userAA`)
        .then((res) => {
          setApiUserAA(res.data);
        })
        }
        deuxiemeReq();
        //2e requete
        })
      }
      premiereReq();
      //1ere requete
  }


  // page pour retirer un utilisateur du silencieux - AAC
  const [removeSilentUserPageAAC, setRemoveSilentUserPageAAC] = useState(false);
  async function RemoveSilentUserPageAAC() {
    setRemoveSilentUserPageAAC(true);
    //obtenir de nouvelles donnees
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/userAA`)
    .then((res) => {
      setApiUserAA(res.data);
    })
  }
  function CloseRemoveSilentUserPageAAC() { //fermer
    setRemoveSilentUserPageAAC(false);
  }

  // page pour confirmer l'utilisateur a retirer du silencieux - AAC
  const [confirmationRemoveSilentUserPageAAC, setConfirmationRemoveSilentUserPageAAC] = useState(false);
  function ConfirmationRemoveSilentUserPageAAC() {
    setConfirmationRemoveSilentUserPageAAC(true);
  }
  function CloseConfirmationRemoveSilentUserPageAAC() { //fermer
    setConfirmationRemoveSilentUserPageAAC(false);
  }

  // logique pour retirer un utilisateur du silencieux - AA
  async function RemoveSilentUserAAC() {
    //1ere requete
    //1ere requete
    // on met l'utilisateur sous silence
    async function premiereReq() {
      const id = localStorage.getItem("idUser");
      const displayOther = "1";
      const home = "1";
      const homeVideo = "1";

      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/userAA/update/${id}`,
        data: {
          displayOther,
          home,
          homeVideo,
        },
      })
      .then((res) => {

      //2e requete
      //2e requete
      // on obtiens de nouvelles donnees
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/userAA`)
        .then((res) => {
          setApiUserAA(res.data);
        })
        }
        deuxiemeReq();
        //2e requete
        })
      }
      premiereReq();
      //1ere requete
  }


  // page pour activer donazia app - DAC
  // page pour activer donazia app - DAC
  const [activateDonaziaDAC, setActivateDonaziaDAC] = useState(false);
  async function ActivateDonaziaDAC() {
    setActivateDonaziaDAC(true);
    //obtenir de nouvelles donnees
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
    .then((res) => {
      setApiAccountAA(res.data);
    })
  }
  async function CloseActivateDonaziaDAC() { 
    setActivateDonaziaDAC(false);
  }

  // page pour confirmer l'utilisateur à activer Donazia App
  const [confirmationActivateDonaziaDAC, setConfirmationActivateDonaziaDAC] = useState(false);
  async function ConfirmationActivateDonaziaDAC() {
    setConfirmationActivateDonaziaDAC(true);
  }
  async function CloseConfirmationActivateDonaziaDAC() { 
    setConfirmationActivateDonaziaDAC(false);
  }


  // logique pour activer Donazia App à un utilisateur
  async function NowActivateDonaziaDAC() {
    //1ere requete
    //1ere requete
    // on active Donazia App
    async function premiereReq() {
      const id = localStorage.getItem("idAccount");
      const donazia = "1";
      const freeDonazia = "0";
      const subscriptionDonazia = "0";

      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/accountAA/update/${id}`,
        data: {
          donazia,
          freeDonazia,
          subscriptionDonazia,
        },
      })
      .then((res) => {

      //2e requete
      //2e requete
      // on obtiens de nouvelles donnees
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
        .then((res) => {
          setApiAccountAA(res.data);
        })
        }
        deuxiemeReq();
        //2e requete
        })
      }
      premiereReq();
      //1ere requete
  }


   // page pour désactiver Donazia App à un utilisateur - DAC
   // page pour désactiver Donazia App à un utilisateur - DAC
   const [deactivateDonaziaDAC, setDeactivateDonaziaDAC] = useState(false);
   async function DeactivateDonaziaDAC() {
    setDeactivateDonaziaDAC(true);
     //obtenir de nouvelles donnees
     await axios
     .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
     .then((res) => {
       setApiAccountAA(res.data);
     })
   }
   async function CloseDeactivateDonaziaDAC() { 
    setDeactivateDonaziaDAC(false);
   }
 
   // page pour confirmer l'utilisateur à désactiver Donazia App
   const [confirmationDeactivateDonaziaDAC, setConfirmationDeactivateDonaziaDAC] = useState(false);
   async function ConfirmationDeactivateDonaziaDAC() {
     setConfirmationDeactivateDonaziaDAC(true);
   }
   async function CloseConfirmationDeactivateDonaziaDAC() { 
    setConfirmationDeactivateDonaziaDAC(false);
   }
 
 
   // logique pour désactiver Donazia App à un utilisateur
   async function NowDeactivateDonaziaDAC() {
     //1ere requete
     //1ere requete
     // on désactive Donazia App
     async function premiereReq() {
       const id = localStorage.getItem("idAccount");
       const donazia = "0";
       const freeDonazia = "0";
       const subscriptionDonazia = "0";
 
       await axios({
         method: "put",
         url: `${process.env.REACT_APP_BACKEND}/api/accountAA/update/${id}`,
         data: {
           donazia,
           freeDonazia,
           subscriptionDonazia,
         },
       })
       .then((res) => {
 
       //2e requete
       //2e requete
       // on obtiens de nouvelles donnees
       async function deuxiemeReq() {
         await axios
         .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
         .then((res) => {
           setApiAccountAA(res.data);
         })
         }
         deuxiemeReq();
         //2e requete
         })
       }
       premiereReq();
       //1ere requete
   } 


   // page pour activer la gratuité à un utilisateur - DAC
  const [activateFreeDAC, setActivateFreeDAC] = useState(false);
  async function ActivateFreeDAC() {
    setActivateFreeDAC(true);
    //obtenir de nouvelles donnees
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
    .then((res) => {
      setApiAccountAA(res.data);
    })
  }
  async function CloseActivateFreeDAC() { 
    setActivateFreeDAC(false);
  }

  // page pour confirmer l'utilisateur à activer la gratuité
  const [confirmationActivateFreeDAC, setConfirmationActivateFreeDAC] = useState(false);
  async function ConfirmationActivateFreeDAC() {
    setConfirmationActivateFreeDAC(true);
  }
  async function CloseConfirmationActivateFreeDAC() { 
    setConfirmationActivateFreeDAC(false);
  }


  // logique pour activer la gratuité à un utilisateur
  async function NowActivateFreeDAC() {
    //1ere requete
    //1ere requete
    // on active la gratuité
    async function premiereReq() {
      const id = localStorage.getItem("idAccount");
      const donazia = "1";
      const freeDonazia = "1";
      const subscriptionDonazia = "0";

      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/accountAA/update/${id}`,
        data: {
          donazia,
          freeDonazia,
          subscriptionDonazia,
        },
      })
      .then((res) => {

      //2e requete
      //2e requete
      // on obtiens de nouvelles donnees
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
        .then((res) => {
          setApiAccountAA(res.data);
        })
        }
        deuxiemeReq();
        //2e requete
        })
      }
      premiereReq();
      //1ere requete
  }


   // page pour désactiver la gratuité à un utilisateur - DAC
   // page pour désactiver la gratuité à un utilisateur - DAC
   const [deactivateFreeDAC, setDeactivateFreeDAC] = useState(false);
   async function DeactivateFreeDAC() {
    setDeactivateFreeDAC(true);
     //obtenir de nouvelles donnees
     await axios
     .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
     .then((res) => {
       setApiAccountAA(res.data);
     })
   }
   async function CloseDeactivateFreeDAC() { 
    setDeactivateFreeDAC(false);
   }
 
   // page pour confirmer l'utilisateur à désactiver la gratuité
   const [confirmationDeactivateFreeDAC, setConfirmationDeactivateFreeDAC] = useState(false);
   async function ConfirmationDeactivateFreeDAC() {
     setConfirmationDeactivateFreeDAC(true);
   }
   async function CloseConfirmationDeactivateFreeDAC() { 
    setConfirmationDeactivateFreeDAC(false);
   }
 
 
   // logique pour désactiver la gratuité à un utilisateur
   async function NowDeactivateFreeDAC() {
     //1ere requete
     //1ere requete
     // on desactive la gratuité
     async function premiereReq() {
       const id = localStorage.getItem("idAccount");
       const donazia = "1";
       const freeDonazia = "0";
       const subscriptionDonazia = "0";
 
       await axios({
         method: "put",
         url: `${process.env.REACT_APP_BACKEND}/api/accountAA/update/${id}`,
         data: {
           donazia,
           freeDonazia,
           subscriptionDonazia,
         },
       })
       .then((res) => {
 
       //2e requete
       //2e requete
       // on obtiens de nouvelles donnees
       async function deuxiemeReq() {
         await axios
         .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
         .then((res) => {
           setApiAccountAA(res.data);
         })
         }
         deuxiemeReq();
         //2e requete
         })
       }
       premiereReq();
       //1ere requete
   } 


  // page pour activer l'abonnement annuel à un utilisateur - DAC
  // page pour activer l'abonnement annuel à un utilisateur - DAC
  const [activateSubscriptionDAC, setActivateSubscriptionDAC] = useState(false);
  async function ActivateSubscriptionDAC() {
    setActivateSubscriptionDAC(true);
    //obtenir de nouvelles donnees
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
    .then((res) => {
      setApiAccountAA(res.data);
    })
  }
  async function CloseActivateSubscriptionDAC() { 
    setActivateSubscriptionDAC(false);
  }

  // page pour confirmer l'utilisateur à activer l'abonnement annuel
  const [confirmationActivateSubscriptionDAC, setConfirmationActivateSubscriptionDAC] = useState(false);
  async function ConfirmationActivateSubscriptionDAC() {
    setConfirmationActivateSubscriptionDAC(true);
  }
  async function CloseConfirmationActivateSubscriptionDAC() { 
    setConfirmationActivateSubscriptionDAC(false);
  }


  // logique pour activer l'abonnement annuel à un utilisateur
  async function NowActivateSubscriptionDAC() {
    //1ere requete
    //1ere requete
    // on active l'abonnement annuel
    async function premiereReq() {
      const id = localStorage.getItem("idAccount");
      const donazia = "1";
      const freeDonazia = "0";
      const subscriptionDonazia = "1";

      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/accountAA/update/${id}`,
        data: {
          donazia,
          freeDonazia,
          subscriptionDonazia,
        },
      })
      .then((res) => {

      //2e requete
      //2e requete
      // on obtiens de nouvelles donnees
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
        .then((res) => {
          setApiAccountAA(res.data);
        })
        }
        deuxiemeReq();
        //2e requete
        })
      }
      premiereReq();
      //1ere requete
  }


   // page pour désactiver l'abonnement annuel à un utilisateur - DAC
   // page pour désactiver l'abonnement annuel à un utilisateur - DAC
   const [deactivateSubscriptionDAC, setDeactivateSubscriptionDAC] = useState(false);
   async function DeactivateSubscriptionDAC() {
    setDeactivateSubscriptionDAC(true);
     //obtenir de nouvelles donnees
     await axios
     .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
     .then((res) => {
       setApiAccountAA(res.data);
     })
   }
   async function CloseDeactivateSubscriptionDAC() { 
    setDeactivateSubscriptionDAC(false);
   }
 
   // page pour confirmer l'utilisateur à désactiver l'abonnement annuel
   const [confirmationDeactivateSubscriptionDAC, setConfirmationDeactivateSubscriptionDAC] = useState(false);
   async function ConfirmationDeactivateSubscriptionDAC() {
     setConfirmationDeactivateSubscriptionDAC(true);
   }
   async function CloseConfirmationDeactivateSubscriptionDAC() { 
    setConfirmationDeactivateSubscriptionDAC(false);
   }
 
 
   // logique pour désactiver l'abonnement annuel à un utilisateur
   async function NowDeactivateSubscriptionDAC() {
     //1ere requete
     //1ere requete
     // on désactive l'abonnement annuel
     async function premiereReq() {
       const id = localStorage.getItem("idAccount");
       const donazia = "1";
       const freeDonazia = "0";
       const subscriptionDonazia = "0";
 
       await axios({
         method: "put",
         url: `${process.env.REACT_APP_BACKEND}/api/accountAA/update/${id}`,
         data: {
           donazia,
           freeDonazia,
           subscriptionDonazia,
         },
       })
       .then((res) => {
 
       //2e requete
       //2e requete
       // on obtiens de nouvelles donnees
       async function deuxiemeReq() {
         await axios
         .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
         .then((res) => {
           setApiAccountAA(res.data);
         })
         }
         deuxiemeReq();
         //2e requete
         })
       }
       premiereReq();
       //1ere requete
   } 




  // page pour activer le badge de certification - FAC
  // page pour activer le badge de certification - FAC
  const [activateBadgeFAC, setActivateBadgeFAC] = useState(false);
  async function ActivateBadgeFAC() {
    setActivateBadgeFAC(true);
    //obtenir de nouvelles donnees
    await axios
    .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
    .then((res) => {
      setApiAccountAA(res.data);
    })
  }
  async function CloseActivateBadgeFAC() { 
    setActivateBadgeFAC(false);
  }

  // page pour confirmer l'utilisateur à activer le badge de certification 
  const [confirmationActivateBadgeFAC, setConfirmationActivateBadgeFAC] = useState(false);
  async function ConfirmationActivateBadgeFAC() {
    setConfirmationActivateBadgeFAC(true);
  }
  async function CloseConfirmationActivateBadgeFAC() { 
    setConfirmationActivateBadgeFAC(false);
  }


  // logique pour activer le badge de certification à un utilisateur
  async function NowActivateBadgeFAC() {
    //1ere requete
    //1ere requete
    // on active le badge de certification
    async function premiereReq() {
      const id = localStorage.getItem("idAccount");
      const badge = "1";

      await axios({
        method: "put",
        url: `${process.env.REACT_APP_BACKEND}/api/accountAA/update/${id}`,
        data: {
          badge,
        },
      })
      .then((res) => {

      //2e requete
      //2e requete
      // on obtiens de nouvelles donnees
      async function deuxiemeReq() {
        await axios
        .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
        .then((res) => {
          setApiAccountAA(res.data);
        })
        }
        deuxiemeReq();
        //2e requete
        })
      }
      premiereReq();
      //1ere requete
  }


   // page pour retirer le badge de certification à un utilisateur - FAC
   const [removeBadgeFAC, setRemoveBadgeFAC] = useState(false);
   async function RemoveBadgeFAC() {
    setRemoveBadgeFAC(true);
     //obtenir de nouvelles donnees
     await axios
     .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
     .then((res) => {
       setApiAccountAA(res.data);
     })
   }
   async function CloseRemoveBadgeFAC() { 
    setRemoveBadgeFAC(false);
   }
 
   // page pour confirmer l'utilisateur à retirer le badge de certification
   const [confirmationRemoveBadgeFAC, setConfirmationRemoveBadgeFAC] = useState(false);
   async function ConfirmationRemoveBadgeFAC() {
    setConfirmationRemoveBadgeFAC(true);
   }
   async function CloseConfirmationRemoveBadgeFAC() { 
    setConfirmationRemoveBadgeFAC(false);
   }
 
 
   // logique pour retirer le badge de certification à un utilisateur
   async function NowRemoveBadgeFAC() {
     //1ere requete
     //1ere requete
     // on retire le badge de certification
     async function premiereReq() {
       const id = localStorage.getItem("idAccount");
       const badge = "0";
 
       await axios({
         method: "put",
         url: `${process.env.REACT_APP_BACKEND}/api/accountAA/update/${id}`,
         data: {
           badge,
         },
       })
       .then((res) => {
 
       //2e requete
       //2e requete
       // on obtiens de nouvelles donnees
       async function deuxiemeReq() {
         await axios
         .get(`${process.env.REACT_APP_BACKEND}/api/accountAA`)
         .then((res) => {
           setApiAccountAA(res.data);
         })
         }
         deuxiemeReq();
         //2e requete
         })
       }
       premiereReq();
       //1ere requete
   } 

  

  //logique pour afficher la liste des pays en fonction des donnees obtenues dans l'api - IAC
  const [apiListeDesPaysIAC, setApiListeDesPaysIAC] = useState([]);

  // filtre pour afficher la liste des pays (en fonction de la langue) - IAC
  const filtreApiListeDesPaysIAC = apiListeDesPaysIAC.filter((api) => api.idLanguage === idLanguageIAC);

  // Page Redirection (666 ListeDesPaysIAC)
  // Page Redirection (666 ListeDesPaysIAC)
  // la logique ci nous dira quel page ouvrir
  async function PageRedirection666ListeDesPaysIAC() {
    // liste des villes
    // route pour aller vers la page qui contient la liste des villes - IAC
    const liste = localStorage.getItem("GoToPageListCitiesIAC");
    if (liste === "1") {
      setListeDesVillesPageIAC(true);
    }

    // masquer un pays
    // route pour aller vers la page qui va permettre au collaborateur de masquer un pays - IAC
    const masquer = localStorage.getItem("GoToPageHideCountryIAC");
    if (masquer === "1") {
      setMasquerPaysPageIAC(true);
    }
  }

  // masquer pays (page) - IAC
  //ca c'est la page qui va permetre au collaborateur de confirmer le pays a masquer
  const [masquerPaysPageIAC, setMasquerPaysPageIAC] = useState(false);
  function CloseMasquerPaysPageIAC() {
    setMasquerPaysPageIAC(false);
  }

  // masquer pays Success - IAC
  //on affiche ca lorsque le pays a bien ete masquer
  const [masquerPaysSuccessIAC, setMasquerPaysSuccessIAC] = useState(false);
  function CloseMasquerPaysSuccessIAC() {
    setMasquerPaysPageIAC(false);
    setMasquerPaysSuccessIAC(false);
  }

  // logique pour masquer le pays - IAC
  //on enregistre la valeur pour masquer le pays, on enregistre ca dans la bdd - IAC
  async function MasquerPaysIAC() {
    setOpacity(true);
    const visible = "0";
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND}/api/countryIA/update/${idCountryIAC}`,
      data: {
        visible,
      },
    })
      .then((res) => {

        //2e requete
        //2e requete
        /* une fois que la langue a ete masquer, alors on fait une 2e requete pour 
        avoir les nouvelles donnees */
        async function deuxiemeReq() {
          await axios
            .get(`${process.env.REACT_APP_BACKEND}/api/countryIA/`)
            .then((res) => {
              setApiListeDesPaysIAC(res.data);
              //on termine en lui affichant un message de succes disant que ca a reussi
              setOpacity(false);
              setMasquerPaysSuccessIAC(true);
            });
        }
        deuxiemeReq();
        //2e requete
      })
      .catch((err) => {
        setOpacity(false);
        setErreurIAC(true);
      });
  }


  //ville
  //ville
  //ville
  //listes des villes (page) - IAC
  //sur cette page il y'a la liste des villes
  const [listeDesVillesPageIAC, setListeDesVillesPageIAC] = useState(false);
  function CloseListeDesVillesPageIAC() {
    setListeDesVillesPageIAC(false);
  }

  // ajouter ville - IAC
  // la page ci permet au collaborateur d'ajouter une ville
  const [ajouterVilleIAC, setAjouterVilleIAC] = useState(false);
  function AjouterVilleIAC() {
    setAjouterVilleIAC(true);
  }
  //fermer
  function CloseAjouterVilleIAC() {
    setAjouterVilleIAC(false);
  }

  // ajout ville Success - IAC
  // si le collaborateur a pu ajouter une ville on affiche ce message de success
  const [ajoutVilleSuccessIAC, setAjoutVilleSuccessIAC] = useState(false);
  function CloseAjoutVilleSuccessIAC() {
    setAjoutVilleSuccessIAC(false);
    setAjouterVilleIAC(false);
  }

  // enregistrer ville - IAC
  //ici on saisi la ville a ajouter - IA
  const [writeCity, setWriteCity] = useState("");
  //ici on enregistre dans la bdd
  //la logique ci nous permet d'enregistrer dans la bdd la ville que le collaborateur a saisi
  async function SaveCityIAC() {
    setOpacity(true);
	  const inEnglish = localStorage.getItem("inEnglish");
    const visible = "1";
    const connection = "1";
    const type = "1";

    await axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND}/api/cityIA/save`,
      data: {
        city: writeCity,
        idLanguage: idLanguageIAC,
        idCountry: idCountryIAC,
        inEnglish,
        visible,
        connection,
        type,
        //idCollaborateur: idCollaboratorIAC,
        //nomCollaborateur: nameCollaboratorIAC,
      },
    })
      .then((res) => {

        //2e requete
        //2e requete
        /* si la ville a pu etre enregistrer dans la bdd, alors on fait une 2e requete pour 
        pouvoir afficher la ville enregistrer */
        async function deuxiemeReq() {
          await axios
            .get(`${process.env.REACT_APP_BACKEND}/api/cityIA/`)
            .then((res) => {
              setApiListeDesVillesIAC(res.data);
              //on termine en lui affichant un message de succes disant que ca a reussi
              setOpacity(false);
              setAjoutVilleSuccessIAC(true);
            });
        }
        deuxiemeReq();
        //2e requete
      })
      .catch((err) => {
        setOpacity(false);
        //on affiche ce message d'erreur si la ville n'a pas pu etre enregistrer dans la bdd
        setErreurIAC(true);
      });
  }

  // Page Redirection (666 ListeDesVillesIAC)
  // Page Redirection (666 ListeDesVillesIAC)
  // au niveau de la liste des langues, la logique ci nous dira quel page ouvrir
  async function PageRedirection666ListeDesVillesIAC() {
    // liste des quartiers
    // route pour aller vers la page qui contient la liste des quartiers - IAC
    const liste = localStorage.getItem("GoToPageListQuartersIAC");
    if (liste === "1") {
      setListeDesQuartiersPageIAC(true);
    }

    // masquer une ville
    //route pour aller vers la page qui va permettre au collaborateur de masquer une ville - IAC
    const masquer = localStorage.getItem("GoToPageHideCityIAC");
    if (masquer === "1") {
      setMasquerVillePageIAC(true);
    }
  }

  // on recupere les infos
  const idCityIAC = localStorage.getItem("idCity");
  const nameCityIAC = localStorage.getItem("nameCity");

  // masquer ville (page) - IAC
  //ca c'est la page qui va permetre au collaborateur de confirmer la ville a masquer
  const [masquerVillePageIAC, setMasquerVillePageIAC] = useState(false);
  function CloseMasquerVillePageIAC() {
    setMasquerVillePageIAC(false);
  }

  // masquer ville Success - IAC
  //on affiche ca lorsque le ville a bien ete masquer
  const [masquerVilleSuccessIAC, setMasquerVilleSuccessIAC] = useState(false);
  function CloseMasquerVilleSuccessIAC() {
    setMasquerVillePageIAC(false);
    setMasquerVilleSuccessIAC(false);
  }

  // masquer ville - IAC
  //on enregistre la valeur pour masquer la ville, on enregistre ca dans la bdd - IAC
  async function MasquerVilleIAC() {
    setOpacity(true);
    const visible = "0";
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND}/api/cityIA/update/${idCityIAC}`,
      data: {
        visible,
      },
    })
      .then((res) => {

        //2e requete
        //2e requete
        /* une fois que la ville a ete masquer, alors on fait une 2e requete pour 
        avoir les nouvelles donnees */
        async function deuxiemeReq() {
          await axios
            .get(`${process.env.REACT_APP_BACKEND}/api/cityIA/`)
            .then((res) => {
              setApiListeDesVillesIAC(res.data);
              //on termine en lui affichant un message de succes disant que ca a reussi
              setOpacity(false);
              setMasquerVilleSuccessIAC(true);
            });
        }
        deuxiemeReq();
        //2e requete
      })
      .catch((err) => {
        setOpacity(false);
        setErreurIAC(true);
      });
  }

  //logique pour afficher la liste des villes en fonction des donnees obtenues dans l'api - IAC
  const [apiListeDesVillesIAC, setApiListeDesVillesIAC] = useState([]);

  // filtre pour afficher la liste des villes (en fonction du pays) - IAC
  const filtreApiListeDesVillesIAC = apiListeDesVillesIAC.filter((api) => api.idCountry === idCountryIAC);



  //quartier
  //quartier
  //quartier
  //liste des quartiers (page) - IAC
  //on affiche la liste des quartiers
  const [listeDesQuartiersPageIAC, setListeDesQuartiersPageIAC] =
    useState(false);
  function CloseListeDesQuartiersPageIAC() {
    setListeDesQuartiersPageIAC(false);
  }

  // ajouter quartier - IAC
  // la page ci permet au collaborateur d'ajouter un quartier
  const [ajouterQuartierIAC, setAjouterQuartierIAC] = useState(false);
  function AjouterQuartierIAC() {
    setAjouterQuartierIAC(true);
  }
  //fermer
  function CloseAjouterQuartierIAC() {
    setAjouterQuartierIAC(false);
  }

  // ajout quartier Success - IAC
  // si le collaborateur a pu ajouter un quartier on affiche ce message de success
  const [ajoutQuartierSuccessIAC, setAjoutQuartierSuccessIAC] = useState(false);
  function CloseAjoutQuartierSuccessIAC() {
    setAjoutQuartierSuccessIAC(false);
    setAjouterQuartierIAC(false);
  }

  // saisir le quartier a ajouter - IA
  const [writeQuarter, setWriteQuarter] = useState("");

  // logique pour enregistrer le quartier dans la bdd
  async function SaveQuarterIAC() {
    setOpacity(true);
    const visible = "1";
    const connection = "1";
    const type = "1";
	  const inEnglish = localStorage.getItem("inEnglish");

    await axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND}/api/quarterIA/save`,
      data: {
        quarter: writeQuarter,
        idLanguage: idLanguageIAC,
        idCountry: idCountryIAC,
        idCity: idCityIAC,
        inEnglish,
        visible,
        connection,
        type,
      },
    })
      .then((res) => {
        //2e requete
        //2e requete
        /* si le quartier a pu etre enregistrer dans la bdd, alors on fait une 2e requete pour 
        pouvoir afficher le quartier enregistrer */
        async function deuxiemeReq() {
          await axios
            .get(`${process.env.REACT_APP_BACKEND}/api/quarterIA/`)
            .then((res) => {
              setApiListeDesQuartiersIAC(res.data);
              //on termine en lui affichant un message de succes disant que ca a reussi
              setOpacity(false);
              setAjoutQuartierSuccessIAC(true);
            });
        }
        deuxiemeReq();
        //2e requete
      })
      .catch((err) => {
        setOpacity(false);
        //on affiche ce message d'erreur si le quartier n'a pas pu etre enregistrer dans la bdd
        setErreurIAC(true);
      });
  }

  // Page Redirection (666 ListeDesQuartiersIAC)
  // Page Redirection (666 ListeDesQuartiersIAC)
  // au niveau de la liste des quartiers, la logique ci nous dira quel page ouvrir
  async function PageRedirection666ListeDesQuartiersIAC() {
    // liste des zones
    //route pour aller vers la page qui contient la liste des zones - IAC
    const liste = localStorage.getItem("GoToPageListZonesIAC");
    if (liste === "1") {
      setListeDesZonesPageIAC(true);
    }

    //masquer un quartier
    //route pour aller vers la page qui va permettre au collaborateur de masquer un quartier - IAC
    const masquer = localStorage.getItem("GoToPageHideQuarterIAC");
    if (masquer === "1") {
      setMasquerQuartierPageIAC(true);
    }
  }

  //on recupere les infos
  const idQuarterIAC = localStorage.getItem("idQuarter"); //id
  const nameQuarterIAC = localStorage.getItem("nameQuarter"); //name

  //logique pour afficher la liste des quartiers en fonction des donnees obtenues dans l'api - IAC
  const [apiListeDesQuartiersIAC, setApiListeDesQuartiersIAC] = useState([]);

  // filtre pour afficher la liste des quartiers (en fonction de la ville) - IAC
  const filtreApiListeDesQuartiersIAC = apiListeDesQuartiersIAC.filter((api) => api.idCity === idCityIAC);

  // masquer quartier (page) - IAC
  //ca c'est la page qui va permetre au collaborateur de confirmer le quartier a masquer
  const [masquerQuartierPageIAC, setMasquerQuartierPageIAC] = useState(false);
  function CloseMasquerQuartierPageIAC() {
    setMasquerQuartierPageIAC(false);
  }

  // masquer quartier Success - IAC
  //on affiche ca lorsque le quartier a bien ete masquer
  const [masquerQuartierSuccessIAC, setMasquerQuartierSuccessIAC] = useState(false);
  function CloseMasquerQuartierSuccessIAC() {
    setMasquerQuartierPageIAC(false);
    setMasquerQuartierSuccessIAC(false);
  }

  // masquer quartier - IAC
  //on enregistre la valeur pour masquer le quartier, on enregistre ca dans la bdd - IAC
  async function MasquerQuartierIAC() {
    setOpacity(true);

    const visible = "0";
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND}/api/quarterIA/update/${idQuarterIAC}`,
      data: {
        visible,
      },
    })
      .then((res) => {
        //2e requete
        //2e requete
        /* une fois que le quartier a ete masquer, alors on fait une 2e requete pour 
        avoir les nouvelles donnees */
        async function deuxiemeReq() {
          await axios
            .get(`${process.env.REACT_APP_BACKEND}/api/quarterIA/`)
            .then((res) => {
              setApiListeDesQuartiersIAC(res.data);
              //on termine en lui affichant un message de succes disant que ca a reussi
              setOpacity(false);
              setMasquerQuartierSuccessIAC(true);
            });
        }
        deuxiemeReq();
        //2e requete
      })
      .catch((err) => {
        setOpacity(false);
        setErreurIAC(true);
      });
  }


  //zone
  //zone
  //zone
  //liste des zones (page) - IAC
  //on affiche la liste des zones
  const [listeDesZonesPageIAC, setListeDesZonesPageIAC] = useState(false);
  function CloseListeDesZonesPageIAC() {
    setListeDesZonesPageIAC(false);
  }

  //on recupere les infos
  const idZoneIAC = localStorage.getItem("idZone"); //idZoneIAC
  const nameZoneIAC = localStorage.getItem("nameZone"); //nameZoneIAC

  // ajouter une zone - IAC
  // la page ci permet au collaborateur d'ajouter une zone
  const [ajouterZoneIAC, setAjouterZoneIAC] = useState(false);
  function AjouterZoneIAC() {
    setAjouterZoneIAC(true);
  }
  //fermer
  function CloseAjouterZoneIAC() {
    setAjouterZoneIAC(false);
  }

  // ajout zone Success - IAC
  // si le collaborateur a pu ajouter une zone on affiche ce message de success
  const [ajoutZoneSuccessIAC, setAjoutZoneSuccessIAC] = useState(false);
  function CloseAjoutZoneSuccessIAC() {
    setAjoutZoneSuccessIAC(false);
    setAjouterZoneIAC(false);
  }

  //saisir la zone a ajouter
  const [writeZone, setWriteZone] = useState("");  

  // logique pour enregistrer la zone 
  async function SaveZoneIAC() {
    setOpacity(true);
	  const inEnglish = localStorage.getItem("inEnglish");
    const visible = "1";
    const connection = "1";
    const type = "1";
	 
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND}/api/zoneIA/save`,
      data: {
        zone: writeZone,
        idLanguage: idLanguageIAC,
        idCountry: idCountryIAC,
        idCity: idCityIAC,
        idQuarter: idQuarterIAC,
        inEnglish,
        visible,
        connection,
        type,
        //idCollaborateur: idCollaboratorIAC,
        //nomCollaborateur: nameCollaboratorIAC,
      },
    })
      .then((res) => {

        //2e requete
        //2e requete
        /* si la zone a pu etre enregistrer dans la bdd, alors on fait une 2e requete pour 
        pouvoir afficher la zone enregistrer */
        async function deuxiemeReq() {
          await axios
            .get(`${process.env.REACT_APP_BACKEND}/api/zoneIA/`)
            .then((res) => {
              setApiListeDesZonesIAC(res.data);
              //on termine en lui affichant un message de succes disant que ca a reussi
              setOpacity(false);
              setAjoutZoneSuccessIAC(true);
            });
        }
        deuxiemeReq();
        //2e requete
      })
      .catch((err) => {
        setOpacity(false);
        //on affiche ce message d'erreur si la zone n'a pas pu etre enregistrer dans la bdd
        setErreurIAC(true);
      });
  }

  // Page Redirection (666 ListeDesZonesIAC)
  // Page Redirection (666 ListeDesZonesIAC)
  // au niveau de la liste des zones, la logique ci nous dira quel page ouvrir
  async function PageRedirection666ListeDesZonesIAC() {
    // liste des zones
    // route pour aller vers la page qui contient le Recapitulatif de la Localisation - IAC
    const liste = localStorage.getItem("GoToPageRecapitulatifLocalisationIAC");
    if (liste === "1") {
      setRecapitulatifLocalisationPageIAC(true);
    }

    // masquer zone
    // route pour aller vers la page qui va permettre au collaborateur de masquer une zone - IAC
    const masquer = localStorage.getItem("GoToPageHideZoneIAC");
    if (masquer === "1") {
      setMasquerZonePageIAC(true);
    }
  }

  // masquer zone (page) - IAC
  //ca c'est la page qui va permetre au collaborateur de confirmer la zone a masquer
  const [masquerZonePageIAC, setMasquerZonePageIAC] = useState(false);
  function CloseMasquerZonePageIAC() {
    setMasquerZonePageIAC(false);
  }

  // masquer zone Success - IAC
  //on affiche ca lorsque la zone a bien ete masquer
  const [masquerZoneSuccessIAC, setMasquerZoneSuccessIAC] = useState(false);
  function CloseMasquerZoneSuccessIAC() {
    setMasquerZonePageIAC(false);
    setMasquerZoneSuccessIAC(false);
  }

  // logique pour masquer la zone - IAC
  //on enregistre la valeur pour masquer la zone, on enregistre ca dans la bdd - IAC
  async function MasquerZoneIAC() {
    setOpacity(true);
    const visible = "0";
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND}/api/zoneIA/update/${idZoneIAC}`,
      data: {
        visible,
      },
    })
      .then((res) => {

        //2e requete
        //2e requete
        /* une fois que la zone a ete masquer, alors on fait une 2e requete pour 
        avoir les nouvelles donnees */
        async function deuxiemeReq() {
          await axios
            .get(`${process.env.REACT_APP_BACKEND}/api/zoneIA/`)
            .then((res) => {
              setApiListeDesZonesIAC(res.data);
              //on termine en lui affichant un message de succes disant que ca a reussi
              setOpacity(false);
              setMasquerZoneSuccessIAC(true);
            });
        }
        deuxiemeReq();
        //2e requete
      })
      .catch((err) => {
        setOpacity(false);
        setErreurIAC(true);
      });
  }

  //logique pour afficher la liste des zones en fonction des donnees obtenues dans l'api - IAC
  const [apiListeDesZonesIAC, setApiListeDesZonesIAC] = useState([]);

  // filtre pour afficher la liste des zones (en fonction du quartier) - IAC
  const filtreApiListeDesZonesIAC = apiListeDesZonesIAC.filter((api) => api.idQuarter === idQuarterIAC);


  // logique pour mettre a jour la localisation et afficher le Point Retrait - IAC
  async function LocalizationAndPointIAC() {
    setOpacity(true);
    const visible = "1";

    // 1ere requete
    // 1ere requete
    // requete pour mettre a jour la localisation et afficher le Point Retrait
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_BACKEND}/api/withdrawalPointIA/update/${idPointIAC}`,
      data: {
        idLanguage: idLanguageIAC, // id
        idCountry: idCountryIAC,
        idCity: idCityIAC,
        idQuarter: idQuarterIAC,
        idZone: idZoneIAC,
        //idBusStop: ,

        language: nameLanguageIAC, // name
        languageInEnglish: nameLanguageInEnglishIAC,
        country: nameCountryIAC,
        city: nameCityIAC,
        quarter: nameQuarterIAC,
        zone: nameZoneIAC,
        //busStop: ,

        visible,
      },
    })
      .then((res) => {

        //2e requete
        //2e requete
        // obtenir de nouvelles donnees - points retraits
        async function deuxiemeReq() {
         await axios
          .get(`${process.env.REACT_APP_BACKEND}/api/withdrawalPointIA/`)
          .then((res) => {
            setApiWithdrawalPointIAC(res.data);
            setOpacity(false);
          })
          .catch((err) => {
            setOpacity(false);
            setErreurIAC(true);
          });
        }
        deuxiemeReq();
        //2e requete
      })
      .catch((err) => {
        setOpacity(false);
        setErreurIAC(true);
      });
      // 1ere requete
  }


  // recapitulatif Localisation (page) - IAC
  //on affiche le recapitulatif de la Localisation
  const [recapitulatifLocalisationPageIAC, setRecapitulatifLocalisationPageIAC] = useState(false);
  function CloseRecapitulatifLocalisationPageIAC() {
    setRecapitulatifLocalisationPageIAC(false);
  }

  //on enregistre la Localisation (zone d'habitation) - IAC
  /*quand on clique sur une donnees, ca ne s'enregistre pas directement sur les variables
  enregistrées, on les mets d'abord dans des variables selectionnées. Maintenant quand 
  l'utilisateur va cliquer sur Enregistrer, c'est a ce moment qu'on va les prendres dans les 
  variables selectionnées pour les mettres dans les variables enregistrées */
  function EnregistrerLocalisationIAC() {
    //ici on prend les donnees dans les variables selectionnées
    
    const idPaysSelectionner = localStorage.getItem("idCountryIAC"); //Pays Selectionner
    const nomPaysSelectionner = localStorage.getItem("nameCountryIAC");

    const idVilleSelectionner = localStorage.getItem("idCityIAC"); //Ville Selectionner
    const nomVilleSelectionner = localStorage.getItem("nameCityIAC");
    
    const idQuartierSelectionner = localStorage.getItem("idQuarterIAC"); //Quartier Selectionner
    const nomQuartierSelectionner = localStorage.getItem("nameQuarterIAC");

    const idZoneSelectionner = localStorage.getItem("idZoneIAC"); //Zone Selectionner
    const nomZoneSelectionner = localStorage.getItem("nameZoneIAC");

    /* ici on actualise les donnees, on prend les donnees qui etait dans les variables 
    selectionnées, on les mets dans les variables enregistrées */
    
    localStorage.setItem("idCountryIAC", idPaysSelectionner); //pays
    localStorage.setItem("nameCountryIAC", nomPaysSelectionner);
    
    localStorage.setItem("idCityIAC", idVilleSelectionner); //ville
    localStorage.setItem("nameCityIAC", nomVilleSelectionner); 
   
    localStorage.setItem("idQuarterIAC", idQuartierSelectionner); //Quartier
    localStorage.setItem("nameQuarterIAC", nomQuartierSelectionner);
    
    localStorage.setItem("idZoneIAC", idZoneSelectionner); //zone
    localStorage.setItem("nameZoneIAC", nomZoneSelectionner);

    //apres avoir enregistrer, ici on ferme les pages
    setListeDesLanguesPageIAC(false);
    setListeDesPaysPageIAC(false);
    setListeDesVillesPageIAC(false);
    setListeDesQuartiersPageIAC(false);
    setListeDesZonesPageIAC(false);
    setRecapitulatifLocalisationPageIAC(false);

    /* la variable paysSelectionner c'est pour eviter que le collaborateur commette l'erreur 
    d'offrir le numero sans selectionner le pays ou encore c'est pour eviter qu'il fasse telle
    ou telle chose sans selectionner le pays */
    //donc ici on le mets a un 1 car il a bel et bien selectionner le pays et enregistrer
    const paysSelectionnerIAC = "1";
    localStorage.setItem("country", paysSelectionnerIAC);
  }


  //plus d'infos (page) - IAC
  /* sur cette page, on affiche plus d'informations sur le compte izocash - IAC
  on affiche si c'est un compte izocash utilisateur, business, deals ou developpeur et on affiche aussi d'autres informations. */
  const [plusInfosPageIAC, setPlusInfosPageIAC] = useState(false);
  function PlusInfosPageIAC() {
    setPlusInfosPageIAC(true);
  }
  //fermer
  function ClosePlusInfosPageIAC() {
    setPlusInfosPageIAC(false);
  }

  // listes des cadeaux (page) - IAC
  //sur cette page on affiche la liste des cadeaux qu'on pourra offrir a nos futurs partenaires
  const [listeCadeauPageIAC, setListeCadeauPageIAC] = useState(false);
  function ListeCadeauPageIAC() {
    setListeCadeauPageIAC(true);
  }
  //fermer
  function CloseListeCadeauPageIAC() {
    setListeCadeauPageIAC(false);
  }

  // offrir Recharge (page) - IAC
  // c'est la page pour offrir des recharges
  const [offrirRechargePageIAC, setOffrirRechargePageIAC] = useState(false);
  function OffrirRechargePageIAC() {
    setOffrirRechargePageIAC(true);
  }
  //fermer
  function CloseOffrirRechargePageIAC() {
    setOffrirRechargePageIAC(false);
  }

  // ajouter Montant Recharge A offrir (Page) - IAC
  // la page ci nous permet d'ajouter d'autres montants à la liste des montants à offrir
  const [
    ajouterMontantRechargeAoffrirPageIAC,
    setAjouterMontantRechargeAoffrirPageIAC,
  ] = useState(false);
  function AjouterMontantRechargeAoffrirPageIAC() {
    setAjouterMontantRechargeAoffrirPageIAC(true);
  }
  //fermer
  function CloseAjouterMontantRechargeAoffrirPageIAC() {
    setAjouterMontantRechargeAoffrirPageIAC(false);
  }

  // montant Recharge A offrir Ajouter Avec Success - IAC
  /* si le collaborateur a reussi a ajouter un montant à la liste des montants
  à offrir, alors on va l'afficher ce message de success */
  const [
    montantRechargeAoffrirAjouterAvecSuccessIAC,
    setMontantRechargeAoffrirAjouterAvecSuccessIAC,
  ] = useState(false);
  function MontantRechargeAoffrirAjouterAvecSuccessIAC() {
    setMontantRechargeAoffrirAjouterAvecSuccessIAC(true);
  }
  //fermer
  function CloseMontantRechargeAoffrirAjouterAvecSuccessIAC() {
    setMontantRechargeAoffrirAjouterAvecSuccessIAC(false);
  }

  // offrir Recharge Confirmation - IAC
  /* ca c'est la page de confirmation, pour que le collaborateur confirme s'il
  veut vraiment offrir une recharge gratuite */
  const [offrirRechargeConfirmationIAC, setOffrirRechargeConfirmationIAC] =
    useState(false);
  function OffrirRechargeConfirmationIAC() {
    setOffrirRechargeConfirmationIAC(true);
  }
  //fermer
  function CloseOffrirRechargeConfirmationIAC() {
    setOffrirRechargeConfirmationIAC(false);
  }

  // recharge Offerte Success - IAC
  /* ca c'est la page de success, lorsque la recharge a ete offerte, on va 
  afficher cette page */
  // la page ci nous permet d'ajouter d'autres montants à la liste des montants à offrir
  const [rechargeOfferteSuccessIAC, setRechargeOfferteSuccessIAC] =
    useState(false);
  function RechargeOfferteSuccessIAC() {
    setRechargeOfferteSuccessIAC(true);
  }
  //fermer
  function CloseRechargeOfferteSuccessIAC() {
    setRechargeOfferteSuccessIAC(false);
  }

  /* lorsqu'on clique sur une publication, une popup va s'ouvrir, ensuite on pourra mettre 
    une page en avant */
  const [pageEnAvant, setPageEnAvant] = useState(false);
  function PageEnAvant() {
    setPageEnAvant(!pageEnAvant);
  }

  // afficher les postes de tout les utilisateurs
  const [apiPosts, setApiPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_ALRANI_API}/api/postAA/`)
        .then((res) => {
          setApiPosts(res.data);
          setIsLoading(false);
        }); /*
        .catch((err) => {
          setIsLoading(false);
          setErreur(true);
        });*/
    }
    get();
  }, []);

  // ceci va permettre d'afficher un message de success lorsque la publication sera mise en avant
  const [publicationEnAvantSuccess, setPublicationEnAvantSuccess] =
    useState(false);
  function ClosePublicationEnAvantSuccess() {
    setPublicationEnAvantSuccess(false);
  }
  // ceci va permettre d'afficher un message de success lorsque la page sera mise en avant
  const [pageEnAvantSuccess, setPageEnAvantSuccess] = useState(false);
  function ClosePageEnAvantSuccess() {
    setPageEnAvantSuccess(false);
  }
  // ceci va permettre d'afficher un message de success lorsque la page sera actualiser
  // on actualise la page pour avoir les infos de l'utilisateur/ userInfos
  const [pageActualiserSuccess, setPageActualiserSuccess] = useState(false);
  function ClosePageActualiserSuccess() {
    setPageActualiserSuccess(false);
  }
  // ici on va afficher un message de success lorsque les publications seront actualiser
  /* on actualise les publications pour obtenir de nouvelles publications ou pour obtenir les
  modifications qui ont ete effectuées au niveau des publications */
  const [publicationActualiserSuccess, setPublicationActualiserSuccess] =
    useState(false);
  function ClosePublicationActualiserSuccess() {
    setPublicationActualiserSuccess(false);
  }
  // logique pour mettre la page en avant
  async function MettrePageEnAvant() {
    setOpacity(true);
    const PageVisible = "1";
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_ALRANI_API}/api/userAA/update/${idPage}`,
      data: {
        visible: PageVisible,
      },
    })
      .then((res) => {
        setOpacity(false);
        setPageEnAvantSuccess(true);
      })
      .catch((err) => {
        setOpacity(false);
        setErreur(true);
      });
  }
  // logique pour mettre la publication en avant
  const idPost = localStorage.getItem("https://alrani.com/idPost");
  async function MettrePublicationEnAvant() {
    const PublicationVisible = "1";
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_ALRANI_API}/api/postAA/update/${idPost}`,
      data: {
        visible: PublicationVisible,
      },
    })
      .then((res) => {
        setOpacity(false);
        setPublicationEnAvantSuccess(true);
      })
      .catch((err) => {
        setOpacity(false);
        setErreur(true);
      });
  }

  /* cette requette c'est pour afficher le nom du proprietaire de la page au niveau de 
  la popup pour mettre la page en avant */
  /* ici c'est juste une requete dans l'api user */
  /* on obtient les infos du proprietaire de la page (son nom,... ) */
  const [apiAuteur, setApiAuteur] = useState([]);
  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_ALRANI_API}/api/userAA/`)
        .then((res) => {
          setApiAuteur(res.data);
        });
    }
    get();
  }, []);
  const idPage = localStorage.getItem("https://alrani.com/idPage");
  const filtreApiAuteur = apiAuteur.filter((api) => api._id === idPage);
  const nomAuteur = filtreApiAuteur.map((api) => api.nomAuteur);

  // le filtre ci c'est pour afficher les infos du post by id (c-a-d les infos de chaque posts)
  /* ici on veut afficher [visible], visible c'est ce qui nous permet de savoir si le post a  
  ete mise en avant */
  const filtreApiPosts = apiPosts.filter((api) => api._id === idPost);

  // ici on Actualise la page/actualise les infos de l'utilisateur/infos de l'auteur
  async function ActualiserPage(e) {
    setOpacity(true);
    e.preventDefault();
    await axios
      .get(`${process.env.REACT_APP_ALRANI_API}/api/userAA/`)
      .then((res) => {
        setApiAuteur(res.data);
        setOpacity(false);
        setPageActualiserSuccess(true);
      })
      .catch((err) => {
        setOpacity(false);
        setErreur(true);
      });
  }
  /* ici on Actualise les publications pour afficher les nouvelles publications, ou pour afficher
  les modifications qui ont ete apportées au niveau des publications */
  async function ActualiserPublication(e) {
    setOpacity(true);
    e.preventDefault();
    await axios
      .get(`${process.env.REACT_APP_ALRANI_API}/api/postAA/`)
      .then((res) => {
        setApiPosts(res.data);
        setOpacity(false);
        setPublicationActualiserSuccess(true);
      })
      .catch((err) => {
        setOpacity(false);
        setErreur(true);
      });
  }

  return (
    <>
      {/* controlPage */}
      {/* quand on arrive sur alrani.com/control, c'est cette page qui va s'afficher en premier */}
      {/* si la personne a les fonctionnalités control au niveau de son compte izocash 
      alors on va l'afficher le card pour entrer son mot de passe IA ;
      sinon on va l'afficher le card ou s'est écrit Erreur */}
      {controlPage && (
        <>
          <div className="controlPage">
            <div className="align">
              <div className="card">
                <p>Erreur !</p>
              </div>
              {/* card */}

              <div className="card">
                <p>Entrer votre mot de passe IA</p>
                <input type="text" placeholder="..." />
                <button onClick={ApplicationAcontroller}>Valider</button>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* controlPage */}
        </>
      )}
      {/* control Page */}

      {/* application A controller */}
      {/* application A controller */}
      {/* on affiche la liste des applications a controller */}
      {applicationAcontroller && (
        <>
          <div className="applicationAcontroller">
            <div className="align">
              <div className="card">
                <div className="card">
                  <p>Applications - Internet Group 2023</p>
                </div>
                {/* card */}

                {/* Alrani */}
                <div className="card">
                  <p onClick={AlraniControlPage}>Alrani</p>
                </div>

                {/* izocash */}
                <div className="card">
                  <p onClick={IzocashControlPage}>izocash</p>
                </div>

                {/* Veil Brillant */}
                <div className="card"> <p onClick={VeilBrillantControlPage}>Veil Brillant</p> </div>

                {/* Vixinol */}
                <div className="card">
                  <p>Vixinol</p>
                </div>
                {/* card */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* applicationAcontroller */}
        </>
      )}
      {/* application A controller */} 


      {/* veil brillant control Page (gestion de l'application veil brillant) */}
      {/* veil brillant control Page (gestion de l'application veil brillant) */}
      {veilBrillantControlPage && (
        <>
          <div className="veilBrillantAppVBC">
            <div className="close">
              <div className="a"> <p onClick={CloseVeilBrillantControlPage}>Gestion de l'application Veil Brillant</p> </div>
              <div className="b"> </div>
            </div>
            {/* close */}

            {apiVideoVBC.map((api) => (<>
            <div onClick={PageRedirection666ChildApiValidateVideoVBC}>
              <ChildApiValidateVideoVBC api={api} /> 
            </div>
            </>))}

          </div>
          {/* veilBrillantAppVBC */}
        </>
      )}
      {/* veil brillant control Page (gestion de l'application veil brillant) */}


      {/* izocash control Page */}
      {/* izocash control Page */}
      {/* la page ci nous permet de controler l'application izocash */}
      {izocashControlPage && (
        <>
          <div className="izocashControlPage">
            <div className="align">
              <div className="close">
                <p onClick={CloseIzocashControlPage}>
                  Gestion de l'application izocash
                </p>

                <svg
                  onClick={MenuIAC}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  cursor="pointer"
                  fill="none"
                  viewBox="-0.5 0 25 25"
                >
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6.5 10.32a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM17.5 10.32a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM6.5 21.32a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM17.5 21.32a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                  ></path>
                </svg>
              </div>
              {/* close */}

              {/* ici on affiche en fonction de ce qui est true, 
              quand on clique sur l'option 1 , on affiche ce qui est dans le body 1
              quand on clique sur l'option 2 , on affiche ce qui est dans le body 2 , ainsi
             de suite pour l'option 3, l'option 4, ...*/}
              <div className="options">
                
                {/* head 1 - toutLesComptes */}
                {toutLesComptesbody1IAC && (
                  <>
                    <div className="active"> <button>Tout les comptes</button> </div>
                    <div className="noActive"> <button onClick={Verify666izocashControlPage}>Verify</button> </div>
                  </>
                )}

                
                {/* head 2 - verify */}
                {verify666izocashControlPage && (
                  <>
                    <div className="noActive"> <button onClick={ToutLesComptesbody1IAC}>Tout les comptes</button> </div>
                    <div className="active"> <button>Verify</button> </div>
                  </>
                )}

              </div>
              {/* options */}

              {/* body 1 - tout les comptes */}
              {toutLesComptesbody1IAC && (
                <>
                  {/* rechercher un compte */}
                  <div className="rechercheIAC">
                    <div className="block-un">
                      <div className="display">
                        <div className="a">
                          <label for="css">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20px"
                              cursor="pointer"
                              viewBox="0 0 30 30"
                            >
                              <path d="M10.5 17a.506.506 0 00-.344.15L.64 26.652c-.896.893-.776 2.134-.105 2.81.67.674 1.913.795 2.81-.103l9.49-9.49c.492-.472-.25-1.182-.706-.708l-9.49 9.49c-.58.58-1.07.43-1.396.104-.326-.328-.47-.826.102-1.397l9.517-9.503c.326-.318.084-.857-.363-.857zm8.45-14.93a8 8 0 00-4.39 2.063c-.49.453.21 1.17.68.734a6.999 6.999 0 018.022-1.06c.58.332 1.053-.603.465-.885a7.994 7.994 0 00-4.776-.852zM20 0c-5.517 0-10 4.483-10 10s4.483 10 10 10 10-4.483 10-10S25.517 0 20 0zm0 1c4.976 0 9 4.024 9 9s-4.024 9-9 9-9-4.024-9-9 4.024-9 9-9z"></path>
                            </svg>
                          </label>
                        </div>
                        {/* a */}

                        <div className="b">
                          <input id="css" type="text" placeholder="..." />
                        </div>
                        {/* b */}
                      </div>
                      {/* display */}
                    </div>
                    {/* block-un */}

                    {/* on affiche les donnees de la recherche dans l'enfant api */}
                    <div> <hr /><EnfantApiRechercheIAC /><hr /> </div>
                  </div>

                  {/* on affiche tout les comptes IA */}
                  <div onClick={InfosUtilisateurPageIAC} className="toutLesComptesIAC">
                    {apiAccountIAC.map((api) => (
                    <>
                      <EnfantApiToutLesComptesIAC api={api} />
                    </>
                    ))}
                  </div>

                </>
              )}
          
              {/* body 2 - verify */}
              {verify666izocashControlPage && (
                <>

                  {/* on affiche les points retraits qui ont envoyer leur informations pour qu'on puisse les valider */}
                  {apiInfosValidateIAC.map((api) => (
                    <>
                      <div onClick={PageRedirection666ChildApiVerifyIAC}>
                        <ChildApiVerifyIAC api={api} />
                      </div>
                    </>
                  ))}

                </>
              )}
             
            </div>
            {/* align */}
          </div>
          {/* izocashControlPage */}
        </>
      )}
      {/* izocash control Page */}

      {/* Menu - IAC */}
      {/* Menu - IAC */}
      {/* ca c'est le menu au niveau de l'application IAC */}
      {menuIAC && (<>
          <div className="menuIAC">
            <div className="close">
              <div onClick={CloseMenuIAC} className="a"> <SvgLeft /> </div>
              <div className="b"> <p onClick={Dev}>izocash.com</p> </div>
            </div>
            {/* close */}

            <div className="hr"> <hr /> </div>
            {/* hr */}

            <div className="block-un">
              <p onClick={IA}>Menu</p>
            </div>
            {/* block-un */}

            {/* Offrir */}
            <div className="block-deux">
              <p onClick={OffrirChoiceIAC}>Offrir</p>
              <hr />
            </div> 

            {/* Numéros virtuels offerts */}
            <div className="block-deux">
              <p onClick={NumeroVirtuelOffertPageIAC}>
                Numéros virtuels offerts
              </p>
              <hr />
            </div>

            {/* Corriger un Numéro virtuel */}
            <div className="block-deux">
              <p onClick={FixVirtualNumberIAC}>Corriger un Numéro virtuel</p>
              <hr />
            </div>

            {/* Fil d'actualité */}
            <div className="block-deux">
              <p onClick={HomeAAC}>Fil d'actualité</p>
              <hr />
            </div>

            {/* Jolies Posts */}
            <div className="block-deux">
              <p onClick={BestPostPageAAC}>Jolies Posts</p>
              <hr />
            </div>
           
            <div className="block-deux"> {/* Posts Silencieux */}
              <p onClick={SilentPostPageAAC}>Posts Silencieux</p>
              <hr />
            </div>

            <div className="block-deux"> {/* Posts Silencieux */}
              <p onClick={SilentUserPageAAC}>Mettre sous Silencieux</p>
              <hr />
            </div>

            <div className="block-deux"> {/* Silencieux */}
              <p onClick={RemoveSilentUserPageAAC}>Silencieux</p>
              <hr />
            </div>

            <div className="block-deux"> {/* Publier un Film (sur Donazia) */}
              <p>Publier un Film (sur Donazia)</p>
              <hr />
            </div>

            <div className="block-deux"> {/* Activer Donazia DA */}
              <p onClick={ActivateDonaziaDAC}>Activer Donazia DA</p>
              <hr />
            </div>

            <div className="block-deux"> {/* Désactiver Donazia DA */}
              <p onClick={DeactivateDonaziaDAC}>Désactiver Donazia DA</p>
              <hr />
            </div>


            <div className="block-deux"> {/* Activer la gratuité DA */}
              <p onClick={ActivateFreeDAC}>Activer la gratuité DA</p>
              <hr />
            </div>

            <div className="block-deux"> {/* Désactiver la gratuité DA */}
              <p onClick={DeactivateFreeDAC}>Désactiver la gratuité DA</p>
              <hr />
            </div>


            <div className="block-deux"> {/* Activer l'abonnement annuel DA */}
              <p onClick={ActivateSubscriptionDAC}>Activer l'abonnement annuel DA</p>
              <hr />
            </div>

            <div className="block-deux"> {/* Désactiver l'abonnement annuel DA */}
              <p onClick={DeactivateSubscriptionDAC}>Désactiver l'abonnement annuel DA</p>
              <hr />
            </div>

            <div className="block-deux">  {/* Publicité en cours */}
              <p onClick={AdProgressAAC}>Publicité en cours</p>
              <hr />
            </div>

            <div className="block-deux"> {/* Publicité en pause */}
              <p onClick={AdOnPauseAAC}>Publicité en pause</p> 
              <hr />
            </div>

            <div className="block-deux"> {/* Ajouter myAccount */}
              <p onClick={AddMyAccountPageAAC}>Ajouter myAccount</p> 
              <hr />
            </div>

            <div className="block-deux"> {/* myAccount */}
              <p onClick={RemoveMyAccountPageAAC}>myAccount</p> 
              <hr />
            </div>

            <div className="block-deux"> {/* Faire disparaitre (fil d'actualité) */}
              <p onClick={HidePostPageOnhomeAA}>Faire disparaitre (fil d'actualité)</p> 
              <hr />
            </div>

            <div className="block-deux"> {/* Faire disparaitre (Général) */}
              <p onClick={HidePostPageGeneralAA}>Faire disparaitre (Général)</p> 
              <hr />
            </div>

            <div className="block-deux"> {/* Réinitialiser la monetisation */}
              <p onClick={ReinitializeMonetizationPageAAC}>Réinitialiser la Monétisation AA</p>
              <hr />
            </div>

            <div className="block-deux"> {/* faire disparaitre une conversation */}
              <p onClick={HideConversationPageAAC}>Faire disparaitre une conversation AA</p>
              <hr />
            </div>

            <div className="block-deux"> {/* Bloquer un utilisateur */}
              <p onClick={BlockUserPageAAC}>Bloquer un utilisateur AA</p>
              <hr />
            </div>

            <div className="block-deux"> {/* Débloquer un utilisateur */}
              <p onClick={DisblockUserPageAAC}>Débloquer un utilisateur AA</p>
              <hr />
            </div>

            <div className="block-deux"> {/* change password */}
              <p onClick={ChangePasswordPageAAC}>Changer le mot de passe AA</p>
              <hr />
            </div>

            <div className="block-deux"> {/* change password */}
              <p onClick={CorrectionGeneral}>Correction Général</p>
              <hr />
            </div>

            <div className="block-deux"> {/* Activer le badge de certification FA */}
              <p onClick={ActivateBadgeFAC}>Activer le Badge de certification FA</p>
              <hr />
            </div>

            <div className="block-deux"> {/* retirer le badge de certification FA */}
              <p onClick={RemoveBadgeFAC}>Retirer le Badge de certification FA</p>
              <hr />
            </div>

            {/* Déconnexion */}
            <div className="block-deux">
              <p>Déconnexion</p>
              <hr />
            </div>
            {/* block-deux */}
          </div>
          {/* menuIAC */}
        </>
      )}
      {/* Menu - IAC */}


      {/* corriger un numero virtuel - IAC */}
      {/* corriger un numero virtuel - IAC */}
      {fixVirtualNumberIAC && (
        <>
          <div className="completerInformationEntreprisePageIA">
            <div className="close">
              <div onClick={CloseFixVirtualNumberIAC} className="a"> <SvgLeft /> </div>
              <div className="a"> <p>Corriger un Numéro virtuel</p> </div>
            </div>

            <div className="hr"> <hr /> </div>

            {/* Ancien Numéro virtuel */}
            <div className="block-trois">
              <div className="a"> <p>Ancien Numéro virtuel</p> </div>

              <div className="b">
                <p>Saisir le Numéro virtuel à retirer</p>
                <input type="text" value={writeOldVirtualNumber} onChange={(e) => setWriteOldVirtualNumber(e.target.value)} />
              </div>
            </div>

            {/* Nouveau Numéro virtuel */}
            <div className="block-trois">
              <div className="a"> <p>Nouveau Numéro virtuel</p> </div>

              <div className="b">
                <p>Saisir le Nouveau Numéro virtuel qui sera enregistré</p>
                <input type="text" value={writeNewVirtualNumber} onChange={(e) => setWriteNewVirtualNumber(e.target.value)} />
              </div>
            </div>

            {/* Nom du Propriétaire du Nouveau Numéro virtuel */}
            <div className="block-trois">
              <div className="a"> <p>Propriétaire</p> </div>

              <div className="b">
                <p>Saisir le Nom du Propriétaire du Nouveau Numéro virtuel</p>
                <input type="text" value={writeNameOwnerVirtualNumber} onChange={(e) => setWriteNameOwnerVirtualNumber(e.target.value)} />
              </div>
            </div>

            <div className="block-quatre"> 
              <div onClick={NewVirtualNumberIAC} className="a"> <SvgRight /> </div>
              <div onClick={NewVirtualNumberIAC} className="b"> <p>Valider</p> </div>
            </div>
            {/* block-quatre */}
          </div>
          {/* completerInformationEntreprisePageIA */}
        </>
      )}
      {/* corriger un numero virtuel - IAC */} 


      {/* page pour ajouter myAccount - AAC */}
      {/* page pour ajouter myAccount - AAC */}
      {addMyAccountPageAAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseAddMyAccountPageAAC} className="aa"> <SvgLeft /> </div>
                <div className="bb"> <p onClick={RefreshAccountAA}>Ajouter myAccount</p> </div>
              </div>
              {/* a */}

              <div className="b"></div>
              {/* b */}
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Page pour Ajouter myAccount</p>
          <div onClick={ConfirmationAddMyAccountAAC}>
            {allAccountAA.map((api) => (<>
              <ChildApiAccountAAC api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/* page pour ajouter myAccount - AAC */}


      {/* confirmation - ajouter myAccount */}
      {/* confirmation - ajouter myAccount */}
      {confirmationAddMyAccountAAC && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Êtes-vous sûr d'ajouter {nameAccountAAC} comme myAccount ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={AddMyAccountAAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationAddMyAccountAAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation - ajouter myAccount */}


      {/* page pour retirer myAccount - AAC */}
      {/* page pour retirer myAccount - AAC */}
      {removeMyAccountPageAAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseRemoveMyAccountPageAAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshAccountAA} className="bb"> <p>MyAccount</p> </div>
              </div>
              {/* a */}

              <div className="b"></div>
              {/* b */}
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Ici, on peut retirer un compte qui n'est pas myAccount</p>
          <div onClick={ConfirmationRemoveMyAccountAAC}>
            {myAccountAA.map((api) => (<>
              <ChildApiAccountAAC api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/* page pour retirer myAccount - AAC */}

 
      {/* confirmation - retirer myAccount */}
      {/* confirmation - retirer myAccount */}
      {confirmationRemoveMyAccountAAC && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Retirer! Êtes-vous sûr de retirer {nameAccountAAC} comme myAccount ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={RemoveMyAccountAAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationRemoveMyAccountAAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation - retirer myAccount */}


      {/* page pour mettre un utilisateur sous silencieux - AAC */}
      {/* page pour mettre un utilisateur sous silencieux - AAC */}
      {silentUserPageAAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseSilentUserPageAAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshUserAA} className="bb"> <p>Mettre sous Silencieux</p> </div>
              </div>
              <div className="b"></div>
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Choisir un utilisateur à mettre sous Silencieux</p>
          <div onClick={ConfirmationSilentUserPageAAC}>
            {allUserAA.map((api) => (<>
              <ChildApiSilentUserAAC api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/*page pour mettre un utilisateur sous silencieux - AAC */}


      {/* confirmation (confirmer l'utilisateur a mettre sous silencieux) */}
      {/* confirmation (confirmer l'utilisateur a mettre sous silencieux) */}
      {confirmationSilentUserPageAAC && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Êtes-vous sûr de mettre {nameUserAAC} sous Silencieux ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={SilentUserAAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationSilentUserPageAAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation (confirmer l'utilisateur a mettre sous silencieux) */}


      {/*page pour retirer un utilisateur du silencieux - AAC */}
      {/*page pour retirer un utilisateur du silencieux - AAC */}
      {removeSilentUserPageAAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseRemoveSilentUserPageAAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshUserAA} className="bb"> <p>Silencieux</p> </div>
              </div>
              <div className="b"></div>
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Choisir l'utilisateur a retirer du silencieux</p>
          <div onClick={ConfirmationRemoveSilentUserPageAAC}>
            {allUserSilentAA.map((api) => (<>
              <ChildApiSilentUserAAC api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/*page pour retirer un utilisateur du silencieux - AAC */}


      {/* confirmation (confirmer l'utilisateur a retirer du silencieux) */}
      {/* confirmation (confirmer l'utilisateur a retirer du silencieux) */}
      {confirmationRemoveSilentUserPageAAC && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Retirer! {nameUserAAC}, Êtes-vous sûr de lui retirer du Silencieux ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={RemoveSilentUserAAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationRemoveSilentUserPageAAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation (confirmer l'utilisateur a retirer du silencieux) */}


      {/* page pour activer donazia app - DAC */}
      {/* page pour activer donazia app - DAC */}
      {activateDonaziaDAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseActivateDonaziaDAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshUserAA} className="bb"> <p>Activer Donazia App</p> </div>
              </div>
              <div className="b"></div>
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Choisir l'utilisateur à activer Donazia App</p>
          <div onClick={ConfirmationActivateDonaziaDAC}>
            {allAccountAA.map((api) => (<>
              <ChildApiActivateDonaziaDAC api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/* page pour activer donazia app - DAC */}


      {/* confirmation (confirmer l'utilisateur à activer Donazia App) */}
      {/* confirmation (confirmer l'utilisateur à activer Donazia App) */}
      {confirmationActivateDonaziaDAC && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Êtes-vous sûr d'activer à {nameAccount} Donazia App ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={NowActivateDonaziaDAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationActivateDonaziaDAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation (confirmer l'utilisateur à activer Donazia App) */}


      {/* page pour désactiver Donazia App à un utilisateur - DAC */}
      {/* page pour désactiver Donazia App à un utilisateur - DAC */}
      {deactivateDonaziaDAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseDeactivateDonaziaDAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshUserAA} className="bb"> <p>Désactiver Donazia App</p> </div>
              </div>
              <div className="b"></div>
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Choisir l'utilisateur à désactiver Donazia App</p>
          <div onClick={ConfirmationDeactivateDonaziaDAC}>
            {allAccountAA.map((api) => (<>
              <ChildApiDeactivateDonaziaDAC api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/* page pour désactiver Donazia App à un utilisateur - DAC */}


      {/* confirmation (confirmer l'utilisateur a désactiver Donazia App) */}
      {/* confirmation (confirmer l'utilisateur a désactiver Donazia App) */}
      {confirmationDeactivateDonaziaDAC && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Désactiver! , Êtes-vous sûr de désactiver Donazia App à {nameAccount} ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={NowDeactivateDonaziaDAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationDeactivateDonaziaDAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation (confirmer l'utilisateur a désactiver Donazia App) */}


      {/* page pour activer la gratuité à un utilisateur - DAC */}
      {/* page pour activer la gratuité à un utilisateur - DAC */}
      {activateFreeDAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseActivateFreeDAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshUserAA} className="bb"> <p>Activer la gratuité DA</p> </div>
              </div>
              <div className="b"></div>
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Choisir l'utilisateur à activer la gratuité DA</p>
          <div onClick={ConfirmationActivateFreeDAC}>
            {allAccountAA.map((api) => (<>
              <ChildApiActivateFreeDAC api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/* page pour activer la gratuité à un utilisateur - DAC */}


      {/* confirmation (confirmer l'utilisateur à activer la gratuité) */}
      {/* confirmation (confirmer l'utilisateur à activer la gratuité) */}
      {confirmationActivateFreeDAC && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Activer! , Êtes-vous sûr d'activer la gratuité à {nameAccount} ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={NowActivateFreeDAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationActivateFreeDAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation (confirmer l'utilisateur à activer la gratuité) */}


      {/* page pour désactiver la gratuité à un utilisateur - DAC */}
      {/* page pour désactiver la gratuité à un utilisateur - DAC */}
      {deactivateFreeDAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseDeactivateFreeDAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshUserAA} className="bb"> <p>Désactiver la gratuité DA</p> </div>
              </div>
              <div className="b"></div>
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Choisir l'utilisateur à désactiver la gratuité DA</p>
          <div onClick={ConfirmationDeactivateFreeDAC}>
            {allAccountAA.map((api) => (<>
              <ChildApiDeactivateFreeDAC api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/* page pour désactiver la gratuité à un utilisateur - DAC */}


      {/* confirmation (confirmer l'utilisateur à désactiver la gratuité) */}
      {/* confirmation (confirmer l'utilisateur à désactiver la gratuité) */}
      {confirmationDeactivateFreeDAC && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Désactiver! , Êtes-vous sûr de désactiver la gratuité à {nameAccount} ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={NowDeactivateFreeDAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationDeactivateFreeDAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation (confirmer l'utilisateur à désactiver la gratuité) */}


      {/* page pour activer l'abonnement annuel - DAC */}
      {/* page pour activer l'abonnement annuel - DAC */}
      {activateSubscriptionDAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseActivateSubscriptionDAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshUserAA} className="bb"> <p>Activer l'abonnement annuel</p> </div>
              </div>
              <div className="b"></div>
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Choisir l'utilisateur à activer l'abonnement annuel</p>
          <div onClick={ConfirmationActivateSubscriptionDAC}>
            {allAccountAA.map((api) => (<>
              <ChildApiActivateSubscriptionDAC api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/* page pour activer l'abonnement annuel - DAC */}


      {/* confirmation (confirmer l'utilisateur à activer l'abonnement annuel) */}
      {/* confirmation (confirmer l'utilisateur à activer l'abonnement annuel) */}
      {confirmationActivateSubscriptionDAC && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Êtes-vous sûr d'activer l'abonnement annuel à {nameAccount} ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={NowActivateSubscriptionDAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationActivateSubscriptionDAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation (confirmer l'utilisateur à activer l'abonnement annuel) */}


      {/* page pour désactiver l'abonnement annuel à un utilisateur - DAC */}
      {/* page pour désactiver l'abonnement annuel à un utilisateur - DAC */}
      {deactivateSubscriptionDAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseDeactivateSubscriptionDAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshUserAA} className="bb"> <p>Désactiver l'abonnement annuel</p> </div>
              </div>
              <div className="b"></div>
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Choisir l'utilisateur à désactiver l'abonnement annuel</p>
          <div onClick={ConfirmationDeactivateSubscriptionDAC}>
            {allAccountAA.map((api) => (<>
              <ChildApiDeactivateSubscriptionDAC api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/* page pour désactiver l'abonnement annuel à un utilisateur - DAC */}


      {/* confirmation (confirmer l'utilisateur a désactiver l'abonnement annuel) */}
      {/* confirmation (confirmer l'utilisateur a désactiver l'abonnement annuel) */}
      {confirmationDeactivateSubscriptionDAC && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Désactiver! , Êtes-vous sûr de désactiver l'abonnement annuel à {nameAccount} ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={NowDeactivateSubscriptionDAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationDeactivateSubscriptionDAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation (confirmer l'utilisateur a désactiver l'abonnement annuel) */}


      {/* page pour activer le badge de certification - FAC */}
      {/* page pour activer le badge de certification - FAC */}
      {activateBadgeFAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseActivateBadgeFAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshUserAA} className="bb"> <p>Activer le Badge de certification FA</p> </div>
              </div>
              <div className="b"></div>
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Choisir l'utilisateur à activer le Badge de certification</p>
          <div onClick={ConfirmationActivateBadgeFAC}>
            {allAccountAA.map((api) => (<>
              <ChildApiActivateBadgeFAC api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/* page pour activer le badge de certification - FAC */}


      {/* confirmation (confirmer l'utilisateur à activer le badge de certification) */}
      {/* confirmation (confirmer l'utilisateur à activer le badge de certification) */}
      {confirmationActivateBadgeFAC && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Êtes-vous sûr d'activer le Badge de certification à {nameAccount} ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={NowActivateBadgeFAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationActivateBadgeFAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation (confirmer l'utilisateur à activer le badge de certification) */}


      {/* page pour retirer le badge de certification à un utilisateur - FAC */}
      {/* page pour retirer le badge de certification à un utilisateur - FAC */}
      {removeBadgeFAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseRemoveBadgeFAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshUserAA} className="bb"> <p>Retirer le Badge de certification FA</p> </div>
              </div>
              <div className="b"></div>
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Choisir l'utilisateur à retirer le Badge de certification</p>
          <div onClick={ConfirmationRemoveBadgeFAC}>
            {allAccountAA.map((api) => (<>
              <ChildApiRemoveBadgeFAC api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/* page pour retirer le badge de certification à un utilisateur - FAC */}


      {/* confirmation (confirmer l'utilisateur a retirer le badge de certification) */}
      {/* confirmation (confirmer l'utilisateur a retirer le badge de certification) */}
      {confirmationRemoveBadgeFAC && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Retirer! , Êtes-vous sûr de retirer le Badge de certification à {nameAccount} ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={NowRemoveBadgeFAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationRemoveBadgeFAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation (confirmer l'utilisateur a retirer le badge de certification) */}


      {/* page pour reinitialiser la monetisation - AAC */}
      {/* page pour reinitialiser la monetisation - AAC */}
      {reinitializeMonetizationPageAAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseReinitializeMonetizationPageAAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshAccountAA} className="bb"> <p>Réinitialiser la Monétisation (AAC)</p> </div>
              </div>
              <div className="b"></div>
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Choisir la page à réinitialiser la Monétisation</p>
          <div onClick={ConfirmationReinitializeMonetizationPageAAC}>
            {apiAccountAA.map((api) => (<>
              <ChildApiAccountAAC api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/* page pour reinitialiser la monetisation - AAC */}

      {/* confirmation (confirmer la page a reinitialiser la monetisation) */}
      {/* confirmation (confirmer la page a reinitialiser la monetisation) */}
      {confirmationReinitializeMonetizationPageAAC && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Êtes-vous sûr de Réinitialiser la Monétisation de {nameAccountAAC} ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={ReinitializeMonetizationAAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationReinitializeMonetizationPageAAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation (confirmer la page a reinitialiser la monetisation) */}


      {/* page pour faire disparaitre une conversation - AAC */}
      {/* page pour faire disparaitre une conversation - AAC */}
      {hideConversationPageAAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseHideConversationPageAAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshConversationAA} className="bb"> <p>Faire disparaitre une conversation (AAC)</p> </div>
              </div>
              <div className="b"></div>
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Choisir la conversation à Faire disparaitre</p>
          <div onClick={ConfirmationHideConversationPageAAC}>
            {visibleConversationAA.map((api) => (<>
              <ChildApiConversationAAC api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/* page pour faire disparaitre une conversation - AAC */}

      {/* confirmation (confirmer la conversation a faire disparaitre) */}
      {/* confirmation (confirmer la conversation a faire disparaitre) */}
      {confirmationHideConversationPageAAC && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Êtes-vous sûr de faire disparaitre la conversation entre {nameOwnerAAC} et {nameOtherAAC} ?  *id de la conversation: {idConversationAAC}**</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={HideConversationAAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationHideConversationPageAAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation (confirmer la conversation a faire disparaitre) */}


      {/* page pour bloquer un utilisateur - AAC */}
      {/* page pour bloquer un utilisateur - AAC */}
      {blockUserPageAAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseBlockUserPageAAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshUserAA} className="bb"> <p>Bloquer un utilisateur (AAC)</p> </div>
              </div>
              <div className="b"></div>
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Choisir l'utilisateur à bloquer</p>
          <div onClick={ConfirmationBlockUserPageAAC}>
            {allUserSilentAA.map((api) => (<>
              <ChildApiSilentUserAAC api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/* page pour bloquer un utilisateur - AAC */}

      {/* confirmation (confirmer l'utilisateur a bloquer) */}
      {/* confirmation (confirmer l'utilisateur a bloquer) */}
      {confirmationBlockUserPageAAC && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>bloquer {nameUserAAC}, Êtes-vous sûr de bloquer {nameUserAAC} ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={BlockUserAAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationBlockUserPageAAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation (confirmer l'utilisateur a bloquer) */}


      {/* page pour débloquer un utilisateur - AAC */}
      {/* page pour débloquer un utilisateur - AAC */}
      {disblockUserPageAAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseDisblockUserPageAAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshUserAA} className="bb"> <p>Débloquer un utilisateur (AAC)</p> </div>
              </div>
              <div className="b"></div>
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Choisir l'utilisateur à débloquer</p>
          <div onClick={ConfirmationDisblockUserPageAAC}>
            {allUserSilentAA.map((api) => (<>
              <ChildApiSilentUserAAC api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/* page pour débloquer un utilisateur - AAC */}

      {/* confirmation (confirmer l'utilisateur à débloquer) */}
      {/* confirmation (confirmer l'utilisateur à débloquer) */}
      {confirmationDisblockUserPageAAC && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>débloquer {nameUserAAC}, Êtes-vous sûr de débloquer {nameUserAAC} ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={DisblockUserAAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationDisblockUserPageAAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation (confirmer l'utilisateur à débloquer) */}


      {/* page pour changer le mot de passe - AAC */}
      {/* page pour changer le mot de passe - AAC */}
      {changePasswordPageAAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseChangePasswordPageAAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshUserAA} className="bb"> <p>Changer le mot de passe (AAC)</p> </div>
              </div>
              <div className="b"></div>
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Choisir l'utilisateur à changer le mot de passe utilisateur</p>
          <div onClick={ConfirmationChangePasswordAAC}>
            {apiUserAA.map((api) => (<>
              <ChildApiSilentUserAAC api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/* page pour changer le mot de passe - AAC */}

      {/* confirmation (page pour confirmer et changer le mot de passe) - AAC */}
      {/* confirmation (page pour confirmer et changer le mot de passe) - AAC */}
      {confirmationChangePasswordAAC && (<>
          <div className="saisirNomBeneficiaireNumeroVirtuelGratuitIAC">
            <div className="align">
              <div className="card">
                <div className="block-un"> <p onClick={CloseConfirmationChangePasswordAAC}>Changer le mot de passe de {nameUserAAC} ?</p> </div>
                <div className="block-deux"> <input type="text" value={writePasswordAAC} onChange={(e) => setWritePasswordAAC(e.target.value)} placeholder="Saisir le nouveau mot de passe.." /> </div>

                {isLoadingAAC ? (<><div className="loader-display-flex"> <Loader /> </div></>
                ):(<><div className="block-trois"> <button onClick={ChangePasswordAAC}> <p>Changer</p> <hr /> </button></div></>)}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* saisirNomBeneficiaireNumeroVirtuelGratuitIAC */}
        </>)}
        {/* confirmation (page pour confirmer et changer le mot de passe) - AAC */}


      {/* page pour faire disparaitre un post (fil d'actualité) */}
      {hidePostPageOnhomeAA && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseHidePostPageOnhomeAA} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshPostAA} className="bb"> <p>Faire disparaitre (fil d'actualité)</p> </div>
              </div>

              <div className="b"></div>
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Choisir le post à faire disparaitre du fil d'actualité</p>
          <div onClick={ConfirmationHidePostPageOnhomeAA}>
            {hidePostOnhomeAA.map((api) => (<>
              <ChildApiCorrectPost api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */} 
      </>)}
      {/* page pour faire disparaitre un post (fil d'actualité) */}


      {/* confirmation - confirmer la publication a faire disparaitre (fil d'actualité) */}
      {/* confirmation - confirmer la publication a faire disparaitre (fil d'actualité) */}
      {confirmationHidePostPageOnhomeAA && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Disparaitre! Êtes-vous sûr de vouloir faire disparaitre la publication de {nameAccountAAC} du fil d'actualité ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={HidePostAAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationHidePostPageOnhomeAA}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation - confirmer la publication a faire disparaitre (fil d'actualité) */}


      {/* page pour faire disparaitre un post (Général) */}
      {/* page pour faire disparaitre un post (Général) */}
      {hidePostPageGeneralAA && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseHidePostPageGeneralAA} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshPostAA} className="bb"> <p>Faire disparaitre (Général)</p> </div>
              </div>

              <div className="b"></div>
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Choisir le post à faire disparaitre du fil d'actualité</p>
          <div onClick={ConfirmationHidePostPageGeneralAA}>
            {hidePostGeneralAA.map((api) => (<>
              <ChildApiCorrectPost api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/* page pour faire disparaitre un post (Général) */}


      {/* confirmation - confirmer la publication a faire disparaitre (Général) */}
      {/* confirmation - confirmer la publication a faire disparaitre (Général) */}
      {confirmationHidePostPageGeneralAA && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Faire Disparaitre (Général AA)! Êtes-vous sûr de vouloir faire disparaitre la publication de {nameAccountAAC} du fil d'actualité ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={HidePostAAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationHidePostPageGeneralAA}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation - confirmer la publication a faire disparaitre (Général) */}


      {/* publicité en pause ou terminé (sur cette page on affiche les publicités en pause ou terminé) */}
      {/* publicité en pause ou terminé (sur cette page on affiche les publicités en pause ou terminé) */}
      {adOnPauseAAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseAdOnPauseAAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshPostAA} className="bb"> <p>Publicité en pause ou terminé</p> </div>
              </div>

              <div className="b"></div>
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Choisir la publicité à redémarrer</p>
          <div onClick={ConfirmationAdOnPauseAAC}>
            {adGeneralAA.map((api) => (<>
              <ChildApiCorrectPost api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/* publicité en pause ou terminé (sur cette page on affiche les publicités en pause ou terminé) */}

      {/* confirmation - page pour confirmer la publicité à redémarrer */}
      {/* confirmation - page pour confirmer la publicité à redémarrer */}
      {confirmationAdOnPauseAAC && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Redémarrer! Êtes-vous sûr de vouloir redémarrer la publicité de {nameAccountAAC} ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={ContinueAdAAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationAdOnPauseAAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation - page pour confirmer la publicité à redémarrer */}


      {/* publicité en cours (sur cette page on affiche les publicités en cours) */}
      {/* publicité en cours (sur cette page on affiche les publicités en cours) */}
      {adProgressAAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseAdProgressAAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshPostAA} className="bb"> <p>Publicité en cours</p> </div>
              </div>
              {/* a */}

              <div className="b"></div>
              {/* b */}
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Choisir la publicité à mettre en pause</p>
          <div onClick={ConfirmationAdProgressAAC}>
            {adOnhomeAA.map((api) => (<>
              <ChildApiCorrectPost api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/* publicité en cours (sur cette page on affiche les publicités en cours) */}

      {/* confirmation - page pour confirmer la publicité à stopper (fil d'actualité) */}
      {/* confirmation - page pour confirmer la publicité à stopper (fil d'actualité) */}
      {confirmationAdProgressAAC && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Mettre en pause! Êtes-vous sûr de vouloir mettre en pause la publicité de {nameAccountAAC} ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={StopAdAAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationAdProgressAAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation - page pour confirmer la publicité à stopper (fil d'actualité) */}


      {/* jolies posts (sur cette page, on remet les plus belles publications de la journée sur le fil d'actualité d'Alrani) */}
      {/* jolies posts (sur cette page, on remet les plus belles publications de la journée sur le fil d'actualité d'Alrani) */}
      {bestPostPageAAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseBestPostPageAAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshPostAA} className="bb"> <p>Jolies Posts</p> </div>
              </div>
              {/* a */}

              <div className="b"></div>
              {/* b */}
            </div>
            {/* block-one */} 
          </div>
          {/* close */}

          <p>On remet les plus belles publications de la journée sur le fil d'actualité d'Alrani</p>
          <div onClick={BestPostAAC}>
            {bestPostAA.map((api) => (<>
              <ChildApiCorrectPost api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/* jolies posts (sur cette page, on remet les plus belles publications de la journée sur le fil d'actualité d'Alrani) */}


      {/* page pour valider un post silencieux */}
      {/* page pour valider un post silencieux */}
      {silentPostPageAAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseSilentPostPageAAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshPostAA} className="bb"> <p>Posts Silencieux</p> </div>
              </div>

              <div className="b"></div>
            </div>
            {/* block-one */}
          </div>
          {/* close */}

          <p>Voici tout les Posts Silencieux, Vérifier et Valider si possible - AAC</p>
          <div onClick={ConfirmationSilentPostPageAAC}>
            {allSilentPostAA.map((api) => (<>
              <ChildApiSilentPost api={api} />
            </>))}
          </div>
        </div>
        {/* correctionPageIAC */}
      </>)}
      {/* on affiche les posts silencieux (page pour valider un post silencieux) */}

      {/* confirmation - page pour confirmer le post silencieux à valider */}
      {/* confirmation - page pour confirmer le post silencieux à valider */}
      {confirmationSilentPostPageAAC && (<>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Êtes-vous sûr de valider le post silencieux de {nameAccountAAC} ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={ValidateSilentPostAAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmationSilentPostPageAAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>)}
        {/* confirmation - page pour confirmer le post silencieux à valider */}


      {/* on retire les anciens posts du fil d'actualité d'Alrani */}
      {/* on retire les anciens posts du fil d'actualité d'Alrani */}
      {homeAAC && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseHomeAAC} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshPostAA} className="bb"> <p>Fil d'actualité</p> </div>
              </div>
              {/* a */}

              <div className="b"></div>
              {/* b */}
            </div>
            {/* block-one */}
          </div>
          {/* close */}

            <p>On retire les anciens posts du fil d'actualité d'Alrani</p>
            <div onClick={RemovePostAAC}>
              {filterPost666homeAAC.map((api) => (<>
                <ChildApiCorrectPost api={api} />
              </>))}
            </div>
          </div>
          {/* correctionPageIAC */}
        </>)}
        {/* on retire les anciens posts du fil d'actualité d'Alrani */}

      {/* correction general */}
      {/* correction general */}
      {correctionGeneral && (<>
        <div className="correctionPageIAC">
          <div className="close">
            <div className="block-one">
              <div className="a">
                <div onClick={CloseCorrectionGeneral} className="aa"> <SvgLeft /> </div>
                <div onClick={RefreshGeneralAA} className="bb"> <p>Correction Général</p> </div>
              </div>
              {/* a */}

              <div className="b"></div>
              {/* b */}
            </div>
            {/* block-one */}
          </div>
          {/* close */}

            <p>Ajouter displayOther 1, home 0, best 1, deleted 0, hide 0 (ajouter displayOther à chaque Post)</p>
            <div onClick={AddDisplayOtherToPost}>
              {allPostAA.map((api) => (<>
                <ChildApiAddDisplayOtherToPost api={api} />
              </>))}
            </div>

            <p>on ajoute block 0, home 0, homeVideo 0, a chaque user</p>
            <div onClick={CorrectUserAA}>
              {apiUserAA.map((api) => (<>
                <ChildApiSilentUserAAC api={api} />
              </>))}
            </div>

            <p>**Ajouter hide 0 et deleted 0 a chaque conversation</p>
            <div onClick={CorrectConversationAA}>
              {apiConversationAA.map((api) => (<>
                <ChildApiConversationAAC api={api} />
              </>))}
            </div>

            <p>on remet la monetisation a 0 ( On désactive la monetisation)</p>
            <div onClick={CorrectMonetization}>
              {apiAccountAA.map((api) => (<>
                <ChildApiCorrectMonetization api={api} />
              </>))}
            </div>
          </div>
          {/* correctionPageIAC */}
        </>)}
        {/* correctionGeneral */}
         
         
      {/* numero Virtuel Offert (Page) - IAC */}
      {/* numero Virtuel Offert (Page) - IAC */}
      {/* sur cette page on affiche la liste des numeros virtuels qu'on a offert */}
      {numeroVirtuelOffertPageIAC && (
        <>
          <div className="numeroVirtuelOffertPageIAC">
            <div className="align">
              <div className="close">
                <svg
                  onClick={CloseNumeroVirtuelOffertPageIAC}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  className="icon"
                  viewBox="0 0 1024 1024"
                >
                  <path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-.8 88.8l309.6 280z"></path>
                </svg>
                <h6>Numéros virtuels offerts</h6>
              </div>
              {/* close */}

              {/* on affiche la liste des numeros virtuels offerts - IAC */}
              <div onClick={DetailNumeroVirtuelOffertIAC}>
                {apiNumeroVirtuelIAC.map((api) => (
                  <>
                    <EnfantApiNumeroVirtuelOffert api={api} />
                  </>
                ))}
              </div>
            </div>
            {/* align */}
          </div>
          {/* numeroVirtuelOffertPageIAC */}
        </>
      )}
      {/* numero Virtuel Offert (Page) - IAC */}

      {/* detail Numero Virtuel Offert - IAC */}
      {/* detail Numero Virtuel Offert - IAC */}
      {/* on affiche les details concernant le numero virtuel offert */}
      {detailNumeroVirtuelOffertIAC && (
        <>
          <div
            onClick={CloseDetailNumeroVirtuelOffertIAC}
            className="detailNumeroVirtuelOffertIAC"
          >
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>{writeVirtualNumberIAC}</h6>
                </div>
                {/* block-un */}

                <div className="block-deux">
                  <p>Numéro Virtuel : {writeVirtualNumberIAC}</p>
                  <p>Noms Beneficiaire : {writeNameOwnerIAC}</p>

                  <p>
                    Pays Beneficiaire : {paysBeneficiaireNumeroVirtuelOffertIAC}
                  </p>

                  <p>
                    Nom Collaborateur : {nomCollaborateurOffertNumeroVirtuelIAC}
                  </p>

                  {/* numero offert */}
                  {statutNumeroVirtuelIAC && (
                    <>
                      <p>Numéro : Offert</p>
                    </>
                  )}

                  {/* numero acheter */}
                  {!statutNumeroVirtuelIAC && (
                    <>
                      <p>Numéro : Acheter</p>
                    </>
                  )}
                </div>
                {/* block-deux */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* detailNumeroVirtuelOffertIAC */}
        </>
      )}
      {/* detail Numero Virtuel Offert - IAC */}

      {/* offrir Choice - IAC */}
      {/* offrir Choice - IAC */}
      {/* quand on clique sur Offrir, ici c'est pour choisir */}
      {offrirChoiceIAC && (
        <>
          <div onClick={CloseOffrirChoiceIAC} className="offrirChoiceIAC">
            <div className="align">
              <div className="card">
                <p onClick={SaisirNomBeneficiaireNumeroVirtuelGratuitPageIAC}>
                  Offrir un numéro virtuel
                </p>
                <hr />
                <p>Offrir une recharge</p>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirChoiceIAC */}
        </>
      )}
      {/* offrir Choice - IAC */}

      {/* Saisir Nom Beneficiaire Numero Virtuel Gratuit - IAC */}
      {/* Saisir Nom Beneficiaire Numero Virtuel Gratuit - IAC */}
      {/* ca c'est la page qui nous permet de Saisir le Nom du Beneficiaire du Numero Virtuel Gratuit - IAC */}
      {saisirNomBeneficiaireNumeroVirtuelGratuitPageIAC && (<>
          <div className="saisirNomBeneficiaireNumeroVirtuelGratuitIAC">
            <div className="align">
              <div className="card">
                <div className="block-un"> <p onClick={CloseSaisirNomBeneficiaireNumeroVirtuelGratuitPageIAC}>Saisissez le nom de la personne ou de l'entreprise qui va bénéficier d'un Numéro virtuel gratuit</p> </div>
                <div className="block-deux"> <input type="text" value={writeNameOwner} onChange={(e) => setWriteNameOwner(e.target.value)} placeholder="Saisissez..." /> </div>

                <div className="block-trois">
                  <button onClick={EnregistrerNomBeneficiaireNumeroVirtuelGratuitIAC}>
                    <p>Enregistrer</p>
                    <hr />
                  </button>
                </div>
                {/* block-trois */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* saisirNomBeneficiaireNumeroVirtuelGratuitIAC */}
        </>)}
      {/* Saisir Nom Beneficiaire Numero Virtuel Gratuit - IAC */}


      {/* offrir Numero Virtuel (Page) - IAC */}
      {/* offrir Numero Virtuel (Page) - IAC */}
      {/* ca c'est la page qui permet d'offrir un numero virtuel*/}
      {offrirNumeroVirtuelPageIAC && (
        <>
          <div className="offrirNumeroVirtuelPageIAC">
            <div className="close"> <p onClick={CloseOffrirNumeroVirtuelPageIAC}>Offrir un Numéro Virtuel</p> </div>
            {/* close */}

            <div className="align">
              <div className="card">
                <div className="block-un">
                  <div className="a"> <p>Offrir un Numéro Virtuel</p> </div>
                  <div className="b"> <p>Saisir le Numéro virtuel à offrir</p> </div>
                </div>
                {/* block-un */}

                <div className="block-deux">
                  <input type="text" value={writeVirtualNumber} onChange={(e) => setWriteVirtualNumber(e.target.value)} />
                  <input type="text" value={writeIndicativeOne} onChange={(e) => setWriteIndicativeOne(e.target.value)} placeholder="indicatif 1" />
                  <input type="text" value={writeIndicativeTwo} onChange={(e) => setWriteIndicativeTwo(e.target.value)} placeholder="indicatif 2" />
                  <input type="text" value={writeIndicativeThree} onChange={(e) => setWriteIndicativeThree(e.target.value)} placeholder="indicatif 3" />
                  <input type="text" value={writeCountryCode} onChange={(e) => setWriteCountryCode(e.target.value)} placeholder="Country code" />
                </div>
                {/* block-deux */}

                <div onClick={OffrirNumeroConfirmationIAC} className="block-trois"> <SvgRight /> <p>Délivrer</p> </div>
                <div onClick={FreeLicense2} className="block-trois"> <SvgRight /> <p>Délivrer T2.L2</p> </div>
                <div onClick={FreeLicense3} className="block-trois"> <SvgRight /> <p>Délivrer T2.L3</p> </div>
                {/* block-trois */}

                <div className="block-quatre"> <hr /> </div>
                {/* block-quatre */}

                <div className="block-cinq"> <p onClick={ListeDesLanguesPageIAC}>Pays : {nomPaysSelectionnerIAC}</p> </div>
                {/* block-cinq */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroVirtuelPageIAC */}
        </>
      )}
      {/* offrir Numero Virtuel (Page) - IAC */}


      {/* offrir Numero Confirmation - IAC  */}
      {/* offrir Numero Confirmation - IAC  */}
      {/* ca c'est la page de confirmation, pour que le collaborateur confirme s'il
      veut vraiment offrir un numero virtuel gratuit */}
      {offrirNumeroConfirmationIAC && (
        <>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Voulez-vous vraiment offrir un numéro virtuel à {writeNameOwnerIAC} ?</p>
                </div>
                {/* block-un */}

                <div className="block-deux">
                  <p>Numéro virtuel : {writeVirtualNumberIAC}</p>
                  <p>Pays : {nomPaysSelectionnerIAC}</p>
                </div>
                {/* block-deux */}

                <hr />
                <div className="block-trois"> <p onClick={DeliverVirtualNumberIAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseOffrirNumeroConfirmationIAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>
      )}
      {/* offrir Numero Confirmation - IAC */}


      {/* offrir numero viruel avec Licence - IAC */}
      {/* offrir numero viruel avec Licence - IAC */}
      {confirmFreeVirtualNumberIAC && (
        <>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Voulez-vous vraiment offrir un numéro virtuel à {writeNameOwnerIAC} ?</p>
                  <p>avec Licence {freeLicenseIAC}</p>
                </div>
                {/* block-un */}

                <div className="block-deux">
                  <p>Numéro virtuel : {writeVirtualNumberIAC}</p>
                  <p>Pays : {nomPaysSelectionnerIAC}</p>
                </div>
                {/* block-deux */}

                <hr />
                <div className="block-trois"> <p onClick={FreeVirtualNumberIAC}>Oui</p> </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmFreeVirtualNumberIAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>
      )}
      {/* offrir numero viruel avec Licence - IAC */}
      

      {/* Numero Offert Success - IAC */}
      {/* Numero Offert Success - IAC */}
      {/* ca c'est la page de success, lorsque le numero a ete offert, on va 
      afficher cette page */}
      {numeroOffertSuccessIAC && (
        <>
          <div onClick={CloseNumeroOffertSuccessIAC} className="numeroOffertSuccessIAC">
            <div className="align">
              <div className="card">
                <div className="display"> <p>Numéro virtuel offert</p> <SvgValidate3 /> </div>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* rechargeOfferteSuccessIAC */}
        </>
      )}
      {/* Numero Offert Success - IAC */}


      {/* Erreur (PaysNonSelectionner) - IAC */}
      {/* Erreur (PaysNonSelectionner) - IAC */}
      {/* on affiche cette page si le collaborateur n'a pas selectionner de pays et qu'il
            veut par exemple offrir le numero virtuel sans sélectionner le pays */}
      {erreurPaysNonSelectionnerIAC && (
        <>
          <div
            onClick={CloseErreurPaysNonSelectionnerIAC}
            className="erreurPaysNonSelectionnerIAC"
          >
            <div className="align">
              <div className="card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></circle>
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 19L19 5"
                  ></path>
                </svg>

                <p>Pays non sélectionner !</p>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* erreurPaysNonSelectionnerIAC */}
        </>
      )}
      {/* Erreur (PaysNonSelectionner) - IAC */}

      {/* infos Utilisateur (Page) - IAC */}
      {/* infos Utilisateur (Page) - IAC */}
      {/* ici on affiche les infos de chaque utilisateur */}
      {infosUtilisateurPageIAC && (
        <>
          <div className="infosUtilisateurPageIAC">
            <div className="align">
              <div className="card">
                <div className="close">
                  <svg
                    onClick={PlusInfosPageIAC}
                    xmlns="http://www.w3.org/2000/svg"
                    width="17px"
                    cursor="pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#444"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 13a1 1 0 100-2 1 1 0 000 2zM12 13a1 1 0 100-2 1 1 0 000 2zM5 13a1 1 0 100-2 1 1 0 000 2z"
                    ></path>
                  </svg>
                  <hr onClick={CloseInfosUtilisateurPageIAC} />
                  <svg
                    onClick={CloseInfosUtilisateurPageIAC}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    cursor="pointer"
                    width="10px"
                    fill="#444"
                    enableBackground="new 0 0 25.93 25.93"
                    version="1.1"
                    viewBox="0 0 25.93 25.93"
                    xmlSpace="preserve"
                  >
                    <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                  </svg>
                </div>
                {/* close */}

                <div className="photo">
                  <div className="a"> <p onClick={CloseInfosUtilisateurPageIAC}>Laura Charielle</p> </div>
                  <div className="b"> <img src={photo} alt="" /> </div>
                </div>
                {/* photo */}

                <div className="verified">
                  <div className="control">
                    <div className="oui">
                      <p>Control :</p>
                      <button>Oui</button>
                    </div>

                    <div className="non">
                      <p>Control :</p>
                      <button>Non</button>
                    </div>
                    {/* non */}
                  </div>
                  {/* control */}

                  <div className="agence">
                    <div className="oui">
                      <p>Point :</p>
                      <button>Oui</button>
                    </div>
                    {/* non */}

                    <div className="non">
                      <p>Point :</p>
                      <button>Non</button>
                    </div>
                    {/* non */}
                  </div>
                  {/* Point */}
                </div>
                {/* verified */}

                <div className="infos">
                  <div className="a">
                    <h3>Infos</h3>
                    <p>Pays :</p>
                    <p>Ville :</p>
                    <p>Pays derniere recharge :</p>
                    <p>Ville derniere recharge :</p>
                    <p>Pays dernier retrait :</p>
                    <p>Ville dernier retrait :</p>
                  </div>

                  <div className="b">
                    <p>* Pays, Ville : c'est le pays lors de la validation du compte izocash</p>
                  </div>
                  {/* b */}
                </div>
                {/* infos */}

                {/* solde utilisateur */}
                {/* solde utilisateur */}
                {/* ici on affiche le solde du compte d'un utilisateur - IAC */}
                <div className="solde">
                  <div className="a">
                    <h3>Solde : </h3>
                    <p>Compte national : </p>
                    <p>Compte international : </p>
                  </div>

                  <div className="a">
                    <p>derniere recharge: </p>
                    <p>date: </p>
                  </div>

                  <div className="a">
                    <p>dernier retrait: </p>
                    <p>date: </p>
                  </div>
                </div>
                {/* solde */}
                {/* solde utilisateur */}

                {/* solde Agence */}
                {/* solde Agence */}
                {/* ici on affiche le solde du compte de l'agence - IAC  */}
                <div className="solde">
                  <div className="a">
                    <h3>Solde Agence : </h3>
                    <p>Stock recharge : </p>
                    <p>Stock retrait : </p>
                  </div>

                  <div className="a">
                    <p>nom du client : </p>
                    <p>dernier numéro délivré : </p>
                    <p>date : </p>
                  </div>

                  <div className="a">
                    <p>nom du client : </p>
                    <p>derniere recharge : </p>
                    <p>date : </p>
                  </div>

                  <div className="a">
                    <p>nom du client : </p>
                    <p>dernier retrait : </p>
                    <p>date : </p>
                  </div>

                  <div className="a">
                    <p>Stock recharge achetés (dernier) : </p>
                    <p>date : </p>
                  </div>

                  <div className="a">
                    <p>Stock retrait achetés (dernier) : </p>
                    <p>date : </p>
                  </div>
                  {/* a */}
                </div>
                {/* solde */}
                {/* solde Agence */}

                <div className="parametres">
                  <div className="a">
                    <h3>Paramètres</h3>
                    <p>Activer control</p>
                    <p>Retirer control</p>
                  </div>

                  <div className="a">
                    <h3>Paramètres</h3>
                    <p onClick={ListeDesLanguesPageIAC}>Ajouter la Zone d'habitation</p>
                    <p onClick={VerificationInfosCompanyIAC}>Vérification Infos de l'entreprise</p>
                    <p onClick={ConfirmAddPercentageForDeliverVirtualNumberIAC}>Pourcentages - Délivrer un Numéro virtuel</p>
                    <p onClick={ConfirmAddPercentageForIdentificationVirtualNumberIAC}>Pourcentages - Identifier un Numéro virtuel</p>
                    <p onClick={ConfirmAddPercentageForDepositNationalIAC}>Pourcentages - Faire un Versement National</p>
                    <p>Bloquer compte</p>
                    <p>Dévalider compte</p>
                    <p>Changer mot de passe</p>
                  </div>

                  <div className="a">
                    <h3>Paramètres</h3>
                    <p>Bloquer compte</p>
                    <p>Dévalider compte</p>
                    <p>Changer mot de passe</p>
                  </div>
                  {/* a */}
                </div>
                {/* parametres */}

                <div className="nomUtilisateur">
                  <p>Laura Charielle</p>
                </div>
                {/* nomUtilisateur */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* infosUtilisateurPageIAC */}
        </>
      )}
      {/* infos Utilisateur (Page) - IAC */}
      

      {/* verification Infos Company - IAC */}
      {/* verification Infos Company - IAC */}
      {verificationInfosCompanyIAC && (
        <>
          <div className="completerInformationEntreprisePageIA">
            <div className="close">
              <div onClick={CloseVerificationInfosCompanyIAC} className="a"> <SvgLeft /> </div>
              <div className="a"> <p>Informations de l'entreprise</p> </div>
            </div>

            <div className="hr"> <hr /> </div>

            <div className="block-un"> <p>Veuillez compléter les informations de votre Entreprise</p> </div>

           
            {/* Nom de l'entreprise */}
            <div className="block-deux">
              <p>Nom de l'entreprise</p>      
              <input type="text" value={nameCompanyIAC} onChange={(e) => setNameCompanyIAC(e.target.value)} /> 
            </div>


            {/* Domaine d'activité */}
            <div className="block-trois">
              <div className="a"> <p>Domaine d'activité</p> </div>

              <div className="b">
                <p>Saisissez votre Domaine d'activité</p>
                <input type="text" value={domainCompanyIAC} onChange={(e) => setDomainCompanyIAC(e.target.value)} />
              </div>
            </div>


            {/* Numéro de téléphone */}
            <div className="block-trois">
              <div className="a"> <p>Numéro de téléphone</p> </div>

              <div className="b">
                <p>Saisissez le numéro de téléphone auquel on peut vous joindre</p>
                <input type="text" value={phoneNumberCompanyIAC} onChange={(e) => setPhoneNumberCompanyIAC(e.target.value)} />
              </div>
            </div>


            {/* Adresse */}
            <div className="block-trois">
              <div className="a"> <p>Adresse</p> </div>

              <div className="b">
                <p>Saisissez l'adresse de l'entreprise</p>
                <input type="text" value={addressCompanyIAC} onChange={(e) => setAddressCompanyIAC(e.target.value)} />
              </div>
            </div>


            {/* Pays */}
            <div className="block-trois">
              <div className="a"> <p>Pays</p> </div>

              <div className="b">
                <p>Saisissez le nom du pays</p>
                <input type="text" value={countryCompanyIAC} onChange={(e) => setCountryCompanyIAC(e.target.value)} />
              </div>
            </div>

            {/* Ville */}
            <div className="block-trois">
              <div className="a"> <p>Ville</p> </div>

              <div className="b">
                <p>Saisissez le nom de la ville</p>
                <input type="text" value={cityCompanyIAC} onChange={(e) => setCityCompanyIAC(e.target.value)} />
              </div>
            </div>


            {/* Quartier */}
            <div className="block-trois">
              <div className="a"> <p>Quartier</p> </div>

              <div className="b">
                <p>Saisissez le nom du quartier</p>
                <input type="text" value={quarterCompanyIAC} onChange={(e) => setQuarterCompanyIAC(e.target.value)} />
              </div>
            </div>


            {/* Zone */}
            <div className="block-trois">
              <div className="a"> <p>Zone</p> </div>

              <div className="b">
                <p>Saisissez la zone dans laquelle se trouve votre entreprise</p>
                <input type="text" value={zoneCompanyIAC} onChange={(e) => setZoneCompanyIAC(e.target.value)} />
              </div>
            </div>


            {/* Arrêt de Bus */}
            <div className="block-trois">
              <div className="a"> <p>Arrêt de Bus</p> </div>

              <div className="b">
                <p>Saisissez l'Arrêt de Bus le plus proche de votre entreprise</p>
                <input type="text" value={busStopCompanyIAC} onChange={(e) => setBusStopCompanyIAC(e.target.value)} />
              </div>
            </div>

            <div className="block-quatre"> 
              <div onClick={VerificationInfosIAC} className="a"> <SvgRight /> </div>
              <div onClick={VerificationInfosIAC} className="b"> <p>Ajouter</p> </div>
            </div>
            {/* block-quatre */}
          </div>
          {/* completerInformationEntreprisePageIA */}
        </>
      )}
      {/* verification Infos Company - IAC */}

      {/* send Infos Success - IAC */}
      {/* send Infos Success - IAC */}
      {/* on affiche ce message de succes s'il a envoyer les infos de son entreprise */}
      {sendInfosSuccessIAC && (
        <>
          <div onClick={CloseSendInfosSuccessIAC} className="numeroOffertSuccessIAC">
            <div className="align">
              <div className="card">
                <div className="display"> <p>Informations ajoutées</p> <SvgValidate3 /> </div>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* rechargeOfferteSuccessIAC */}
        </>
      )}
      {/* send Infos Success - IAC */}


      {/* confirmer l'ajout des Pourcentage de Commission et Pourcentage du Stock Nécessaire (Pour Délivrer un Numéro virtuel) - IAC */}
      {/* confirmer l'ajout des Pourcentage de Commission et Pourcentage du Stock Nécessaire (Pour Délivrer un Numéro virtuel) - IAC */}
      {confirmAddPercentageForDeliverVirtualNumberIAC && (
        <>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Etes-vous sur d'ajouter le Pourcentage de Commission et le Pourcentage du Stock Nécessaire (Pour Délivrer un Numéro virtuel) sur le compte de ce Point Retrait ({nameAccountIAC}) ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={AddPercentageForDeliverVirtualNumberIAC}>Oui</p> </div>
                {/* block-trois */} 

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmAddPercentageForDeliverVirtualNumberIAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>
      )}
      {/* confirmer l'ajout des Pourcentage de Commission et Pourcentage du Stock Nécessaire (Pour Délivrer un Numéro virtuel) - IAC */}


      {/* confirmer l'ajout des Pourcentage de Commission et Pourcentage du Stock Nécessaire (Pour Identifier un Numéro virtuel) - IAC */}
      {/* confirmer l'ajout des Pourcentage de Commission et Pourcentage du Stock Nécessaire (Pour Identifier un Numéro virtuel) - IAC */}
      {confirmAddPercentageForIdentificationVirtualNumberIAC && (
        <>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Etes-vous sur d'ajouter le Pourcentage de Commission et le Pourcentage du Stock Nécessaire (Pour Délivrer un Numéro virtuel) sur le compte de ce Point Retrait ({nameAccountIAC}) ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={AddPercentageForIdentificationVirtualNumberIAC}>Oui</p> </div>
                {/* block-trois */} 

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmAddPercentageForIdentificationVirtualNumberIAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>
      )}
      {/* confirmer l'ajout des Pourcentage de Commission et Pourcentage du Stock Nécessaire (Pour Identifier un Numéro virtuel) - IAC */}


      {/* confirmer l'ajout des Pourcentage de Commission et Pourcentage du Stock Nécessaire (Pour Faire un Versement National) - IAC */}
      {/* confirmer l'ajout des Pourcentage de Commission et Pourcentage du Stock Nécessaire (Pour Faire un Versement National) - IAC */}
      {confirmAddPercentageForDepositNationalIAC && (
        <>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Etes-vous sur d'ajouter le Pourcentage de Commission et le Pourcentage du Stock Nécessaire (Pour Faire un Versement National) sur le compte de ce Point Retrait ({nameAccountIAC}) ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois"> <p onClick={AddPercentageForDepositNationalIAC}>Oui</p> </div>
                {/* block-trois */} 

                <hr />
                <div className="block-quatre"> <p onClick={CloseConfirmAddPercentageForDepositNationalIAC}>Annuler</p> </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>
      )}
      {/* confirmer l'ajout des Pourcentage de Commission et Pourcentage du Stock Nécessaire (Pour Faire un Versement National) - IAC */}


      {/* listes des langues - IAC */}
      {/* listes des langues - IAC */}
      {/* on affiche la liste des langues */}
      {listeDesLanguesPageIAC && (
        <>
          <div className="listeDesPaysPageIAC">
            <div className="align">
              <div className="close">
                <div className="a">
                  <svg
                    onClick={CloseListeDesLanguesPageIAC}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    cursor="pointer"
                    fill="#000"
                    enableBackground="new 0 0 486.975 486.975"
                    version="1.1"
                    viewBox="0 0 486.975 486.975"
                    xmlSpace="preserve"
                  >
                    <path d="M473.475 230.025h-427.4l116-116c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-139 139c-5.3 5.3-5.3 13.8 0 19.1l139 139c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-116-116h427.5c7.5 0 13.5-6 13.5-13.5s-6-13.4-13.5-13.4z"></path>
                  </svg>
                  <p>Sélectionner la langue</p>
                </div>
                {/* a */}

                <div className="b">
                  <svg
                    onClick={AjouterLangueIAC}
                    xmlns="http://www.w3.org/2000/svg"
                    width="17px"
                    cursor="pointer"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <g
                        fill="none"
                        stroke="#444"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        data-name="add"
                      >
                        <path d="M12 19L12 5"></path>
                        <path d="M5 12L19 12"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                {/* b */}
              </div>
              {/* close */}

              {/* on affiche la liste des langues - IAC */}
              <div onClick={PageRedirection666ListeDesLanguesIAC}>
                {apiListeDesLanguesIAC.map((api) => (
                  <EnfantApiListeDesLanguesIAC api={api} />
                ))}
              </div>
            </div>
            {/* align */}
          </div>
          {/* listeDesPaysPageIAC */}
        </>
      )}
      {/* listes des langues (page) - IAC */}

      {/* ajouter langue - IAC */}
      {/* ajouter langue - IAC */}
      {/* la page ci permet au collaborateur d'ajouter une langue */}
      {ajouterLangueIAC && (
        <>
          <div className="ajouterQuartierIAC">
            <div className="align">
              <div className="card">
                <div className="close">
                  <div className="a">
                    <p>Ajouter une langue</p>
                  </div>

                  <div className="b">
                    <svg
                      onClick={CloseAjouterLangueIAC}
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      cursor="pointer"
                      width="10px"
                      enableBackground="new 0 0 25.93 25.93"
                      version="1.1"
                      viewBox="0 0 25.93 25.93"
                      xmlSpace="preserve"
                    >
                      <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                    </svg>
                  </div>
                  {/* b */}
                </div>
                {/* close */}

                <div className="block-un">
                  <div className="a">
                    <p>Saissisez le nom de la langue.</p>
                  </div>

                  <div className="b">
                    <input type="text" placeholder="..." value={writeLanguage} onChange={(e) => setWriteLanguage(e.target.value)} />
                    <input type="text" placeholder="..." value={inEnglish} onChange={(e) => setInEnglish(e.target.value)} />
                    <button onClick={SaveLanguageIAC}>
                      <p>Ajouter</p>
                      <hr />
                    </button>
                  </div>
                  {/* b */}
                </div>
                {/* block-un */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* ajouterQuartierIAC */}
        </>
      )}
      {/* ajouter langue - IAC */}

      {/* ajout langue Success - IAC */}
      {/* ajout langue Success - IAC */}
      {/* on affiche ce message de succes si le collaborateuur a pu ajouter une langue */}
      {ajoutLangueSuccessIAC && (
        <>
          <div
            onClick={CloseAjoutLangueSuccessIAC}
            className="ajoutLangueSuccessIAC"
          >
            <div className="align">
              <div className="card">
                <p>Ajout réussi !</p>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* ajoutLangueSuccessIAC */}
        </>
      )}
      {/* ajout langue Success - IAC */}

      {/* masquer langue (page) - IAC */}
      {/* masquer langue (page) - IAC */}
      {/* ca c'est la page qui va permetre au collaborateur de masquer une langue */}
      {masquerLanguePageIAC && (
        <>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>
                    Voulez-vous vraiment masquer : {nameLanguageIAC} ?
                  </p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois">
                  <p onClick={MasquerLangueIAC}>Oui</p>
                </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre">
                  <p onClick={CloseMasquerLanguePageIAC}>Annuler</p>
                </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>
      )}
      {/* masquer langue (page) - IAC */}

      {/* masquer langue Success - IAC */}
      {/* masquer langue Success - IAC */}
      {/* ca c'est la page de success, on affiche ca lorsque la langue a bien ete masquer */}
      {masquerLangueSuccessIAC && (
        <>
          <div
            onClick={CloseMasquerLangueSuccessIAC}
            className="numeroOffertSuccessIAC"
          >
            <div className="align">
              <div className="card">
                <div className="display">
                  <p>{nameLanguageIAC} a été masqué</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#00cc00"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M20 7L9 18l-5-5"
                    ></path>
                  </svg>
                </div>
                {/* display */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* rechargeOfferteSuccessIAC */}
        </>
      )}
      {/* masquer langue Success - IAC */}

      {/* liste des Pays (page) - IAC */}
      {/* liste des Pays (page) - IAC */}
      {/* on affiche la liste des Pays*/}
      {listeDesPaysPageIAC && (
        <>
          <div className="listeDesPaysPageIAC">
            <div className="align">
              <div className="close">
                <div className="a">
                  <svg
                    onClick={CloseListeDesPaysPageIAC}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    cursor="pointer"
                    fill="#000"
                    enableBackground="new 0 0 486.975 486.975"
                    version="1.1"
                    viewBox="0 0 486.975 486.975"
                    xmlSpace="preserve"
                  >
                    <path d="M473.475 230.025h-427.4l116-116c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-139 139c-5.3 5.3-5.3 13.8 0 19.1l139 139c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-116-116h427.5c7.5 0 13.5-6 13.5-13.5s-6-13.4-13.5-13.4z"></path>
                  </svg>
                  <p>Sélectionner le Pays</p>
                </div>
                {/* a */}

                <div className="b">
                  <svg
                    onClick={AjouterPaysIAC}
                    xmlns="http://www.w3.org/2000/svg"
                    width="17px"
                    cursor="pointer"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <g
                        fill="none"
                        stroke="#444"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        data-name="add"
                      >
                        <path d="M12 19L12 5"></path>
                        <path d="M5 12L19 12"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                {/* b */}
              </div>
              {/* close */}

              {/* on affiche la liste des pays - IAC */}
              <div onClick={PageRedirection666ListeDesPaysIAC}>
                {filtreApiListeDesPaysIAC.map((api) => (
                  <EnfantApiListeDesPaysIAC api={api} />
                ))}
              </div>
            </div>
            {/* align */}
          </div>
          {/* listeDesPaysPageIAC */}
        </>
      )}
      {/* listes des Pays (page) - IAC */}

      {/* ajouter pays - IAC */}
      {/* ajouter pays - IAC */}
      {/* la page ci permet au collaborateur d'ajouter un pays */}
      {ajouterPaysIAC && (
        <>
          <div className="ajouterQuartierIAC">
            <div className="align">
              <div className="card">
                <div className="close">
                  <div className="a">
                    <p>Ajouter un pays</p>
                  </div>

                  <div className="b">
                    <svg
                      onClick={CloseAjouterPaysIAC}
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      cursor="pointer"
                      width="10px"
                      enableBackground="new 0 0 25.93 25.93"
                      version="1.1"
                      viewBox="0 0 25.93 25.93"
                      xmlSpace="preserve"
                    >
                      <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                    </svg>
                  </div>
                  {/* b */}
                </div>
                {/* close */}

                <div className="block-un">
                  <div className="a">
                    <p>Saissisez le nom du Pays.</p>
                  </div>

                  <div className="b">
                    <input
                      type="text"
                      placeholder="..."
                      value={writeCountry}
                      onChange={(e) => setWriteCountry(e.target.value)}
                    />
                    <input type="text" placeholder="..." value={inEnglish} onChange={(e) => setInEnglish(e.target.value)} />
                    <button onClick={SaveCountryIAC}>
                      <p>Ajouter</p>
                      <hr />
                    </button>
                  </div>
                  {/* b */}
                </div>
                {/* block-un */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* ajouterQuartierIAC */}
        </>
      )}
      {/* ajouter pays - IAC */}

      {/* ajout pays Success - IAC */}
      {/* ajout pays Success - IAC */}
      {/* on affiche ce message de succes si le collaborateuur a pu ajouter un pays */}
      {ajoutPaysSuccessIAC && (
        <>
          <div
            onClick={CloseAjoutPaysSuccessIAC}
            className="ajoutLangueSuccessIAC"
          >
            <div className="align">
              <div className="card">
                <p>Ajout réussi !</p>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* ajoutPaysSuccessIAC */}
        </>
      )}
      {/* ajout pays Success - IAC */}

      {/* masquer pays (page) - IAC */}
      {/* masquer pays (page) - IAC */}
      {/* ca c'est la page qui va permetre au collaborateur de masquer un pays */}
      {masquerPaysPageIAC && (
        <>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>
                    Voulez-vous vraiment masquer : {nameCountryIAC} ?
                  </p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois">
                  <p onClick={MasquerPaysIAC}>Oui</p>
                </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre">
                  <p onClick={CloseMasquerPaysPageIAC}>Annuler</p>
                </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>
      )}
      {/* masquer pays (page) - IAC */}

      {/* masquer pays Success - IAC */}
      {/* masquer pays Success - IAC */}
      {/* ca c'est la page de success, on affiche ca lorsque le pays a bien ete masquer */}
      {masquerPaysSuccessIAC && (
        <>
          <div
            onClick={CloseMasquerPaysSuccessIAC}
            className="numeroOffertSuccessIAC"
          >
            <div className="align">
              <div className="card">
                <div className="display"> 
                  <p>{nameCountryIAC} a été masqué</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#00cc00"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M20 7L9 18l-5-5"
                    ></path>
                  </svg>
                </div>
                {/* display */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* rechargeOfferteSuccessIAC */}
        </>
      )}
      {/* masquer pays Success - IAC */}

      {/* listes des villes (page) - IAC  */}
      {/* listes des villes (page) - IAC  */}
      {/* on affiche la liste des villes */}
      {listeDesVillesPageIAC && (
        <>
          <div className="listeDesPaysPageIAC">
            <div className="align">
              <div className="close">
                <div className="a">
                  <svg
                    onClick={CloseListeDesVillesPageIAC}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    cursor="pointer"
                    fill="#000"
                    enableBackground="new 0 0 486.975 486.975"
                    version="1.1"
                    viewBox="0 0 486.975 486.975"
                    xmlSpace="preserve"
                  >
                    <path d="M473.475 230.025h-427.4l116-116c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-139 139c-5.3 5.3-5.3 13.8 0 19.1l139 139c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-116-116h427.5c7.5 0 13.5-6 13.5-13.5s-6-13.4-13.5-13.4z"></path>
                  </svg>
                  <p>Sélectionner la ville</p>
                </div>
                {/* a */}

                <div className="b">
                  <svg
                    onClick={AjouterVilleIAC}
                    xmlns="http://www.w3.org/2000/svg"
                    width="17px"
                    cursor="pointer"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <g
                        fill="none"
                        stroke="#444"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        data-name="add"
                      >
                        <path d="M12 19L12 5"></path>
                        <path d="M5 12L19 12"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                {/* b */}
              </div>
              {/* close */}

              <div className="indiceLocalisation">
                <button>{nameCountryIAC}</button>
              </div>
              {/* indiceLocalisation */}

              {/* on affiche la liste des villes - IAC */}
              <div onClick={PageRedirection666ListeDesVillesIAC}>
                {filtreApiListeDesVillesIAC.map((api) => (
                  <EnfantApiListeDesVillesIAC api={api} />
                ))}
              </div>
            </div>
            {/* align */}
          </div>
          {/* listeDesPaysPageIAC */}
        </>
      )}
      {/* listes des villes (page) - IAC */}

      {/* ajouter ville - IAC */}
      {/* ajouter ville - IAC */}
      {/* la page ci permet au collaborateur d'ajouter une ville */}
      {ajouterVilleIAC && (
        <>
          <div className="ajouterQuartierIAC">
            <div className="align">
              <div className="card">
                <div className="close">
                  <div className="a">
                    <p>Ajouter une ville</p>
                  </div>

                  <div className="b">
                    <svg
                      onClick={CloseAjouterVilleIAC}
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      cursor="pointer"
                      width="10px"
                      enableBackground="new 0 0 25.93 25.93"
                      version="1.1"
                      viewBox="0 0 25.93 25.93"
                      xmlSpace="preserve"
                    >
                      <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                    </svg>
                  </div>
                  {/* b */}
                </div>
                {/* close */}

                <div className="block-un">
                  <div className="a">
                    <p>Saissisez le nom de la ville.</p>
                  </div>

                  <div className="b">
                    <input
                      type="text"
                      placeholder="..."
                      value={writeCity}
                      onChange={(e) => setWriteCity(e.target.value)}
                    />
                    <input type="text" placeholder="..." value={inEnglish} onChange={(e) => setInEnglish(e.target.value)} />
                    <button onClick={SaveCityIAC}>
                      <p>Ajouter</p>
                      <hr />
                    </button>
                  </div>
                  {/* b */}
                </div>
                {/* block-un */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* ajouterQuartierIAC */}
        </>
      )}
      {/* ajouter ville - IAC */}

      {/* ajout ville Success - IAC */}
      {/* ajout ville Success - IAC */}
      {/* on affiche ce message de succes si le collaborateuur a pu ajouter une ville */}
      {ajoutVilleSuccessIAC && (
        <>
          <div
            onClick={CloseAjoutVilleSuccessIAC}
            className="ajoutLangueSuccessIAC"
          >
            <div className="align">
              <div className="card">
                <p>Ajout réussi !</p>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* ajoutLangueSuccessIAC */}
        </>
      )}
      {/* ajout ville Success - IAC */}

      {/* masquer ville (page) - IAC */}
      {/* masquer ville (page) - IAC */}
      {/* ca c'est la page qui va permetre au collaborateur de masquer une ville */}
      {masquerVillePageIAC && (
        <>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>
                    Voulez-vous vraiment masquer : {nameCityIAC} ?
                  </p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois">
                  <p onClick={MasquerVilleIAC}>Oui</p>
                </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre">
                  <p onClick={CloseMasquerVillePageIAC}>Annuler</p>
                </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>
      )}
      {/* masquer ville (page) - IAC */}

      {/* masquer ville Success - IAC */}
      {/* masquer ville Success - IAC */}
      {/* ca c'est la page de success, on affiche ca lorsque la ville a bien ete masquer */}
      {masquerVilleSuccessIAC && (
        <>
          <div
            onClick={CloseMasquerVilleSuccessIAC}
            className="numeroOffertSuccessIAC"
          >
            <div className="align">
              <div className="card">
                <div className="display">
                  <p>{nameCityIAC} a été masqué</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#00cc00"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M20 7L9 18l-5-5"
                    ></path>
                  </svg>
                </div>
                {/* display */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* rechargeOfferteSuccessIAC */}
        </>
      )}
      {/* masquer ville Success - IAC */}

      {/* listes des quartiers (page) - IAC  */}
      {/* listes des quartiers (page) - IAC  */}
      {/* on affiche la liste des quartiers - IAC */}
      {listeDesQuartiersPageIAC && (
        <>
          <div className="listeDesPaysPageIAC">
            <div className="align">
              <div className="close">
                <div className="a">
                  <svg
                    onClick={CloseListeDesQuartiersPageIAC}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    cursor="pointer"
                    fill="#000"
                    enableBackground="new 0 0 486.975 486.975"
                    version="1.1"
                    viewBox="0 0 486.975 486.975"
                    xmlSpace="preserve"
                  >
                    <path d="M473.475 230.025h-427.4l116-116c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-139 139c-5.3 5.3-5.3 13.8 0 19.1l139 139c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-116-116h427.5c7.5 0 13.5-6 13.5-13.5s-6-13.4-13.5-13.4z"></path>
                  </svg>
                  <p>Sélectionner le quartier</p>
                </div>
                {/* a */}

                <div className="b">
                  <svg
                    onClick={AjouterQuartierIAC}
                    xmlns="http://www.w3.org/2000/svg"
                    width="17px"
                    cursor="pointer"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <g
                        fill="none"
                        stroke="#444"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        data-name="add"
                      >
                        <path d="M12 19L12 5"></path>
                        <path d="M5 12L19 12"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                {/* b */}
              </div>
              {/* close */}

              <div className="indiceLocalisation"> <button>{nameCityIAC}</button> </div>
              {/* indiceLocalisation */}

              {/* on affiche la liste des quartiers - IAC */}
              <div onClick={PageRedirection666ListeDesQuartiersIAC}>
                {filtreApiListeDesQuartiersIAC.map((api) => (
                  <EnfantApiListeDesQuartiersIAC api={api} />
                ))}
              </div>
            </div>
            {/* align */}
          </div>
          {/* listeDesPaysPageIAC */}
        </>
      )}
      {/* listes des quartiers (page) - IAC */}

      {/* ajouter Quartier - IAC */}
      {/* ajouter Quartier - IAC */}
      {/* la page ci permet au collaborateur d'ajouter un quartier */}
      {ajouterQuartierIAC && (
        <>
          <div className="ajouterQuartierIAC">
            <div className="align">
              <div className="card">
                <div className="close">
                  <div className="a">
                    <p>Ajouter un quartier</p>
                  </div>

                  <div className="b">
                    <svg
                      onClick={CloseAjouterQuartierIAC}
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      cursor="pointer"
                      width="10px"
                      enableBackground="new 0 0 25.93 25.93"
                      version="1.1"
                      viewBox="0 0 25.93 25.93"
                      xmlSpace="preserve"
                    >
                      <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                    </svg>
                  </div>
                  {/* b */}
                </div>
                {/* close */}

                <div className="block-un">
                  <div className="a">
                    <p>Saissisez le nom du quartier.</p>

                    <p>
                      Si jamais là ou le client habite on a pas encore donné de
                      nom à ce quartier alors entrer la manière dont les gens
                      qui y vivent appellent cet endroit
                    </p>
                  </div>

                  <div className="b">
                    <input
                      type="text"
                      placeholder="..."
                      value={writeQuarter}
                      onChange={(e) => setWriteQuarter(e.target.value)}
                    />
                    <input type="text" placeholder="..." value={inEnglish} onChange={(e) => setInEnglish(e.target.value)} />
                    <button onClick={SaveQuarterIAC}>
                      <p>Ajouter</p>
                      <hr />
                    </button>
                  </div>
                  {/* b */}
                </div>
                {/* block-un */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* ajouterQuartierIAC */}
        </>
      )}
      {/* ajouter Quartier - IAC */}

      {/* ajout quartier Success - IAC */}
      {/* ajout quartier Success - IAC */}
      {/* on affiche ce message de succes si le collaborateuur a pu ajouter un quartier */}
      {ajoutQuartierSuccessIAC && (
        <>
          <div
            onClick={CloseAjoutQuartierSuccessIAC}
            className="ajoutLangueSuccessIAC"
          >
            <div className="align">
              <div className="card">
                <p>Ajout réussi !</p>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* ajoutLangueSuccessIAC */}
        </>
      )}
      {/* ajout quartier Success - IAC */}

      {/* masquer quartier (page) - IAC */}
      {/* masquer quartier (page) - IAC */}
      {/* ca c'est la page qui va permetre au collaborateur de masquer un quartier */}
      {masquerQuartierPageIAC && (
        <>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>Voulez-vous vraiment masquer : {nameQuarterIAC} ?</p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois">
                  <p onClick={MasquerQuartierIAC}>Oui</p>
                </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre">
                  <p onClick={CloseMasquerQuartierPageIAC}>Annuler</p>
                </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>
      )}
      {/* masquer quartier (page) - IAC */}

      {/* masquer quartier Success - IAC */}
      {/* masquer quartier Success - IAC */}
      {/* ca c'est la page de success, on affiche ca lorsque le quartier a bien ete masquer */}
      {masquerQuartierSuccessIAC && (
        <>
          <div
            onClick={CloseMasquerQuartierSuccessIAC}
            className="numeroOffertSuccessIAC"
          >
            <div className="align">
              <div className="card">
                <div className="display">
                  <p>{nameQuarterIAC} a été masqué</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#00cc00"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M20 7L9 18l-5-5"
                    ></path>
                  </svg>
                </div>
                {/* display */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* rechargeOfferteSuccessIAC */}
        </>
      )}
      {/* masquer quartier Success - IAC */}

      {/* listes des zones (page) - IAC  */}
      {/* listes des zones (page) - IAC  */}
      {/* on affiche la liste des zones */}
      {listeDesZonesPageIAC && (
        <>
          <div className="listeDesPaysPageIAC">
            <div className="align">
              <div className="close">
                <div className="a">
                  <svg
                    onClick={CloseListeDesZonesPageIAC}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    cursor="pointer"
                    fill="#000"
                    enableBackground="new 0 0 486.975 486.975"
                    version="1.1"
                    viewBox="0 0 486.975 486.975"
                    xmlSpace="preserve"
                  >
                    <path d="M473.475 230.025h-427.4l116-116c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-139 139c-5.3 5.3-5.3 13.8 0 19.1l139 139c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-116-116h427.5c7.5 0 13.5-6 13.5-13.5s-6-13.4-13.5-13.4z"></path>
                  </svg>
                  <p>Sélectionner la zone</p>
                </div>
                {/* a */}

                <div className="b">
                  <svg
                    onClick={AjouterZoneIAC}
                    xmlns="http://www.w3.org/2000/svg"
                    width="17px"
                    cursor="pointer"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <g
                        fill="none"
                        stroke="#444"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        data-name="add"
                      >
                        <path d="M12 19L12 5"></path>
                        <path d="M5 12L19 12"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                {/* b */}
              </div>
              {/* close */}

              <div className="indiceLocalisation">
                <button>{nameQuarterIAC}</button>
              </div>
              {/* indiceLocalisation */}

              {/* on affiche la liste des zones - IAC */}
              <div onClick={PageRedirection666ListeDesZonesIAC}>
                {filtreApiListeDesZonesIAC.map((api) => (
                  <EnfantApiListeDesZonesIAC api={api} />
                ))}
              </div>
            </div>
            {/* align */}
          </div>
          {/* listeDesPaysPageIAC */}
        </>
      )}
      {/* listes des zones (page) - IAC  */}

      {/* ajouter Zone - IAC */}
      {/* ajouter Zone - IAC */}
      {/* la page ci permet au collaborateur d'ajouter une zone */}
      {ajouterZoneIAC && (
        <>
          <div className="ajouterQuartierIAC">
            <div className="align">
              <div className="card">
                <div className="close">
                  <div className="a">
                    <p>Ajouter une zone</p>
                  </div>

                  <div className="b">
                    <svg
                      onClick={CloseAjouterZoneIAC}
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      cursor="pointer"
                      width="10px"
                      enableBackground="new 0 0 25.93 25.93"
                      version="1.1"
                      viewBox="0 0 25.93 25.93"
                      xmlSpace="preserve"
                    >
                      <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                    </svg>
                  </div>
                  {/* b */}
                </div>
                {/* close */}

                <div className="block-un">
                  <div className="a">
                    <p>Saissisez le nom de la zone</p>

                    <p>
                      Le nom de la zone peut être le nom d'un lieu public (par
                      exemple un Hôpital, un Arrêt de bus, ...) ou le nom d'un
                      lieu privé (par exemple une École, une Boulangerie, ...).
                    </p>

                    <p>
                      Il faudrait que ça soit un nom ou une appelation connue de
                      tout le monde
                    </p>
                  </div>

                  <div className="b">
                    <input
                      type="text"
                      placeholder="..."
                      value={writeZone}
                      onChange={(e) => setWriteZone(e.target.value)}
                    />
                    <input type="text" placeholder="in english" value={inEnglish} onChange={(e) => setInEnglish(e.target.value)} />
                    <button onClick={SaveZoneIAC}>
                      <p>Ajouter</p>
                      <hr />
                    </button>
                  </div>
                  {/* b */}
                </div>
                {/* block-un */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* ajouterQuartierIAC */}
        </>
      )}
      {/* ajouter Zone - IAC */}

      {/* ajout zone Success - IAC */}
      {/* ajout zone Success - IAC */}
      {/* on affiche ce message de succes si le collaborateuur a pu ajouter une zone */}
      {ajoutZoneSuccessIAC && (
        <>
          <div
            onClick={CloseAjoutZoneSuccessIAC}
            className="ajoutLangueSuccessIAC"
          >
            <div className="align">
              <div className="card">
                <p>Ajout réussi !</p>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* ajoutLangueSuccessIAC */}
        </>
      )}
      {/* ajout zone Success - IAC */}

      {/* masquer zone (page) - IAC */}
      {/* masquer zone (page) - IAC */}
      {/* ca c'est la page qui va permetre au collaborateur de masquer une zone */}
      {masquerZonePageIAC && (
        <>
          <div className="offrirNumeroConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="block-un">
                  <h6>Confirmation</h6>
                  <p>
                    Voulez-vous vraiment masquer : {nameZoneIAC} ?
                  </p>
                </div>
                {/* block-un */}

                <hr />
                <div className="block-trois">
                  <p onClick={MasquerZoneIAC}>Oui</p>
                </div>
                {/* block-trois */}

                <hr />
                <div className="block-quatre">
                  <p onClick={CloseMasquerZonePageIAC}>Annuler</p>
                </div>
                {/* block-quatre */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirNumeroConfirmationIAC */}
        </>
      )}
      {/* masquer zone (page) - IAC */}

      {/* masquer zone Success - IAC */}
      {/* masquer zone Success - IAC */}
      {/* ca c'est la page de success, on affiche ca lorsque la zone a bien ete masquer */}
      {masquerZoneSuccessIAC && (
        <>
          <div onClick={CloseMasquerZoneSuccessIAC} className="numeroOffertSuccessIAC">
            <div className="align">
              <div className="card">
                <div className="display">
                  <p>{nameZoneIAC} a été masqué</p> 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#00cc00"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M20 7L9 18l-5-5"
                    ></path>
                  </svg>
                </div>
                {/* display */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* rechargeOfferteSuccessIAC */}
        </>
      )}
      {/* masquer zone Success - IAC */}

      {/* recapitulatif Localisation - IAC */}
      {/* recapitulatif Localisation - IAC */}
      {/* on affiche le recapitulatif de la Localisation */}
      {recapitulatifLocalisationPageIAC && (
        <>
          <div className="recapitulatifLocalisationIA">
            <div className="close">
              <div className="a">
                <svg
                  onClick={CloseRecapitulatifLocalisationPageIAC}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  cursor="pointer"
                  width="10px"
                  enableBackground="new 0 0 25.93 25.93"
                  version="1.1"
                  viewBox="0 0 25.93 25.93"
                  xmlSpace="preserve"
                >
                  <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                </svg>
                <p>Récapitulatif Localisation</p>
              </div>

              <div className="b"> <hr /> </div>
              {/* b */}
            </div>
            {/* close */}

            <div className="indiceLocalisation"> <button>{nameZoneIAC}</button> </div>
            {/* indiceLocalisation */}

            <div className="card">
              <div className="a">
                <button onClick={EnregistrerLocalisationIAC}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15px"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#0F0F0F"
                      fillRule="evenodd"
                      d="M18.172 1a2 2 0 011.414.586l2.828 2.828A2 2 0 0123 5.828V20a3 3 0 01-3 3H4a3 3 0 01-3-3V4a3 3 0 013-3h14.172zM4 3a1 1 0 00-1 1v16a1 1 0 001 1h1v-6a3 3 0 013-3h8a3 3 0 013 3v6h1a1 1 0 001-1V6.828a2 2 0 00-.586-1.414l-1.828-1.828A2 2 0 0017.172 3H17v2a3 3 0 01-3 3h-4a3 3 0 01-3-3V3H4zm13 18v-6a1 1 0 00-1-1H8a1 1 0 00-1 1v6h10zM9 3h6v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p>Enregistrer</p>
                </button>
              </div>
              {/* a */}

              <div className="b"> <hr /> </div>
              {/* b */}

              <div className="c">
                <p>Zone d'habitation : {nameZoneIAC}</p>
                <p>Quartier : {nameQuarterIAC}</p>
                <p>Ville : {nameCityIAC}</p>
                <p>Pays : {nameCountryIAC}</p>
              </div>
              {/* c */}
            </div>
            {/* card */}

            <div onClick={InfosFuturWithdrawalPointIAC}>
            {apiWithdrawalPointIAC.map((api) => (
              <>
                <ChildApiFuturWithdrawalPointIAC api={api} />
              </>
            ))}
            </div>
            
          </div>
          {/* recapitulatifLocalisationIA */}
        </>
      )}
      {/* recapitulatif Localisation - IAC */}

      {/* on affiche les infos du futur point retrait - IAC */}
      {/* on affiche les infos du futur point retrait - IAC */}
      {infosFuturWithdrawalPointIAC && (
        <>
          <div className="infosFuturWithdrawalPointIAC">
            <div className="align">
              <div className="head"></div>
              {/* head */}

              <div className="body">
                <div className="card">
                  <div className="infos">
                    <div className="width">
                      <div className="adresseEtLocalisation">
                        <div className="block-one">
                          <div className="a">
                            <div onClick={CloseInfosFuturWithdrawalPointIAC} className="aa"> <p>{nameIAC}</p> </div>
                            <div className="bb"> <img src={photoIAC} alt="" /> </div>
                          </div>
                          {/* a */}

                          <div onClick={CloseInfosFuturWithdrawalPointIAC} className="b">
                            <hr />
                            <p>{addressIAC}</p>
                            <p>{zoneIAC}</p>
                            <p>{quarterIAC}</p>
                            <p>{cityIAC}</p>
                            <p>{countryIAC}</p>
                          </div>
                          {/* b */}
                        </div>
                        {/* block-one */}

                        <div className="block-two"> <SvgVirtualNumber /> <p>{virtualNumberIAC}</p> </div> {/* numero virtuel */}
                        <div className="block-two"> <SvgPhoneNumber /> <p>{phoneNumberIAC}</p> </div> {/* numero de telephone */}
                        {/* block-two */}

                        <div className="block-three"> <button onClick={LocalizationAndPointIAC}>Mettre à jour la Localisation et Afficher le Point Retrait</button> </div>
                        {/* block-three */}
                      </div>
                      {/*adresseEtLocalisation */}
                    </div>
                    {/* width */}
                  </div>
                  {/* infos */}

                  <div className="otherOptions">
                        <div className="block-one">
                          <div className="a"> <p>Adresse rennomer</p> </div>
                          <div className="b"> <p>{addressPointIAC}</p> </div>

                          <div className="c">
                            <input value={writeAddress} onChange={(e) => setWriteAddress(e.target.value)} type="text" placeholder="Situé à ..." />
                            <button onClick={SaveAddressPointIAC}>Enregistrer</button>
                          </div>
                        </div>
                        {/* block-one */}

                        <div className="block-two">
                          {verifyVisibleIAC && (<>
                          <div className="a">
                            <p>Aucune personne ne voit ce Point Retrait</p>
                            <button onClick={DisplayWithdrawalPointIAC}>Afficher</button>
                          </div></>)}

                          {verifyVisibleIAC && (<>
                          <div className="b">
                            <p>Visible au Public</p>
                            <button onClick={HideWithdrawalPointIAC}>Masquer ce Point Retrait</button>
                          </div></>)}
                        </div>
                        {/* block-two */}

                        <div className="block-three">
                          <div className="a"> <p>Recharge</p> </div>

                          <div className="b">
                            <p>Recharge Stock National</p>
                            <input value={writeAmount} onChange={(e) => setWriteAmount(e.target.value)} type="text" placeholder="saisir le montant..." />
                            <button onClick={RechargeStockNationalIAC}>Recharger</button>
                          </div>

                          <div className="b">
                            <p>Corriger prix numero virtuel</p>
                            <input value={correct} onChange={(e) => setCorrect(e.target.value)} type="text" placeholder="saisir le prix..." />
                            <button onClick={CorrectIAC}>Corriger</button>
                          </div>

                          <div className="b">
                            <p>Recharge National Payante</p>
                            <input value={writeAmount} onChange={(e) => setWriteAmount(e.target.value)} type="text" placeholder="saisir le montant..." />
                            <button onClick={PaidNationalRechargeIAC}>Recharger</button>
                          </div>
                        </div>
                        {/* block-three */}
                      </div>
                      {/* otherOptions */}
                </div>
                {/* card */}
              </div>
              {/* body */}
            </div>
            {/* align */}
          </div>
          {/* infosFuturWithdrawalPointIAC */}
        </>
      )}
      {/* on affiche les infos du futur point retrait - IAC */}

      {/* plus d'infos (page) - IAC */}
      {/* plus d'infos (page) - IAC */}
      {/* plus d'infos (page) - IAC */}
      {/* sur cette page, on affiche plus d'informations sur le compte izocash - IAC */}
      {plusInfosPageIAC && (
        <>
          <div className="plusInfosPageIAC">
            <div className="align">
              <div className="head">
                <div className="close">
                  <svg
                    onClick={ListeCadeauPageIAC}
                    xmlns="http://www.w3.org/2000/svg"
                    width="17px"
                    cursor="pointer"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <g
                        fill="none"
                        stroke="#444"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        data-name="add"
                      >
                        <path d="M12 19L12 5"></path>
                        <path d="M5 12L19 12"></path>
                      </g>
                    </g>
                  </svg>

                  <svg
                    onClick={ClosePlusInfosPageIAC}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    cursor="pointer"
                    width="10px"
                    fill="#444"
                    enableBackground="new 0 0 25.93 25.93"
                    version="1.1"
                    viewBox="0 0 25.93 25.93"
                    xmlSpace="preserve"
                  >
                    <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                  </svg>
                </div>
                {/* close */}
              </div>
              {/* head */}

              <div className="body">
                <div className="card">
                  {/* Compte utilisateur - (izocash) */}
                  {/* Compte utilisateur - (izocash) */}
                  <div className="compte">
                    <div className="a">
                      <p>Compte izocash utilisateur</p>
                      <p>Carine Toukam</p>
                      <button>2375-carine</button>
                      <hr />
                    </div>

                    <div className="b">
                      <h3>Historique</h3>
                      <p>Recharge national</p>
                      <p>Recharge international</p>
                      <p>Retraits d'argent</p>
                    </div>

                    <div className="b">
                      <p>Transferts d'argent</p>
                    </div>

                    <div className="b">
                      <h3>Identité</h3>
                      <p>Identité Carine Toukam</p>
                    </div>

                    <div className="c">
                      <p>10/02/2023, 1033 (Dernière connexion)</p>
                    </div>
                    {/* c */}
                  </div>
                  {/* compte */}
                  {/* Compte utilisateur - (izocash) */}

                  {/* Compte izocash Business */}
                  {/* Compte izocash Business */}
                  <div className="compte">
                    <div className="a">
                      <p>Compte izocash Business</p>
                      <p>Agence Serfin SA</p>
                      <p>Partenaire Serfin SA</p>
                      <button>242-Serfin</button>
                      <hr />
                    </div>

                    <div className="b">
                      <h3>Délivrer</h3>
                      <p>Stock Recharge</p>
                      <p>Stock Retrait</p>
                    </div>

                    <div className="b">
                      <h3>Historique</h3>
                      <p>Recharge national (agence)</p>
                      <p>Recharge international (agence)</p>
                      <p>Retraits d'argent (agence)</p>
                    </div>

                    <div className="b">
                      <p>Numéros virtuels délivrés</p>
                    </div>

                    <div className="b">
                      <h3>Identité</h3>
                      <p>Identité Serfin SA</p>
                    </div>

                    <div className="c">
                      <p>10/02/2023, 1033 (Dernière connexion)</p>
                    </div>
                    {/* c */}
                  </div>
                  {/* compte */}
                  {/* Compte izocash Business */}

                  {/* Compte izocash Deals */}
                  {/* Compte izocash Deals */}
                  <div className="compte">
                    <div className="a">
                      <p>Compte izocash Deals</p>
                      <p>Muriel Blanche</p>
                      <button>2377-muriel</button>
                      <hr />
                    </div>

                    <div className="b">
                      <h3>Historique</h3>
                      <p>Transactions izocash Deals</p>
                      <p>Virement national</p>
                      <p>Virement international</p>
                      <p>Virement compte bancaire virtuel</p>
                    </div>

                    <div className="b">
                      <p>Recharge national</p>
                      <p>Recharge international</p>
                      <p>Retraits d'argent</p>
                    </div>

                    <div className="b">
                      <p>Transferts d'argent</p>
                    </div>

                    <div className="b">
                      <h3>Identité</h3>
                      <p>Identité Muriel Blanche</p>
                    </div>

                    <div className="c">
                      <p>10/02/2023, 1033 (Dernière connexion)</p>
                    </div>
                    {/* c */}
                  </div>
                  {/* compte */}
                  {/* Compte izocash Deals */}

                  {/* Compte izocash Développeur */}
                  {/* Compte izocash Développeur */}
                  <div className="compte">
                    <div className="a">
                      <p>Compte izocash Développeur</p>
                      <p>Dav Stephan</p>
                      <button>2422-dav</button>
                      <hr />
                    </div>

                    <div className="b">
                      <h3>Historique</h3>
                      <p>Recharge national</p>
                      <p>Recharge international</p>
                      <p>Retraits d'argent</p>
                    </div>

                    <div className="b">
                      <p>Transferts d'argent</p>
                    </div>

                    <div className="b">
                      <h3>Identité</h3>
                      <p>Identité Serfin SA</p>
                    </div>

                    <div className="c">
                      <p>10/02/2023, 1033 (Dernière connexion)</p>
                    </div>
                    {/* c */}
                  </div>
                  {/* compte */}
                  {/* Compte izocash Développeur */}
                </div>
                {/* card */}
              </div>
              {/* body */}
            </div>
            {/* align */}
          </div>
          {/* plusInfosPageIAC */}
        </>
      )}
      {/* plus d'infos (page) - IAC */}

      {/* listes des cadeaux (page) - IAC */}
      {/* listes des cadeaux (page) - IAC */}
      {/* sur cette page on affiche la liste des cadeaux qu'on pourra offrir a nos futurs partenaires */}
      {listeCadeauPageIAC && (
        <>
          <div onClick={CloseListeCadeauPageIAC} className="listeCadeauPageIAC">
            <div className="align">
              <div className="card">
                <p onClick={OffrirRechargePageIAC}>Offrir une Recharge</p>
                <p>Offrir une Licence</p>
                <p>Offrir un Numéro virtuel</p>
                <p>Offrir un Module izocash Deals</p>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* listeCadeauPageIAC */}
        </>
      )}
      {/* listes des cadeaux (page) - IAC */}

      {/* offrir Recharge (page) - IAC  */}
      {/* offrir Recharge (page) - IAC  */}
      {/* c'est la page pour offrir des recharges */}
      {offrirRechargePageIAC && (
        <>
          <div className="offrirRechargePageIAC">
            <div className="align">
              <div className="close">
                <div className="a">
                  <svg
                    onClick={CloseOffrirRechargePageIAC}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    cursor="pointer"
                    fill="#000"
                    enableBackground="new 0 0 486.975 486.975"
                    version="1.1"
                    viewBox="0 0 486.975 486.975"
                    xmlSpace="preserve"
                  >
                    <path d="M473.475 230.025h-427.4l116-116c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-139 139c-5.3 5.3-5.3 13.8 0 19.1l139 139c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-116-116h427.5c7.5 0 13.5-6 13.5-13.5s-6-13.4-13.5-13.4z"></path>
                  </svg>
                  <p>Offrir une recharge</p>
                </div>
                {/* a */}

                <div className="b">
                  <svg
                    onClick={AjouterMontantRechargeAoffrirPageIAC}
                    xmlns="http://www.w3.org/2000/svg"
                    width="17px"
                    cursor="pointer"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <g
                        fill="none"
                        stroke="#444"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        data-name="add"
                      >
                        <path d="M12 19L12 5"></path>
                        <path d="M5 12L19 12"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                {/* b */}
              </div>
              {/* close */}

              <div className="block-un">
                <p>Choisir le montant à Offrir</p>
              </div>
              {/* block-un */}

              {/* on affiche les montants a offrir dans l'enfant api */}
              <div
                onClick={OffrirRechargeConfirmationIAC}
                className="display-montant"
              >
                {apiMontantAoffrirIAC.map((api) => (
                  <>
                    <EnfantApiMontantAoffrirIAC api={api} />
                  </>
                ))}
              </div>
              {/* display-montant */}
            </div>
            {/* align */}
          </div>
          {/* offrirRechargePageIAC */}
        </>
      )}
      {/* offrir Recharge (page) - IAC */}

      {/* offrir Recharge Confirmation - IAC */}
      {/* offrir Recharge Confirmation - IAC */}
      {/* ca c'est la page de confirmation, pour que le collaborateur confirme s'il
      veut vraiment offrir une recharge gratuite */}
      {offrirRechargeConfirmationIAC && (
        <>
          <div className="offrirRechargeConfirmationIAC">
            <div className="align">
              <div className="card">
                <div className="a">
                  <p>
                    Voulez-vous vraiment offrir une recharge de 200 000 FCFA à
                    Serfin SA{" "}
                  </p>
                </div>
                {/* a */}

                <div className="b">
                  <p onClick={CloseOffrirRechargeConfirmationIAC}>Annuler</p>
                </div>
                {/* b */}

                <div className="c">
                  <p onClick={RechargeOfferteSuccessIAC}>Oui, Offrir !</p>
                </div>
                {/* c */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* offrirRechargeConfirmationIAC */}
        </>
      )}
      {/* offrir Recharge Confirmation - IAC */}

      {/* recharge Offerte Success - IAC */}
      {/* recharge Offerte Success - IAC */}
      {/* ca c'est la page de success, lorsque la recharge a ete offerte, on va 
      afficher cette page */}
      {rechargeOfferteSuccessIAC && (
        <>
          <div
            onClick={CloseRechargeOfferteSuccessIAC}
            className="rechargeOfferteSuccessIAC"
          >
            <div className="align">
              <div className="card">
                <div className="display">
                  <p>Recharge offerte avec succès</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="#00cc00"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M20 7L9 18l-5-5"
                    ></path>
                  </svg>
                </div>
                {/* display */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* rechargeOfferteSuccessIAC */}
        </>
      )}
      {/* recharge Offerte Success - IAC */}

      {/* ajouter Montant Recharge A offrir (Page) - IAC */}
      {/* ajouter Montant Recharge A offrir (Page) - IAC */}
      {/* la page ci nous permet d'ajouter d'autres montants à la liste des montants
      à offrir */}
      {ajouterMontantRechargeAoffrirPageIAC && (
        <>
          <div className="ajouterMontantRechargeAoffrirPageIAC">
            <div className="align">
              <div className="card">
                <div className="close">
                  <div className="a">
                    <svg
                      onClick={CloseAjouterMontantRechargeAoffrirPageIAC}
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      width="20px"
                      cursor="pointer"
                      fill="#000"
                      enableBackground="new 0 0 486.975 486.975"
                      version="1.1"
                      viewBox="0 0 486.975 486.975"
                      xmlSpace="preserve"
                    >
                      <path d="M473.475 230.025h-427.4l116-116c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-139 139c-5.3 5.3-5.3 13.8 0 19.1l139 139c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-116-116h427.5c7.5 0 13.5-6 13.5-13.5s-6-13.4-13.5-13.4z"></path>
                    </svg>
                  </div>
                  {/* a */}

                  <div className="b">
                    <p>Montant Recharge à Offrir (Ajouter)</p>
                  </div>
                  {/* b */}
                </div>
                {/* close */}

                <div className="block-un">
                  <p>Saisissez le montant à ajouter</p>
                  <input type="text" />
                </div>
                {/* block-un */}

                <div className="block-un">
                  <p>Valeur du montant</p>
                  <input type="text" />
                </div>
                {/* block-un */}

                <div className="block-deux">
                  <button onClick={MontantRechargeAoffrirAjouterAvecSuccessIAC}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17px"
                      cursor="pointer"
                      viewBox="0 0 24 24"
                    >
                      <g>
                        <g
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          data-name="add"
                        >
                          <path d="M12 19L12 5"></path>
                          <path d="M5 12L19 12"></path>
                        </g>
                      </g>
                    </svg>
                    <p>Ajouter</p>
                  </button>
                </div>
                {/* block-deux */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* ajouterMontantRechargeAoffrirPageIAC */}
        </>
      )}
      {/* ajouter Montant Recharge A offrir (Page) - IAC */}

      {/* montant Recharge A offrir Ajouter Avec Success - IAC */}
      {/* montant Recharge A offrir Ajouter Avec Success - IAC */}
      {/* si le collaborateur a reussi a ajouter un montant à la liste des montants
      à offrir, alors on va l'afficher ce message de success */}
      {montantRechargeAoffrirAjouterAvecSuccessIAC && (
        <>
          <div
            onClick={CloseMontantRechargeAoffrirAjouterAvecSuccessIAC}
            className="montantRechargeAoffrirAjouterAvecSuccessIAC"
          >
            <div className="align">
              <div className="card">
                <div className="a">
                  <p>Montant Recharge ajouté avec succès !</p>
                </div>
                {/* a */}

                <div className="b">
                  <p>( Montant à Offrir )</p>
                </div>
                {/* b */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* montantRechargeAoffrirAjouterAvecSuccessIAC */}
        </>
      )}
      {/* montant Recharge A offrir Ajouter Avec Success - IAC  */}

      {/* Alrani control Page */}
      {/* Alrani control Page */}
      {/* la page ci nous permet de controler l'application Alrani */}
      {alraniControlPage && (
        <>
          <div className="alraniControlPage">
            <div className="admin">
              {/* actualiser la page veut dire actualiser les infos de l'utilisateur/infos de l'auteur,
        c'est tout simplement une requette qu'on fait au niveau de l'api user */}
              <div className="admin-btn-actualiser">
                <p onClick={CloseAlraniControlPage}>
                  Gestion de l'application Alrani
                </p>
                <button onClick={ActualiserPage}>Actualiser la page</button>
                <button onClick={ActualiserPublication}>
                  Actualiser les publications
                </button>
              </div>
              {/* admin-btn-actualiser */}

              <div style={{ paddingBottom: "40px" }}></div>

              {isLoading ? (
                <>
                  <div className="loader-display-in-center">
                    <Loader />
                  </div>
                </>
              ) : (
                <>
                  {/* api posts */}
                  {/* api posts */}
                  {/* api posts */}
                  {/* api posts */}
                  {apiPosts.map((api) => (
                    <>
                      {/* quand on clique sur un post, une popup va s'ouvrir, ensuite on pourra 
                mettre une page en avant */}
                      <div onClick={PageEnAvant}>
                        <EnfantApiPosts api={api} />
                      </div>
                    </>
                  ))}
                  {/* api posts */}

                  <div style={{ paddingTop: "40px" }}></div>

                  <p
                    style={{
                      color: "#ccc",
                      fontSize: "14px",
                      textAlign: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    C'est tout !
                  </p>
                </>
              )}
            </div>
            {/* admin */}
          </div>
          {/* alraniControlPage */}
        </>
      )}
      {/* Alrani control Page */}

      {/* ici c'est pour mettre une page en avant - page */}
      {pageEnAvant && (
        <>
          <div onClick={PageEnAvant} className="actualiser-page-opacity">
            <div className="align">
              <div className="card">
                <div className="block">
                  <div className="a">
                    <p>Nom de la page : {nomAuteur}</p>
                  </div>
                  {/*  */}
                  {filtreApiAuteur.map((api) => (
                    <>
                      {api.visible === "1" ? (
                        <>
                          <div className="b">
                            <p>( Cette page est mise en avant )</p>
                          </div>
                          {/* b */}
                        </>
                      ) : (
                        <>
                          <div className="b">
                            <p>( Page non mise en avant )</p>
                          </div>
                          {/* b */}
                        </>
                      )}
                      {/*  */}
                    </>
                  ))}

                  <div className="b">
                    <p onClick={MettrePageEnAvant}>Mettre la Page en avant</p>
                  </div>
                  {/* b */}

                  <div className="b">
                    <p>Ne plus mettre la page en avant</p>
                  </div>
                  {/* b */}

                  <div className="b">
                    <p>Rendre la publication visible sur la page uniquement</p>
                  </div>
                  {/* b */}

                  <div className="b">
                    <p>
                      Rendre la publication visible uniquement par le
                      propriétaire de la page
                    </p>
                  </div>
                  {/* b */}

                  <div className="b">
                    <p>Supprimer la publication des serveurs</p>
                  </div>
                  {/* b */}

                  {filtreApiPosts.map((api) => (
                    <>
                      {api.visible === "1" ? (
                        <>
                          <div className="b">
                            <p>( Cette publication est mise en avant )</p>
                          </div>
                          {/* b */}
                        </>
                      ) : (
                        <>
                          <div className="b">
                            <p>( Cette publication n'est pas mise en avant )</p>
                          </div>
                          {/* b */}
                        </>
                      )}
                      {/*  */}
                    </>
                  ))}

                  <div className="b">
                    <p onClick={MettrePublicationEnAvant}>
                      Mettre la publication en avant
                    </p>
                  </div>
                  {/* b */}

                  <div className="b">
                    <p>Ne plus mettre la publication en avant</p>
                  </div>
                  {/* b */}
                </div>
                {/* block */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* actualiser-page-opacity */}
        </>
      )}
      {/* mettre en avant - page */}

      {/* message de success - Publication mise en avant */}
      {/* message de success - Publication mise en avant */}
      {publicationEnAvantSuccess && (
        <>
          <div
            onClick={ClosePublicationEnAvantSuccess}
            className="page-opacity"
          >
            <div className="align">
              <div className="card">
                <div className="block">
                  <div className="a">
                    <p>
                      La publication a été mise en avant! Vous pouvez actualiser
                      les publications
                    </p>
                  </div>
                  {/* a */}
                </div>
                {/* block */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* page-opacity */}
        </>
      )}
      {/* message de success - Publication mise en avant */}

      {/* message de success - page mise en avant */}
      {/* message de success - page mise en avant */}
      {pageEnAvantSuccess && (
        <>
          <div onClick={ClosePageEnAvantSuccess} className="page-opacity">
            <div className="align">
              <div className="card">
                <div className="block">
                  <div className="a">
                    <p>
                      La page a été mise en avant! Vous pouvez actualiser la
                      page
                    </p>
                  </div>
                  {/* a */}
                </div>
                {/* block */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* page-opacity */}
        </>
      )}
      {/* message de success - Page mise en avant */}

      {/* message de success - publication Actualiser avec Success */}
      {/* message de success - publication Actualiser avec Success */}
      {publicationActualiserSuccess && (
        <>
          <div
            onClick={ClosePublicationActualiserSuccess}
            className="page-opacity"
          >
            <div className="align">
              <div className="card">
                <div className="block">
                  <div className="a">
                    <p>Toutes les publications ont été actualisées !</p>
                  </div>
                  {/* a */}
                </div>
                {/* block */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* page-opacity */}
        </>
      )}
      {/* message de success - publication Actualiser avec Success */}

      {/* message de success - page Actualiser avec Success */}
      {/* message de success - page Actualiser avec Success */}
      {pageActualiserSuccess && (
        <>
          <div onClick={ClosePageActualiserSuccess} className="page-opacity">
            <div className="align">
              <div className="card">
                <div className="block">
                  <div className="a">
                    <p>
                      Les infos de tout les utilisateurs ont été actualisées !
                    </p>
                  </div>
                  {/* a */}
                </div>
                {/* block */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* page-opacity */}
        </>
      )}
      {/* message de success - page Actualiser avec Success */}

      {/* erreur - IAC */}
      {/* erreur - IAC */}
      {/* on affiche ce message d'erreur si une erreur est rencontrer par exemple
      lorsque le collaborateur ajoute un pays, une langue,... et que ca ne fonctionne pas 
      pour telle ou telle raison alors ce message d'erreur s'affichera */}
      {erreurIAC && (<>
          <div onClick={CloseErreurIAC} className="erreurIAC">
            <div className="align">
              <div className="card">
                <p>Une erreur s'est produite. Réessayer plus tard !</p>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* erreurIAC */}
        </>)}
      {/* erreur - IAC */}


      {/* message d'erreur - AAC */}
      {/* message d'erreur - AAC */}
      {errorAAC && (<> 
          <div onClick={CloseErrorAAC} className="erreurIAC">
            <div className="align">
              <div className="card">
                <p>Une erreur s'est produite. Réessayer plus tard !</p>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* erreurIAC */}
        </>)}
      {/* message d'erreur - AAC */}


      {/* erreur */}
      {/* api deconne ou utilisateur a entrer des mauvaises donnees ou aucune 
      connexion internet */}
      {erreur && (
        <>
          <div onClick={CloseErreur} className="page-general-opacity">
            <div className="align">
              <div className="card">
                <div className="center">
                  <p>Vérifier votre connexion internet !</p>
                </div>
                {/* center */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* page-general-opacity */}
        </>
      )}
      {/* erreur */}

      {/* opacity */}
      {/* opacity */}
      {opacity && (
        <>
          <div className="popup-notice-background">
            <div className="align">
              <p></p>
            </div>
          </div>
        </>
      )}
      {/* opacity */}
    </>
  );
}
