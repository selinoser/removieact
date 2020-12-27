import './App.css';
import './assets/css/bootstrap-grid.min.css';
import './assets/css/bootstrap-reboot.min.css';
import './assets/css/default-skin.css';
import './assets/css/main.css';

import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Populer from './components/Movies/Populer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieDetail from './components/Movies/MovieDetail';
import TopRated from './components/Movies/TopRated';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
import Error from './components/Layout/Error';
import Upcoming from './components/Movies/Upcoming';

function App() {
  return (
      <div>
        <main>
          <Header></Header>
          <BrowserRouter forceRefresh={true} basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact ><Homepage></Homepage></Route>
                <Route path="/populer" exact ><Populer></Populer></Route>
                <Route path="/top-rated" exact ><TopRated></TopRated></Route>
                <Route path="/upcoming" exact ><Upcoming></Upcoming></Route>
                <Route path="/contact" exact ><Contact></Contact></Route>
                <Route path="/movie-detail/:id" exact component={MovieDetail}></Route>
                <Route component={Error}></Route>
            </Switch>
            </BrowserRouter>
          </main>
          <Footer></Footer>
      </div>
  );
}

export default App;
