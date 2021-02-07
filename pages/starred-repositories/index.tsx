import React, { useState } from 'react';
import { Layout } from '@/layout/main';
import { useEffect } from 'react';
import storageHelper from '@/utils/storage-helper';
import GitHubRepoItem from '@/components/common/github-repo/github-repo-card';
import styles from './style.module.scss';
import { Box, Typography } from '@material-ui/core';

const MyRepositories = () => {
  const [userLikedRepos, setUserLikedRepos] = useState(null);
  const getReposListFromLocalStorage = () => {
    const reposList = JSON.parse(storageHelper.get('listOfSavedRepos'));
    setUserLikedRepos(reposList);
  };
  useEffect(() => {
    getReposListFromLocalStorage();
  }, []);
  const renderReposList = () => {
    if (!userLikedRepos || userLikedRepos.length === 0) {
      return (
        <Box mt={6} textAlign="center">
          <Typography>There is no repository. Star them and then you will see them here!</Typography>{' '}
        </Box>
      );
    }
    return (
      <div className={styles.cardWrapper}>
        {userLikedRepos.map((repoData) => (
          <GitHubRepoItem key={repoData.id} data={repoData} />
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <main>{renderReposList()}</main>
    </Layout>
  );
};

export default MyRepositories;
