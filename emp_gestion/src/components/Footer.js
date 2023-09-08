import React from 'react';
import './Footer.css'; // Importer les styles CSS du pied de page

const Footer = () => {
  return (
    <footer className="footer" style={{marginTop:'20px'}}>
      <p>&copy; <b>2023</b> Solution Factory. Tous droits réservés.  <a href="#">Politique de confidentialité</a> | <a href="#">Conditions d'utilisation</a></p>
      
    </footer>
  );
}

export default Footer;
