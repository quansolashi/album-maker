import { MainLayout } from '@/components/layout'
import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('../components/editor/polotno'), {
  ssr: false
})

export default function Home() {
  return (
    <MainLayout title="Home">
      <Editor />
    </MainLayout>
  )
}
