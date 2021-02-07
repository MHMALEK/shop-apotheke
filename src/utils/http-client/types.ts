enum HTTP_METHODS {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'DELETE',
}

interface httpClientPayloadType {
  method: string;
  url: string;
  body?: never;
  headers?: never;
}
export type useApiType = (method: HTTP_METHODS, url: string, ...params) => any;
export type httpClientType = (payload: httpClientPayloadType) => any;

export { HTTP_METHODS };
