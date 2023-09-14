import React from "react";
import '../../page.css'
import Header  from "../../components/Header";
import  Footer  from "../../components/Footer";

class UpdateTribes extends React.Component{

    constructor(){
        super();
        this.state={
            id_trb:'',
            intitule_trb:'',
            resp_trb:'',
            data :[]
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
        fetch('http://127.0.0.1:8000/tribes/'+id+'/')
        .then(response=>response.json())
        .then((data)=>{
          this.setState({
            id_trb:data.id_trb,
            intitule_trb:data.intitule_trb,
            resp_trb:data.resp_trb  ,
                     
          });
          //console.log(data)
        });
      }
    
      componentDidMount(){
        this.fetchData();
        this.fetchData_emp();
      }
      


      submitted(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/tribes/'+id+'/',
        {
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{'Content-type': 'application/json; charset=UTF-8',}
        }
        )
        .then(response=>response.json())
        .then((data)=>console.log(data));
        // Redirection vers la page racine
        this.props.history.push('/list_tribes');
        // Rafraîchir la page après la redirection
        window.location.reload()
    }

    //fetching employees data
    fetchData_emp(){
        fetch('http://127.0.0.1:8000/employee/')
        .then((response) => response.json())
        .then((data) => {
        //console.log(data)
        const leaders = data.filter((item)=>item.poste ==='Tribes Leading');
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
   

    render(){

        const empData=this.state.data;
        console.log(empData)
        const options=empData.map((emp)=>
            <option value={emp.id} id={emp.id}>{emp.nomComplet}</option>
        );

        return(
            
            <div>
                <Header />
                <div id='page'> 
                <div style={{ paddingBottom:'140px',paddingTop:'50px', paddingLeft:'400px', paddingRight :'400px',textAlign: 'center'}}>
                <h2>Formulaire de modification d'un Tribe</h2>
                <br/>
                <form  className="table table-striped table-bordered text-center border border-5" >
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="id_trb">Modifer l'identité du Tribe': </label>
                        <input onChange={this.changeHandler} value={this.state.id_trb} name='id_trb' type="text" className="form-control" id="id_trb" disabled />
                   </div>
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="intitule_trb">Modifer l'email' du l'employée:</label>
                        <input onChange={this.changeHandler} value={this.state.intitule_trb} name='intitule_trb' type="text" className="form-control" id="intitule_trb" p/>
                    </div>
                    <div className="form-group" style={{marginLeft:'50px', marginRight :'50px'}}>
                        <label htmlFor="resp_trb">Modifer le contact du l'employée</label>
                        <select name='resp_trb' value={this.state.resp_trb} type="text" className="form-control" onChange={this.changeHandler}>{options} </select>
                        
                    </div>
  
                    <div className="form-group row" style={{marginLeft:'50px', marginRight :'50px'}}>
                    <div className="col-sm-10">
                    
                        <button type="submit" onClick={this.submitted} className="btn btn-primary">Modifier un Tribe</button>
                    
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

export default UpdateTribes ;