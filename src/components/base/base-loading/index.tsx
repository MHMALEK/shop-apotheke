import React from 'react';
import { LinearProgress, withStyles } from '@material-ui/core';

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: '#b2dfdb',
  },
  barColorPrimary: {
    backgroundColor: '#00695c',
  },
})(LinearProgress);

const BaseProgressBarLoading = () => {
  return <ColorLinearProgress />;
};

export default BaseProgressBarLoading;
