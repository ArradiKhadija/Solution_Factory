import React from "react";
import '../../page.css'
import Header  from "../../components/Header";
import  Footer  from "../../components/Footer";
import Select from 'react-select';
class UpdateEquipe extends React.Component{

    constructor(){
        super();
        this.state={
            nom_eq: '',
            resp_eq: '',
            start_eq: '',
            project_run: '',
            scrum_master:'',
            emp_eq: [],
            emp:[],
            aa:[]
             }
        this.changeHandler= this.changeHandler.bind(this);
        this.submitted= this.submitted.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
       // console.log(event.target.name)
    }

    fetchData(){

        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/team/'+id+'/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                nom_eq: data.nom_eq,
                resp_eq: data.resp_eq,
                start_eq: data.start_eq,
                project_run: data.project_run,
                emp_eq: data.emp_eq, 
                aa:data.aa, 
                scrum_master:data.scrum_master,
              });
              this.setState({ availableEmployees: data.emp });
         // console.log(data.emp_eq)
        
        });
        
      }
    
      componentDidMount(){
        this.fetchData();
        this.fetchDataEmp();
      }
      


    submitted(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/team/'+id+'/',
        {
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{'Content-type': 'application/json; charset=UTF-8',}
        }
        )
        .then(response=>response.json())
       
        // Redirection vers la page racine
        this.props.history.push('/list_équipes');
        // Rafraîchir la page après la redirection
        window.location.reload()
    }



    fetchDataEmp(){
        fetch('http://127.0.0.1:8000/employee/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                emp:data ,
                availableEmployees: data
            });
        console.log(data)
        });

    }

    handleChange(selectedOptions) {
        // Extract the values from selectedOptions and update emp_eq as an array
        const selectedValues = selectedOptions.map(option => option.value);
        this.setState({ emp_eq: selectedValues });
      }

    render(){



        const empData=this.state.emp ;
        const selects=empData.map((emp)=>
            
            <option value={emp.id} id={emp.id}>{emp.nomComplet}</option>
        );

        console.log(this.state.emp)

        const dataEmp = this.state.emp
  
        const employees = dataEmp.map(((emp)=>({
                text: `${emp.id}`,
                value: `${emp.id}`,
                label: `${emp.nomComplet}`,
            })))
        const zzzz = this.state.emp_eq

        const desired = zzzz.map((z,i)=> empData.filter((e,i)=>{if(e.id === parseInt(z)) return e }))
        const aa= desired.filter(item => item.length !== 0).flatMap((e1) =>
                                                                            e1.map((e) => ({
                                                                            value: `${e.id}`,
                                                                            label: `${e.nomComplet}`,
                                                                            }))
       
    )
    const selects_scrum=empData.map((emp)=>
            
    {if(emp.poste === 'scrum_master')
    return(<option value={emp.id} id={emp.id}>{emp.nomComplet}</option>)}
);
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
                        <input value={this.state.nom_eq} name="nom_eq"type="text" onChange={this.changeHandler} className="form-control" id="nom_eq" />
                    </div>
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="resp_eq">Enter un tech Lead:</label>
                        <select value={this.state.resp_eq} className="form-control" name="resp_eq" onChange={this.changeHandler}  id="resp_eq">
                        <option value="">Sélectionnez un employée:</option>
                       {selects}
                        </select>                   
                    </div>
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="scrum_master">Enter un scrum master:</label>
                        <select  value={this.state.scrum_master} className="form-control" name="scrum_master" onChange={this.changeHandler}  id="scrum_master">
                        <option value="">Sélectionnez un employée:</option>
                       {selects_scrum}
                        </select>                   
                    </div>                     

                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="start_eq">Entrer la date de création de l'équipe:</label>
                        <input value={this.state.start_eq} name="start_eq"type="date" onChange={this.changeHandler} className="form-control" id="start_eq" />
                    </div>

                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="project_run">Entrer l'intitulé du projet en cours :</label>
                        <input value={this.state.project_run} name="project_run" type="text" onChange={this.changeHandler} className="form-control" id="project_run"  />                        
                    </div>

   
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                    <label htmlFor="emp_eq">Modifier les emplyées membres de l'équipe:</label>
                    {/* <p>{JSON.stringify(zzzz)}</p>
                    <p>{JSON.stringify(desired)}</p>
                    <p>{JSON.stringify(aa)}</p> */}

                    <Select
                  isMulti
                  options={employees}
                  onChange={this.handleChange}
                  value={aa}
                />

                     <br/>                                                                
                        </div> 
                                                      
                    <div className="form-group row" >
                    <div className="col-sm-10" style={{marginLeft:'50px', marginRight :'50px'}}>
                    </div>
                        
                        <div className="form-group row" style={{  paddingLeft:'300px', paddingRight :'400px',textAlign: 'center'}}>
                                                            
                            <button type="submit" style={{backgroundColor:'green', border:'green'}} onClick={this.submitted} className=" btn btn-primary btn-block fa-lg">Modifer une équipe</button>                                                    
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

export default UpdateEquipe ;