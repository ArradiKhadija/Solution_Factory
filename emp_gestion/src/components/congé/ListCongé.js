import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../components/Header";
import  Footer  from "../../components/Footer";
import "../../page.css"
class ListCongés extends React.Component{

  constructor(){
    super();
    this.state={
      data:[]
    };
  }

  fetchData(){
    fetch('http://127.0.0.1:8000/vacation/')
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

  deleteCongé(id){
    fetch('http://127.0.0.1:8000/vacation/'+id+'/',{
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
    const cngData=this.state.data;
    const rows=cngData.map((cng)=>
        <tr key={cng.id_vac}>
        <th scope="row">{cng.id_emp_vac}</th>
        <td> {cng.type_vac} </td>
        <td> {cng.start_vac} </td>
        <td> {cng.end_vac} </td>
        <td> {cng.duration_vac} </td>
        <td> {cng.reason_vac} </td>
        <td> {cng.approbateur_vac} </td>
        <td> 
            <Link to={'/update_congé/'+cng.id_vac} className="btn btn-info" > Modifier </Link> 
            <button onClick={()=>this.deleteCongé(cng.id_vac)} className="btn btn-danger ml-3"> Supprimer </button>   
        </td>
      </tr>
    );

    return(
      <div>
      <Header />

      <div id='page'>
      <Link className="nav-link" style={{ paddingLeft:'1340px'}} to="/add_congés">
        <span className="btn btn-success" style={{ fontSize: '27px'}}>Ajouter</span>
      </Link> 
      <table className="table table-striped table-bordered text-center">
      <thead>
        <tr>
        <th scope="row">employée ID</th>
        <th> Type du Congé </th>
        <th> Date Début </th>
        <th> Date Fin </th>
        <th> Durée du Congé </th>
        <th> justification/ Raison </th>
        <th> Approbateur </th>
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

export default ListCongés;