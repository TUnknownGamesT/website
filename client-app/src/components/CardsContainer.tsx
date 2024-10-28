import React from 'react';
import Card from './Card';
import '../css/cards-container.css'; 
import { faMobileAlt, faCode } from '@fortawesome/free-solid-svg-icons';

const CardContainer: React.FC = () => {
  return (
    <div className="card-container">
      <Card 
        icon={faMobileAlt} 
        title="MOBILE" 
        description="Our mobile solutions offer a streamlined approach to accessing information and completing tasks. 
        With intuitive interfaces and straightforward features, our apps provide a seamless user experience, making 
        it easy to stay connected and productive on the go."
      />
      <Card 
        icon="XR" 
        title="XR/VR/MR" 
        description="XR software, encompassing augmented reality (AR), virtual reality (VR), and mixed reality (MR), 
        creates immersive digital experiences by blending the real and virtual worlds. It's used for gaming, training, education,
        and more, offering new ways to interact with information and environments."
      />
       <Card 
        icon={faCode} 
        title="WEB" 
        description="Our websites are designed with simplicity in mind. Intuitive navigation, clear layouts, and minimal clutter 
        ensure a seamless user experience. We prioritize ease of use, making it effortless for visitors to find what they need and take action."
      />
    </div>
  );
}

export default CardContainer;