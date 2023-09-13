import React from "react";
import Header  from "../../components/Header";
import  Footer from "../../components/Footer";
import "../../page.css"
import Select from 'react-select';

class AddEquipe extends React.Component{

    constructor() {
        super();
        this.state = {
          nom_eq: '',
          resp_eq: '',
          start_eq: '',
          project_run: '',
          emp_eq: [],
          data: [],
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitted = this.submitted.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }


      changeHandler(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
      submitted(event) {
        event.preventDefault(); // Empêche la soumission du formulaire par défaut
      
        const formData = {
          nom_eq: this.state.nom_eq,
          resp_eq: this.state.resp_eq,
          start_eq: this.state.start_eq,
          project_run: this.state.project_run,
          emp_eq: this.state.emp_eq.map(option => option.value),
        };
      
        fetch('http://127.0.0.1:8000/team/', {
          method: 'POST',
          body: JSON.stringify(formData), // Utilisez formData au lieu de this.setState(formData)
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        })
        // Redirection vers la page racine
        this.props.history.push('/list_équipes');
        // Rafraîchir la page après la redirection
        window.location.reload()
      }
      
      
 
    
    
    
    
    

//fetching employees data*/
    fetchDataEmp(){
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
        this.fetchDataEmp();
      }

      handleChange(selectedOptions) {
        this.setState({ emp_eq: selectedOptions });
      }
    //fetching employees data
    fetchData() {
        fetch('http://127.0.0.1:8000/employee/')
        .then((response) => response.json())
        .then((data) => {
        //console.log(data)
        const emp = data.filter((item)=>item.poste !=='Tech Lead');
        return(emp)
        })
        .then((data)=>{
            this.setState({
                data:data 
            });
            console.log(data)
            });        
      }

    render(){
        const empData=this.state.data;
        const selects=empData.map((emp)=>
            
            <option value={emp.id} id={emp.id}>{emp.nomComplet}</option>
        );


        const dataEmp = this.state.data
        console.log(dataEmp)
        const employees = dataEmp.map(((emp)=>({
                text: `${emp.id}`,
                value: `${emp.id}`,
                label: `${emp.nomComplet}`,
            })))
       // console.log(this.state.selectedOption)
        // const myData = [
        //     { text: 'Books', value: 1, label:'opsie' },
        //     { text: 'Books', value: 2, label:'opsie' },
        //     { text: 'Books', value: 3, label:'opsie' },
        //     { text: 'Books', value: 4, label:'opsie' },

        // ];

        

        //'id_eq', 'nom_eq','resp_eq','start_eq','project_run','emp_eq'
        return(

            
            <div>
                <Header />
                    <div id="page">
                    <div  style={{ paddingBottom:'140px',paddingTop:'50px', paddingLeft:'400px', paddingRight :'400px',textAlign: 'center'}} >
                    <h2 >Formulaire d'ajout d'une équipe:</h2>
                    <br/>
                    <form className="table table-striped table-bordered text-center " >
                    

                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="nom_eq">Nom de l'équipe:</label>
                        <input  name="nom_eq"type="text" onChange={this.changeHandler} className="form-control" id="nom_eq" />
                    </div>
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="resp_eq">Enter un tech Lead:</label>
                        <select  className="form-control" name="resp_eq" onChange={this.changeHandler}  id="resp_eq">
                        <option value="">Sélectionnez un employée:</option>
                       {selects}
                        </select>                   
                    </div>

                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="start_eq">Entrer la date de création de l'équipe:</label>
                        <input  name="start_eq"type="date" onChange={this.changeHandler} className="form-control" id="start_eq" />
                    </div>

                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="project_run">Entrer l'intitulé du projet en cours :</label>
                        <input  name="project_run" type="text" onChange={this.changeHandler} className="form-control" id="project_run"  />                        
                    </div>

   
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                    <label htmlFor="emp_eq">Entrer les emplyées membres de l'équipe:</label>
                    <Select
                    isMulti
                    options={employees}
                    onChange={this.handleChange}
                    value={this.state.emp_eq}
                    />

                    <p>{JSON.stringify(this.state.emp_eq)}</p>
                     <br/>                                                                
                        </div> 
                                                      
                    <div className="form-group row" >
                    <div className="col-sm-10" style={{marginLeft:'50px', marginRight :'50px'}}>
                    </div>
                        
                        <div className="form-group row" style={{  paddingLeft:'300px', paddingRight :'400px',textAlign: 'center'}}>
                                                            
                            <button type="submit" style={{backgroundColor:'green', border:'green'}} onClick={this.submitted} className=" btn btn-primary btn-block fa-lg">Ajouter une équipe</button>                                                    
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

export default AddEquipe;