import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../components/Header";
import  Footer  from "../../components/Footer";
import '../../page.css'
class ListTribes extends React.Component{

  constructor(){
    super();
    this.state={
      data:[],
      resp:[]
    };

    
  }

  fetchData(){
    fetch('http://127.0.0.1:8000/tribes/')
    .then(response=>response.json())
    .then((data)=>{
      this.setState({
        data:data 
      });
     // console.log(data)
    });
  }

  componentDidMount(){
    this.fetchData();
    this.fetchData_emp();
  }

  deleteTribe(id){
    fetch('http://127.0.0.1:8000/tribes/'+id+'/',{
      method:'DELETE',
      body:JSON.stringify(this.state),
      })
      .then(response=>response)
      .then((data)=>{
          if(data){
              this.fetchData();
          }
      });    
    //console.log(id)

  }


  nomComplet(id){
       
      const nom_cm =this.state.data.filter((trb)=>{return trb.resp_trb === id })
     // console.log(nom_cm.resp_trb)
      
  }

  //***************************************** emp fetch*/
  fetchData_emp() {
    fetch('http://127.0.0.1:8000/employee/')
    .then((response) => response.json())
    .then((data) => {
    //console.log(data)
    const leaders = data.filter((item)=>item.poste ==='tribes_leading');
    return(leaders)
    })
    .then((data)=>{
        this.setState({
            resp:data 
        });
       // console.log(data)
        });        
  }



  render(){
    //{this.nomComplet(trb.resp_trb)}


    const trbData = this.state.data;
    const responsable = this.state.resp; // Assuming resp is an array of responsible employees
    
    const rows = trbData.map((trb) => {
      const responsibleEmployee = responsable.find((emp) => emp.id === trb.resp_trb);
    
      return (
        <tr key={trb.id_trb}>
          <th scope="row">{trb.id_trb}</th>
          <td>{trb.intitule_trb}</td>
          <td>{trb.resp_trb}</td>
          <td>{responsibleEmployee ? responsibleEmployee.nomComplet : 'aucun'}</td>
          <td>
            <Link to={'/update_tribe/' + trb.id_trb} className="btn btn-info">
              Modifier
            </Link>
            <button
              onClick={() => this.deleteTribe(trb.id_trb)}
              className="btn btn-danger ml-3"
            >
              Supprimer
            </button>
          </td>
        </tr>
      );
    });
    

    return(
      <div>
      <Header />
      <div id='page'>
      <div style={{  padding:'20px'}}>
      <Link className="nav-link" style={{ paddingLeft:'1340px'}} to="/add_tribe">
        <span className="btn btn-success" style={{ fontSize: '27px'}}>Ajouter</span>
      </Link>
      <table className="table table-striped table-bordered text-center">
      <thead>
        <tr>
          <th scope="col">Identité </th>
          <th scope="col">Intitulé</th>
          <th scope="col">Identité responsable </th>
          <th scope="col">nom du responsable </th>
          <th scope="col">Actions </th>
        </tr>
      </thead>
      <tbody>
          {rows}
      </tbody>
      </table>
      </div>
      </div>
      <Footer />
      </div>
  )
  }
}

export default ListTribes;