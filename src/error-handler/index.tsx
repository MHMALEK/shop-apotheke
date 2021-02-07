import ERROR_MESSAGES from './error-message';

const ErrorHandler = (error: Error): void => console.log(`${ERROR_MESSAGES} and more details are ${error}`);
// handle errors from logging theme to others
// add sentry
// add error log system and ...
export default ErrorHandler;
