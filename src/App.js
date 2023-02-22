import { element } from 'prop-types';
import './App.css';
import Header from "./Components/Header.js";
import Movie from './Components/Movie';
import movies from "./movie.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {
          movies.map((element,index) => {
            return(
              <Movie 
                key={index}
                title={element.Title}
                Year={element.Year}
                img={element.Poster} 
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;




      