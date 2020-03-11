import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Container,
  Paper,
  Grid,
  TextField,
  IconButton,
  Fab,
  useScrollTrigger,
  Slide,
} from '@material-ui/core'
import Chat from '../components/chat'
import TelegramIcon from '@material-ui/icons/Telegram'
import MoreIcon from '@material-ui/icons/MoreVert'
import { makeStyles } from '@material-ui/core/styles'
import { useRef, useState, useEffect } from 'react'
import io from 'socket.io-client'

const socket = io('https://api.xkeith.tech:3000')

const useStyles = makeStyles({
  send: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  root: {
    maxHeight: '100vh',
    overflow: 'hidden',
    padding: 0,
  },
  chat: {
    backgroundColor: '#e0f7fa',
    height: '100vh',
    overflow: 'auto',
  },
  input: {
    width: '75%',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    background: 'linear-gradient(45deg, #e0f7fa 30%, #0097a7 90%)',
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
})
// hoc to control app bar hidden
function HideOnScroll(props) {
  const { target, children } = props
  const trigger = useScrollTrigger({ target: target || undefined })
  if (target) {
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    )
  }
  return <div>{children}</div>
}

const fetchData = url => {
  return fetch(url).then(res => res.json())
}
export default function Layout(props) {
  const classes = useStyles()
  const chat = useRef(null)
  const [data, setData] = useState([])
  const [message, setMessage] = useState('')
  const [trigger, setTrigger] = useState(null)
  const [userName, setName] = useState('')

  const handleMessage = e => {
    e.preventDefault()
    setMessage(e.target.value)
  }
  const handleSend = () => {
    if (message !== '') {
      const messageObject = {
        name: userName,
        message,
      }
      socket.emit('chat message', JSON.stringify(messageObject))
      setMessage('')
    }
  }
  const handleKeyDown = e => {
    if (e.which === 13) {
      handleSend()
    }
  }

  useEffect(() => {
    socket.on('chat message', msg => {
      const { name, message } = JSON.parse(msg)
      const { current } = chat
      setData([
        ...data,
        {
          name,
          message,
          avatar: `https://api.adorable.io/avatars/285/${name}.png`,
        },
      ])
      // make scrollbar to the bottom
      current.scrollTop = current.scrollHeight
    })
    // must remove the socket when unmounted
    return () => {
      socket.off('chat message')
    }
  })

  useEffect(() => {
    setTrigger(chat.current)
  }, [])

  useEffect(() => {
    fetchData('/api/getName').then(res => {
      setName(res.name)
    })
  }, [])

  return (
    <>
      <CssBaseline />
      <Container className={classes.root} maxWidth="lg">
        <Paper elevation={3}>
          <Grid container>
            <Grid item xs={12}>
              <div className={classes.chat} ref={chat}>
                <HideOnScroll target={trigger} {...props}>
                  <AppBar position="sticky">
                    <Toolbar>
                      <Typography variant="h6">Gabriel Chat</Typography>
                    </Toolbar>
                  </AppBar>
                </HideOnScroll>
                <Chat data={data} />
              </div>
            </Grid>
            <AppBar position="sticky" className={classes.appBar}>
              <Toolbar>
                <TextField
                  className={classes.input}
                  label="Say something..."
                  color="secondary"
                  value={message}
                  onChange={handleMessage}
                  onKeyDown={handleKeyDown}
                />
                <Fab
                  color="secondary"
                  aria-label="add"
                  className={classes.fabButton}
                  onClick={handleSend}
                >
                  <TelegramIcon />
                </Fab>
                <div className={classes.grow} />
                <IconButton edge="end" color="inherit">
                  <MoreIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}
