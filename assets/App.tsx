import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllCountsPage from './pages/AllCountsPage';
import AllVaccinesPage from './pages/AllVaccinesPage';
import CountsPage from './pages/CountsPage';
import VaccinePage from './pages/VaccinePage';

const renderApp = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/all-counts" component={AllCountsPage} />
          <Route path="/all-vaccines" component={AllVaccinesPage} />
          <Route path="/counts" component={CountsPage} />
          <Route path="/vaccines" component={VaccinePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

ReactDOM.render(renderApp(), document.getElementById('root'));
