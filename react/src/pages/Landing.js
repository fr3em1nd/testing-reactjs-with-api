import React, { useContext } from 'react';
import Header from '../sections/Header';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../hooks/UserContext';

export default function Landing() {
    const { user } = useContext(UserContext);
        if(user) {
            <Redirect to='/home'/> 
        }

    return(
        <div className="page">
            <Header/>
           <h3>Please Login to see the graph</h3> 
        </div>
    )
}