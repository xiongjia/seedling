import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from '@/components/ui/button'

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(
    <StrictMode>
      <div>
        Test
        <Button variant="default">Test</Button>
      </div>
    </StrictMode>,
  )
}
