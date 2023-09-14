import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./Header";
import Footer from "./Footer";
import '../page.css'
class List extends React.Component{

  constructor(){
    super();
    this.state={
      data:[]
    };
  }

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

  deleteEmp(id){
    fetch('http://127.0.0.1:8000/employee/'+id+'/',{
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

  render(){
    const empData=this.state.data;
    const rows=empData.map((emp)=>
        <tr key={emp.id}>
        <th scope="row">{emp.id}</th>
        <td> {emp.nomComplet} </td>
        <td> {emp.email} </td>
        <td> {emp.contact} </td>
        <td> {emp.adresse} </td>
        <td> {emp.poste} </td>
        <td> {emp.salaire} </td>
        <td> {emp.statut_emploi} </td>
        <td> 
            <Link to={'/update/'+emp.id} className="btn btn-info" > Modifier </Link> 
            
        </td>
        <td> <button onClick={()=>this.deleteEmp(emp.id)} className="btn btn-danger ml-3"> Supprimer </button>  </td>
      </tr>
    );

    return(
      <div >
      <Header />
      <div id="page">
      <Link className="nav-link" style={{ paddingLeft:'1340px'}} to="/add">
        <span className="btn btn-success" style={{ fontSize: '27px'}}>Ajouter</span>
      </Link>
      <table className="table table-striped table-bordered text-center" >
      <thead >
        <tr>
          <th scope="col">Identité</th>
          <th scope="col">Nom Complet</th>
          <th scope="col">Email</th>
          <th scope="col">Contact</th>
          <th scope="col">Adresse</th>
          <th scope="col">Poste</th>
          <th scope="col">Salaire en DH</th>
          <th scope="col">Statut en emploi</th>
          <th scope="col">Modifier</th>
          <th scope="col">Supprimer</th>
          
        </tr>
      </thead>
      <tbody>
          {rows}
      </tbody>
      </table>
      </div>
      <Footer />
      </div>
  )
  }
}

export default List;