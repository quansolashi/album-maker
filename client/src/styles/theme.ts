import { createTheme } from '@mui/material/styles'

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontSize: 16,
    body1: {
      fontSize: '1rem'
    },
    fontFamily: ['"Avenir Next LT Pro"', '"Russo One"', '"M PLUS 1"', 'sans-serif'].join(', ')
  }
})

export default theme
