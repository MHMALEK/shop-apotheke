import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { makeStyles } from '@material-ui/core/styles';
import Header from '../header';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Footer from '../footer';
import styles from './style.module.scss';
import DefaultSEO from '@/seo/default';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

interface LayoutProps {
  container?: Element;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <DefaultSEO />
      <section className={styles.mainContent}>
        <Header />
        <Container maxWidth="md">
          <main>
            <Grid container spacing={4} className={classes.mainGrid}></Grid>
            {children}
          </main>
        </Container>
      </section>
      <section className={styles.footer}>
        <Footer>A code Challenge for Shop Apotheke</Footer>
      </section>
    </>
  );
};
