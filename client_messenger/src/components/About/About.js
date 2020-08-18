import React from 'react';
import Navigation from '../Navigation/Navigation';
import classes from './About.module.css';

const about = props =>{ //this about tab in navigation
    return (
        <>
        <Navigation about history={props.history}/>
        <div className={classes.div}>
            <h1>
                Hi👋
            </h1>
            <h2>I'm fullstack web developer 👨🏼‍💻 from Poland</h2>
            <h2 style={{marginTop: 50}}>Contact: </h2>
            <div>
                <a href="https://github.com/patryk404"><img src={require('../../images/GitHub.png')} width='60' height='60' className={classes.img}/></a>
                <a href="mailto:patryk744@op.pl"><img src={require('../../images/gmail.png')} width='60' height='60' className={classes.img}/></a>
                <a href="https://www.linkedin.com/in/patryk-kurek-5150491b3/"><img src={require('../../images/linkedin.png')} width='60' height='60' className={classes.img}/></a>
            </div>
        </div>
        </>
    )
};

export default about;