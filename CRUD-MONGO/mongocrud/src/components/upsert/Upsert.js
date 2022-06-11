import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";

export function Upsert(){
    const {id} = useParams();
    const [model,setModel] = useState({name: '', price: ''}); 
    const [redirect, setRedirect] = useState(false);
    useEffect(()=>{
        
        if(id){
            axios.get('http://localhost:3001/api/getById/', {params: {id : id}}).then(res => {
                setModel(res.data[0]);
            });
        }
        
    },[]);
    function handleChangeName(event){
        setModel({...model, name: event.target.value});
    }
    function handleChangePrice(event){
        setModel({...model, price: +event.target.value});
    }
    function handleSubmit(event){
        if(id){
            axios.post('http://localhost:3001/api/update/', model, {params: {id: id}}).then(()=> setRedirect(true));
        }
        else{
            axios.post('http://localhost:3001/api/add/', model).then(() => setRedirect(true));
        }
        event.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit} className="container pt-3">
             { redirect ? (<Navigate push to="/devices/"/>) : null }
        <div className="form-group">
        <label>
          Name:
          <input type="text" value={model.name || ''} onChange={handleChangeName} className="form-control"/>
        </label>
        </div>
        <div className="form-group">
        <label>
          Price:
          <input type="text" value={model.price || ''} onChange={handleChangePrice} className="form-control"/>
        </label>
        </div>
        <input type="submit" value={id ? 'Update' : 'Create'} className="btn btn-primary mt-2"/>
        <Link className="btn btn-primary mt-2 ms-2" to='/devices/'>Back</Link>

      </form>
    );
}