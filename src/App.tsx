import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { useSmoothScroll } from "@/hooks/useSmoothScroll"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Home from "@/pages/Home"
import Ecosystem from "@/pages/Ecosystem"
import Initiatives from "@/pages/Initiatives"
import Insights from "@/pages/Insights"
import Partnerships from "@/pages/Partnerships"
import Leadership from "@/pages/Leadership"
import Media from "@/pages/Media"
import Join from "@/pages/Join"

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
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/media" element={<Media />} />
          <Route path="/join" element={<Join />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
