import clsx from 'clsx';
import React from 'react';
import styles from './style.module.scss';

const Footer: React.FC = ({ children }) => (
  <footer className={clsx(styles.mainFooter, 'padding-16px')}>{children}</footer>
);

export default Footer;
