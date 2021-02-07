import React from 'react';
import styles from './style.module.scss';

const Logo = () => {
  return (
    <picture className={styles.logoWrapper}>
      <source srcSet="images/logo-COM-desktop.svg" media="(max-width: 800px)" />
      <source srcSet="images/logo-COM-desktop.svg" media="(min-width: 800px)" />
      <img className={styles.logoFile} src="images/logo-COM-desktop.svg" alt="SHOP APOTHEKE LOGO" />
    </picture>
  );
};

export default Logo;
