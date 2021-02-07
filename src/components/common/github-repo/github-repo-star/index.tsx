import React, { useEffect, useState } from 'react';
import { Button, Fab } from '@material-ui/core';
import localStorageHelper from '@/utils/storage-helper';
import { Star, StarOutline } from '@material-ui/icons';

import styles from './style.module.scss';

const GithubRepoStar = ({ data }) => {
  const [hasStarredThisItem, setHasStarredThisItem] = useState(false);
  const getCurrentSavedRepos = () => JSON.parse(localStorageHelper.get('listOfSavedRepos'));
  const itemIsInArray = (currentListOfRepos) => currentListOfRepos.filter((repo) => repo.id === data.id).length > 0;

  const handleAddToStarsList = () => {
    let newList: string;
    const currentListOfRepos = getCurrentSavedRepos();
    if (currentListOfRepos && itemIsInArray(currentListOfRepos)) {
      newList = JSON.stringify(currentListOfRepos.filter((repo) => repo.id !== data.id));

      // remove star icon
      setHasStarredThisItem(false);
    } else {
      setHasStarredThisItem(true);

      if (currentListOfRepos) {
        newList = JSON.stringify([...currentListOfRepos, data]);
      } else {
        newList = JSON.stringify([{ ...data }]);
      }
    }
    localStorageHelper.set('listOfSavedRepos', newList);
  };

  useEffect(() => {
    const currentListOfRepos = getCurrentSavedRepos();
    if (currentListOfRepos && itemIsInArray(currentListOfRepos)) {
      setHasStarredThisItem(true);
      return null;
    }
    setHasStarredThisItem(false);
  }, []);

  return (
    <div className={styles.mainStarButton} onClick={handleAddToStarsList} aria-label="star">
      {hasStarredThisItem ? (
        <Star fontSize="small" color="inherit" />
      ) : (
        <StarOutline fontSize="small" color="inherit" />
      )}
    </div>
  );
};

export default GithubRepoStar;
