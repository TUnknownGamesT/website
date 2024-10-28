import React from 'react';
import '../css/index.css';  

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <h1 className="centered-header">
      {title}
    </h1>
  );
};

export default PageTitle;