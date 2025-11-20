import axios from 'axios';
import { React, useState, useEffect } from 'react';

import SvgBadge from "./Svg/SvgBadge";
import SvgFile from "./Svg/SvgFile"; //f
import SvgLeft from "./Svg/SvgLeft";
import SvgLeft2 from "./Svg/SvgLeft2"
import SvgPointsVertical from "./Svg/SvgPointsVertical";
import SvgSend from "./Svg/SvgSend";

import { theme } from "./theme";
import "./utils.css"; 
import "./darkmode.css";



export function SeePhotoModal({ visible, fermer, url, title }) {
  if (!visible) return null; // n'affiche rien si pas visible

  return (
    <div className="noir">
      <div className="flex">
        <div onClick={fermer} className="a"> <SvgLeft2 /> </div>
        <div className="b"> <p>{title || ""}</p> </div>
      </div>

      <div className="cadre"> <img src={url} alt={title || "photo"} className="photo"/> </div>
    </div>
  );
}

export function Page2({ visible, fermer, children }) {
  if (!visible) return null;

  return (
    <div onClick={fermer} className="page-blanche">
		<div style={theme.marge}>
		  {children}
		</div>
    </div>
  );
}


export function Page({ visible }) {
	if (!visible) return null;
  return (
    <div className="page-blanche"> </div>
  );
}


export function Close({ fermer }) {
  return (<>
			<div className="close">
              <div className="a" onClick={fermer}> <SvgLeft /> </div>
              <div className="b"> <p></p> </div>
            </div>
            {/* close */}
  </>
)}


export function Button({ envoyer, texte }) {
  return (<>
		<button style={theme.bouton} onClick={envoyer}>{texte}</button>
  </>
  
)}


export function Input({ texte, valeur, setValeur }) {

  return (<>
              <input
			  type="text"
              placeholder={texte}
              value={valeur}
              onChange={(e) => setValeur(e.target.value)}
			  style={theme.input}
            />
  </>
)}



export function MilieuMA({ nom, titre, titre2 }) {

  return (<>
              <div className="b"> <h1>{nom}</h1> </div>
			  <div style={theme.blue}> <p>{titre}</p> </div>
			  <div className="b"> <p>{titre2}</p> </div>
  </>
)}


export function MiniPhrase({ titre1, titre2 }) {

  return (<>
		<div className="block-quatre">
                  <div className="b"> <p>{titre1}</p> </div>
				  <div> <p>{titre2}</p> </div>
                </div>
				</>
)}


const apiUrls = [
  `${process.env.REACT_APP_Api1}`,
  `${process.env.REACT_APP_Api2}`,
  `${process.env.REACT_APP_Api3}`,
];

const apiUrlsPhoto = apiUrls.map(base => `${base}/api/messageFA/sendPhoto`);
	  

async function uploadImage(file) {
  for (const api of apiUrlsPhoto) {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const res = await axios.post(api, formData, {
        headers: { 'Content-Type': 'multipart/form-data', },
      });
	  console.log("resultat de l'upload, res", res);
	  console.log("resultat de l'upload, res.data", res.data);
	  console.log("resultat de l'upload, res.data.urlPhoto", res.data.urlPhoto);

      if (res.status !== 200) throw new Error("Erreur lors de l'upload de l'image");

      return { urlPhoto: res.data.urlPhoto, messageCool: "Image uploadée avec succès" };
    } catch (err) {
      // passer à l'API suivante en cas d'erreur
    }
  }
  throw new Error('Toutes les tentatives d\'upload ont échoué');
}
	  
	  
export async function EnvoyerFAA3({ urlApi, id, idUser, urlPhoto, urlVideo, visible, type }) {
  const data = {};

  if (id !== undefined) data.id = id;
  if (idUser !== undefined) data.idUser = idUser;
  if (urlPhoto !== undefined) data.urlPhoto = urlPhoto;
  if (urlVideo !== undefined) data.urlVideo = urlVideo;
  if (visible !== undefined) data.visible = visible;
  if (type !== undefined) data.type = type;

  try {
    const response = await axios.post(`${urlApi}/api/messageFA/new`, data);
    return response.data; // tu peux retourner la réponse si besoin
  } catch (err) {
    // Gère l'erreur dans le composant appelant si nécessaire
    throw err; 
  }
}


