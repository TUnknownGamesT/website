import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import '../css/card.css';

interface CardProps {
  icon: string | IconDefinition;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="icon">
        {typeof icon === 'string' ? ( icon ) : (
          <FontAwesomeIcon icon={icon} />
        )}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;