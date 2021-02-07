/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useReducer } from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '@/layout/main';
import httpClient from '@/utils/http-client';
import queryBuilder from '@/utils/query-builder';
import getRepositoriesDateFormat from '@/utils/date/convertDate';
import { HTTP_METHODS } from '@/utils/http-client/types';
import extractNecessaryReposData from '@/services/extract-necessary-repos-data';
import GitHubRepoItem from '@/components/common/github-repo/github-repo-card';
import { Box, Button, Grid, IconButton, InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styles from './style.module.scss';
import BaseProgressBarLoading from '@/components/base/base-loading';
import defaultSEO from '@/seo/default';
import { Star } from '@material-ui/icons';

const gitHubApiReducer = (state, action) => {
  switch (action.type) {
    case 'setLoading':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'updateReposData':
      return {
        ...state,
        reposList: action.payload,
      };
    case 'setLanguageForFilterRepos':
      return {
        ...state,
        language: action.payload,
      };
    default:
      break;
  }
};

const oneWeekAgoDate = getRepositoriesDateFormat();

const RepositoriesListPage: React.FunctionComponent<any> = ({ initReposListFromApi }) => {
  const initState = {
    reposList: initReposListFromApi,
    isLoading: false,
    error: false,
    language: null,
  };
  const [state, dispatch] = useReducer(gitHubApiReducer, initState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const payload = {
      type: 'setLanguageForFilterRepos',
      payload: event.target.value,
    };
    dispatch(payload);
  };

  const handleFilterByLanguage = async () => {
    const fetchUrl = queryBuilder({ date: oneWeekAgoDate, language: state.language });
    const payload = {
      method: HTTP_METHODS.GET,
      url: fetchUrl,
    };
    try {
      const loadingAction = {
        type: 'setLoading',
        payload: true,
      };
      dispatch(loadingAction);
      const res = await httpClient(payload);
      const requiredRepoDatas = extractNecessaryReposData(res.items);
      const setDataAction = {
        type: 'updateReposData',
        payload: requiredRepoDatas,
      };
      dispatch(setDataAction);
    } catch (e) {
      // it must show React Error bundaries or use error handler for this purpose
      throw new Error('there is a error happend');
    } finally {
      const action = {
        type: 'setLoading',
        payload: false,
      };
      dispatch(action);
    }
  };

  const renderReposList = () => {
    return (
      <Grid container spacing={4}>
        {state.reposList.map((repo) => (
          <GitHubRepoItem key={repo.id} data={repo} />
        ))}
      </Grid>
    );
  };
  const renderLanguageFilter = () => {
    return (
      <Box marginBottom={6} marginTop={2}>
        <TextField
          className={styles.languageFilterInput}
          placeholder="Search by your prefered Language"
          inputProps={{ 'aria-label': 'search by language' }}
          fullWidth
          variant="outlined"
          error={state.language && state.language.length < 2}
          id="standard-error-helper-text"
          helperText="please enter at least two words (e.g: js) and click on search button(it would be better with auto search, but it was not enough time)"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleFilterByLanguage} aria-label="toggle password visibility" edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={handleChange}
        />
      </Box>
    );
  };

  const renderGoToStarredButton = () => {
    return (
      <Box mt={2}>
        <Button
          href="/starred-repositories"
          variant="outlined"
          fullWidth
          color="primary"
          size="small"
          endIcon={<Star />}
        >
          Go To Starred Repositories
        </Button>
      </Box>
    );
  };
  return (
    <Layout>
      <main>
        {renderGoToStarredButton()}
        {renderLanguageFilter()}
        {state.isLoading ? <BaseProgressBarLoading /> : state.reposList && renderReposList()}
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // use this fetch to prerender git hub repos list
  const fetchDataFromServer = async () => {
    const oneWeekAgoDate = getRepositoriesDateFormat();
    // without language filter. just by date
    const fetchUrl = queryBuilder({ date: oneWeekAgoDate });
    const payload = {
      method: HTTP_METHODS.GET,
      url: fetchUrl,
    };
    try {
      const res = await httpClient(payload);
      const requiredRepoDatas = extractNecessaryReposData(res.items);
      return requiredRepoDatas;
    } catch (e) {
      console.log(e);
      // add this to error handler
    } finally {
      console.log();
    }
  };
  const initReposListFromApi = await fetchDataFromServer();
  return {
    props: {
      initReposListFromApi,
    },
  };
};

export default RepositoriesListPage;
