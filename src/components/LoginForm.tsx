import { useState, useContext } from 'react';

import styles from '../styles/components/LoginForm.module.css';
import { LoginContext } from '../contexts/LoginContext';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const { loginHandler } = useContext(LoginContext);

  return (
    <section className={styles.formContainer}>
      <img src="/logo-full-white.svg" alt=""/>
      <h1>Bem-vindo</h1>
      <div className={styles.description}>
        <img src="/icons/github.svg" alt=""/>
        <p>
          Faça login no seu Github para começar
        </p>
      </div>
      <div className={styles.inputContainer}>
        <div>
          <input 
            type="text" 
            placeholder="Digite seu username"
            onKeyUp={(evt) => { setUsername(evt.target.value) }}/>
        </div>
        <div>
          <button
            onClick={() => loginHandler(username)}
          >
            <img src="/icons/next.svg" alt=""/>
          </button>
        </div>
      </div>
    </section>
  )
}