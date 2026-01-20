import axios from 'axios';
import { React, useState, useEffect, useRef, useMemo } from 'react';
import Fuse from "fuse.js";
import Loader from "./Loader/Loader";
import { theme } from "./theme";
import { SvgAdd, SvgBadge, SvgBottom5, SvgFile, SvgLeft, SvgLeft2, SvgPointsVertical, SvgSend, SvgPlay2 } from "./Svg/Svg";
import { ChildApi266accountsFA, ChildApi66accountsFA } from "./VirtualPhone/VirtualPhone";
import "./utils.css"; 
import "./darkmode.css";

import investirPhoto from "./img/investir.jpg";


export const idPersonConnectedFA = localStorage.getItem("idPersonConnectedFA");


export function normaliserTexte(str="") {
  return str.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
} 


export function rechercherAvecFuse({ data=[], search="", keys=[], threshold=0.4, }) {
  if (!search) return [];

  const fuse = new Fuse(data, {
    keys: keys.map((key) => ({
      name: key,
      getFn: (obj) => normaliserTexte(obj[key]),
    })),
    threshold,
  });

  return fuse.search(normaliserTexte(search)).map((r) => r.item);
}



/* export function useLocalStorageState(key, initialValue="") { 
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];  
} */





const apiUrls = [
  `${process.env.REACT_APP_Api2}`,
  `${process.env.REACT_APP_Api1}`,
  `${process.env.REACT_APP_Api3}`,
];

const apiUrlsPhoto = apiUrls.map(base => `${base}/api/messageFA/sendPhoto`);
const apiUrlsObtenirDonnees = apiUrls.map(base => `${base}/api/messageFA?tri=recent`);
const apiUrlsPUT = apiUrls.map(base => `${base}/api/messageFA/update`);
const apiUrlsPOST = apiUrls.map(base => `${base}/api/messageFA/new`);
	  


// logique pour envoyer la photo sur imagekit
async function uploadImage(file) {
  for (const api of apiUrlsPhoto) {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const res = await axios.post(api, formData, {
        headers: { 'Content-Type': 'multipart/form-data', },
      });
	  
      if (res.status !== 200) throw new Error("Erreur lors de l'upload de l'image");

      return { urlPhoto: res.data.urlPhoto, messageCool: "Image uploadée avec succès" };
    } catch (err) {
      // passer à l'API suivante en cas d'erreur
    }
  }
  throw new Error('Toutes les tentatives d\'envoi de la photo sur imagekit ont échoué avec toutes les urls');
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


export async function envoyerPUT({ id, visible, type, url, clic, ...donnees }) {
	const data = {
	  ...(id !== undefined && { id }),
	  ...(visible !== undefined && { visible }),
	  ...(type !== undefined && { type }),
	  ...(clic !== undefined && { clic }),
	  //if (urlVideo !== undefined) data.urlVideo = urlVideo;
	  ...donnees
	};

	for (const api of apiUrlsPUT) {
		try {
		  const fullUrl = `${api}/${id}`;
		  const res = await axios.put(fullUrl, data);
		  return res.data; // Retourne la réponse de l'API
		} catch (err) {
		  // Passer à l'API suivante en cas d'erreur
		}
	  }
	  throw new Error('Toutes les tentatives envoyerPUT ont échoué avec toutes les url');
}
//envoyerPUT


export async function envoyerPOST({ visible, dataPOST, donnees }) {
	const data = {
	  ...(visible !== undefined && { visible }),
	  ...(dataPOST ?? {}),
	  ...donnees
	};

	for (const api of apiUrlsPOST) {
		try {
		  const res = await axios.post(api, data);
		  return res.data; // Retourne la réponse de l'API
		} catch (err) {
		  // Passer à l'API suivante en cas d'erreur
		}
	  }
	  throw new Error('Toutes les tentatives envoyerPOST ont échoué avec toutes les url');
}
//envoyerPOST