async function envoyerFAA2({ urlApi, id, idUser, urlPhoto, urlVideo, visible, type }) {
  for (const api of apiUrls) {
    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ urlApi, id, idUser, urlPhoto, urlVideo, visible, type }),
      });
      if (!response.ok) throw new Error('Envoi FAA échoué');
      const data = await response.json();
      return data; // ou autre indication de succès
    } catch (err) {
      // passer à l'API suivante en cas d'erreur
    }
  }
  throw new Error('Toutes les tentatives d\'envoi FAA ont échoué');
}


async function envoyerFAA({
		id,	  
		message,
		urlPhoto,
        urlVideo,
		idAccount,
		nameAccount,
        photoAccount,
        badgeAccount,
		idAccountChef,
        idGroupChef,
        clic,
        comment,
        account,
        group,
        visible,		
	    type, 
		url,	
	}) {

  for (const api of apiUrls) {
    try {
	  // Concaténer l'API de base avec l'endpoint
      const fullUrl = `${api}${url}`;
	  
	  console.log("fullUrl ici", fullUrl)
	  console.log("url ici", url)
	  console.log("urlPhoto ici", urlPhoto)
	  console.log("urlVideo ici", urlVideo)
	  console.log("idAccount ici", idAccount)
	  console.log("message ici", message)
	  
      const response = await axios.post(fullUrl, {
        id,	  
		message,
        urlPhoto,
        urlVideo,
		idAccount,
		nameAccount,
        photoAccount,
        badgeAccount,
		idAccountChef,
        idGroupChef,
        clic,
        comment,
        account,
        group,
        visible,		
	    type, 
      }, {
        headers: { 'Content-Type': 'application/json' }
      });
      return response.data; // Retourne la réponse de l'API
    } catch (err) {
      // Passer à l'API suivante en cas d'erreur
    }
  }
  throw new Error('Toutes les tentatives d\'envoi FAA ont échoué');
}


export async function GenererMiniatureVideo({ file, setMiniature, second }) {
  console.log("Début de la génération de miniature");
  
  console.log('file icii:', file);
  console.log('second icii:', second);
	
  try {
    // Fonction pour capturer la miniature
    const captureThumbnail = (videoFile, seconds = 1) => {
      return new Promise((resolve, reject) => {
        const url = URL.createObjectURL(videoFile);
        const video = document.createElement('video');

        // Pour avoir une meilleure qualité
        video.src = url;
        video.crossOrigin = "anonymous";

        // Quand la vidéo est prête
        video.addEventListener('loadeddata', () => {
          // Positionner la vidéo à la seconde souhaitée
          video.currentTime = seconds;
        });

        // Quand la lecture est positionnée
        video.addEventListener('seeked', () => {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const dataURL = canvas.toDataURL('image/jpeg', 1); // HD
          resolve(dataURL);
          URL.revokeObjectURL(url);
        });

        video.addEventListener('error', (err) => {
          reject(err);
        });
      });
    };

    // Capture la miniature
    const miniatureBase64 = await captureThumbnail(file, second);
    
    // Mettre à jour l’état ou faire autre chose avec l’image
    setMiniature(miniatureBase64);
    
    // Si vous souhaitez aussi l’envoyer au serveur, faites une requête ici
    // par ex : 
    // await axios.post('/api/uploadMiniature', { image: miniatureBase64 });
    
  } catch (error) {
    console.error("Erreur lors de la génération de la miniature : ", error);
  }
}


// convertir l'image qui est en base64 => en file
export function base64ToFile(photobase64, filename = 'image.jpg', mimeType = 'image/jpeg') {
  if (!photobase64) {
    throw new Error('La chaîne base64 est indéfinie ou vide.');
  }

  const base64Parts = photobase64.split(',');
  const base64Data = base64Parts.length > 1 ? base64Parts[1] : photobase64;

  const byteCharacters = atob(base64Data);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new File([byteArray], filename, { type: mimeType });
}



