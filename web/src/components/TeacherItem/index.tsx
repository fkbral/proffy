import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher:{
  id,
  avatar,
  bio,
  cost,
  name,
  subject,
  whatsapp
}}) => {

  function createNewConnection() {
    api.post('connections', {
      user_id: id
    });
  }

  return(
    <article className="teacher-item">
      <header>
        <img src={avatar} alt={name}/>
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>
        {bio}
      </p>

      <footer>
        <p>
          Price/hour
          <strong>$ {cost}</strong>
        </p>
        <a 
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp"/>
          Get in touch
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;