async function envoyerFAA({ id, message, urlPhoto, urlVideo, idAccount, nameAccount, photoAccount, badgeAccount, idAccountChef, idGroupChef, clic, comment, account, group, visible, type, url }) {
  for (const api of apiUrls) {
    try {
	  // Concaténer l'API de base avec l'endpoint
      const fullUrl = `${api}${url}`;
	  const newUrlVideo = await AdapterLien(urlVideo)
	  
      const response = await axios.post(fullUrl, {
        id,	  
		message,
        urlPhoto,
        urlVideo: newUrlVideo,
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


export async function ValiderModificationLogique({ id, nouveauUrl, file, dataPUT }) {
  for (const api of apiUrlsPUT) {
    try {
      const fullUrl = `${api}/${id}`;
      const urlVideoAdapter = await AdapterLien(nouveauUrl);
	  const urlPhotoConverti = await uploadImageConverti(file)
	  
	  const data = {
        ...(nouveauUrl !== undefined && { urlVideo: urlVideoAdapter }),
        ...(file !== undefined && { urlPhoto: urlPhotoConverti }),
		...(dataPUT ?? {}),
      };
	  
      //const res = await axios.put(fullUrl, data, { headers: { 'Content-Type': 'application/json' } });
	  const res = await axios.put(fullUrl, data);
	  return res.data; 
    } catch (err) { console.log(`Échec de la requête sur ${api}`, err); }
  }
  throw new Error('Toutes les tentatives ont échoué pour enregistrer les modifications.');
}

// obtenir toutes les donnees qui sont dans l'api
export async function getAllData() {
  for (const api of apiUrlsObtenirDonnees) {
    try {
      const res = await axios.get(api);
	  return res.data;
    } catch (err) {
      console.log(`Échec de la requête sur ${api}`, err);
    }
  }
  
  console.log('Toutes les tentatives ont échoué pour récupérer les donnees.');
  return null;
}


export async function GenererMiniatureVideo({ file, setMiniature, second }) {
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

        video.addEventListener('error', (err) => { reject(err); });
      });
    };

    // Capture la miniature
    const miniatureBase64 = await captureThumbnail(file, second);
	
	//
	if (!miniatureBase64) { throw new Error("Miniature vide"); }
    //
	
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
  if (!photobase64) { throw new Error('La chaîne base64 est indéfinie ou vide.'); }
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



export async function uploadImageConverti(file) {
  if (!file) return null;

  const photoConverti = base64ToFile(file); //convertir base64 to file (convertir en un vrai fichier image)
  const { urlPhoto } = await uploadImage(photoConverti);

  return urlPhoto;
}


export async function Envoyer3({ file, id, message, actions = {}, urlVideo, idAccount, nameAccount, photoAccount, nouveauUrl, idPost, badgeAccount, idAccountChef, idGroupChef, clic, comment, account, group, visible, type, url }) {
	
	let urlPhotoSauvegarder = null;

  // Vérifier si chaque action doit être effectuée
  
  if (actions.envoyerPhoto) { urlPhotoSauvegarder = await uploadImageConverti(file); }

  if (actions.envoyer) { await envoyerFAA({ id, urlVideo, visible, type }); }
  
  
  if (actions.adapterLien) {
	const geturl = await AdapterLien(urlVideo)
	console.log('url est la :', geturl);
  }
  
  
  if (actions.publierVideo) {
    await envoyerFAA({ id, message, urlPhoto: urlPhotoSauvegarder, urlVideo, idAccount, nameAccount, photoAccount, badgeAccount, idAccountChef, idGroupChef, clic, comment, account, group, visible, type, url });  
  }
  
  
  if (actions.modifier) {
	await ValiderModificationLogique({ nouveauUrl, id })
  }
  
}
// Envoyer3



// adapter le lien en un lien video github, gitlab, dropbox, drive
export async function AdapterLien(url) {
  if (!url) return '';
  
  // Dropbox : dl=0 → raw=1
  if (url.includes('dl=0')) {
    return url.replace('dl=0', 'raw=1');
  }

  // GitHub : blob → raw
  if (url.includes('github.com') && url.includes('/blob/')) {
    return url.replace('/blob/', '/raw/');
  }

  // Ajoute d'autres cas si nécessaire (GitLab, Drive, etc.)
  return url;
}


/*
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("MessagesDB", 1);

    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains("messages")) {
        db.createObjectStore("messages", { keyPath: "_id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}


export async function saveMessagesToIndexedDB(messages = []) {
  if (!Array.isArray(messages)) return;

  const db = await openDB();
  const tx = db.transaction("messages", "readwrite");
  const store = tx.objectStore("messages");

  messages.forEach(msg => {
    store.put(msg);
  });

  return new Promise(resolve => {
    tx.oncomplete = () => resolve(true);
  });
}


export async function getMessagesFromIndexedDB() {
  const db = await openDB();
  const tx = db.transaction("messages", "readonly");
  const store = tx.objectStore("messages");

  return new Promise(resolve => {
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
  });
}
*/


export function VideoMiniatureTemplate({ transVoirMiniature, miniature, setFileVideo, second, setSecond }) {
  return (
    <>
	<div className="block-quatre"> <p>La capture va se faire à quelle seconde de la video (Facultatif)</p> </div> 
	<Input texte="seconde(s)" valeur={second} setValeur={setSecond} />
	
	<div className="block-quatre"> <p>Sélectionner la video juste pour obtenir automatiquement une miniature (photo de couverture de la video)</p> </div> 
	
	<div className="block-deux"> <input type="file" name="video" accept=".mp4" 
	onChange={(e) => {
		const fichier = e.target.files[0];
		setFileVideo(fichier); }} /> </div> {/* block-deux */}
    
	{miniature && (<div className="photo-70px"> <img src={miniature} alt="" onClick={() => transVoirMiniature(miniature)} /> </div>)}
	</>
)}


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


export function Close({ fermer }) {
  return (<>
			<div className="close">
              <div className="a" onClick={fermer}> <SvgLeft /> </div>
              <div className="b"> <p></p> </div>
            </div>
            {/* close */}
  </>
)}


export function Page({ visible }) {
	if (!visible) return null;
  return (
    <div className="page-blanche"> </div>
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


export function ouvrirDB() {
  return new Promise((resolve, reject) => {
    const requete = indexedDB.open("MessagesDB", 9);
    const tables = ["conversations", "videos", "comptes", "followers"];

    requete.onupgradeneeded = (e) => {
      const base = e.target.result;

      tables.forEach(nomTable => {
        if (!base.objectStoreNames.contains(nomTable)) {
          base.createObjectStore(nomTable, { keyPath: "_id" });
        }
      });
    };

    requete.onsuccess = () => {
      //console.log("✅ IndexedDB ouverte");
      resolve(requete.result);
    };

    requete.onerror = () => {
      console.error("❌ Erreur ouverture IndexedDB", requete.error);
      reject(requete.error);
    };
  });
}


export async function sauvegarderDansIndexedDB(nomStockage, donnees = []) {
  console.log(`ecriture indexedDB : ${nomStockage}`);


  if (!Array.isArray(donnees)) {
    console.error("❌ donnees n'est PAS un tableau");
    return;
  }

  if (!donnees.length) {
    console.warn("⚠️ donnees est un tableau VIDE");
    return;
  }

  const db = await ouvrirDB();
  //console.log("✅ DB ouverte :", db.name, db.version);
  //console.log("📦 tables existantes :", db.objectStoreNames);

  if (!db.objectStoreNames.contains(nomStockage)) {
    console.error(`❌ La table "${nomStockage}" N'EXISTE PAS`);
    return;
  }

  const transaction = db.transaction(nomStockage, "readwrite");
  const table = transaction.objectStore(nomStockage);

  transaction.onabort = (e) => {
    console.error("🛑 TRANSACTION ABORT", e.target?.error);
  };

  transaction.onerror = (e) => {
    console.error("💥 TRANSACTION ERROR", e.target?.error);
  };

  donnees.forEach((msg, index) => {
    //console.log(`🔍 élément ${index}`, msg);
    if (!msg || !msg._id) {
      console.warn("⚠️ IGNORÉ (pas de _id)", msg);
      return;
    }

    try {
      const req = table.put(msg);

      /* req.onsuccess = () => {
        console.log(`✅ PUT OK (_id=${msg._id})`);
      }; */

      req.onerror = (e) => {
        console.error(`❌ PUT ERROR (_id=${msg._id})`, e.target.error);
      };
    } catch (err) {
      console.error("💣 ERREUR JS pendant put()", err);
    }
  });

  return new Promise(resolve => {
    transaction.oncomplete = () => {
	//console.log("🏁 TRANSACTION TERMINÉE AVEC SUCCÈS");
      resolve(true);
    };
  });
}


export async function lireDepuisIndexedDB(nomStockage) {
	console.log(`lecture indexedDB : ${nomStockage}`);
  const db = await ouvrirDB();
  const tr = db.transaction(nomStockage, "readonly");
  const table = tr.objectStore(nomStockage);
  

  return new Promise(resolve => {
    const requete = table.getAll();
    requete.onsuccess = () => resolve(requete.result || []);
  });
}


export function useScrollIndexedDB({ nomStockage, donnees=[], lot=20, visible=true, maRechercheVideo }) {
  const [toutesDonnees, setToutesDonnees] = useState([]);
  const [lotActuel, setLotActuel] = useState(lot);
  const dejaInitialise = useRef(false);
  const syncEnCours = useRef(false);

/*
  const toutesDonneesTriees = useMemo(() => { //toutesDonnees, on affiche les^plus recent en haut
    return [...toutesDonnees].sort((a, b) => {
      const da = new Date(a.createdAt || 0);
      const db = new Date(b.createdAt || 0);
      return db - da;
    });
  }, [toutesDonnees]);


  // ✅ DONNEES A AFFICHER (DERIVEES de toutesDonnees, ca veut dire que : les donnees a afficher proviennent de toutesDonnees)
  const donneesAffichees = useMemo(() => {
    return toutesDonneesTriees.slice(0, lotActuel);
  }, [toutesDonneesTriees, lotActuel]); */


const donneesAffichees = useMemo(() => { return toutesDonnees
.sort((a, b) => {
  const da = new Date(a.createdAt || 0);
  const db = new Date(b.createdAt || 0);
  return db - da;
}).slice(0, lotActuel);
}, [toutesDonnees, lotActuel] ); 


  // useEffect 1 (affiche les donnees sans attendre que les donnees mongodb arrive, il prend ca dans indexedDB) 🔹 1) LECTURE INDEXEDDB (AFFICHAGE IMMEDIAT)
  useEffect(() => {
    if (!visible || !nomStockage) return;

    async function lireLocal() {
      const donneesLocales = await lireDepuisIndexedDB(nomStockage);

      if (donneesLocales.length > 0 && !dejaInitialise.current) {
        setToutesDonnees(donneesLocales);
        setLotActuel(lot);
        dejaInitialise.current = true;
      }
    }

    lireLocal();
  }, [nomStockage, visible, lot]);

	
// useEffect 2 (agit quand les donnees mongodb arrive) 🔹 2) SYNC AVEC MONGODB
  useEffect(() => {
	if (!visible || !Array.isArray(donnees) || donnees.length === 0 || !nomStockage || syncEnCours.current) return;
    syncEnCours.current = true;

    async function syncIndexedDB() {
      await sauvegarderDansIndexedDB(nomStockage, donnees);
      const donneesLocales = await lireDepuisIndexedDB(nomStockage);

      setToutesDonnees(prev => {
        if (prev.length === donneesLocales.length) return prev;
        return donneesLocales;
      });

      syncEnCours.current = false;
    }

    syncIndexedDB();
  }, [donnees, visible, nomStockage]);
	
	
	useEffect(() => { //on reinitialise le lot , si maRechercheVideo change . 🔹 RESET DU SCROLL LORS D’UNE RECHERCHE
	  setLotActuel(lot);
	}, [maRechercheVideo, lot]);
  

//pour scroller encore plus 
/*function chargerPlus() { 
  const prochainLot = lotActuel + lot;
  setDonneesAffichees(toutesDonnees.slice(0, prochainLot));
  setLotActuel(prochainLot);
} */

	function chargerPlus() {
		setLotActuel(prev => prev + lot);
	  }
	
	async function gererScroll(e) {
		const { scrollTop, scrollHeight, clientHeight } = e.target;
		if (scrollTop + clientHeight >= scrollHeight - 10) {
			//Si on arrive en bas, charger plus
			chargerPlus(); 
		}
	};

	return { toutesDonnees, donneesAffichees, chargerPlus, gererScroll };
}
//useScrollIndexedDB


export function SpeedMessages({ visible, fermer, data=[] }) {	  
	//const { donneesAffichees: afficherMessages, gererScroll, chargerPlus } = utiliserScrollIndexedDB({ nomStockage: "messages", donnees:data, lot:20, visible});
	const { donneesAffichees: afficherMessages, gererScroll, chargerPlus } = useScrollIndexedDB({ donnees:data });
	
	async function logMessages() {
	  console.log("messages de SpeedMessages ici :", afficherMessages);
	  console.log("data ici :", data);
	}	

/*
  const [messages, setMessages] = useState([]); // Tous les messages chargés
  const [afficherMessages, setAfficherMessages] = useState([]); // Messages affichés
  const [currentIndex, setCurrentIndex] = useState(0); // Index pour le lot actuel
  const lot = 20; // Taille du lot
  
  async function logMessages() {
	  console.log("messages de SpeedMessages ici :", messages);
	  console.log("data ici :", data);
	}	

  
    useEffect(() => {
		if (!visible) return;

		async function init() {
		  if (data.length) { await saveMessagesToIndexedDB(data); }	// 1. Sauvegarder la data en provenance de MongoDB → IndexedDB
		  
		  const allMessages = await getMessagesFromIndexedDB(); // 2. Lire depuis IndexedDB
		  setMessages(allMessages);
		  
		  setAfficherMessages(allMessages.slice(0, lot)); // Charger le premier lot
		  setCurrentIndex(lot);
		}
		init();
  }, [visible, data]);
  
  
  const loadMore = () => {
    const nextIndex = currentIndex + lot;
    setAfficherMessages(prev => prev.concat(messages.slice(currentIndex, nextIndex)));
    setCurrentIndex(nextIndex);
  };
  

  // Gérer le scroll pour charger plus
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      // Si on arrive en bas, charger plus
      loadMore();
    }
  }; */
  
  if (!visible) return null;
  
  return (
    <div className="page-blanche" onScroll={gererScroll}>
      <Close fermer={fermer} />
	  
	  {/* Bouton pour charger plus */}
      <button onClick={chargerPlus}>Charger plus</button>
	  <button onClick={logMessages}>console log</button>
	  
      {afficherMessages.map((api) => (
        <div key={api._id}>
          <div className="photo-70px"><img src={api.photoProfile} alt="" /></div>
          <div className="pre-17px"><pre>{api.nameAccount}</pre></div>
        </div>
      ))}
    </div>
	
  );
}


export function CloseAction({ fermer, clicSvgAdd, left, titre, photo }) {
  return (
    <div className="flex">
      <div className="display-flex-nowrap" onClick={fermer}>
        {left && (<div> <SvgLeft/> </div>)}
        {titre && (<div> <p>{titre}</p> </div>)}
        {photo && (<div className="photo-25px"> <img src={photo} alt=""/> </div>)}
      </div>

      {clicSvgAdd && (<div className="b"> <div onClick={clicSvgAdd}><SvgAdd/></div> </div>)}
    </div>
  );
}


export function VideoData({ data = [], setId, video, voirVideo, clicVideo, photocss }) {
  return (<>
	
      {data.map((api) => (
      <div onClick={() => { setId(api._id); voirVideo(api);
		  clicVideo({ id:api._id, idOther:api.idAccountChef })
		  }}>
		  
		<ChildApi66profilFA api={api} photocss={photocss} video />
      </div>
      ))}
	  
    </>)}
	
		   
export function ConfirmationTemplate({ visible, fermer, isLoading, Validerbtn }) {	
	if (!visible) return null;

	return (<>
          <div className="confirmerRechargeIA">
            <div className="align">
              <div className="card">
                <div className="block-un"> <p>Confirmation</p> </div>
                <div className="block-deux"> 
					<div className="p-16px"> <p>Etes vous sur d'ajouter Nganon comme l'un des Gestionnaire de votre compte ?</p> </div>
					<div className="p-15px"> <p>il pourra publier sur votre compte et modifier le contenu qu'il a publier</p> </div>
				</div>

                <div className="block-trois">
                  <div className="a"> <button onClick={fermer}>Annuler</button> </div>
				  
				  {isLoading ? (<div className="loader-display-flex"> <Loader/> </div>
				  ):(<div className="btn-bleu"> <button onClick={Validerbtn}>Valider</button> </div> )}
                  {/* btn-bleu */}
                </div>
                {/* block-trois */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* confirmerRechargeIA */}
  </>);
}



export function PageTemplate({ visible, fermer, photo, titre, clicSvg, data, profilMap }) {
	if (!visible) return null;
    return (<>
	<div className="page-blanche">
		<CloseAction fermer={fermer} clicSvgAdd={clicSvg} left titre={titre} photo={photo}/>
		<ListeDesComptes2 data={data} profilMap={profilMap} />
    </div>
    {/* page-blanche */}
 </>)}


export function ListeDuMenu({ GestionDuCompte, MettreEnAvantCompte, AdminFlorinato }) {
  return (<>
		<div className="list">
            <div className="b" onClick={GestionDuCompte}> <p>Gestion du compte</p> </div>
            <div className="b" onClick={MettreEnAvantCompte}> <p>Mettre en avant un compte</p> </div>
            <div className="b" onClick={AdminFlorinato}> <p>Ajouter un compte comme Admin Florinato</p> </div>
        </div>
        {/* list */}
  </>
)}


export function PopupDuBasTemplate({ visible, fermer, list, search, photo, titre, listAccount, valeur, setValeur, cliquer, GestionDuCompte, MettreEnAvantCompte, AdminFlorinato, setId }) {	
	if (!visible) return null;

	return (<>
        <div className="favoriteFA">
        <div className="align">
          <div className="head" onClick={fermer}> 
            <div className="block-one"> <p>{titre}</p> </div>

            <div className="block-two"> 
              <div className="a"> <img src={photo} alt=""/> </div>
              <div className="b"> <SvgBottom5/> </div>
            </div>
            {/* block-two */}
          </div>
          {/* head */}

          <div className="body">
            <div className="card">
			
			{list && (
			<ListeDuMenu 
			  GestionDuCompte={GestionDuCompte} MettreEnAvantCompte={MettreEnAvantCompte} 
			  AdminFlorinato={AdminFlorinato}/> )}
			  
			{search && (
			<RechercheTemplate 
				listAccount={listAccount} valeur={valeur} setValeur={setValeur} 
				cliquer={cliquer} setId={setId}/> )}
			
			<p style={{ paddingTop: "100px" }}></p>
            </div>
            {/* card */}
          </div>
          {/* body */}
        </div>
        {/* align */}
        </div>
        {/* favoriteFA */}
	</>)}
// PopupDuBasTemplate 


export function VideoSearchBlock({ data=[], listVideo=[], valeur, setValeur, setId, clicVideo, voirVideo, video, gererScroll }) {
  return (<>
	<RechercheTemplate listVideo={listVideo} valeur={valeur} setValeur={setValeur} setId={setId} clicVideo={clicVideo} voirVideo={voirVideo} />
    <LesVideos data={data} setId={setId} clicVideo={clicVideo} voirVideo={voirVideo} gererScroll={gererScroll} video />
</>)}


export function VideosPageTemplate({ visible, fermer, photo, data, setId, video, clicVideo, gererScroll, voirVideo, listVideo, valeur, setValeur, photocss }) {
	if (!visible) return null;
	return (
		<div className="page-blanche" onScroll={gererScroll}> 
			<CloseAction fermer={fermer} titre="Videos" photo={photo} left />
			
			<VideoSearchBlock data={data} listVideo={listVideo} valeur={valeur} setValeur={setValeur} setId={setId} clicVideo={clicVideo} voirVideo={voirVideo} video={video} />
		</div>
)}


export function RechercheTemplate({ listAccount=[], listVideo=[], listMesComptes=[], valeur, setValeur, cliquer, cliquerSurMonCompte, setId, clicVideo, voirVideo=()=>{}, titrecss, cliccss }) {	
  return (<>
		{/* rechercher un compte */}
                  <div>
                    <div className="marge-bottom25px">
                      <div className="display-flex">
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

                        <div className="input-130px"> <input id="css" type="text" placeholder="..." value={valeur} onChange={(e) => setValeur(e.target.value)}/> </div>
                        {/* input-130px */}
                      </div>
                      {/* display-flex */}
                    </div>
                    {/* marge-bottom25px */}

                    {/* on affiche les donnees de la recherche dans l'enfant api */}
                    <div className="hr-15px"> <hr /> </div>
                  </div>

				  
			{listAccount.map((api) => (<>
			<div onClick={() => { cliquer(api); setId(api._id); }}>	
				<PopularityAccountCard api={api} />
			</div>
			</>))}
			
			
			<div className="api2" onClick={cliquerSurMonCompte}>
			{listMesComptes.map((api) => (
				<ChildApi266accountsFA api2={api} />
			))}
			</div>
			
			<LesVideos data={listVideo} setId={setId} clicVideo={clicVideo} voirVideo={voirVideo} titrecss={titrecss} cliccss={cliccss} /> 
	</>);
}


export function MesComptes({ data=[], listMesComptes, valeur, setValeur, cliquerSurMonCompte }) {
  return (
    <>
      <div className="api">
        {data.map((api) => (
          <ChildApi66accountsFA api={api} />
        ))}
      </div>
	  
	  	<RechercheTemplate listMesComptes={listMesComptes} valeur={valeur} setValeur={setValeur} cliquerSurMonCompte={cliquerSurMonCompte} />

      <div className="api2" onClick={cliquerSurMonCompte}>
        {data.map((api) => (
          <ChildApi266accountsFA api2={api} />
        ))}
      </div>
    </>
  )}


export function PopularityAccountCard({ api }) {
  return (<>
    <div className="display-nowrap">
      <div className="p-15px"><p>{api.popularity}</p></div>
      <div className="photo-70px"><img src={api.photoProfile} alt="" /></div>
      <div className="pre-17px"><pre>{api.nameAccount}</pre></div>
    </div>
	
	<div className="p-15px">
		<p>nameAccount {api.nameAccount}</p>
		<p>_id, idPersonConnectedFA, idAccount, idAccountChef {api._id}</p>
		<p>idUser, idUserConnectedFA {api.idUser}</p>
		<p>idGroup, idGroupChef {api.idGroup}</p>
		<p>top {api.top}</p>
		<p>admin {api.admin}</p>
		<p>adminFlorinato {api.adminFlorinato}</p>
	</div>
  </>);
}


export function PopularityAccountCard2({ api = {}, profilMap = {} }) {
  // pour obtenir les informations du profil
  const idToUse = api?.idOther;
  const profil = idToUse ? profilMap?.[idToUse] : null;

  // Valeurs sûres
  const popularity = profil?.popularity ?? 0;
  const photoProfile = profil?.photoProfile ?? investirPhoto;
  const nameAccount = profil?.nameAccount ?? "Compte inconnu";

  return (
    <>
      <div className="display-nowrap">
        <div className="p-15px">
          <p>{popularity}</p>
        </div>

        <div className="photo-70px">
          <img
            src={photoProfile}
            alt={nameAccount}
            onError={(e) => {
              e.currentTarget.src = "/images/avatar-default.png";
            }}
          />
        </div>

        <div className="pre-17px">
          <pre>{nameAccount}</pre>
        </div>
      </div>

      <div className="p-15px">
        <p>nameAccount : {api?.nameAccount ?? "—"}</p>
        <p>_id : {api?._id ?? "—"}</p>
        <p>idUser : {api?.idUser ?? "—"}</p>
        <p>idGroup : {api?.idGroup ?? "—"}</p>
        <p>top : {api?.top ?? "—"}</p>
        <p>admin : {api?.admin ?? "—"}</p>
        <p>adminFlorinato : {api?.adminFlorinato ?? "—"}</p>
      </div>
    </>
  );
}


export function ComptesRecentsTemplate({ visible, data, fermer, listAccount, valeur, setValeur, ouvrirGestionCompteConfirmation }) {
  if (!visible) return null;

  return (<>
      <div className="page-blanche">
		  <div className="marge-20px">
			  <Close fermer={fermer} />
			  
			  <RechercheTemplate listAccount={listAccount} valeur={valeur} setValeur={setValeur} ouvrirGestionCompteConfirmation={ouvrirGestionCompteConfirmation} />
			  <ListeDesComptes data={data} />
		 </div>
	 </div>
 </>)}
 

			  
export function ListeDesComptes({ data=[] }) {
  return (
    <>
      {data.map((api) => (
        <PopularityAccountCard key={api._id} api={api} />
      ))}
    </>
  )}


export function ListeDesComptes2({ data=[], profilMap }) {
  return (
    <>
	    {data.map((api) => {				
			return (<PopularityAccountCard2 api={api} profilMap={profilMap} /> )} 
        )}
    </>
  )}
  
  
export function ChildApi66LesVideos({ api, photo, video, titrecss="pre-16px", cliccss="p-14px" }) {
	//const idPersonConnectedFA = localStorage.getItem("idPersonConnectedFA");
    //const id = api.idAccountChef === idPersonConnectedFA && api.account === "1";
	
	const imgRef = useRef(null);
	const [nombreLettre, setnombreLettre] = useState(40);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    function calculerRatio() {
      const ratio = img.naturalWidth / img.naturalHeight;

      //console.log("ratio image :", ratio);

      if (ratio < 0.8) {
        setnombreLettre(15);       // portrait (image étroite)
      } else if (ratio < 1.3) {
        setnombreLettre(30);       // carré
      } else {
        setnombreLettre(50);       // paysage
      }
    }

    if (img.complete) {
      calculerRatio();
    } else {
      img.onload = calculerRatio;
    }
  }, []);

  const titre = api.message || "";
  const gettitre = titre.length > nombreLettre ? titre.slice(0, nombreLettre) + ". . ." : titre;

    const afficherVideo = video && api.type === "3";
    const afficherPhoto = photo && api.type === "2";

  return (
    <>
		{/* {afficherVideo && (!verifierId || id) && (<> */}
		{afficherVideo && (<> 
		<div className="video-card">
		<img className="video-thumb" src={api.urlPhoto} alt="" ref={imgRef} /> 
		<pre className={titrecss}>{gettitre}</pre>
		<p className={cliccss}>{api.clic} clic</p> </div></>)}
		
		{/* {afficherPhoto && (!verifierId || id) && (<> */}
		{afficherPhoto && (<> 
		<div className="video-card">
		<img className="video-thumb" src={api.urlPhoto} alt="" ref={imgRef} />
		<pre className={titrecss}>{gettitre}</pre>
		<p className={cliccss}>{api.clic} clic</p> </div></>)}
    </>
  );
}


export function LesVideos({ data=[], setId, clicVideo, voirVideo, titrecss, cliccss, video, gererScroll }) {
  return (
<div className="video-grille" onScroll={gererScroll}>
	{data.map((api) => (
	  <div onClick={() => { localStorage.setItem("urlVideo", api.urlVideo); setId(api._id); voirVideo(api); clicVideo({ id:api._id, idOther:api.idAccountChef, nombreClic:api.clic }) }}>
		<ChildApi66LesVideos api={api} titrecss={titrecss} cliccss={cliccss} video />
	  </div>
	  ))}
</div>
)}


export function ModifierTemplate({ visible, fermer, valeur, setValeur, Valider, isLoading, infos,
	changerUrl, changerMiniature, titre, texte = "Écrivez l'url ...", transVoirMiniature, miniature, setFileVideo, second, setSecond }) {
		
	if (!visible) return null;
	//const urlVideo = localStorage.getItem("urlVideo");
  return (
    <div className="page-opacity">
      <div className="align">
        <div className="card">
          <div className="block">
            <div className="a">
              <p style={{ color: "blue" }} onClick={fermer}>{titre}</p>
			  			  
			  {changerUrl && (<>
			  <pre className="pre-15px-center">{infos}</pre> 
			  
			  <AutoTextarea value={valeur} onChange={setValeur} placeholder={texte} />
			  
              {/* <div className="textarea">
                <textarea value={valeur} onChange={(e) => setValeur(e.target.value)} placeholder={texte} />
              </div> */}
			  </>)}
			  
			  
			  {changerMiniature && (
			  <VideoMiniatureTemplate transVoirMiniature={transVoirMiniature} miniature={miniature} setFileVideo={setFileVideo} second={second} setSecond={setSecond}/> )}
			  
              {isLoading ? (<div className="loader-display-flex"> <Loader/> </div>
              ):(<div className="btn-bleu"> <button onClick={Valider}>Valider</button> </div> )}
            </div>
            {/* a */}
          </div>
          {/* block */}
        </div> 
        {/* card */}
      </div>
      {/* align */}
    </div>
  );
}


export function AutoTextarea({ value, onChange, placeholder="..", maxHeight=160, className="textarea-css", rows=1, }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, maxHeight) + "px";
    el.style.overflowY =
      el.scrollHeight > maxHeight ? "auto" : "hidden";
  }, [value, maxHeight]);

  return (
    <textarea ref={textareaRef} value={value} rows={rows} placeholder={placeholder} className={className} onChange={(e) => onChange(e.target.value)} />
)}  



