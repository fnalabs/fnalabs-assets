import { createRoot } from 'react-dom/client'
import App from './App'

const remoteElement = document.getElementById('root') as HTMLElement
const remote = createRoot(remoteElement)
remote.render(<App />)
