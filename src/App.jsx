import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<h2>home</h2>} />
      <Route path="/movie/:id" element={<h2>movie</h2>} />
      <Route path="/favourites" element={<h2>fav</h2>} />
    </Routes>
  )
}
