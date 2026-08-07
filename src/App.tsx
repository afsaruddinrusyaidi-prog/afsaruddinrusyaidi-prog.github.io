import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { useSmoothScroll } from "@/hooks/useSmoothScroll"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Home from "@/pages/Home"
import Ecosystem from "@/pages/Ecosystem"
import Initiatives from "@/pages/Initiatives"
import Insights from "@/pages/Insights"
import Article from "@/pages/Article"
import Partnerships from "@/pages/Partnerships"
import Leadership from "@/pages/Leadership"
import Person from "@/pages/Person"
import Media from "@/pages/Media"
import Join from "@/pages/Join"
import ADLPForGirls from "@/pages/ADLPForGirls"
import Legal from "@/pages/Legal"
import LegalDocument from "@/pages/LegalDocument"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [pathname])
  return null
}

function App() {
  useSmoothScroll()

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<Article />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/leadership/:slug" element={<Person />} />
          <Route path="/media" element={<Media />} />
          <Route path="/join" element={<Join />} />
          <Route path="/adlp-for-girls" element={<ADLPForGirls />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacy" element={<LegalDocument slug="privacy" />} />
          <Route path="/cookies" element={<LegalDocument slug="cookies" />} />
          <Route path="/terms" element={<LegalDocument slug="terms" />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