export async function Envoyer3({
		file,
  
		id,
		message,
        urlVideo,
		idAccount,
		nameAccount,
        photoAccount,
        badgeAccount,
		idAccountChef,
        idGroupChef,
        clic,
        comment,
        account,
        group,
        visible,		
	    type, 
		url,
		actions = {}, // par défaut, un objet vide
}) {
	
	console.log("file ici :", file);
	console.log("idAccount ici :", idAccount);
	console.log("type ici :", type);
	console.log("urlVideo ici :", urlVideo);
	
	
  // Vérifier si chaque action doit être effectuée
  if (actions.envoyerPhoto) {
    try {
      // const uploadRes = await uploadImage(file);
	  // urlPhoto = uploadRes.urlPhoto;
	  
	  const photoConverti = base64ToFile(file);

	  const { urlPhoto } = await uploadImage(photoConverti);	  
	  const urlPhotoSauvegarder = urlPhoto;
    } catch (err) {
      console.error('Erreur lors de l\'upload photo:', err);
    }
  }

  if (actions.envoyer) {
    try {
      await envoyerFAA({ id, urlVideo, visible, type });
    } catch (err) {
      console.error('Erreur lors de l\'envoi FAA:', err);
    }
  }
  
  if (actions.publierVideo) {
    try {
      await envoyerFAA({  
		id,	  
		message,
        urlPhoto: urlPhotoSauvegarder,
        urlVideo,
		idAccount,
		nameAccount,
        photoAccount,
        badgeAccount,
		idAccountChef,
        idGroupChef,
        clic,
        comment,
        account,
        group,
        visible,		
	    type, 
		url,
		});  
    } catch (err) {
      console.error('Erreur lors de l\'envoi FAA:', err);
    }
  }
  
}
// Envoyer3


async function getMessagesFromIndexedDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('MessagesDB', 1);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction('messages', 'readonly');
      const store = transaction.objectStore('messages');
      const getAllRequest = store.getAll();

      getAllRequest.onsuccess = () => {
        resolve(getAllRequest.result);
      };
      getAllRequest.onerror = () => {
        reject(getAllRequest.error);
      };
    };
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('messages')) {
        db.createObjectStore('messages', { keyPath: 'id' });
      }
    };
  });
}


export function SpeedMessages({ visible, fermer, data }) {	
  //const [messages, setMessages] = useState([]); // Messages affichés
  
  const [messages, setMessages] = useState([]); // Tous les messages chargés
  const [afficherMessages, setAfficherMessages] = useState([]); // Messages affichés
  const [currentIndex, setCurrentIndex] = useState(0); // Index pour le lot actuel
  
  async function logMessages() {
	  console.log("messages de SpeedMessages ici :", messages);
	  console.log("data ici :", data);
	}	
	
	/*
  //Charger les messages quand data change
  useEffect(() => {
    if (data) {
      storeMessages(data); // Stocker tous les messages dans IndexedDB
      setMessages(data); // Mettre à jour le state avec seulement 20 messages
    }
  }, [data]);
  
  
useEffect(() => {
  async function loadMessages() {
    try {
      const storedMessages = await getMessagesFromIndexedDB();
	  console.log("storedMessages ici ici:", storedMessages);
      setMessages(storedMessages);
    } catch (error) {
      console.log("Erreur lors du chargement depuis IndexedDB :", error);
    }
  }
  loadMessages();
}, []); 

*/


  const lot = 20; // Taille du lot

  useEffect(() => {
    const fetchMessages = async () => {
      const allMessages = await getMessagesFromIndexedDB(); // Récupère tous les messages
      setMessages(allMessages);
      // Charger le premier lot
      setAfficherMessages(allMessages.slice(0, lot));
      setCurrentIndex(lot);
    };

    fetchMessages();
  }, [])
  
  
  const loadMore = () => {
    const nextIndex = currentIndex + lot;
    const moreMessages = messages.slice(currentIndex, nextIndex);
    setAfficherMessages(prev => [...prev, ...moreMessages]);
    setCurrentIndex(nextIndex);
  };

  // Gérer le scroll pour charger plus
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      // Si on arrive en bas, charger plus
      loadMore();
    }
  };
  
  if (!visible) return null;

  return (
    <div className="page-blanche" onScroll={handleScroll}>
      <Close fermer={fermer} />
	  
	  {/* Bouton pour charger plus */}
      <button>Charger plus</button>
	  
	  <button onClick={logMessages}>console log</button>

      {afficherMessages.map((api) => (
        <div key={api._id.toString()}>
          <div className="photo-70px"><img src={api.photoProfile} alt="" /></div>
          <div className="pre-17px"><pre>{api.nameAccount}</pre></div>
        </div>
      ))}
    </div>
  );
}



export function PopularityAccountCard({ api }) {
  return (
    <div className="display-nowrap">
      <div className="p-15px"><p>{api.popularity}</p></div>
      <div className="photo-70px"><img src={api.photoProfile} alt="" /></div>
      <div className="pre-17px"><pre>{api.nameAccount}</pre></div>
    </div>
  );
}


