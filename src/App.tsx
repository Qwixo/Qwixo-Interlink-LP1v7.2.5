import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import GuidePage from './pages/GuidePage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/guide" element={<GuidePage />} />
      </Routes>
    </>
  )
}

export default App
