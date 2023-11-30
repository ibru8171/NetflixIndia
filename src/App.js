import logo from './logo.svg';
import './App.css';
import Row from './compopnents/Row';
import requests from './compopnents/request';
import Banner from './compopnents/Banner';
import Nav from './Nav';


function App() {
  return (
    <div>
      <Nav/>
    {/* <h1 style={{color:"red"}}>Netflix</h1> */}
    <Banner fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="NetflixOriginal" fetchurl={requests.fetchNetflixOriginals}/>
    <Row title="TopRated" fetchurl={requests.fetchTopRated}/>
    <Row title="Trending" fetchurl={requests.fetchTrending}/>
    <Row title="Action" fetchurl={requests.fetchActionMovies}/>
    <Row title="Comedy" fetchurl={requests.fetchComedyMovies}/>
    <Row title="Horror" fetchurl={requests.fetchHorrorMovies}/>
    <Row title="Romance" fetchurl={requests.fetchRomanceMovies}/>
    <Row title="Documentaries" fetchurl={requests.fetchDocumentaries}/>
    

    </div>
    )
     
}
  

export default App;
