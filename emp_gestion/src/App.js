import React from 'react'
import './bootstrap.min.css';
import { Switch,Route } from 'react-router-dom';
import Accueil from './components/Accueil';
import List from './components/List';
import Add from './components/Add';
import Update from './components/Update';
import Signup from './components/Signup';
import Login from './components/Login';
import AddTribes from './components/tribes/AddTribes';
import AddCongé from './components/congé/AddCongé';
import ListTribes from './components/tribes/ListTribes';
import UpdateTribes from './components/tribes/UpdateTribes';
import Footer from './components/Footer';
import {Helmet} from "react-helmet";
import ListCongés from './components/congé/ListCongé';
import UpdateCongé from './components/congé/UpdateCongé';
/*
on doit creer les fichier:
-list
-formulaire pour l'ajout
-formulaire pour la modification
-suppression
tous cela doit etre sous forme de component
*/
function App() {
  return (
    // exact pour marquer liste comme route pa defaut
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Solution Sanlam RH</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Switch>
        <Route path="/" component={Login} exact/>
        <Route path="/list_emp"  component={List} /> 
        <Route path="/add" component={Add}/>
        <Route path="/update/:id" component={Update}/>  
        <Route path="/signup" component={Signup}/>
        <Route path="/accueil" component={Accueil}/>
        <Route path="/add_tribe" component={AddTribes}/>
        <Route path="/list_tribes" component={ListTribes}/>
        <Route path="/update_tribe/:id" component={UpdateTribes}/>
        <Route path="/add_congés" component={AddCongé}/>
        <Route path="/list_congés" component={ListCongés}/>
        <Route path="/update_congé/:id" component={UpdateCongé}/>
      </Switch>
      
      </div> 
  );
}

export default App
