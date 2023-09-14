import React from "react";
import Header  from "./Header";
import  Footer  from "./Footer";
import "../page.css"

class Add extends React.Component{

    constructor(){
        super();
        this.state={
            'nomComplet':'',
            'email':'',
            'contact':'',
            'adresse':'',
            'poste':'',
            'salaire':parseFloat(''),
            'statut_emploi':'',
        }
        this.changeHandler= this.changeHandler.bind(this);
        this.submitted= this.submitted.bind(this);
        this.state={
            data:[]
          };
    }

    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
       // console.log(event.target.name)
    }

    submitted(){
        fetch('http://127.0.0.1:8000/employee/',
        {
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{'Content-type': 'application/json; charset=UTF-8',}
        }
        )
        console.log(this.state)
        //Redirection vers la page racine
        this.props.history.push('/list_emp');
        //Rafraîchir la page après la redirection
        window.location.reload()        
    }

    render(){
        return(
            
            <div>
                <Header />
                <div id='page'>
                    <div style={{  paddingBottom:'100px',paddingTop:'50px', paddingLeft:'400px', paddingRight :'400px'}}>
                    <h2>Formulaire d'ajout d'un Employée</h2>
                    <br/>
                    <form className="table table-striped table-bordered text-center">
                    
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}} >
                        <label htmlFor="nomComp">Entrer votre nom complet:</label>
                        <input  name="nomComplet" type="text" onChange={this.changeHandler} className="form-control" id="nomComp" placeholder="ARRADI Khadija"/>
                    </div>
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="email">Entrer votre émail:</label>
                        <input  name="email" type="text" onChange={this.changeHandler} className="form-control" id="email" placeholder="ARRADI@gmail.com"/>
                    </div>
                    <div className="form-group"style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="contact">Entrer votre contact:</label>
                        <input  name="contact" type="text" onChange={this.changeHandler} className="form-control" id="contact" placeholder="06 ** ** ** ** ** "/>
                    </div>
                    <div className="form-group"style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="poste">Entrer votre poste:</label>
                        <select name="poste" id="poste" onChange={this.changeHandler} className="form-control">
                            <option value="">Sélectionnez un poste d'emploi:</option>
                            <option value="developpeur">Développeur de logiciels</option>
                            <option value="securite">Ingénieur en sécurité informatique</option>
                            <option value="admin_systeme">Administrateur système</option>
                            <option value="qa">Analyste en assurance qualité (QA)</option>
                            <option value="architecte">Architecte de solutions</option>
                            <option value="analyste_data">Analyste de données</option>
                            <option value="ingenieur_reseau">Ingénieur réseau</option>
                            <option value="dev_mobile">Développeur d'applications mobiles</option>
                            <option value="admin_bdd">Administrateur de bases de données</option>
                            <option value="cloud_expert">Expert en cloud computing</option>
                            <option value="scrum_master">Scrum Master</option>
                            <option value="support_technique">Spécialiste en support technique</option>
                            <option value="devops">Ingénieur DevOps</option>
                            <option value="consultant_ti">Consultant en TI</option>
                            <option value="data_scientist">Data Scientist</option>
                            <option value="tribes_leading">Tribes Leading</option>
                            <option value="CEO_IT">CEO IT</option>
                        </select>         
                    </div> 
                    <div className="form-group"style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="statut_emploi">Entrer le statut d'emploi :</label>
                        <select name="statut_emploi" id="statut_emploi" onChange={this.changeHandler} className="form-control">
                            <option value="">Sélectionnez un statut d'emploi:</option>
                            <option value="stagiaire">stagiaire</option>
                            <option value="employée permanent">employée permanent</option>
                            <option value="en période d'essai">en période d'essai</option>                            
                        </select>         
                    </div>  
                    <div className="form-group"style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="salaire">Entrer salaire mensuel du l'employée:</label>
                        <input  name="salaire" type="text" onChange={this.changeHandler} className="form-control" id="salaire" placeholder="10 000 DH"/>
                    </div>                                                    
                    <div className="form-group"style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="adr">Entrer l'adresse du l'employée:</label>
                        <input  name="adresse" type="text" onChange={this.changeHandler} className="form-control" id="adr" placeholder="lotissement Amine / casablanca"/>
                    </div>  
                    <div className="form-group row" style={{  paddingLeft:'200px', paddingRight :'200px',textAlign: 'center'}}>
                                                            
                        <button type="submit" style={{backgroundColor:'green', border:'green'}} onClick={this.submitted} className=" btn btn-primary btn-block fa-lg">Ajouter un Employée</button>                                                    
                        <button type="reset" style={{backgroundColor:'grey', border:'grey'}} className="nav-link btn btn-primary btn-block fa-lg" >Réinitialiser</button>
                    </div>
                                                                 
                    </form>
                    </div>
                    </div>
                    <Footer />
            </div>
        )
    }
}

export default Add;