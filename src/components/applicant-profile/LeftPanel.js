import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    }
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  }
}));

export default function LetterAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.large}>GA</Avatar>
    </div>
  );
}