import React  from "react";
import {Link} from 'react-router-dom';
import './header.css'

function Header(){

return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-1" id="haut">
    <a className="navbar-brand" href="#">
      <img src="logo192.png" width="50" height="50" className="d-inline-block align-top" alt=""/>
     
    </a>
    <b className="navbar-brand"> Sanlam Assurance | </b> 
    <Link className="navbar-brand" to="/accueil">Solution Factory </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item active">
          <Link className="nav-link" to="/accueil"><b style={{fontSize:'20px', marginLeft: '100px'}}>Accueil</b> <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/list_emp"><b style={{fontSize:'20px'}}>Employés</b> <span className="sr-only">(current)</span></Link>
        </li>   
        <li className="nav-item active">
          <Link className="nav-link" to="/list_tribes"><b style={{fontSize:'20px'}}>Départements</b> <span className="sr-only">(current)</span></Link>
        </li>   
        <li className="nav-item active">
          <Link className="nav-link" to="/list_congés"><b style={{fontSize:'20px'}}>Congés</b> <span className="sr-only">(current)</span></Link>
        </li>  

        <li className="nav-item active">
          <Link className="nav-link" to="/list_équipes"><b style={{fontSize:'20px'}}>Equipes</b> <span className="sr-only">(current)</span></Link>
        </li>          
               
        <li className="nav-item">
          <a className="nav-link" href="https://sanlam.ma/fr/"><b style={{fontSize:'20px'}}>infos</b></a>
        </li> 
         
        <li className="nav-item active">
          <Link className="nav-link btn btn-primary" to="/" style={{ marginLeft: '300px', color: 'white', fontSize: '16px' }}>
           <b> logout </b><span className="sr-only">(current)</span>
          </Link>
        </li>        
                         

      </ul>

    </div>
  </nav>
)
}
export default Header