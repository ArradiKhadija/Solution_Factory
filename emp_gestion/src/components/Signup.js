import React, { Component } from "react";
import Footer from "./Footer";
import {Link} from 'react-router-dom';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            email: ''
        };
    }

    changeHandler = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    submitted = event => {
        event.preventDefault();

        const { username, password, email } = this.state;
        const formData = { username, password, email };

        fetch('http://127.0.0.1:8000/signup/', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        //Redirection vers la page racine
        this.props.history.push('/');
        //Rafraîchir la page après la redirection
        window.location.reload()
    };

    render() {
        //const { username, password, email } = this.state;

        return (
            <div>
            <div style={{  paddingBottom:'170px',paddingTop:'50px', paddingLeft:'400px', paddingRight :'400px', textAlign:'center'}}>
            <img src="no_bg.png" style={{width: '185px',height:'150px'}} alt="logo"/>
                <h4>Formulaire d'Inscription du Nouveau Membre de l'Équipe des Ressources Humaines:</h4>
                <br/>
                    <form onSubmit={this.submitted} className="table table-striped table-bordered text-center">
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="username">Entrer votre Username:</label>
                        <input  name="username" type="text" onChange={this.changeHandler} className="form-control" id="username"/>
                    </div>

                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="email">Entrer votre émail:</label>
                        <input  name="email" type="email" onChange={this.changeHandler} className="form-control" id="email" />
                    </div>
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="password">Entrer votre mot de passe:</label>
                        <input  name="password" type="password" onChange={this.changeHandler} className="form-control" id="password" />
                    </div>                    
 
                    <div className="form-group row" style={{marginLeft:'50px', marginRight :'50px'}}>
                    <div className="col-sm-10" style={{marginLeft:'50px', marginRight :'50px'}}>
                    
                    <div className="d-flex justify-content-between">
                        <div className="form-group row">
                            <div className="col-sm-10">                                
                                {/* <Link className="btn btn-primary" to="/">Compléter l'inscription<span className="sr-only">(current)</span></Link> */}
                                <button className="btn btn-primary" type='submit' >Completer l'inscription</button>
                            </div>
                        </div>
                        <Link className="nav-link" to="/">Retourne vers login<span className="sr-only">(current)</span></Link>
                    </div>

                        </div>
                    </div>                                              
                    </form>
                    
                    </div>
                    
                    <Footer />
                    </div>
                       
        );
    }
}

export default Signup;







