//import collection from './connection';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export const Devices = () => {
    const [devices, setDevices] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/api/all/`)
            .then(res => {
                const devices = res.data;
                setDevices(devices);
            })
    });
    function remove(id) {
        //const params = new URLSearchParms();
        axios.delete(`http://localhost:3001/api/delete/`, { params: { id: id } }).then(res => {

        });
        console.log(id);
    }
    // const { MongoClient, ServerApiVersion } = require('mongodb');
    // const uri = "mongodb+srv://megaadmin1337:MqnIXQYYPFSsWde5@cluster0.geepy75.mongodb.net/?retryWrites=true&w=majority";
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    // client.connect(err => {
    //     const collection = client.db("test").collection("devices");
    //     // perform actions on the collection object
    //     client.close();
    // });
    return (
        <div>
            <div className='menu'>
                <Link className="btn btn-primary" to='/upsert/'>Add</Link>
            </div>
            <div className='container mt-3'>

                {devices.map(device => <div className="card elem mb-2 flex-wrap" key={device._id}>
                    <div className="card-body">
                        <h5 className="card-title">{device.name}</h5>
                        <p className="card-text">Price: {device.price}</p>
                        <div className="btn-group"> 
                        <Link className="btn btn-primary" to={`/upsert/${device._id}`}>Edit</Link>
                        <button className="btn btn-danger" onClick={() => remove(device._id)}>Remove</button>
                        </div>

                    </div>
                </div>)}

            </div>
        </div>

    )
}