// importazione file
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import PostList from "./pages/PostsList"
import Navbar from "./components/Navbar"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/posts" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
