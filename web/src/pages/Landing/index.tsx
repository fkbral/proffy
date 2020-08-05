import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';


const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    async function getConnections(){
      try {
        const response = await api.get('/connections');
        if(response){
          setTotalConnections(response.data.total);
        }
      } catch (error) {
        
      }
    }

    getConnections();
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Your platform for online studies</h2>
        </div>

        <img 
        src={landingImg}
        alt="Platform for online studies" 
        className="hero-image"/>

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Study"/>
            Study
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Give Classes"/>
            Give Classes
          </Link>

        </div>

        <span className="total-connections">
          Total of {totalConnections} connections made <img src={purpleHeartIcon} alt="Purple Heart"/>
        </span>


      </div>
    </div>
    )
  };

export default Landing;