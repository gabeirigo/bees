import React, { FormEvent, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import SecurityContext from "../../contexts/securityContext";
import bee from '../../assets/svg/bee.svg';
import './styles.scss';

const SignIn: React.FC = () => {
  const { olderThan18, setOlderThan18, fullName, setFullName } = useContext(SecurityContext);
  const navigate = useNavigate();

  function enter(e: FormEvent) {
    e.preventDefault();

    if (!fullName) {
      alert('You need to enter your full name.');
      return;
    }

    navigate('/breweries');
  }

  return (
    <main className="signIn">
      <form onSubmit={(e) => enter(e)} className="signIn__form">
        <p className="signIn__description">Please, enter your full name below.</p>
        <p className="signIn__description">Only alphabetical characters are accepted.</p>

        <input
          className="signIn__input-name"
          type="text"
          alt="Name"
          title="Name"
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)} />

        <article className="signIn__controllers">
          <div className="signIn__checkbox">
            <input
              type="checkbox"
              checked={olderThan18}
              onChange={() => setOlderThan18(!olderThan18)} />
            <span>Are you older than 18 years old?</span>
          </div>

          <button
            type="submit"
            className="signIn__enter-button"
            disabled={!olderThan18}>Enter</button>
        </article>
      </form>

      <img src={bee} title="Bees" alt="Bees" className="signIn__bee"></img>
    </main>
  );
}

export default SignIn;