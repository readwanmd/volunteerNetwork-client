import React, {useEffect, useState} from 'react';
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import removeIcon from '../../trash.svg'

const style = {
    width: '30px', 
    height: '30px', 
    background:'#FF444A',
    borderRadius: '4px',
    cursor: 'pointer'
}


const Admin = () => {
    const [allEvents, setAllEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allEvents')
            .then(res => res.json())
            .then(data => setAllEvents(data))
    }, [allEvents])

    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/deleteUserEvent/${id}`, {method: 'DELETE'})
            .then(res => res.json())
            .then(result => {
                if (result) {
                    // history.push('/event')
                    // setHide(true)
                    console.log('deleted')
                }
            })
    }

    return (
        <div className="container">
            <div className="logo text-center mt-4 mb-5">
                <Link to="/">
                    <img src="https://i.ibb.co/9nJfMcV/Group-1329.png" alt="" />
                </Link>
            </div>

            <h1 className="mt-5 mb-5 text-center">Volunteer register list</h1>
            
            <Link to="/create-event">
                <h4 className="mb-5 text-center">&#10010; Add event</h4>
            </Link>

            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Registration Date</th>
                        <th>Event</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allEvents.map(event =>
                            <tr className="text-center">
                                <td>{event.name}</td>
                                <td>{event.email}</td>
                                <td>{event.date}</td>
                                <td>{event.organization}</td>
                                <td onClick={() => handleDelete(event.id)}><img style={style} className="p-1" src={removeIcon} alt="" /></td>
                            </tr>
                            )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Admin;