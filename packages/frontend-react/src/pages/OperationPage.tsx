import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    display: 'flex',

    '& > *:not(:last-child)': {
      marginRight: 40
    },

    '& > svg': {
      alignSelf: 'center',
      width: 48,
      height: 48,
      fill: 'var(--color-light)'
    }
  }
}, { name: 'operation-page' })

export interface OperationPageProps {

}

/**
 * Common structure and styles for operation pages.
 */
export const OperationPage: React.FC<OperationPageProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  )
};