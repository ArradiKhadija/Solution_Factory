import React from 'react';
import '../../src/bootstrap.min.css';
import Header from './Header'; // Import the Header component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Slider.css";
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../page.css'

const Accueil = () => {
    const datas=[
        {
            id:1,
            image:'slide_3.png',
            title:'slider1'
        },
        {
            id:2,
            image:'slide_2.jpg',
            title:'slider1'
        },
        {
            id:3,
            image:'slide_1.png',
            title:'slider1'
        }
    ]
  return (
            <div>
            
            <Header /> 
            
            
            <div style={{paddingTop:'70px'}}></div>
            <Carousel>
                {datas.map(slide=>(
                    <div key={slide.id} >
                        <img src={slide.image} alt=""  />
                    </div>
                ))}
            </Carousel>
            <div/>
            <div id='page' >
            <div  >
                    
                <div className="row "  >
                    <div className="col-sm-3 " >
                    <div className="card" style={{ width: '18rem' , backgroundColor:'#ffff4d'}}>
                        <img src="card/emp.png" className="card-img-top"  style={{ height: '13rem'  }} alt='none'/>
                        <div className="card-body">
                        <h5 className="card-title">Section des Employées</h5>
                        <p className="card-text">Gestion des employés englobe des activités essentielles d'ajout, de liste, de modification et de suppression...</p>
                        <div className="container">
                            <div className="row">
                            <div className="col-md-4">
                                <Link className="nav-link" to="/list_emp">
                                <span className="btn btn-primary" style={{ fontSize: '27px'}}>Liste</span>
                                </Link>
                            </div>
                            <div className="col-md-2">
                            <Link className="nav-link" to="/add">
                                <span className="btn btn-success" style={{ fontSize: '27px'}}>Ajouter</span>
                                </Link>                                
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-3 " >
                    <div className="card" style={{ width: '18rem' , backgroundColor:'#ffff4d' }}>
                        <img src="card/trb.jpeg" className="card-img-top" style={{ height: '13rem'}} alt='NO'/>
                        <div className="card-body">
                        <h5 className="card-title">Section des Tribes</h5>
                        <p className="card-text">Gestion des <i>Tribes</i> (départements) englobe des activités essentielles d'ajout, de liste, de modification et de suppression.</p>
                        <div className="container">
                            <div className="row">
                            <div className="col-md-4">
                                <Link className="nav-link" to="/list_tribes">
                                <span className="btn btn-primary" style={{ fontSize: '27px'}}>Liste</span>
                                </Link>
                            </div>
                            <div className="col-md-4">
                            <Link className="nav-link" to="/add_tribe">
                                <span className="btn btn-success" style={{ fontSize: '27px'}}>Ajouter</span>
                                </Link>                                
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="col-sm-3 ">
                    <div className="card" style={{ width: '18rem' , backgroundColor:'#ffff4d'  }}>
                        <img src="card/prj.png" className="card-img-top" style={{ height: '13rem'}} alt="none" />
                        <div className="card-body">
                        <h5 className="card-title">Section des Congés</h5>
                        <p className="card-text">Gestion des Congés englobe des activités essentielles d'ajout, de liste, de modification et de suppression.</p>
                        <div className="container">
                            <div className="row">
                            <div className="col-md-4">
                                <Link className="nav-link" to="/list_congés">
                                <span className="btn btn-primary" style={{ fontSize: '27px'}}>Liste</span>
                                </Link>
                            </div>
                            <div className="col-md-4 ">
                            <Link className="nav-link" to="/add_congés">
                                <span className="btn btn-success" style={{ fontSize: '27px'}}>Ajouter</span>
                                </Link>                                
                            </div>
                            </div>
                        </div>                        
                        </div>
                    </div>
                    </div>


                    <div className="col-sm-3">
                    <div className="card" style={{ width: '18rem' , backgroundColor:'#ffff4d'  }}>
                        <img src="card/team.jpg" className="card-img-top" style={{ height: '13rem'}} alt="none"/>
                        <div className="card-body">
                        <h5 className="card-title">Section des Equipes</h5>
                        <p className="card-text">Gestion des équipes englobe des activités essentielles d'ajout, de liste, de modification et de suppression.</p>
                        <div className="container">
                            <div className="row">
                            <div className="col-md-4">
                                <Link className="nav-link" to="/list_équipes">
                                <span className="btn btn-primary" style={{ fontSize: '27px'}}>Liste</span>
                                </Link>
                            </div>
                            <div className="col-md-4">
                            <Link className="nav-link" to="/add_équipe">
                                <span className="btn btn-success" style={{ fontSize: '27px'}}>Ajouter</span>
                                </Link>                                
                            </div>
                            </div>
                        </div>                        
                        </div>
                    </div>
                    </div>


                </div>
                </div>

                </div>
                
                <Footer />
                </div>
    
  );
}

export default Accueil;
