import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Box, Button, Card } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import GradeIcon from '@material-ui/icons/Grade';
import GithubRepoStar from '../github-repo-star';

const useStyles = makeStyles((theme) => ({
  mainRepoContent: {
    fontSize: 10,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1),
    },
  },
  mainRepoWrapper: {
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
  mainRepoCard: {
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: 0,
  },
  mainRepoContentWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainStarButton: {
    padding: theme.spacing(0.5),
  },
  starsCount: {
    display: 'flex',
  },
}));

const GitHubRepoItem = ({ data }) => {
  const classes = useStyles();
  const { svn_url, name, description, stargazers_count } = data;

  return (
    <Grid item xs={12} md={12} className={classes.mainRepoWrapper}>
      <Paper variant="outlined" className={classes.mainRepoCard}>
        <article className={classes.mainRepoContent}>
          <header>
            <Typography variant="h6" color="inherit">
              {name}
            </Typography>
          </header>
          <main className={classes.mainRepoContentWrapper}>
            <Typography variant="body2" color="inherit" paragraph>
              {description}
            </Typography>
            <aside className={classes.starsCount}>
              <GradeIcon />
              <Typography variant="body1" color="inherit" paragraph>
                {stargazers_count}
              </Typography>
            </aside>
          </main>
          <footer>
            <Box display="flex" alignContent="center">
              <Link variant="subtitle1" href={svn_url}>
                <Button variant="outlined" color="default" size="small" startIcon={<GitHubIcon fontSize="small" />}>
                  Github link
                </Button>
              </Link>
              <Box mx={1}>
                <GithubRepoStar data={data} />
              </Box>
            </Box>
          </footer>
        </article>
      </Paper>
    </Grid>
  );
};

export default GitHubRepoItem;
