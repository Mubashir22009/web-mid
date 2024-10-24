import { Route, Routes } from 'react-router-dom'
import MovieList from './components/MovieList'

export default function App() {
  return (
    <>
    <h1>home</h1>
    <Routes>
      <Route exact path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<h2>movie</h2>} />
      <Route path="/favourites" element={<h2>fav</h2>} />
    </Routes>
    </>
  )
}
