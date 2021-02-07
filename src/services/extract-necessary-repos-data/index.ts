/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const extractNecessaryReposData = (reposList) => {
  return reposList.reduce((prev, { url, svn_url, id, name, description, stargazers_count }) => {
    const repo = {
      id,
      url,
      svn_url,
      name,
      description,
      stargazers_count,
    };
    prev.push(repo);
    return prev;
  }, []);
};

export default extractNecessaryReposData;
