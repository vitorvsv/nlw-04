import { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import styles from '../styles/components/Profile.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  const { level } = useContext(ChallengesContext);

  useEffect(() => {
    setName(Cookies.get('moveit_name'));
    setAvatar(Cookies.get('moveit_user_image'));
  }, [])

  return (
    <div className={styles.profileContainer}>
      <img src={avatar} alt={name}/>
      <div>
        <strong>{name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}