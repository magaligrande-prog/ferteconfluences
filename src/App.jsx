import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import ActivitiesPage from './pages/ActivitiesPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activites" element={<ActivitiesPage />} />
          <Route path="/port" element={<ActivitiesPage />} />
          <Route path="/evenements" element={<ActivitiesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/qui-sommes-nous" element={<AboutPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
