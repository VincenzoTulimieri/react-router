// importazione file
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./page/HomePage"
import ChiSiamo from "./page/ChiSiamo"
import PostList from "./page/PostsList"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/posts" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
