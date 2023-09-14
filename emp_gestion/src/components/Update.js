import React from "react";
import Header  from "./Header";
import '../page.css'
import Footer from "./Footer";

class Update extends React.Component{

    constructor(){
        super();
        this.state={
            'nomComplet':'',
            'email':'',
            'contact':'',
            'adresse':'',
            'poste':'',
            'salaire':'',
            'statut_emploi':'',
        }
        this.changeHandler= this.changeHandler.bind(this);
        this.submitted= this.submitted.bind(this);
    }

    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
       // console.log(event.target.name)
    }

    fetchData(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/employee/'+id+'/')
        .then(response=>response.json())
        .then((data)=>{
          this.setState({
            nomComplet:data.nomComplet,
            email:data.email,
            contact:data.contact,
            adresse:data.adresse,
            poste: data.poste,
            salaire: data.salaire,
            statut_emploi: data.statut_emploi
          });
          console.log(data)
        });
      }
    
      componentDidMount(){
        this.fetchData();
      }
      


    submitted(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/employee/'+id+'/',
        {
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{'Content-type': 'application/json; charset=UTF-8',}
        }
        )
        .then(response=>response.json())
        .then((data)=>console.log(data));
        // Redirection vers la page racine
        this.props.history.push('/list_emp');
        // Rafraîchir la page après la redirection
        window.location.reload()
    }

    render(){
        
        return(
            
            <div>
                <Header />
                <div id="page">
                <div style={{  paddingBottom:'100px',paddingTop:'50px', paddingLeft:'400px', paddingRight :'400px'}}>
                <h2>Formulaire de modification d'un Employée</h2>
                <br/>
                <form className="table table-striped table-bordered text-center">
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="nomComplet">Modifer le nom du l'employée: </label>
                        <input onChange={this.changeHandler} value={this.state.nomComplet} name='nomComplet' type="text" className="form-control" id="nomComplet" placeholder="ARRADI@gmail.com"/>
                   </div>
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="email">Modifer l'email' du l'employée:</label>
                        <input onChange={this.changeHandler} value={this.state.email} name='email' type="text" className="form-control" id="email" placeholder="ARRADI@gmail.com"/>
                    </div>
                    <div className="form-group"style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="contact">Modifer le contact du l'employée</label>
                        <input onChange={this.changeHandler} value={this.state.contact} name='contact' type="text" className="form-control" id="contact" placeholder="06 16 32 06 16"/>
                    </div>
                    <div className="form-group"style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="poste">Modifer le poste du l'employée</label>
                        <select name="poste" id="poste" onChange={this.changeHandler}  value={this.state.poste} className="form-control">
                        <option value="">Sélectionnez un poste d'emploi:</option>
                            <option value="Développeur de logiciels">Développeur de logiciels</option>
                            <option value="Ingénieur en sécurité informatique">Ingénieur en sécurité informatique</option>
                            <option value="admin_systeme">Administrateur système</option>
                            <option value="Analyste en assurance qualité">Analyste en assurance qualité (QA)</option>
                            <option value="Architecte de solutions">Architecte de solutions</option>
                            <option value="Analyste de données">Analyste de données</option>
                            <option value="Ingénieur Réseau">Ingénieur réseau</option>
                            <option value="Développeur d'applications mobiles">Développeur d'applications mobiles</option>
                            <option value="Administrateur de bases de données">Administrateur de bases de données</option>
                            <option value="Expert en cloud computing">Expert en cloud computing</option>
                            <option value="scrum_master">Scrum Master</option>
                            <option value="Spécialiste en support technique">Spécialiste en support technique</option>
                            <option value="Ingénieur DevOps">Ingénieur DevOps</option>
                            <option value="Consultant en TI">Consultant en TI</option>
                            <option value="Data Scientist">Data Scientist</option>
                            <option value="Tribes Leading">Tribes Leading</option>
                            <option value="CEO IT">CEO IT</option>
                        </select>                    </div>     

                    <div className="form-group"style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="salaire">Entrer le salaire mensuel</label>
                        <input value={this.state.salaire} name="salaire" type="text" onChange={this.changeHandler} className="form-control" id="salaire" placeholder="10 000 DH"/>
                    </div>
                    <div className="form-group"style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="statut_emploi">Entrer le statut d'emploi :</label>
                        <select name="statut_emploi" value={this.state.statut_emploi} id="statut_emploi" onChange={this.changeHandler} className="form-control">
                            <option value="">Sélectionnez un statut d'emploi:</option>
                            <option value="stagiaire">stagiaire</option>
                            <option value="employée permanent">employée permanent</option>
                            <option value="en période d'essai">en période d'essai</option>                            
                        </select>         
                    </div>                    

                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="adr">Modifer l'adresse' du l'employée</label>
                        <input onChange={this.changeHandler} value={this.state.adresse} name='adresse' type="text" className="form-control" id="adr" placeholder="lotissement Amine / casablanca"/>
                    </div>  
                    <div className="form-group row" style={{marginLeft:'50px', marginRight :'50px'}}>
                    <div className="col-sm-10" style={{marginLeft:'50px', marginRight :'50px'}}>
                    
                        <button type="submit" onClick={this.submitted} className="btn btn-primary">Modifier un Employé</button>
                    
                        </div>
                    </div>   

                    </form>   
                    </div>  
                    </div>
                    <Footer />       
            </div>
        )
    }
}

export default Update ;