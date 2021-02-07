import React from 'react';
import styles from './style.module.scss';
import Logo from '@/components/common/logo';

const Header = () => {
  // header secrtion would be added but no time left for that.
  return (
    <>
      <header className={styles.mainHeader}>
        <Logo />
      </header>
    </>
  );
};

export default Header;
