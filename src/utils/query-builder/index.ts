import queryBuilderType from './types';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const queryBuilder: queryBuilderType = ({ date, sort, language }) => {
  const baseUrl = process.env.BASE_API_URL;
  const query = `created:>${date}${language ? `+language:${language}` : ''}&sort=${sort || 'stars'}&order=${
    process.env.DEFAULT_ORDER || 'desc'
  }&per_page=${process.env.DEFAULT_PER_PAGE || '10'}`;
  return `${baseUrl}?q=${query}`;
};
export default queryBuilder;
