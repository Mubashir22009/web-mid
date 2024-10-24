import { Route, Routes } from 'react-router-dom'
import MovieList from './components/MovieList'
import Layout from './Layout'
import Movie from './components/Movie'

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MovieList />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="favourites" element={<h2>fav</h2>} />
        <Route path="*" element={<h1>404</h1>} />
      </ Route>
    </Routes>
    </>
  )
}
