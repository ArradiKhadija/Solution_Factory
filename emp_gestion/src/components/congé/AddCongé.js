import React from "react";
import Header  from "../../components/Header";
import  Footer from "../../components/Footer";

import "../../page.css"

class AddCongé extends React.Component{

    constructor(){
        super();
        this.state={
             'id_emp_vac':'','type_vac':'','start_vac':'','end_vac':'','duration_vac':'','reason_vac':'','approbateur_vac':''
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
        fetch('http://127.0.0.1:8000/vacation/',
        {
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{'Content-type': 'application/json; charset=UTF-8',}
        }
        )
        console.log(this.state)
        // Redirection vers la page racine
        this.props.history.push('/list_congés');
        // Rafraîchir la page après la redirection
       window.location.reload()        
    }

//fetching employees data
    fetchData(){
        fetch('http://127.0.0.1:8000/employee/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data 
            });
        console.log(data)
        });
    }

    componentDidMount(){
        this.fetchData();
      }

    render(){
        const empData=this.state.data;
        const selects=empData.map((emp)=>
            
            <option value={emp.id} id={emp.id}>{emp.id}</option>
        );
        return(

            
            <div>
                <Header />
                    <div id="page">
                    <div  style={{ paddingBottom:'140px',paddingTop:'50px', paddingLeft:'400px', paddingRight :'400px',textAlign: 'center'}} >
                    <h2 >Formulaire d'ajout d'un Congé:</h2>
                    <br/>
                    <form className="table table-striped table-bordered text-center " >
                    

                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="id_emp_vac">L'employée concerné:</label>
                        <select  className="form-control" name="id_emp_vac" onChange={this.changeHandler}  id="id_emp_vac">
                        <option value="">Sélectionnez un employée:</option>
                       {selects}
                        </select>                   
                    </div>
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="type_vac">Entrer le type du congé:</label>
                        <select className="form-control" name="type_vac" id="type_vac" onChange={this.changeHandler} >
                            <option value="">Sélectionnez un type de congé</option>
                            <option value="Congés payés">Congés payés</option>
                            <option value="Congés maladie">Congés maladie</option>
                            <option value="Congés personnels">Congés personnels</option>
                            <option value="Congés sans solde">Congés sans solde</option>
                            <option value="Congés de maternité et de paternité">Congés de maternité et de paternité</option>
                            <option value="Congés de formation">Congés de formation</option>
                            <option value="Congés pour décès ou funérailles">Congés pour décès ou funérailles</option>
                            <option value="Congés sabbatiques">Congés sabbatiques</option>
                            
                            <option value="Congés de mariage">Congés de mariage</option>
                        </select>
                    </div>
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="start_vac">Entrer la date début officiel du congé:</label>
                        <input  name="start_vac"type="date" onChange={this.changeHandler} className="form-control" id="start_vac" />
                    </div>
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="end_vac">Entrer la date fin officiel du congé:</label>
                        <input  name="end_vac"type="date" onChange={this.changeHandler} className="form-control" id="end_vac" />                        
                    </div>
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="duration_vac">Entrer la durée du congé:</label>
                        <input  name="duration_vac"type="number" onChange={this.changeHandler} className="form-control" id="duration_vac" placeholder="Ne pas dépasser 30 jours"/>
                    </div>     
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="reason_vac">Entrer une justification ou une raison pour le congé:</label>

                        <select className="form-control" name="reason_vac" id="reason_vac" onChange={this.changeHandler} >
                            <option value="">Sélectionnez une justification ou raison</option>
                            <option value="Vacances annuelles">Vacances annuelles</option>
                            <option value="Maladie">Maladie</option>
                            <option value="Événement familial">Événement familial</option>
                            <option value="Formation professionnelle">Formation professionnelle</option>
                            <option value="Congé sans solde">Congé sans solde</option>
                            <option value="Mariage">Mariage</option>
                            <option value="Autre">Autre (saisir ci-dessous)</option>
                        </select>
                        <br/>    
                        <input  name="reason_vac" type="text" onChange={this.changeHandler} className="form-control" id="reason_vac" />
                                                            
                        </div> 
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="approbateur_vac">Qui a approuvé le congé?</label>
                        <input  name="approbateur_vac"type="text" onChange={this.changeHandler} className="form-control" id="approbateur_vac" />
                    </div>                                                      
                    <div className="form-group row" >
                    <div className="col-sm-10" style={{marginLeft:'50px', marginRight :'50px'}}>
                    
                        
                    
                        </div>
                        
                        <div className="form-group row" style={{  paddingLeft:'300px', paddingRight :'400px',textAlign: 'center'}}>
                                                            
                            <button type="submit" style={{backgroundColor:'green', border:'green'}} onClick={this.submitted} className=" btn btn-primary btn-block fa-lg">Ajouter un Congé</button>                                                    
                            <button type="reset" style={{backgroundColor:'grey', border:'grey'}} className="nav-link btn btn-primary btn-block fa-lg" >Réinitialiser</button>
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

export default AddCongé;