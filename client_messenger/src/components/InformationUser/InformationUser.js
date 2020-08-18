import React from 'react';
import classes from './InformationUser.module.css';
import {Spinner} from 'react-bootstrap';

const informationUser = props =>{ 
    return(
        <div className={classes.div}>
            <h1 style={{textAlign: 'center'}}>Me👾</h1>
        { props.name ? 
        (<>
        <p style={{fontWeight: 'bold',textAlign:'center',fontSize: 20,marginTop: '30px'}}>{props.name}</p>
        <p style={{fontWeight: 'bold',textAlign:'center',fontSize: 20}}>{props.surname}</p></>) 
        : 
        <div style={{textAlign: 'center',marginTop: 50}}> 
        <Spinner animation="border" variant="dark" />
        </div>
        }
        </div>
    )
};

export default informationUser;