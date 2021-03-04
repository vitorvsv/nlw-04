import styles from '../styles/pages/Login.module.css';

import { LoginForm } from '../components/LoginForm';

import { LoginProvider } from '../contexts/LoginContext';

export default function Login() {
  return (
    <LoginProvider>
      <div className={styles.loginContainer}>
        <section>
          <img src="/images/logo-background.svg" alt=""/>
        </section>
        <LoginForm/>
      </div>
    </LoginProvider>
  );
}