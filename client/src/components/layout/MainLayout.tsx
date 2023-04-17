import { LayoutProps } from '@/types'
import { Box } from '@mui/material'
import Head from 'next/head'
import { AppBar } from './components'

const MainLayout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <Box>
      <Head>
        <title>{title}</title>
      </Head>

      <Box
        sx={{
          width: '100%',
          minHeight: '100vh'
        }}
      >
        <AppBar />
        {children}
      </Box>
    </Box>
  )
}

export { MainLayout }
