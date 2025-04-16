// importazione file
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import PostList from "./pages/PostsList"
import DefaultLayout from "./layouts/DefaultLayout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/posts" element={<PostList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
