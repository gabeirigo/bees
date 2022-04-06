import React, { ReactComponentElement, ReactElement } from 'react';
import './styles.scss'

const Badge: React.FC<{ icon: ReactElement<HTMLImageElement>, name: string }> = ({ icon, name }) => {
  return <span className="badge">
    {icon}
    <span className="badge__label">{name}</span>
  </span>;
}

export default Badge;