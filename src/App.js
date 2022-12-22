import './assets/css/index.css';

import { Route, Routes } from 'react-router-dom';

import Contact from './components/Contact';
import Homepage from './components/Homepage';
import Error from './components/Layout/Error';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import MovieDetail from './components/Movies/MovieDetail';
import Populer from './components/Movies/Populer';
import TopRated from './components/Movies/TopRated';
import Upcoming from './components/Movies/Upcoming';

function App() {
  return (
    <div>
      <main>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Homepage />} ></Route>
          <Route path="/populer" element={<Populer />}></Route>
          <Route path="/top-rated" element={<TopRated />}></Route>
          <Route path="/upcoming" element={<Upcoming />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/movie-detail/:id" element={<MovieDetail />}></Route>
          <Route path='*' element={<Error />} ></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
