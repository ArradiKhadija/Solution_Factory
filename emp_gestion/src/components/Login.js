import React from "react";
import {Link} from 'react-router-dom';
import './login.css';
import '../../src/bootstrap.min.css';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state=[]
    }

    changeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/login', {
                method: 'POST',
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            });

            if (response.ok) {
                console.log('User login successfully!');
                this.setState({
                    username: '',
                    email: '',
                    password: ''
                });
                // Redirection vers la page racine
                this.props.history.push('/accueil');
                // Rafraîchir la page après la redirection
                window.location.reload()                
            } else {
                console.error('login failed.');
                this.setState({ loginFailed: true });
                console.log(this.state['loginFailed'])
               // this.props.history.push('/');
               // window.location.reload()
            }
 
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }
       






    render() {

        return (
                <section className="h-100 gradient-form"  >
                <div className="container-fluid " >
                    <div className="row d-flex justify-content-center align-items-center h-50">
                    <div className="col-xl-15">
                        <div className="card rounded-3 text-black"id="card" >
                        <div className="row g-0" >
                            <div className="col-lg-6" >
                            <div className="card-body p-md-5 mx-md-4" id="card">

                                <div className="text-center">
                                <img src="no_bg.png" style={{width: '185px'}} alt="logo"/>
                                <h4 className="mt-1 h1">Solution Factory</h4>
                                </div>
                                <br/>

                <form onSubmit={this.handleSubmit} style={{width:'480px', paddingLeft:'120px'}}  >
                            <p className="textt h5">Veuillez vous identifier pour accéder à votre Espace RH:</p>

                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="username"                                
                                    name="username" // Utilisez le nom "username" ici
                                    className="form-control textt "
                                    placeholder="Enter votre username "
                                    value={this.state.username}
                                    onChange={this.changeHandler}
                                />
                                <label className="form-label h4" htmlFor="username"><b>Username:</b></label>
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="password"
                                    id="password"
                                    name="password" // Utilisez le nom "password" ici
                                    className="form-control textt"
                                    placeholder="Enter votre mot de passe"
                                    value={this.state.password}
                                    onChange={this.changeHandler}
                                />
                                <label className="form-label h4" htmlFor="password"><b>Mot de passe:</b></label>
                                {this.state.loginFailed && <p className="rounded-pill btn btn-danger"><b>Mot de passe ou Username est érroné</b></p>}

                            </div>

                            <div className="text-center pt-1 mb-5 pb-1">
                                <button className="nav-link btn btn-primary btn-block fa-lg" type='submit' >Login<span className="sr-only">(current)</span></button>
                                <Link className="nav-link btn btn-primary btn-block fa-lg" to="/signup">s'inscrire<span className="sr-only">(current)</span></Link>
                                
                            </div>
                            </form>


                            </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                <h1 className="mb-4">Premier groupe d’assurance en Afrique</h1>
                                <p className="small mb-0"><h4>Sanlam, le plus grand assureur du Maroc et l'un des plus grands assureurs au monde.</h4></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>              
            

        );
    }
}

export default Login;
