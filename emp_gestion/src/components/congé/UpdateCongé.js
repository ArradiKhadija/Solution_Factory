import React from "react";
import '../../page.css'
import Header  from "../../components/Header";
import  Footer  from "../../components/Footer";

class UpdateCongé extends React.Component{

    constructor(){
        super();
        this.state={
            'id_emp_vac':'','type_vac':'','start_vac':'','end_vac':'','duration_vac':'','reason_vac':'','approbateur_vac':''
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
        fetch('http://127.0.0.1:8000/vacation/'+id+'/')
        .then(response=>response.json())
        .then((data)=>{
          this.setState({
            id_emp_vac: data.id_emp_vac,
            type_vac: data.type_vac,            
            start_vac: data.start_vac,
            end_vac: data.end_vac,
            duration_vac: data.duration_vac,
            reason_vac: data.reason_vac,
            approbateur_vac: data.approbateur_vac            
          });
          //console.log(data)
        });
      }
    
      componentDidMount(){
        this.fetchData();
      }
      


    submitted(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/vacation/'+id+'/',
        {
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{'Content-type': 'application/json; charset=UTF-8',}
        }
        )
        .then(response=>response.json())
        .then((data)=>console.log(data));
        // Redirection vers la page racine
        this.props.history.push('/list_congés');
        // Rafraîchir la page après la redirection
        window.location.reload()
    }

    render(){
        return(
            
            <div>
                <Header />
                <div id='page'>
                <div style={{ paddingBottom:'140px',paddingTop:'50px', paddingLeft:'400px', paddingRight :'400px',textAlign: 'center'}}>
                    <h2 >Formulaire d'ajout d'un Congé après la reception d'une demande et l'approbation du Directeur SI:</h2>
                    <br/>
                    <form className="table table-striped table-bordered text-center " >
                    

                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>

                        <label htmlFor="id_emp_vac">L'employée concerné:</label>
                        <input value={this.state.id_emp_vac} name="id_emp_vac" type="text" onChange={this.changeHandler} className="form-control" id="id_emp_vac" disabled  />
                    </div>
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="type_vac">Modifier le type du congé:</label>
                        <input  value={this.state.type_vac} name="type_vac" type="text" onChange={this.changeHandler} className="form-control" id="type_vac" />
                    </div>
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="start_vac">Modifier la date début officiel du congé:</label>
                        <input value={this.state.start_vac} name="start_vac"type="date" onChange={this.changeHandler} className="form-control" id="start_vac" />
                    </div>
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="end_vac">Modifer la date fin officiel du congé:</label>
                        <input value={this.state.end_vac} name="end_vac"type="date" onChange={this.changeHandler} className="form-control" id="end_vac" />                        
                    </div>
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="duration_vac">Modifier la durée du congé:</label>
                        <input value={this.state.duration_vac} name="duration_vac"type="text" onChange={this.changeHandler} className="form-control" id="duration_vac" />
                    </div>     
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="reason_vac">Modifer la justification ou la raison pour le congé:</label>
                        <input  value={this.state.reason_vac} name="reason_vac"type="text" onChange={this.changeHandler} className="form-control" id="reason_vac" />
                    </div> 
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="approbateur_vac">Qui a approuvé le congé?</label>
                        <input value={this.state.approbateur_vac} name="approbateur_vac"type="text" onChange={this.changeHandler} className="form-control" id="approbateur_vac" disabled />
                    </div>                                                      
                    <div className="form-group row" >
                    <div className="col-sm-10" style={{marginLeft:'50px', marginRight :'50px'}}>
                    
                        <button type="submit" onClick={this.submitted} className="btn btn-primary">Modifier le Congé</button>
                    
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

export default UpdateCongé ;