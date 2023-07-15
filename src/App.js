import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import FeedbackLists from './components/FeedbackLists'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import { FeedBackProvider } from './context/FeedbackContext'

import AboutIconLinkk from './components/AboutIconLinkk'

function App() {
  return (
    <FeedBackProvider>
      <Router>
        <Header />
        <div className='App'>
          <Routes>
            <Route
              path='/'
              exact
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackLists />
                </>
              }
            ></Route>
            <Route path='/about' element={<About />} />
          </Routes>
          <AboutIconLinkk />
        </div>
      </Router>
    </FeedBackProvider>
  )
}

export default App
