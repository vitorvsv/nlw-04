import { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'

import useAPI from '../hooks/useAPI';

import styles from '../styles/components/LoginForm.module.css';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const { getUserData } = useAPI();
  const router = useRouter();

  const loginHandler = async () => {
    const userData = await getUserData(username);
    if (userData.login) Cookies.set('moveit_login', userData.login);
    if (userData.name) Cookies.set('moveit_name', userData.name);
    if (userData.avatar_url) Cookies.set('moveit_user_image', userData.avatar_url);
    if (userData) router.replace('/');  
  }

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
            onKeyUp={(evt) => { setUsername((evt.target as HTMLInputElement).value) }}/>
        </div>
        <div>
          <button
            onClick={() => loginHandler()}
          >
            <img src="/icons/next.svg" alt=""/>
          </button>
        </div>
      </div>
    </section>
  )
}