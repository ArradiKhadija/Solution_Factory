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
            'salaire':''
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
                        <label htmlFor="contact">Modifer le poste du l'employée</label>
                        <select name="poste" id="poste" onChange={this.changeHandler}  value={this.state.poste} className="form-control">
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
                        </select>                    </div>     

                    <div className="form-group"style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="salaire">Entrer votre adresse</label>
                        <input value={this.state.salaire} name="salaire" type="text" onChange={this.changeHandler} className="form-control" id="salaire" placeholder="10 000 DH"/>
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