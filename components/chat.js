/* eslint-disable quotes */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  CssBaseline,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  paper: {
    paddingBottom: 50,
    overflow: 'auto',
    backgroundColor: '#e0f7fa',
  },
  list: {
    marginBottom: theme.spacing(2),
  },
}))

export default function BottomAppBar(props) {
  const classes = useStyles()
  const messages = props.data
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.chat}>
        <Paper square className={classes.paper}>
          <List className={classes.list}>
            {messages.map(({ message, name, avatar }, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={avatar} />
                  </ListItemAvatar>
                  <ListItemText primary={message} secondary={name} />
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </div>
    </React.Fragment>
  )
}
