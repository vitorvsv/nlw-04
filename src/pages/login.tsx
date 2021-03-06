import Head from 'next/head'

import styles from '../styles/pages/Login.module.css';

import { LoginForm } from '../components/LoginForm';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <div className={styles.loginContainer}>
        <section>
          <img src="/images/logo-background.svg" alt=""/>
        </section>
        <LoginForm/>
      </div>
    </>
  );
}