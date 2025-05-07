import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import FeedbackBoard from './components/FeedbackBoard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/feedback" element={<FeedbackBoard />} />
        <Route path="*" element={<Navigate to="/feedback" replace />} />
      </Routes>
    </Router>
  )
}

export default App