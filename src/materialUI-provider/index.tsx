import * as React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@/materialUI-provider/themes';
import AppThemeProviderPropType from './types';

const AppThemeProvider: React.FunctionComponent<AppThemeProviderPropType> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