//ChildApi 66profilFA
export function ChildApi66profilFA({ api, photocss, titrecss="pre-17px", cliccss="p-15px", clicVideo, verifierId, photo, video, clic, svg }) {
  const [checked, setChecked] = useState(false);
  async function Checked() {
    setChecked(!checked);

    const message = api.message;
    const type = api.type;
    const id = api._id;
    if(id) { 
      localStorage.setItem("id", id); 
      localStorage.setItem("idreq", id); 
      localStorage.setItem("idPost", id); 
      localStorage.setItem("idPostreq", id); 
      localStorage.setItem("type", type); 
      localStorage.setItem("message", message); 
    }
    
    const urlVideo = api.urlVideo;
    if(urlVideo) { 
      localStorage.setItem("urlVideo", urlVideo); 
      localStorage.setItem("urlVideoreq", urlVideo); 
    }
	

    const image = api.urlPhoto;
    if(image) { 
      localStorage.setItem("urlPhoto", image); 
      localStorage.setItem("urlPhotoreq", image); 
    }
  }


  //redirect vers la page pour afficher la video
   async function GotoVideo() {
		const video = "1";
		const photo = "0";
		localStorage.setItem("gotoVideo", video);
		localStorage.setItem("gotoPhoto", photo);
	}
  
  //redirect vers la page pour afficher la photo
   async function GotoPhoto() {
		const video = "0";
		const photo = "1";
		localStorage.setItem("gotoVideo", video);
		localStorage.setItem("gotoPhoto", photo);
	}

  const idPersonConnectedFA = localStorage.getItem("idPersonConnectedFA");
  const id = api.idAccountChef === idPersonConnectedFA && api.account === "1";
  
  const afficherVideo = video && api.type === "3";
  const afficherPhoto = photo && api.type === "2";

  return (
    <>
    <div className="child" onClick={Checked}>
      {afficherPhoto && (!verifierId || id) && (<> 
      <div className="type3">
        <div className={photocss}> <img onClick={GotoPhoto} src={api.urlPhoto} alt=""/> </div>
		{clic && (<>
		<div className="b"> <button onClick={GotoPhoto}><SvgPlay2/></button> </div></>)}
		
		<div className={titrecss}> <pre>{api.message}</pre> </div>
		<div className={cliccss}> <p>{api.clic}</p> </div>
      </div> </>)}

      {afficherVideo && (!verifierId || id) && (<> 
      <div className="type2"> 
		<div className={photocss}> <img onClick={GotoVideo} src={api.urlPhoto} alt=""/> </div>
		<div className={titrecss}> <pre>{api.message}</pre> </div>
		<div className={cliccss}> <p>{api.clic}</p> </div>
	  </div> 
      </>)}

    </div>
    </>
  );
}
//ChildApi 66profilFA

   
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


export function MessageModal({ visible, onClose, user, messages, onSend, onStartConversation, isLoading, value, onChange, devMode = false }) {
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