export function ComptesRecentsTemplate({ visible, data, fermer }) {
  if (!visible) return null;
  
  console.log('data ici:', data);

  return (<>
      <div className="page-blanche">
		  <div className="marge-20px">
			  <Close fermer={fermer} />
			  
			  {data.map((api) => (<>
				<PopularityAccountCard api={api} />
			  </>))}
		 </div>
	 </div>
 </>)}
   

export function MissionTemplate({ visible, valeur, setValeur, envoyer, message, nomMembre, titre, titre2, titre3, titre4, titre5, titre7, titre8, titre9 }) {
  if (!visible) return null;

  return (<>
          <div className="connexionPageAA">
            <div className="display">
              <div className="card-un">
                <div> <p>{titre8}</p> </div>
                <div> <p>{titre3}</p> </div>
                <div> <p>{titre2}</p> </div>
                <div className="a"> <p>{titre3}</p> </div>
                <div> <p>{titre4}</p> </div>
              </div>
              {/* card-un */}

              <div className="card-deux">
				<MiniPhrase titre2={titre9} />
				{nomMembre && <p style={theme.blue}>{nomMembre}</p>}
				
                <div className="block-un"> <p>{titre}</p> </div>
				
				<MiniPhrase titre2={titre5} />
				
				{message && <p style={theme.blue}>{message}</p>}
             
                <div className="block-deux">
                  <input type="text" placeholder=". . ." value={valeur} onChange={(e) => setValeur(e.target.value)} />
                </div> 
				
                <div className="block-trois"> <button onClick={envoyer}>Envoyer</button> </div>

				<MiniPhrase titre1={titre3} titre2={titre7} />
              </div>
              {/* card-deux */}
            </div>
            {/* display */}
          </div>
          {/* connexionPageAA */}
        </>
      )}
	  
      
export function SignupPage({
  visible,
  title,
  appName,
  nameValue,
  numberValue,
  passwordValue,
  onNameChange,
  onNumberChange,
  onPasswordChange,
  onSubmit,
  onSwitchToLogin,
}) {
  if (!visible) return null;

  return (
    <div className="connexionPageAA">
      <div className="display">
        {/* Partie gauche */}
        <div className="card-un">
          <div><p>Bienvenue chez </p></div>
          <div className="a"><p>{appName}.</p></div>
          <div><p>Inscrivez-vous pour envoyer des messages</p></div>
        </div>

        {/* Partie droite */}
        <div className="card-deux">
          <div className="block-un"><p>Inscription</p></div>

          {/* Inputs */}
          <div className="block-deux">
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={nameValue}
              onChange={(e) => onNameChange(e.target.value)}
            />
			<input
              type="text"
              placeholder="Numéro"
              value={numberValue}
              onChange={(e) => onNumberChange(e.target.value)}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={passwordValue}
              onChange={(e) => onPasswordChange(e.target.value)}
            />
          </div>

          {/* Bouton d'inscription */}
          <div className="block-trois">
            <button onClick={onSubmit}>S'inscrire</button>
          </div>

          {/* Lien vers connexion */}
          <div className="block-quatre">
            <div><p>j'ai déjà un compte. </p></div>
            <div className="b">
              <p onClick={onSwitchToLogin}>Se connecter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function MessageModal({ visible, onClose, user, messages, onSend, onStartConversation, isLoading, value, onChange, devMode = false }) {
  if (!visible) return null;

  return (
    <div className="messageModal">
      {/* Header */}
      <div className="close">
        <div className="block-un" onClick={onClose}>
          <div className="a"><SvgLeft /></div>
          <div className="b"><img src={user?.photo} alt="" /></div>

          <div className="c">
            <div className="aa">
              <p>{user?.name}</p>
              {user?.badge && <SvgBadge />}
            </div>
            <div className="bb"><p>{user?.lastSeen}</p></div>
          </div>
        </div>

        <div className="block-deux">
          <div className="a"><SvgFile /></div>
          <div className="b"><SvgPointsVertical /></div>
          {devMode && <div className="b"><SvgPointsVertical /></div>}
        </div>
      </div>

      <div className="espacement-navbar-top-et-donnees-api"></div>

      {/* Messages */}
      <div className="api">
        {messages.map((m, i) => (
          <div key={i} className="message-item">{m.text}</div>
        ))}
      </div>

      <p style={{ paddingTop: "100px" }}></p>

      {/* Zone d’écriture */}
      <div className="write">
        <div className="a">
          <textarea
            type="text"
            placeholder="Écrire un message..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
          ></textarea>
        </div>

        <div className="b" onClick={onSend}>
          {isLoading ? <SvgSend /> : <SvgSend />}
        </div>
      </div>
    </div>
  );
}

