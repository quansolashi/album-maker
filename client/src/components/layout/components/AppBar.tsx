import { AccountCircle } from '@mui/icons-material'
import { IconButton, AppBar as MUIAppBar, Toolbar, Typography } from '@mui/material'

const AppBar: React.FC = () => {
  return (
    <MUIAppBar
      position="static"
      sx={{
        boxShadow: 'none',
        background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          justifyContent: 'space-between'
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            ml: 3
          }}
        >
          Album Maker
        </Typography>

        <IconButton
          size="large"
          color="inherit"
          sx={{
            mr: 1
          }}
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </MUIAppBar>
  )
}

export { AppBar }
