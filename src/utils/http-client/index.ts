import fetch from 'node-fetch';
// import AbortController from 'abort-controller';
import { httpClientType } from './types';

const defaultHeaders = {};

const httpClient: httpClientType = async ({ method, url, body = null, headers = {} }) => {
  // const controller = new AbortController();
  const options = {
    method: method,
    body: body,
    headers: { ...defaultHeaders, ...headers },
  };

  try {
    const response = await fetch(url, {
      ...options,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof fetch.AbortError) {
      throw new Error('request was aborted');
    }
    throw new Error(`request was failed ${error}`);
  }
};

export default httpClient;
