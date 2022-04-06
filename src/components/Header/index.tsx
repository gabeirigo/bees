import React, { useContext, useEffect } from 'react';
import SecurityContext from "../../contexts/securityContext";
import ArrowLeft from '../../assets/svg/arrow-left.svg';
import './styles.scss';
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { fullName, olderThan18 } = useContext(SecurityContext);
  const navigate = useNavigate();

  useEffect(() => {
    validateCredentials(fullName, olderThan18)
  }, []);

  function validateCredentials(fullName: string, olderThan18: boolean) {
    if (!fullName || !olderThan18) {
      navigate('/');
    }
  }

  return <header className="header">
    <div className="header__container">
      <button className="header__back-button" onClick={() => navigate('/')}>
        <img
          src={ArrowLeft}
          alt="Go back"
          title="Go back"
          className="header__icon-back-button" />

        <span className="header__label-back-button">Go Back</span>
      </button>
      <h2 className="header__full-name">{fullName}</h2>
    </div>
  </header>;
}

export default Header;