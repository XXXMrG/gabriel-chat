import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b4d1d9',
    },
    secondary: {
      main: '#d0505d',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    input: {
      main: '#f44336',
    },
  },
})

export default theme
