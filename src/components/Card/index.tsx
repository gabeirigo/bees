import React from 'react';
import './styles.scss'

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <article className="card">
      {children}
    </article>
  );
}

export default Card;