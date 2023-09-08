import React from "react";
import Header  from "../../components/Header";
import  Footer from "../../components/Footer";
import '../../page.css'
class AddTribes extends React.Component{

    constructor(){
        super();
        this.state={
            'id_trb':'',
            'intitule_trb':'',
            'resp_trb':''           
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
        fetch('http://127.0.0.1:8000/tribes/',
        {
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{'Content-type': 'application/json; charset=UTF-8',}
        }
        )
        // Redirection vers la page racine
        this.props.history.push('/list_tribes');
        // Rafraîchir la page après la redirection
        window.location.reload()        
    }

    //fetching employees data
    fetchData() {
        fetch('http://127.0.0.1:8000/employee/')
        .then((response) => response.json())
        .then((data) => {
        //console.log(data)
        const leaders = data.filter((item)=>item.poste ==='tribes_leading');
        return(leaders)
        })
        .then((data)=>{
            this.setState({
                data:data 
            });
            console.log(data)
            });        
      }
      

//***************** */
    componentDidMount(){
        this.fetchData();
      }


    render(){
        const empData=this.state.data;
        //console.log(empData)
        const options=empData.map((emp)=>
            <option value={emp.id} id={emp.id}>{emp.nomComplet}</option>
        );

        return(
            
            <div>
                <Header />
                    <div id='page'>
                    <div style={{ paddingBottom:'140px',paddingTop:'50px', paddingLeft:'400px', paddingRight :'400px',textAlign: 'center'}}>
                    <h2 >Formulaire d'ajout d'un Tribe</h2>
                    <br/>
                    <form className="table table-striped table-bordered text-center "  >
                    

                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>

                        <label htmlFor="id_trb">Entrer identité du Tribe:</label>
                        <input  name="id_trb" type="text" onChange={this.changeHandler} className="form-control" id="id_trb" />
                    </div>
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="intitule_trb">Entrer l'intitulé:</label>
                        <input  name="intitule_trb" type="text" onChange={this.changeHandler} className="form-control" id="intitule_trb" />
                    </div>
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="resp_trb">Entrer le nom du responsable:</label>
                        <select className="form-control" name="resp_trb" type="text" onChange={this.changeHandler}  id="resp_trb" >
                        <option value="">Sélectionnez un responsable:</option>
                            {options}
                        </select>
                    </div>
 
                    <div className="form-group row" >
                    <div className="form-group row" style={{  paddingLeft:'300px', paddingRight :'400px',textAlign: 'center'}}>
                                                            
                        <button type="submit" style={{backgroundColor:'green', border:'green'}} onClick={this.submitted} className=" btn btn-primary btn-block fa-lg">Ajouter un Tribe</button>                                                    
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

export default AddTribes;