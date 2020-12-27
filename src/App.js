import './App.css';
import './assets/css/bootstrap-grid.min.css';
import './assets/css/bootstrap-reboot.min.css';
import './assets/css/default-skin.css';
import './assets/css/main.css';

import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Populer from './components/Movies/Populer';

import { BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom';
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
          <HashRouter forceRefresh={true} basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path={process.env.PUBLIC_URL + "/"} exact ><Homepage></Homepage></Route>
                <Route path={process.env.PUBLIC_URL + "/populer"} exact ><Populer></Populer></Route>
                <Route path={process.env.PUBLIC_URL + "/top-rated"} exact ><TopRated></TopRated></Route>
                <Route path={process.env.PUBLIC_URL + "/upcoming"} exact ><Upcoming></Upcoming></Route>
                <Route path={process.env.PUBLIC_URL + "/contanct"} exact ><Contact></Contact></Route>
                <Route path="/movie-detail/:id" exact component={MovieDetail}></Route>
                <Route component={Error}></Route>
            </Switch>
            </HashRouter>
          </main>
          <Footer></Footer>
      </div>
  );
}

export default App;
