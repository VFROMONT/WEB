import '../styles/IconeProduit.css';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function IconeProduit (props) {
  
  // state
  const liste = props.liste;
  const prix = liste.prix;
  const id = liste.id;
  const titre = liste.titre;
  const image=props.image;
  const [compteur, setCompteur] = useState(0);
  const top=200;
  const left=id*300+400;

  const style={ 
    position: 'absolute',
    top: `${top}px`, // Convertit la variable top en chaîne avec l'unité px
    left: `${left}px`, // Convertit la variable left en chaîne avec l'unité px
  };

  // events
  const handleAdd = () => {
    setCompteur(compteur + 1);
  };

  const handleRemove = () => {
    if (compteur>0){
      setCompteur(compteur - 1);
    }
  };

  const handleBasket = () => {
    alert("Article ajouté au panier ! ")
    setCompteur(0);

  };

  // render
  return(
    <div className="gray-box" style={style}>

      <div className="text-on-box"> {prix}$ </div>
      <Link to={`/detail-produit/${id}`}>
      <img src={image} alt="Steak" className="PhotoViande"/>
      </Link>
      <div className="compteur"> 
        <button onClick={handleRemove}>-</button>
        {" "}{compteur}{" "} 
        <button onClick={handleAdd}>+</button>
      </div>
      
      <div className="AddBasket">
        <button onClick={handleBasket}>Ajouter au panier</button>
      </div>
    </div>
  )
}

