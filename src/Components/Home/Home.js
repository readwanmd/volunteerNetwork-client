import React, {useEffect, useState} from 'react';
import './Home.css';
import NavBar from '../NavBar/NavBar';
import {Button, Form, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import loading from '../../images/loading.gif';

const Home = () => {
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        fetch('https://pure-badlands-37217.herokuapp.com/organizations')
        .then(res => res.json())
        .then(data => setOrganizations(data))
    }, [])

    return (
        <div className="topbar">
        <NavBar />
            
                <div className="header">
                    <h1 className="text-center mb-4" style={{color: '#00b050'}}>Grow by helping people in need!</h1>
                    <h3 className="text-center mb-4" style={{color: '#f56060'}}>Do volunteering, Register an event.</h3>
                    {/* <Form inline className="justify-content-center">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>  */}
                </div>
            {
                (organizations.length === 0) ?
                    <div class="d-flex justify-content-center">
                        <img style={{width: '200px', height: '150px', marginTop: '50px'}} src={loading} alt="loading"/> 
                    </div> :
            <>
                <div className="container">
                    <div className="row">
                        {
                                organizations.map(work =>
                                <div key={work.id} className="col-md-3 col-sm-6 col-xs-12 mb-3">
                                    <Link to={`/vregistration/${work.id}`} style={{textDecoration: 'none'}}>
                                        <div className="img d-flex justify-content-center">
                                            <img src={work.photo} alt="" />
                                        </div>
                                        <h2 className="title text-center">{work.title}</h2>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </>
            }
        </div>
    );
};

export default Home;