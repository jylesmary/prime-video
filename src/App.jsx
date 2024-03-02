import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navb from './components/Navb';
import Row from './components/Row';
import requests from './request'



function App() {
  return (
    <div className="App">
      <Navb/>
      <br/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <br/>
      <Row isPoster={true} title="Recommended Movies" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending in India" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
