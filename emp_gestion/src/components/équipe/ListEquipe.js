import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../page.css";

class ListEquipe extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      emp: [],
    };
  }

  fetchData() {
    fetch('http://127.0.0.1:8000/team/')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          data: data,
        });
      });
  }

  componentDidMount() {
    this.fetchData();
    this.fetchDataEmp();
  }

  deleteEquipe(id) {
    fetch('http://127.0.0.1:8000/team/' + id + '/', {
      method: 'DELETE',
    })
      .then(response => response)
      .then(() => {
        this.fetchData();
      });
  }

  fetchDataEmp() {
    fetch('http://127.0.0.1:8000/employee/')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ emp: data });
      });
  }

  render() {
    const listdata = this.state.data;
    const employees = this.state.emp;

    const rows = listdata.map((sqd) => {
      let eq_emp = '';

      const matchingEmployees = employees.filter((emp) =>
        sqd.emp_eq.includes(emp.id)
      );

      if (matchingEmployees.length > 0) {
        eq_emp = matchingEmployees.map((emp) => emp.nomComplet).join(", ");
      } else {
        eq_emp = 'aucun';
      }

      return (
        
        <tr key={sqd.id_eq}>
           {/* <p>{JSON.stringify(sqd.scrum_master)}</p>  */}
          <th scope="row">{sqd.id_eq}</th>
          <td>{sqd.nom_eq}</td>
          <td>
            {sqd.resp_eq? (employees.find(e=> e.id === sqd.resp_eq)).nomComplet :'aucun'}
          </td>
          <td>
          {sqd.scrum_master? (employees.find(e=> e.id === parseInt(sqd.scrum_master))?.nomComplet || 'aucun') :'aucun'}
          </td>
          <td>{sqd.start_eq}</td>
          <td>{sqd.project_run}</td>
          <td>{eq_emp}</td>
          <td>
            <Link to={'/update_équipe/' + sqd.id_eq} className="btn btn-info">
              Modifier
            </Link>
            <button
              onClick={() => this.deleteEquipe(sqd.id_eq)}
              className="btn btn-danger ml-3"
            >
              Supprimer
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <Header />
        <div id='page'>
          <Link className="nav-link" style={{ paddingLeft: '1340px' }} to="/add_équipe">
            <span className="btn btn-success" style={{ fontSize: '27px' }}>Ajouter</span>
          </Link>
          <table className="table table-striped table-bordered text-center">
            <thead>
              <tr>
                <th scope="row">Equipe No</th>
                <th> Nom équipe </th>
                <th> Tech Lead </th>
                <th> Scrum master </th>
                <th> Date du création </th>
                <th> Projet en Cours </th>
                <th> Employées </th>
                <th> Actions </th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ListEquipe;
